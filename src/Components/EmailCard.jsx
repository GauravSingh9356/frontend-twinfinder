import React, { useState } from "react";
// import AWS from "aws-sdk"; // Import entire SDK (optional)
import AWS from "aws-sdk/global"; // Import global AWS namespace (recommended)
import S3 from "aws-sdk/clients/s3"; // Import only the S3 client
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EmailInputCard = () => {
  const [data, setData] = useState({
    email: "",
    image: null,
  });

  const [showLoader, setShowLoader] = useState(false);

  const navigate = useNavigate();

  const [step, setStep] = useState(1); // 1: Uploading, 2: Fetching Results, 3: Redirecting
  const [loadingText, setLoadingText] = useState("Uploading Image...");

  const S3_BUCKET = "mytwinfinderbucket"; // Replace with your bucket name
  const REGION = "us-west-2"; // Replace with your region

  /// AKIA3FLDZHBBQLGTODCQ
  /// /CpkY97X6q3q/FMbjNZXsbtaKzIlBtE+aW5JKAqn

  AWS.config.update({
    accessKeyId: "",
    secretAccessKey: "",
  });

  const s3 = new S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
  });

  const handleChange = (e) => {
    if (e.target.name == "image") {
      setData({
        ...data,
        [e.target.name]: e.target.files[0],
      });
    } else
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const params = {
        Bucket: S3_BUCKET,
        Key: data.image.name,
        Body: data.image,
      };

      setShowLoader(true);

      // Simulating upload delay with setTimeout

      setTimeout(async () => {
        await s3.putObject(params).promise();
        const imageURL = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${data.image.name}`;

        console.log("Image uploaded:", imageURL);

        setLoadingText("Fetching Results...");

        axios
          .post(
            `https://twinfinder-backend-production.up.railway.app/save-data`,
            {
              email: data.email,
              imageUrl: imageURL,
            }
          )
          .then((res) => {
            console.log("Results fetched:", res.data.data);

            setLoadingText("Redirecting...");

            // Simulating redirect delay with setTimeout
            setTimeout(() => {
              navigate(`/result/${res.data.data.email}`, {
                state: {
                  email: res.data.data.email,
                  imageUrl: res.data.data.imageUrl,
                  twins: res.data.data.twins,
                },
              });
            }, 2000); // Redirect after 2 seconds
          })
          .catch((error) => {
            console.error("Error fetching results:", error);
            setLoadingText("Error Fetching Results");
          });
      }, 2000); // Simulate upload delay with 2 seconds
    } catch (error) {}

    // try {
    //   const params = {
    //     Bucket: S3_BUCKET,
    //     Key: data.image.name,
    //     Body: data.image,
    //   };
    //   const upload = await s3.putObject(params).promise();
    //   const imageURL = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${data.image.name}`;

    //   console.log(imageURL);

    //   axios
    //     .post(`http://localhost:3000/save-data`, {
    //       email: data.email,
    //       imageUrl: imageURL, // Pass the image URL to the server
    //     })
    //     .then((res) => {
    //       console.log(res.data.data);

    //       navigate(`/result/${res.data.data.email}`, {
    //         state: {
    //           email: res.data.data.email,
    //           imageUrl: res.data.data.imageUrl,
    //           twins: res.data.data.twins,
    //         },
    //       });
    //     })
    //     .catch((err) => {
    //       console.log("Got Error while calling backend: " + err.message);
    //     });
    // } catch (error) {
    //   alert("Error uploading file: " + error.message);
    // }
  };

  console.log(data);

  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden text-center"
      style={{
        width: "450px",
      }}
    >
      {showLoader ? (
        <div
          className="flex flex-col items-center justify-center text-black"
          style={{
            // background: "#3b82f6",
            color: "#fff",
            border: "2px solid #3b82f6",
            borderRadius: "4px",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.4)",
          }}
        >
          <div className="text-center px-4 py-8">
            <div className="loader inline-block animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-black"></div>
            <p className="mt-4 text-black">{loadingText}</p>
          </div>
        </div>
      ) : (
        <div className="px-8 py-12">
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            Please Provide Your Details
          </h2>
          {/* <p className="text-gray-600 mb-4">
        Enter your email below to find your twin:
      </p> */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Upload your Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                //   value={data.image}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Upload your image"
              />
            </div>

            {data.image && (
              <div
                style={{
                  marginTop: "30px",
                }}
              >
                <label
                  style={{
                    color: "#000",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  Added Image:
                </label>
                <img src={URL.createObjectURL(data.image)} />
              </div>
            )}

            <div className="flex items-center justify-between mt-5 text-center">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Find Your Twin
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default EmailInputCard;
