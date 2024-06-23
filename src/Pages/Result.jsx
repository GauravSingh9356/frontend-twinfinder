import React from "react";
import Header from "../Components/Header";
import ImageGrid from "../Components/ImageGrid";
import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const { email, imageUrl, twins } = location.state || {};

  console.log(email, imageUrl, twins);
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center">
      <Header />

      <div className="flex-grow flex flex-col items-center justify-center space-y-8">
        <ImageGrid
          data={{
            email,
            imageUrl,
            twins,
          }}
        />
      </div>
      <footer className="py-4 bg-blue-500 shadow-md w-full text-center mt-4">
        <p className="text-white">© 2024 TwinFinder. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Result;
