import React from "react";
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reacts from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import github from '../assets/github.png';



function Project(){
    const tmp = [
        {
            id:1,
            src:html,
            s: "shadow-orange-400" ,
            title:"HTML"
        },
        {
            id:2,
            src:css,
            s:" shadow-blue-400 ",
            title:"CSS"

        },
        {
            id:3,
            src:javascript,
            s:" shadow-yellow-400 ",
            title:"Javascript"
        },
        {
            id:4,
            src:reacts,
            s:" shadow-blue-400",
            title:"React"
        },
        {
            id:5,
            src:tailwind,
            s:" shadow-blue-200 ",
            title:"Tailwind"
        },
        {
            id:6,
            src:github,
            s:" shadow-white ",
            title:"GitHub"
        }

    ];

    return(
        <div name = 'Experience' className=" w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className=" flex flex-col  max-w-screen-lg p-4 mx-auto justify-center w-full h-screen">
              <div className=" p-8">
              <p className=" text-white text-4xl font-bold inline border-b-4 border-gray-500">Experience </p>
                 <p className=" py-6 text-1xl">These are the technoplogy I have worked with</p>
              </div>

                 <div className="grid grid-cols-2 gap-8 px-12 sm:grid-cols-3 py-8 sm:px-0">


                   {
                    tmp.map(({id,src,s,title})=>(
                        <div key={id} className=  {`flex flex-col justify-center items-center shadow-md rounded-lg ${s}`}>
                        <img src={src} alt="Html" className="rounded-md duration-200 hover:scale-105  w-20 mx-auto"/>
                        <p className=" mt-4">{title}</p>
                    </div>

                    ))
                   }


                 </div>

            </div>

        </div>
    );

}
export default Project;