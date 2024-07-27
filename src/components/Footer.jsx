import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-darkSecondary p-5 py-10">
      <section className="flex gap-x-16 items-start justify-evenly pb-6">
        <div className="w-[240px] ">
          <div className="flex text-red-300 items-center ">
            <img
              src="public/logo.png"
              alt="netfuse-logo"
              className="w-10 h-10"
            />
            <h1 className="font-bold text-2xl">NetFuse</h1>
          </div>
          <p className="text-gray-500 text-justify">
            Fuel your brand's growth with digital stratergies that dazzle and
            deliver
          </p>
        </div>
        {/* quick links nav */}
        <nav className="text-gray-500">
          <h5 className="text-red-300 font-semibold text-lg">Quick Links</h5>
          <ul className="font-extralight text-md">
            <Link to={"/"}>
              {" "}
              <li className="hover:cursor-pointer hover:text-gray-400">
                {" "}
                <span className="text-lightSecondary font-medium"> &gt; </span>
                Home
              </li>
            </Link>
            <Link to={"/about"}>
              <li className="hover:cursor-pointer hover:text-gray-400">
                {" "}
                <span className="text-lightSecondary font-medium">
                  {" "}
                  &gt;{" "}
                </span>{" "}
                About Us
              </li>
            </Link>
            <Link to={"/contact"}>
              <li className="hover:cursor-pointer hover:text-gray-400">
                {" "}
                <span className="text-lightSecondary font-medium">
                  {" "}
                  &gt;{" "}
                </span>{" "}
                Contact Us
              </li>
            </Link>
          </ul>
        </nav>
        {/* services nav */}
        <nav className="text-gray-500">
          <h5 className="text-red-300 font-semibold text-lg">Services</h5>
          <ul className="font-extralight text-md">
            <li className="hover:cursor-pointer hover:text-gray-400">
              <span className="text-lightSecondary font-medium"> &gt; </span>{" "}
              Search Engine Optimization
            </li>
            <li className="hover:cursor-pointer hover:text-gray-400">
              <span className="text-lightSecondary font-medium"> &gt; </span>{" "}
              Pay-Per-Click (PPC) Marketing
            </li>
            <li className="hover:cursor-pointer hover:text-gray-400">
              <span className="text-lightSecondary font-medium"> &gt; </span>{" "}
              Social media marketing
            </li>
            <li className="hover:cursor-pointer hover:text-gray-400">
              <span className="text-lightSecondary font-medium"> &gt; </span>{" "}
              Content Marketing
            </li>
          </ul>
        </nav>
        {/* contact info */}
        <div>
          <h5 className="text-red-300 font-semibold text-lg pb-1">
            Contact Info
          </h5>
          <div className="flex gap-x-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-lightSecondary"
            >
              <path
                fill="currentColor"
                d="M20 12q-.4 0-.712-.288T18.925 11q-.325-2.325-1.963-3.963T13 5.076q-.425-.05-.712-.35T12 4t.3-.712t.7-.238q3.15.35 5.375 2.575T20.95 11q.05.4-.238.7T20 12m-4.175 0q-.325 0-.575-.225t-.375-.6q-.2-.725-.763-1.287t-1.287-.763q-.375-.125-.6-.375T12 8.15q0-.5.35-.812t.775-.213q1.4.325 2.413 1.338t1.337 2.412q.1.425-.225.775t-.825.35m4.125 9q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
              ></path>
            </svg>
            <span className="font-extralight text-md text-gray-500">
              +149 7567 321
            </span>
          </div>
          <div className="flex gap-x-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-lightSecondary"
            >
              <path
                fill="currentColor"
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44"
              ></path>
            </svg>
            <span className="font-extralight text-md text-gray-500">
              writeurqueries@netfuse.com
            </span>
          </div>
          <div className="flex gap-x-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-lightSecondary"
            >
              <path
                fill="currentColor"
                d="M12 21.325q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762t-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 1.125-.437 2.363t-1.275 2.575T16.2 17.9t-2.875 2.925q-.275.25-.625.375t-.7.125M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12"
              ></path>
            </svg>
            <span className="font-extralight text-md text-gray-500">
              Perungudi , Chennai
            </span>
          </div>
        </div>
        {/* timing */}
        <div className="flex flex-col text-gray-500">
          <h5 className="text-red-300 font-semibold text-lg">Opening Hours</h5>
          <span className="">Monday - Saturday (09:00 - 21:00 IST)</span>
          <span>Sunday (Closed)</span>
        </div>
      </section>
      <hr className="border-red-300 mt-6" />
      <p className="text-gray-50 font-medium text-center mt-6">
        Copyright &copy; 2024 - All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
