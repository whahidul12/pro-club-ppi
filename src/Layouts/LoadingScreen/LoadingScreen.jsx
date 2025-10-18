import React from "react";
import logo from "../../assets/Images/logo-img.png";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        <img
          src={logo}
          alt="Programming Club - PPI"
          className="mx-auto mb-4 w-24 animate-pulse"
        />
        <h2 className="text-2xl font-bold text-[#001931]">
          Programming Club - PPI
        </h2>
        <div className="mt-2">
          <span
            className="loading loading-ring loading-xl animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></span>
          <span
            className="loading loading-ring loading-xl animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></span>
          <span
            className="loading loading-ring loading-xl animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></span>
        </div>
        <p className="text-[#333]">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
