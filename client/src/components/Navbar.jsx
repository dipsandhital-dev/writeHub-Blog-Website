import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import {ArrowRight} from 'lucide-react'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between py-5 items-center mx-8 sm:mx-20 xl:mx-32">
      {/*  Logo  */}
      <img
        src={logo}
        alt="logo"
        className="w-12 sm:w-44 cursor-pointer"
        onClick={() => navigate("/")}
      />

      {/*  Login Button */}
      <button
        className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5"
        onClick={() => navigate("/admin")}
      >
        Login
        <ArrowRight />
      </button>
    </div>
  );
};

export default Navbar;
