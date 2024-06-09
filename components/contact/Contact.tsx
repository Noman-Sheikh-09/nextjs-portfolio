import React from "react";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";

function Contact() {
  return (
    <div className="w-[100%] min-h-[100vh] bg-gray-100 mt-[5%] flex items-center px-[5%]">
      <div className="w-[50%]  rounded-[20px] shadow-lg bg-white">
        <p className="font-bold text-[3rem] text-primary  pl-[8%] mt-[5%]">Let's work together</p>
        <div className="flex items-center justify-between px-[8%] mt-[5%]">
          <input
            type="text"
            placeholder="First Name"
            className="bg-gray-100 h-[50px] rounded-[10px] border border-primary outline-none pl-[10px]"
          />
          <input
            type="text"
            placeholder="Last Name"

            className="bg-gray-100 h-[50px] rounded-[10px] border border-primary outline-none pl-[10px]" 
          />
        </div>
        <div className="flex items-center justify-between px-[8%] mt-[5%]">
          <input
            placeholder="Email"

            type="text"
            className="bg-gray-100 h-[50px] rounded-[10px] border border-primary outline-none pl-[10px]"
          />
          <input
            type="text"
            placeholder="Phone"

            className="bg-gray-100 h-[50px] rounded-[10px] border border-primary outline-none pl-[10px]"
          />
        </div>
        <div className="flex items-center justify-between px-[8%] mt-[5%]">
          <textarea
            placeholder="Message"

className="bg-gray-100 h-[50px] w-full rounded-[10px] border border-primary min-h-[130px] outline-none pl-[10px] pt-[10px]"
          />
          
        </div>
        <div className="flex items-center justify-between px-[8%] mt-[5%] pb-[5%]">

        <button className="bg-primary w-[40%] text-white px-[20px] py-[10px] rounded-[5px] ">
         Submit
          </button>
      </div>
      </div>
      <div className="w-[50%] min-h-[90vh] ml-[5%]">
      <p className="font-bold text-[3rem] text-primary   mt-[5%]">Contact Details</p>

        <div className="flex items-center mt-[5%]">
          <button className="w-[50px] h-[50px] bg-primary flex justify-center items-center rounded-full ">
            <LuPhoneCall size={26} color="white" />
          </button>
          <div className="ml-[20px]">
            <p className="font-normal text-[16px]">Phone</p>
            <p className="font-medium text-[20px] ">+92 310 7497393</p>
          </div>
        </div>

        <div className="flex items-center mt-[5%]">
          <button className="w-[50px] h-[50px] bg-primary flex justify-center items-center rounded-full ">
            <MdOutlineMailOutline size={30} color="white" />
          </button>
          <div className="ml-[20px]">
            <p className="font-normal text-[16px]">Email</p>
            <p className="font-medium text-[20px] ">nomanshk310@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center mt-[5%]">
          <button className="w-[50px] h-[50px] bg-primary flex justify-center items-center rounded-full ">
            <IoLocationOutline size={30} color="white" />
          </button>
          <div className="ml-[20px]">
            <p className="font-normal text-[16px]">Address</p>
            <p className="font-medium text-[20px] ">Near Iqbal Stadium,Faisalabad,Pakistan</p>
          </div>
        </div>
        <div className="flex items-center mt-[5%]">
          <button className="w-[50px] h-[50px] bg-primary flex justify-center items-center rounded-full ">
            <FaWhatsapp size={30} color="white" />
          </button>
          <div className="ml-[20px]">
            <p className="font-normal text-[16px]">WhatsApp</p>
            <p className="font-medium text-[20px] ">+92 310 7497393</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
