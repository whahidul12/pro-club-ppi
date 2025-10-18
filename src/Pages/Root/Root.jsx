import React from "react";
import Navbar from "../../Layouts/Navbar/Navbar";
import Footer from "../../Layouts/Footer/Footer";
import LoadingScreen from "../../Layouts/LoadingScreen/LoadingScreen";
import { Outlet, useNavigation } from "react-router";

const Root = () => {
  const navigation = useNavigation();
  return (
    <>
      {navigation.state === "loading" ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default Root;
