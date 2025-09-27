import React from "react";
import "./footer.css";
import xImg from "../../assets/x.png";
import faceImg from "../../assets/f.png";
import linkedImg from "../../assets/in.png";
import mailImg from "../../assets/f.png";

const Footer = () => {
  return (
    <div className="w-[1200px] res mx-auto bg-black width center text-white p-10 flex justify-between mt-8">
      <div className="grid grid-cols-5 items-center footer">
        <div className="flex flex-col small items-center">
          <h1 className="fontBold">CS Ticket System</h1>
          <p className="gray">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex flex-col mx-auto items-center">
          <h1 className="fontBold">Company</h1>
          <ul>
            <a href="">
              <li className="gray gap">About Us</li>
            </a>
            <a href="">
              <li className="gray gap">Our Mission</li>
            </a>
            <a href="">
              <li className="gray gap">Contact Saled</li>
            </a>
          </ul>
        </div>
        <div className="flex flex-col mx-auto items-center">
          <h1 className="fontBold">Service</h1>
          <ul>
            <a href="">
              <li className="gray gap">Product & Services</li>
            </a>
            <a href="">
              <li className="gray gap">Customer Stories</li>
            </a>
            <a href="">
              <li className="gray gap">Download App</li>
            </a>
          </ul>
        </div>
        <div className=" flex flex-col mx-auto items-center">
          <h1 className="fontBold">Information</h1>
          <ul>
            <a href="">
              <li className="gray gap">Privacy & Policy</li>
            </a>
            <a href="">
              <li className="gray gap">Terms & Conditions</li>
            </a>
            <a href="">
              <li className="gray gap">Join Us</li>
            </a>
          </ul>
        </div>
        <div className=" flex flex-col mx-auto items-center">
          <h1 className="fontBold">Social Link</h1>
          <div className="flex items-center justify-center gap-1.5">
            <img src={xImg} alt="" />
            <span className="font-[14px] gray">@CS — Ticket System</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 mt-6">
            <img src={faceImg} alt="" />
            <span className="font-[14px] gray">@CS — Ticket System</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 mt-6">
            <img src={linkedImg} alt="" />
            <span className="font-[14px] gray">@CS — Ticket System</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 mt-6">
            <img src={mailImg} alt="" />
            <span className="font-[14px] gray">support@TSmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
