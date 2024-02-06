//import logo from "../../../../assets/logo/carzivaLogo.png";
import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLocationArrow,
  FaMobileAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center rounded-t-3xl bg-gradient-to-r from-[#FF9209] to-[#EF4040] lg:px-32">
        {/* part 1  */}
        <div className="text-white text-left lg:py-16 ml-6 lg:ml-0">
          <NavLink to="/">
            {/* <img className="w-36 lg:w-52 mb-4 lg:mb-8" src={logo} alt="logo" /> */}
          </NavLink>
          <div className="font-medium lg:text-xl text-white">
            <div className="flex items-center gap-1">
              <FaLocationArrow />
              <p>Tech Gadgets AB 1234</p>
            </div>
            <div className="mt-3 flex items-center gap-1">
              <FaMobileAlt />
              <p>+00 123456789</p>
            </div>
            <div className="mt-3 flex items-center gap-1">
              <CgMail />
              <p>info@carziva.com</p>
            </div>
          </div>
        </div>
        {/* part 2  */}
        <div className="w-full mx-auto flex md:justify-center items-center my-4 md:my-8 pl-6 md:pl-0  md:border-x-2 md:border-gray-300 ">
          <ul className="flex flex-col gap-2 pt-2 font-medium lg:text-xl text-white">
            <li>
              <NavLink to="/" className="">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="">
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className="">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="">
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="">
                Cookie Policy
              </NavLink>
            </li>
          </ul>
        </div>
        {/* part 3  */}
        <div className="text-white text-center lg:text-xl py-4 lg:py-24">
          <div className="flex flex-row md:flex-col items-center md:justify-center gap-8 md:gap-4 pl-6 md:pl-0 text-2xl md:text-3xl">
            <NavLink>
              <FaFacebook />
            </NavLink>
            <NavLink>
              <FaInstagramSquare />
            </NavLink>
            <NavLink>
              <FaTwitterSquare />
            </NavLink>
          </div>
        </div>
      </div>
      {/* last part  */}
      <div>
        <div className="bg-gradient-to-r from-[#FF9209] to-[#EF4040] pb-4 text-center text-white font-medium text-xs lg:text-lg  md:px-12 lg:px-32">
          @ copyright 2024 zakiaaktar.nila@gmail.com || All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
