import React from "react";
import LogoIcon from "../assets/logoicon.png";
import Logo from "../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Beranda",
    link: "/#",
  },
  {
    id: 2,
    name: "Kalkulator",
    link: "/#",
  },
  {
    id: 3,
    name: "Rekomendasi",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-slate-50 duration-200 relative z-40 font-poppins px-3 py-4">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={LogoIcon} className="w-10" />
              <img src={Logo} className="h-8"/>
            </a>
          </div>

        <ul className="sm:flex hidden items-center gap-5 ">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-bold duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                className="w-[200px] sm:w-[200px] rounded-full px-2 py-1 border border-gray-200 focus:outline-none focus:border-1 focus:border-primary "
              />
              <IoMdSearch className="text-gray-600 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
          </div>

          {/* profile */}
          <div className="flex justify-between items-center">
            <div className="relative group hidden sm:block">
              <FaUserCircle />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
