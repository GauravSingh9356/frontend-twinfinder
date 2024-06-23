import React from "react";

const ImageGrid = ({ data }) => {
  console.log(data);
  return (
    <main className="mt-8">
      <div className="mb-4 text-center">
        <img
          src={data.imageUrl}
          alt="Main"
          className="mx-auto w-full max-w-sm rounded-lg shadow-lg"
        />
      </div>

      {data.twins.length === 0 ? (
        <p
          className="text-center text-gray-600"
          style={{
            background: "#3b82f6",
            borderRadius: "8px",
            padding: "4px 8px",
            color: "#fff",
          }}
        >
          Sorry ☹️ No Twins found!
        </p>
      ) : (
        <>
          <h2
            className="text-2xl text-white text-center"
            style={{
              background: "#3b82f6",
              borderRadius: "8px",
              padding: "4px 8px",
            }}
          >
            We have Found Twins For you!
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
            {data.twins.map((twin, index) => (
              <div key={index} className="flex justify-center">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={twin.imageUrl}
                    alt={`Matching ${index}`}
                    className="w-full h-auto max-w-xs"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-black">
                      Twin {index + 1}
                    </h2>

                    <h4 className="text-lg font-semibold text-black">
                      Email:{" "}
                      <span
                        style={{
                          color: "#3b82f6",
                        }}
                      >
                        {twin.userEmail}
                      </span>
                    </h4>

                    <h4 className="text-lg font-semibold text-black">
                      Score:{" "}
                      <span
                        style={{
                          color: "#3b82f6",
                        }}
                      >
                        {Math.round(twin.score * 100)}%
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  );
};

export default ImageGrid;
