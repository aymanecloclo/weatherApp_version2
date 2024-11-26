import React, { useState, useEffect } from "react";

const ConnectivityStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isLoading, setIsLoading] = useState(true); // To manage the loading state

  useEffect(() => {
    // Handle online and offline events
    const updateOnlineStatus = () => setIsOnline(navigator.onLine);

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    // Simulate a loading time for a better UX (maximum 300ms)
    const loadingTimeout = setTimeout(() => setIsLoading(false), 300);

    // Cleanup
    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
      clearTimeout(loadingTimeout);
    };
  }, []);

  if (isLoading) {
    // Display the loading spinner while the page is loading
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
        <div className="flex flex-col items-center">
          <span className="loading loading-dots loading-lg"></span>
          <p className="text-lg font-medium mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex justify-center items-center h-screen ${
        isOnline ? "text-green-800" : "bg-red-100 text-red-800"
      }`}
    >
      {isOnline ? (
       null
      ) : (
        <div className="flex flex-col items-center">
          <span className="text-2xl font-semibold">No Internet Connection 😢</span>
          <p className="mt-2">Please check your network settings.</p>
        </div>
      )}
    </div>
  );
};

export default ConnectivityStatus;
