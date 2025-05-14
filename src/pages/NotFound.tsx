
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center max-w-xl">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="h-16 w-16 bg-health-blue rounded-full"></div>
            <div className="h-16 w-16 bg-health-teal rounded-full absolute top-10 -right-6"></div>
          </div>
        </div>
        <h1 className="text-6xl font-bold mb-4 text-health-blue font-poppins">404</h1>
        <p className="text-2xl text-gray-600 mb-8 font-poppins">
          Oops! We couldn't find that page.
        </p>
        <p className="text-gray-500 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="bg-health-blue hover:bg-opacity-90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
