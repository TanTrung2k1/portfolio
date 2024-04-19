import {
  FaFacebook,
  FaFacebookMessenger,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div id="footer" className="mx-auto my-auto h-[300px] mt-16 sm:h-[250px]">
      <div className="bg-gradient-to-l from-teal-400 to-yellow-200 h-full flex flex-col gap-8 items-center justify-between">
        <h2
          data-aos="zoom-out"
          className=" font-bold text-5xl sm:text-3xl mt-10 sm:mt-7"
        >
          Connect with Me.
        </h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          <span
            data-aos="fade-up"
            data-aos-duration="1000"
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
            <FaTelegramPlane className=" text-blue-500 text-2xl hover:scale-125 cursor-pointer" />
          </span>
          <span
            data-aos="fade-up"
            data-aos-duration="1200"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <FaFacebook className=" text-blue-500 text-2xl hover:scale-125 cursor-pointer" />
          </span>
          <span
            data-aos="fade-up"
            data-aos-duration="1400"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <RiInstagramFill className=" text-blue-500 text-2xl hover:scale-125 cursor-pointer" />
          </span>
          <span
            data-aos="fade-up"
            data-aos-duration="1400"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <FaFacebookMessenger className=" text-blue-500 text-2xl hover:scale-125 cursor-pointer" />
          </span>
          <span
            data-aos="fade-up"
            data-aos-duration="1400"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <FaTwitter className=" text-blue-500 text-2xl hover:scale-125 cursor-pointer" />
          </span>
        </div>

        <div data-aos="fade-down" className="nav">
          <ul className="flex space-x-5 font-bold uppercase text-xs">
            <li className="transition-transform hover:scale-110 hover:text-white">
              <a href="#home">Home</a>
            </li>
            <li className="transition-transform hover:scale-110 hover:text-white">
              <a href="#resume">Resume</a>
            </li>
            <li className="transition-transform hover:scale-110 hover:text-white">
              <a href="#skills">Skills</a>
            </li>
            <li className="transition-transform hover:scale-110 hover:text-white">
              <a href="#works">Works</a>
            </li>
            <li className="transition-transform hover:scale-110 hover:text-white">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="sm:text-[12px]">
          | Copyright &copy; <span>2024 TanTrungg </span> All rights reserved
          <a href="#"></a> |
        </div>
      </div>
    </div>
  );
};

export default Footer;
