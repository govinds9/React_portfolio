import React from "react";

function Contact() {
  return (
    <div
      name="Contact"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 p-4 text-white "
    >
      <div className=" flex flex-col  p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold  inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-8">Submit the form below to grt in touch with me </p>
        </div>

        <div className=" flex  justify-center items-center">
          <form
            action="https://getform.io/f/e3d88ba8-3815-4015-b6b6-88104dc6fbf8"
            method="POST"
            className="flex flex-col gap-8 w-full md:w-1/2  "
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name "
              className=" p-2 bg-transparent border-2 rounded-md focus:outline-none"
            />
            <input
              type=""
              name="email"
              placeholder="Enter Your Email "
              className=" p-2 bg-transparent border-2 rounded-md focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none text-white"
            ></textarea>
            <button className=" text-white  bg-gradient-to-b  from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto  rounded-md flex items-center hover:scale-110 duration-300">
              {" "}
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
