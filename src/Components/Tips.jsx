import React from "react";

const Tips = () => {
  return (
    <div className="container mx-auto py-12 px-6 ">
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8 border border-gray-200 flex flex-col md:flex-row items-center">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold text-center md:text-left mb-8 text-black">
            Tips For Best Results
          </h2>
          <ul className="list-disc list-inside text-lg text-black space-y-4">
            <li>Centre your head in the photo</li>
            <li>Look directly at the camera</li>
            <li>No hair across your face or eyes</li>
            <li>Make sure your facial features are clearly visible</li>
            <li>Don't tilt your head up/down or left/right</li>
          </ul>
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0 flex justify-around flex-col">
          <div className="mb-4 flex flex-col items-center">
            <img
              src="./images/yes.jpg"
              alt="Good Example"
              className="rounded-lg shadow-lg max-w-full h-auto mb-2"
            />
            <span className="text-black">How it should be</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="./images/no.jpg"
              alt="Bad Example"
              className="rounded-lg shadow-lg max-w-full h-auto mb-2"
            />
            <span className="text-black">How it should not be</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;
