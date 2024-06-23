import React from "react";
import EmailInputCard from "../Components/EmailCard";
import Header from "../Components/Header";
import ShowCase from "../Components/ShowCase";

const Upload = () => {
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center">
      <Header />

      <div className="flex-grow flex flex-col items-center justify-center space-y-8 mt-10">
        {/* <h2
          style={{
            background: "#3b82f6",
            // border: "2px solid #3b82f6",
            padding: "8px 12px",
            borderRadius: "8px",
            width: "450px",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          Find Your Twin!
        </h2> */}
        <EmailInputCard />
      </div>

      <ShowCase />

      <footer className="py-4 bg-blue-500 shadow-md w-full text-center mt-4">
        <p className="text-white">© 2024 TwinFinder. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Upload;
