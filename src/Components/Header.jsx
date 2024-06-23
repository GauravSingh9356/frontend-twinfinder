import React from "react";

const Header = () => {
  return (
    <header className="py-4 bg-blue-500 shadow-md w-full">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          {/* <img src="./images/logo.jpeg" alt="Logo" className="h-10 w-10 mr-2" /> */}
          <h1 className="text-3xl font-bold">TwinFinder</h1>
        </div>
        {/* <nav className="flex space-x-4">
          <a href="#about" className="text-white hover:text-gray-200">
            About Us
          </a>
          <a href="#help" className="text-white hover:text-gray-200">
            Help
          </a>
        </nav> */}

        <h4 className="text-xl">
          Find your look-alike from anywhere in the world
        </h4>
        <h6 className="text-md">Current Total 11,873,87</h6>
      </div>
    </header>
  );
};

export default Header;
