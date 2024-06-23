import React from "react";
import EmailInputCard from "./Components/EmailCard";

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <header className="py-4 bg-blue-500 shadow-md w-full">
        <h1 className="text-3xl font-bold text-center">TwinFinder</h1>
      </header>

      <footer className="py-4 bg-blue-500 shadow-md w-full text-center mt-4">
        <p className="text-white">© 2024 TwinFinder. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
