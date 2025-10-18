import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import logo from "../../../public/Images/logo-img.png";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-center px-4">
        <div className="text-center">
          <img src={logo} alt="error image" />
          <h2 className="mb-4 text-3xl font-bold text-[#001931] sm:text-4xl">
            Oops! Page Not Found
          </h2>
          <p className="mb-8 text-xl text-[#627382]">
            The page you are looking for is not available.
          </p>
          <Link to={-1}>
            <button className="btn bg-[linear-gradient(150deg,#632EE3_0%,#9F62F2_70%)] text-white">
              Go Back!
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
