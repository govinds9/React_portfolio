import React from "react";
import gfg from '../assets/gfg.png';
import leetcode from '../assets/Leetcode.png';
import code from '../assets/code.jpg';



function Coding(){
   const arr= [
      {
         id:1,
         src: leetcode,
         href:"https://leetcode.com/govindsingh90/"
      },
      {
         id:2,
         src: gfg,
         href:"https://auth.geeksforgeeks.org/user/govindbapi40/profile"
      },
      {
         id:3,
         src:code,
         href:"https://www.codingninjas.com/studio/profile/govindsingh90"
      }
   ]
    return(
       <div name="Coding Profiles" className=" h-full sm:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800  ">
          
          <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-screen"> 
          <div className=" p-8">
            <p className="text-white text-4xl font-bold inline border-b-4 border-gray-500 ">Coding Profiles</p>
            <p className=" text-white py-6">Check out my coding profiles coding practice platform here </p>
          </div>

           <div className=" grid grid-cols-1 sm:grid-cols-3 gap-8 px-12 sm:px-0">
            
            {
                 arr.map(({id,src,href})=>(
                  <div key={id} className=" flex flex-col justify-center items-center shadow-md  shadow-gray-600 rounded-lg">
                  <img src={src} alt="Leetcode" className=" rounded-md duration-200 hover:scale-105 " />

                  <div className=" flex justify-center px-10 font-bold  text-white">
              <button className=" text-2.5xl font-bold hover:scale-105 duration-200 hover:shadow-md shadow-gray-600 m-4 hover:text-blue-400 "> <a href={href} target="_blank" rel="noreferrer">Check</a> </button>
              </div>
               </div>

                  )
   
                  )
            }
                
           </div>

          </div>
       
       </div>

    );
}

export default Coding;