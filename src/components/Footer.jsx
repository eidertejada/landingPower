import React from "react";
import {
  RiCheckboxBlankCircleFill,
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-footer xl:p-20 p-8 ">
      <div className="flex flex-col md:flex-row gap-5 items-center justify-between border-b border-gray-300 pb-8">
        {/* Logo */}
        <div className="w-1/6 relative">
          <a
            href="#"
            className="block text-2xl font-bold relative p-1 bg-footer text-white z-10"
          >
            Power<a className="text-primary  text-5xl">.</a>
          </a>
          <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 text-primary text-2xl" />
        </div>
        {/* Social Media */}
        <nav className="flex items-center  gap-4">
          <a href="#" className="block bg-primary text-white p-4 rounded-full">
            <RiInstagramLine />
          </a>
          <a href="#" className="block bg-primary text-white p-4 rounded-full">
            <RiFacebookLine />
          </a>
          <a href="#" className="block bg-primary text-white p-4 rounded-full">
            <RiTwitterLine />
          </a>
          <a href="#" className="block bg-primary text-white p-4 rounded-full">
            <RiGithubLine />
          </a>
        </nav>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-bold text-white text-center md:text-left">
          Company
        </h3>
        <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="#"
            className="block text-gray-300 mt-4 hover:text-white transition-colors"
          >
            About Us
          </a>
          <a
            href="#"
            className="block text-gray-300 mt-4 hover:text-white transition-colors"
          >
            Press
          </a>
          <a
            href="#"
            className="block text-gray-300 mt-4 hover:text-white transition-colors"
          >
            Invertors
          </a>
          <a
            href="#"
            className="block text-gray-300 mt-4 hover:text-white transition-colors"
          >
            Events
          </a>
          <a
            href="#"
            className="block text-gray-300 mt-4 hover:text-white transition-colors"
          >
            Terms of use
          </a>
          <a
            href="#"
            className="block text-gray-300 mt-4 hover:text-white transition-colors"
          >
            Privacy policy
          </a>
          <button
            type="button"
            className="font-semibold py-2 px-6 bg-primary text-white rounded-xl"
          >
            Contact Us
          </button>
        </nav>
      </div>
      <div className="mt-20">
        <p className="text-gray-300 text-center">
          &copy; eidertejada 2022 - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
