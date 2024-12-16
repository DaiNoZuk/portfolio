import React from "react";
import logo from "../assets/icon.png";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="mb-2 flex items-center justify-end py-6">
      {/* <div className="flex flex-shrink-0 items-center justify-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div> */}
      <div className="m-8 flex items-center justify-center gap-4 text-4xl">
        <a href="https://www.facebook.com/cokesupanat.leamlert">
          <FaFacebook />
        </a>
        <a href="https://github.com/DaiNoZuk">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/s__upa/">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
