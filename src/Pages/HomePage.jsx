import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import ShowCase from "../Components/ShowCase";
import Tips from "../Components/Tips";
import About from "../Components/About";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center space-y-8">
        {/* <div className="flex-grow flex flex-col items-center justify-center space-y-8">
        <div className="p-6 bg-blue-500 rounded-lg shadow-lg min-h-[200px] min-w-[400px] flex flex-col items-center justify-center">
          <h2 className="mb-4 text-2xl font-bold text-center">
            Welcome to TwinFinder
          </h2>
          <p className="text-center px-4">
            TwinFinder is your ultimate platform to find your twin from anywhere
            in the world. Join us and discover your look-alike and connect with
            them.
          </p>
        </div>
        <div className="p-6 bg-blue-500 rounded-lg shadow-lg min-h-[400px] min-w-[400px] flex flex-col items-center justify-center">
          <h1 className="mb-4 text-2xl font-bold text-center">
            Enter Your Email
          </h1>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 text-white bg-black border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div> */}

        <section className="hero-banner bg-blue-g-2 text-white pt-8 md:pt-16 pb-4 md:pb-16 text-xs md:text-base">
          <div className="container mx-auto md:py-4">
            {/* Post */}
            <article className="flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-between">
              {/* Post Content */}
              <div className="post-content mb-2 md:mb-0 md:pr-4 md:w-2/3 lg:w-1/2">
                {/* Text */}
                <div className="text-wrap">
                  <h2
                    className="mb-2 md:mb-4"
                    style={{
                      //   background: "#3b82f6",
                      color: "#3b82f6",
                      padding: "6px 10px",
                      borderRadius: "6px",
                      textAlign: "center",
                      fontSize: "28px",
                      border: "2px solid #3b82f6",
                    }}
                  >
                    Discover Your Twins!
                  </h2>
                  <p
                    className="text-lg"
                    style={{
                      color: "#000",
                    }}
                  >
                    Explore the fascinating world of facial recognition with
                    Twin Finder, your ultimate tool to find your doppelgänger
                    anywhere in the world. Whether you're curious about who your
                    celebrity look-alike might be or simply intrigued by the
                    idea of finding someone who shares your features, Twin
                    Finder uses advanced AI technology to make it possible.
                  </p>
                </div>
                {/* Hero Buttons*/}
                <div className="button-wrap flex flex-wrap justify-center pt-5 md:justify-start">
                  <button
                    className="btn-round uppercase bg-blue-500 text-white py-2 px-6 mr-4 mb-2 md:mb-0"
                    onClick={() => {
                      window.open(
                        "https://www.youtube.com/watch?v=4rUcR8rPh5o&t=1s&ab_channel=TwinStrangers",
                        "_blank"
                      );
                    }}
                    data-remodal-target="demo-video"
                    style={{
                      borderRadius: "6px",
                    }}
                  >
                    View Demo
                  </button>
                  <button
                    className="btn-round uppercase text-black py-2 px-6"
                    onClick={() => {
                      navigate("/get-started");
                    }}
                    style={{
                      borderRadius: "6px",
                      border: "1px solid #3b82f6",
                    }}
                  >
                    Get Started
                  </button>
                </div>
                <div
                  style={{
                    marginTop: "50px",
                  }}
                ></div>
              </div>
              {/* Post Media */}
              <div className="post-media md:pr-0 md:pl-4 md:w-1/3 lg:w-1/2">
                {/* Image */}
                <figure className="media-item mb-0">
                  <img src="./images/tf.png" />
                </figure>
              </div>
            </article>
          </div>
        </section>
      </div>

      <About />
      <Tips />

      <ShowCase />

      <footer className="py-4 bg-blue-500 shadow-md w-full text-center mt-4">
        <p className="text-white">© 2024 TwinFinder. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
