import React from "react";

const Header = () => {
  return (
    <>
      <header className="bg-[#0d1527]  flex justify-between items-center p-2">
        <div className="flex items-center ">
          <img
            src="public/logo.png"
            alt="NetFuse-logo"
            className="w-12 h-12 "
          />
          <h1 className="text-lightPrimary font-bold text-2xl">NetFuse</h1>
        </div>
        <nav>
          <ul className="flex gap-x-6 font-semibold text-gray-300 pe-5">
            <li
              className="hover:text-neutral hover:cursor-pointer"
              title="go to home"
            >
              Home
            </li>
            <li
              className="hover:text-neutral hover:cursor-pointer"
              title="go to about"
            >
              About Us
            </li>
            <li
              className="hover:text-neutral hover:cursor-pointer"
              title="send us a message"
            >
              Contact Us
            </li>
          </ul>
        </nav>
      </header>
      <hr className="border border-t-lightPrimary" />
    </>
  );
};

export default Header;
