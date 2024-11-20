import Logo from '../assets/images/logoApp.png';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="px-4 pt-5 md sm:max-w-xl md:min-w-full lg:max-w-screen-xl lg:px-20  ">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6 ">
        <div className="md:max-w-md lg:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex "
          >
            <img src={Logo} className=' block mx-auto md:min-w-40 rounded-full object-cover max-h-28' alt="WeatherApp Logo" />
          
          </a>
          <div className="mt-4 lg:max-w-sm">
            <p className="text-sm  text-white">
              Stay updated with real-time weather forecasts and alerts. Our app provides the most accurate weather information to keep you prepared for any conditions.
            </p>
            <p className="mt-4 text-sm text-white">
              From sunny days to stormy nights, we've got you covered with the latest weather updates tailored to your location.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4 pt-16">
          <div>
            <p className="font-semibold tracking-wide text-white">
              Quick Links
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/current"
                  className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Current Weather
                </a>
              </li>
              <li>
                <a
                  href="/forecast"
                  className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400" 
                >
                  7-Day Forecast
                </a>
              </li>
              <li>
                <a
                  href="/alerts"
                  className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Weather Alerts
                </a>
              </li>
              <li>
                <a
                  href="/map"
                  className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Interactive Map
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-white">
              Resources
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/articles"
                  className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Weather Articles
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-slate-50">Follow Us</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/facebook"
                  className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="/twitter"
                  className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="/instagram"
                  className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="/youtube"
                  className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-slate-50">App Features</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/features"
                  className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Personalized Forecasts
                </a>
              </li>
              <li>
                <a
                  href="/notifications"
                  className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Weather Notifications
                </a>
              </li>
              <li>
                <a
                  href="/widget"
                  className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Home Screen Widget
                </a>
              </li>
              <li>
                <a
                  href="/dark-mode"
                  className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Dark Mode
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
        <p className="text-sm text-slate-100">
          © Copyright 2024 Aymane Rachid. All rights reserved.
        </p>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
          {/* linkdin path externe */}
          <a
           href='https://www.linkedin.com/in/aymane-rachid-106700317/'
           
            className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400 text-3xl"
          >
     <FaLinkedin/>
          </a>
           {/* link to facebook */}
          <a
            href="/"
            className="text-white text-3xl transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
        <FaFacebookSquare/>
          </a>
          {/* link to instagram */}
          <a 
            href="www.linkedin.com/in/aymane-rachid-106700317"
            target="_blank" rel="noopener noreferrer"
            className="text-white text-3xl transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
      <FaInstagramSquare />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
