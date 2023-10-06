import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Social() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIN <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com/in/govind-singh-",
      st: "rounded-tr-md",
    },

    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/govinds9",
    },
    {
      id: 3,
      child: (
        <>
          Mail
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:govindbanna9057@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://drive.google.com/file/d/13Fuvdcwl5U5w-D0NP6dkH2OXBPgZYwhn/view?usp=drive_link",
      st: "rounded-br-md",
      down: true,
    },
  ];
  return (
    <div>
      <div className=" md:flex flex-col top-[35%] left-0 fixed">
        <ul>
          {links.map(({ id, child, href, st, down }) => (
            <li
              key={id}
              className={
                "flex justify-between  items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px]  bg-gray-500" +
                " " +
                st
              }
            >
              <a
                href={href}
                className="flex flex-row justify-between items-center w-full font-semibold "
                download={down}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Social;
