import { FaGithub } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <header className="shadow-md sticky top-0 z-10 bg-base-100">
      <nav className="navbar bg-base-100 sm:w-11/12 mx-auto ">
        <div className="navbar-start w-full sm:w-[50%]">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <IoMdMenu size={30} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/apps">Apps</NavLink>
              </li>
              <li>
                <NavLink to="/installations">Installations</NavLink>
              </li>
              <li>
                <Link
                  to="https://github.com/SMDpHeroB12"
                  target="_blank"
                  className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white"
                >
                  <FaGithub />
                  <span>Contribute</span>
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="h-9 flex items-center gap-2 text-xl">
            <img className="h-full" src="/logo.png" alt="logo" />
            <h1 className="font-bold w-full">HERO AppStore</h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2.5">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/apps">Apps</NavLink>
            </li>
            <li>
              <NavLink to="/installations">Installations</NavLink>
            </li>
          </ul>
        </div>
        <div className="sm:navbar-end hidden sm:flex">
          <Link
            to="https://github.com/SMDpHeroB12"
            target="_blank"
            className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white"
          >
            <FaGithub />
            <span>Contribute</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
