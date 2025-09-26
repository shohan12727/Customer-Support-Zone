import React from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
const Footer = () => {
  return (
    <div className="bg-black">
      <div className="w-11/12 mx-auto md:py-16 py-4  text-white grid grid-cols-1 md:grid-cols-5 gap-5">
        <div className="text-white">
          <h1 className="font-bold text-xl mb-2">CS — Ticket System</h1>
          <p className=" text-[#A1A1AA]">
            Random placeholder text has long been used in design and publishing
            to demonstrate how content will appear on a page. Since the early
            days of printing, creators have relied on such filler text to focus
            attention on layout and structure rather than meaning.
          </p>
        </div>
        <div>
          <h1 className="font-bold text-xl mb-2">Company</h1>
          <div className="text-[#A1A1AA]">
            <p>About Us</p>
            <p className="my-2">Our Mission</p>
            <p>Contact Saled</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-xl mb-2">Services</h1>
          <div className="text-[#A1A1AA]">
            <p>Products & Services</p>
            <p className="my-2">Customer Stories</p>
            <p>Download Apps</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-xl mb-2">Information</h1>
         <div className="text-[#A1A1AA]">
             <p>Privacy Policy</p>
          <p className="my-2">Terms & Conditions</p>
          <p>Join Us</p>
         </div>
        </div>
        <div>
          <h1 className="font-bold text-xl mb-2">Social Links</h1>
          <div>
            <div className="flex gap-2 items-center mt-2">
              <RiTwitterXFill />
              <p className="text-[#A1A1AA]">@CS — Ticket System</p>
            </div>
            <div className="flex gap-2 items-center my-2">
              <FaLinkedinIn />
              <p className="text-[#A1A1AA]">@CS — Ticket System</p>
            </div>
            <div className="flex gap-2 items-center">
              <FaFacebookF />
              <p className="text-[#A1A1AA]">@CS — Ticket System</p>
            </div>
            <div className="flex gap-2 items-center mt-2">
              <IoIosMail />
              <p className="text-[#A1A1AA]">support@cst.com</p>
            </div>
          </div>
        </div>
      </div>

   <p className="text-center text-white border-t border-gray-600 py-5">© 2025 CS — Ticket System. All rights reserved.</p>


    </div>
  );
};

export default Footer;
