import Footer from "components/Footer";
import Greeting from "components/Greeting";
import Header from "components/Header";
import React, { ReactElement } from "react";
import { Outlet } from "react-router-dom";

const Default = (): ReactElement => {
  return (
    <>
    <Header />
    <Greeting />
    <Outlet />
    <Footer />
    </>
  );
};

export default Default;