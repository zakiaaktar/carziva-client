import { NavLink } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";




const NavBar = () => {


    return (
        <div className="max-w-screen-2xl bg-gradient-to-r from-[#FF9209] to-[#EF4040] navbar flex items-center justify-between px-8 lg:px-24 py-4 lg:py-8">
      <div>
        {/* <img className="w-36 lg:w-52" src={logo} alt="logo" /> */}
        <h1 className="text-3xl font-bold text-white">CARZIVA</h1>
      </div>
      <div className="lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost rounded-full border-2 border-gray-600"
        > 
          <FiMenu className="text-3xl text-gray-600"></FiMenu>
        </label>
      </div>

      <div className="hidden lg:block">
        <ul className="flex items-center justify-between gap-12">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `text-yellow-200 flex items-center gap-3 font-bold uppercase`
                  : `nav-text flex items-center gap-3 font-bold uppercase text-white`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? `text-yellow-200 flex items-center gap-3 font-bold uppercase`
                  : `nav-text flex items-center gap-3 font-bold text-white uppercase`
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? `text-yellow-200 flex items-center gap-3 font-bold uppercase`
                  : `nav-text flex items-center gap-3 font-bold text-white uppercase`
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive
                  ? `text-yellow-200 flex items-center gap-3 font-bold uppercase`
                  : `nav-text flex items-center gap-3 font-bold text-white uppercase`
              }
            >
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? `text-yellow-200 flex items-center gap-3 font-bold uppercase`
                  : `nav-text flex items-center gap-3 font-bold text-white uppercase`
              }
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};


export default NavBar;