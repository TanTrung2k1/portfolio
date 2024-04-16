import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Nguyen Tan Trung.pdf";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn, FaPlay } from "react-icons/fa";
import avatar from "../../assets/avatar.png";
import circle from "../../assets/circle.png";

const Hero = () => {
  return (
    <div id="home" className={`bg-gradient-to-r from-green-200 to-yellow-200`}>
      <div className="container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px] flex sm:flex-col-reverse sm:pt-0">
        <div className="left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className="text-5xl font-bold sm:text-[2rem]"
            >
              Hello, I'm Tấn Trung
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Web Developer",
                2000,
                "Back-end Developer",
                2000,
                "Front-end Developer",
                2000,
                "Freelancer",
                2000,
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-yellow-500 text-4xl font-bold sm:text-3xl"
            />

            <p
              data-aos="fade-down"
              className="text-[1.1rem] font-medium w-3/4 md:w-full text-gray-500 sm:text-[.95rem]"
            >
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href=""
              className="bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold hover:text-yellow-500"
            >
              Hire Me
            </a>
            <a
              href={resumePDF}
              className="flex items-center text-[1rem] bg-white px-7 py-2 sm:px-6 rounded-lg font-bold hover:text-yellow-500"
              download
            >
              <div className="flex items-center gap-2">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className="flex gap-5"
            >
              <li>
                <a href="">
                  <AiFillGithub className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />
                </a>
              </li>
              <li>
                <a href="">
                  <FaFacebook className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />
                </a>
              </li>
              <li>
                <a href="">
                  <AiFillInstagram className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />
                </a>
              </li>
              <li>
                <a href="">
                  <FaLinkedinIn className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />
                </a>
              </li>
              <li>
                <a href="">
                  <AiFillTwitterCircle className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="right top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
              data-aos="fade-up"
              className="h-[90%] w-full object-cover md:h-[95%] md:m-auto sm:m-0"
              src={avatar}
              alt="mine"
            />
            <div className=" absolute bottom-5 md:bottom-3 right-8 md:right-2">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className=" relative cursor-pointer"
              >
                <img
                  className=" w-[135px] md:w-[90px] circle-text"
                  src={circle}
                  alt="circle"
                />
                <FaPlay className=" text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              </div>
            </div>
          </div>
        </div> */}

        <div className="right top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <div
              data-aos="fade-up"
              className="bg-gradient-to-r from-yellow-300 to-green-300 rounded-full overflow-hidden md:h-[95%] z-10"
            >
              <img
                className="h-[90%] w-full object-cover md:h-[95%] md:m-auto sm:m-0 rounded-full"
                src={avatar}
                alt="mine"
              />
            </div>
            <div className="absolute bottom-5 md:bottom-4 right-8 md:right-5 lg:bottom-20 z-10">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className=" relative cursor-pointer"
              >
                <img
                  className=" w-[135px] md:w-[90px] circle-text lg:w-[110px]"
                  src={circle}
                  alt="circle"
                />
                <FaPlay className=" text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              </div>
            </div>
            {/* <div className="absolute top-5 md:top-4 lg:hidden right-8 md:right-0 bg-slate-500 rounded-full w-10 h-10 z-0"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
