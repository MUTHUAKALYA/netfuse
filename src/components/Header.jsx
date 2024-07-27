import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-darkSecondary flex flex-col sm:flex-row justify-between items-center p-2 px-5 sm:px-10">
        <div className="flex items-center ">
          <img
            src="public/logo.png"
            alt="NetFuse-logo"
            className="w-12 h-12 "
          />
          <Link to={"/"}>
            <h1 className="text-lightSecondary font-bold text-2xl">NetFuse</h1>
          </Link>
        </div>
        <nav>
          <ul className="flex gap-x-6 sm:gap-x-10 font-semibold text-gray-400 pe-5 my-3 sm:my-0">
            <Link to={"/"}>
              <li
                className="hover:text-neutral hover:cursor-pointer"
                title="go to home"
              >
                Home
              </li>
            </Link>

            <Link to={"/about"}>
              <li
                className="hover:text-neutral hover:cursor-pointer"
                title="go to about"
              >
                About Us
              </li>
            </Link>

            <Link to={"/contact"}>
              <li
                className="hover:text-neutral hover:cursor-pointer"
                title="send us a message"
              >
                Contact Us
              </li>
            </Link>
          </ul>
        </nav>
      </header>
      <hr className="border border-gray-300" />
    </>
  );
};

export default Header;
