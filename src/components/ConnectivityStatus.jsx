import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// ConnectivityStatus component to handle the connectivity status
const ConnectivityStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Check if requestIdleCallback is available
    const idleCallback = typeof requestIdleCallback === 'function' ? requestIdleCallback(() => {
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
    }) : null;

    return () => {
      if (idleCallback) {
        window.cancelIdleCallback(idleCallback);
      }
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {isOnline ? (
        <motion.p
          className="text-green-500 text-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className=" loading loading-dots loading-lg"></span>
        </motion.p>
      ) : (
        <motion.p
          className="text-red-500 text-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          No Internet Connection 😢
        </motion.p>
      )}
    </motion.div>
  );
};

// Loader component to show while waiting for ConnectivityStatus
const Loader = () => (
  <motion.div
    className="flex justify-center items-center min-h-screen"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
  >
    <motion.div
      className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </motion.div>
);

// App component that shows ConnectivityStatus directly
const App = () => (
  <div>
    <ConnectivityStatus />
  </div>
);

export default App;
