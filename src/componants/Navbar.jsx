import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const arr = [
    {
      id: 1,
      part: "Home",
    },
    {
      id: 2,
      part: "About",
    },

    {
      id: 4,
      part: "Coding Profiles",
    },
    {
      id: 5,
      part: "Experience",
    },
    {
      id: 3,
      part: "Projects",
    },
    {
      id: 6,
      part: "Contact",
    },
  ];

  const list = arr.map((prod) => (
    <li
      key={prod.id}
      className="px-4 font-medium cursor-pointer text-gray-500 hover:scale-125 duration-200"
    >
      <Link to={prod.part} smooth duration={1000}>
        {" "}
        {prod.part}
      </Link>
    </li>
  ));
  const list1 = arr.map((prod) => (
    <li
      key={prod.id}
      className="py-6 text-4xl font-medium cursor-pointer text-gray-500 hover:scale-125 duration-200"
    >
      <Link onClick={() => setnav(!nav)} to={prod.part} smooth duration={1000}>
        {" "}
        {prod.part}
      </Link>
    </li>
  ));

  const [nav, setnav] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center w-full h-20 fixed text-white bg-black">
        <div>
          <h1 className="text-5xl font-signature font-bold px-4 ">Govind</h1>
        </div>
        <ul className=" hidden md:flex">
          {
            list
            // arr.map(({id,part})=>(
            //     <li  key = {id}className="px-4 font-medium cursor-pointer text-gray-500 hover:scale-125 duration-200">{part}</li>
            // ))
          }
        </ul>

        <div
          onClick={() => setnav(!nav)}
          className=" cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav ? (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
            {list1}
          </ul>
        ) : null}
      </div>
    </>
  );
};

export default Navbar;
