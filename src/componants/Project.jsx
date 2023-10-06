import React from "react";
import todo from "../assets/project/Todo.png";
import pass from "../assets/project/password.png";
import curr from "../assets/project/Currency.png";
import jeev from "../assets/project/jeevanrakt.png";

function Project() {
  const arr = [
    {
      id: 1,
      src: todo,
      href: "https://todowebby.netlify.app",
      name: "Todo webpage",
    },
    {
      id: 2,
      src: curr,
      href: "https://currencyconverterby.netlify.app",
      name: "Currency converter",
    },
    {
      id: 3,
      src: pass,
      href: "https://passwordgeneratorby.netlify.app",
      name: "Password Generator",
    },
    {
      id: 4,
      src: jeev,
      href: "https://jeevanrakt.netlify.app",
      name: "JeevanRakt",
    },
  ];
  return (
    <div
      name="Projects"
      className=" h-auto  w-full bg-gradient-to-b from-black via-black to-gray-800  "
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-screen">
        <div className=" p-8">
          <p className="text-white text-4xl font-bold inline border-b-4 border-gray-500 ">
            Projects
          </p>
          <p className=" text-white py-6">Check out my Personal Projects </p>
        </div>

        <div className=" grid grid-cols-2 sm:grid-cols-4 gap-4 px-8 sm:px-0">
          {arr.map(({ id, src, href, name }) => (
            <div
              key={id}
              className=" flex flex-col justify-center items-center shadow-md  shadow-gray-600 rounded-lg"
            >
              <img
                src={src}
                alt="Leetcode"
                className=" rounded-md duration-200 hover:scale-105 "
              />

              <div className=" flex justify-center px-5 sm:px-10 font-bold  text-white">
                <button className=" text-xl sm:text-2.5xl font-bold hover:scale-105 duration-200 hover:shadow-md shadow-gray-600 m-4 hover:text-blue-400 ">
                  {" "}
                  <a href={href} target="_blank" rel="noreferrer">
                    {name}
                  </a>{" "}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
