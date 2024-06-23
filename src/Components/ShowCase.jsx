import React from "react";

const ShowCase = () => {
  // Dummy data (replace with your actual data or API call)
  const twinImages = [
    { id: 1, imageUrl: "./images/twin1.jpg" },
    { id: 2, imageUrl: "./images/twin2.jpg" },
    { id: 3, imageUrl: "./images/twin3.jpg" },
    { id: 4, imageUrl: "./images/twin4.jpg" },
  ];
  return (
    <div className="container mx-auto py-12">
      <h2
        className="text-2xl text-center mb-8 text-black"
        style={{
          background: "#3b82f6",
          borderRadius: "8px",
          padding: "4px 8px",
          color: "#fff",
        }}
      >
        Twin Strangers Meetups
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {twinImages.map((twin) => (
          <div
            key={twin.id}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={twin.imageUrl}
              alt={`Twin Image ${twin.id}`}
              className="object-cover w-full h-64 sm:h-48 md:h-64 transform transition-transform duration-300 hover:scale-110"
            />
            {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
              <button className="bg-white text-gray-800 px-4 py-2 rounded shadow-md hover:bg-gray-200 transition-colors duration-300">
                View Details
              </button>
            </div> */}
          </div>
        ))}
      </div>
      <div className="px-10 py-4 text-center">
        <h5 className="text-2xl mt-8 text-black">
          We've had great fun setting up this and we will continue to find ways
          to help people find their own Twin Strangers anywhere on the planet.
        </h5>

        <p className="text-lg mt-8 text-black">
          Thank you for getting involved and the best of luck in your twin
          search!!
        </p>
      </div>
    </div>
  );
};

export default ShowCase;
