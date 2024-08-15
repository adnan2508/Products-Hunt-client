import React from "react";
import img from "../src/assets/shopping.jpg";

const Home = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Products Hunt!</h1>
            <p className="py-6">
            Your proud product provider. Dedicated for your service to move on and make sure you achieve the best quality.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
