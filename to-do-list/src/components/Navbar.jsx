import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between p-4 bg-gray-800 h-[8vh]">
        <h1 className="text-2xl font-semibold text-white">Phoebe Ivana</h1>
        <ul className="flex flex-row gap-10">
          <li>
            <Link
              to={"/"}
              className="text-lg text-white hover:text-gray-300 hover:underline transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/profile"}
              className="text-lg text-white hover:text-gray-300 hover:underline transition duration-300"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to={"/about-me"}
              className="text-lg text-white hover:text-gray-300 hover:underline transition duration-300"
            >
              About Me
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
