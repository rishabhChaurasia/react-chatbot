import React from "react";
import moonImg from "../assets/moon.svg";
import earthImg from "../assets/earth.svg";
import { Link } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <div>
        <img src={moonImg} alt="moonImg" />
      </div>
      <div className="errorPageContent">
        <div>
          <h1>404</h1>
          <p>Page not found!</p>
        </div>
        <Link to={"/"}>
          <HiArrowLongLeft size={"2rem"} /> Go to homepage
        </Link>
      </div>
      <div>
        <img src={earthImg} alt="earthImg" />
      </div>
    </div>
  );
};

export default ErrorPage;
