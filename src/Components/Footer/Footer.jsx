import React from "react";
import "./footer.css";
import xImg from "../../assets/x.png";
import faceImg from "../../assets/f.png";
import linkedImg from "../../assets/in.png";
import mailImg from "../../assets/f.png";

const Footer = () => {
  return (
    <div className="w-[1200px] mx-auto bg-black text-white p-10 flex justify-between mt-8">
      <div className="w-[20%] flex flex-col items-center">
        <h1 className="fontBold">CS Ticket System</h1>
        <p className="gray">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="w-[20%] flex flex-col items-center">
        <h1 className="fontBold">Company</h1>
        <ul>
          <li className="gray gap">About Us</li>
          <li className="gray gap">Our Misson</li>
          <li className="gray gap">Contact Saled</li>
        </ul>
      </div>
      <div className="w-[20%] flex flex-col items-center">
        <h1 className="fontBold">Service</h1>
        <ul>
          <li className="gray gap">Product & Services</li>
          <li className="gray gap">Customer Stories</li>
          <li className="gray gap">Download App</li>
        </ul>
      </div>
      <div className="w-[20%] flex flex-col items-center">
        <h1 className="fontBold">Information</h1>
        <ul>
          <a>
            <li className="gray gap">Privacy & Policy</li>
          </a>
          <li className="gray gap">Terms & Conditions</li>
          <li className="gray gap">Join Us</li>
        </ul>
      </div>
      <div className="w-[20%] flex flex-col items-center">
        <h1 className="fontBold">Social Link</h1>
        <div className="flex items-center justify-center gap-1.5">
          <img src={xImg} alt="" />
          <span className="font-[14px] text-gray-500">@CS — Ticket System</span>
        </div>
        <div className="flex items-center justify-center gap-1.5 mt-6">
          <img src={faceImg} alt="" />
          <span className="font-[14px] text-gray-500">@CS — Ticket System</span>
        </div>
        <div className="flex items-center justify-center gap-1.5 mt-6">
          <img src={linkedImg} alt="" />
          <span className="font-[14px] text-gray-500">@CS — Ticket System</span>
        </div>
        <div className="flex items-center justify-center gap-1.5 mt-6">
          <img src={mailImg} alt="" />
          <span className="font-[14px] text-gray-500">support@TSmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
