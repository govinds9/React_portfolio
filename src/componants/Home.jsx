import Heroimg from "../assets/heroImage.jpg";
import {MdKeyboardArrowRight} from 'react-icons/md'
import { Link } from "react-scroll";

const Home = ()=>{
    return(
        <>
        <div name="Home" className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800  ">
        <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row justify-center items-center h-full p">
            
               <div className="flex flex-col justify-center ">
               <div className="text-white  flex flex-col justify-center h-full">
                <h1 className="text-4xl sm:text-7xl  font-bold">I'm a Frontend Developer </h1>
                <p className=" text-gray-500 py-4 max-w-md  text-xl ">
               I am Govind Singh skilled front-end developer hailing from Kota, Rajasthan. With a passion for web development and a  understanding of programming languages.
            
                </p>
                  </div>
           
                <div >
                  <Link to="Coding Profiles" smooth duration={1000} className= "group text-white flex flex-row font-bold justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 mx-2 cursor-pointer my-2 px-6 py-3 rounded-xl">
                  <span className=" group-hover:scale-110 duration-200  group-hover:text-black">
                 Coding Profiles
                  </span>
                    <span className=" group-hover:rotate-90 duration-200  group-hover:text-black">
                   <MdKeyboardArrowRight size={25}/>
                    </span>
                </Link>
                 </div>
               </div>

                 <div className="hover:scale-110 duration-200 cursor-pointer ">
            <img src={Heroimg} alt="my profile"  
            className=" rounded-3xl mx-auto w-2/3 md:w-full my-2 "
            />
             </div>

           
        </div>
        
        </div>
        </>
    )
}
export default Home;