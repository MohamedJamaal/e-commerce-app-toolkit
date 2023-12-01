import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="flex justify-center items-center">
        <hr className="h-px w-4/5 bg-gray-400 opacity-50 outline-none border-none" />
      </div>
      <div className="flex items-center justify-around pt-4">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div>
          <p className="text-black pt-5 text-2xl font-inter font-bold tracking-normal leading-none">
            Copyright &copy; {year} page by MOHAMED GAMAL
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
