import React from "react";
import { TailSpin } from "react-loader-spinner";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <TailSpin color="#1b1b1b" />
    </div>
  );
};

export default Loader;
