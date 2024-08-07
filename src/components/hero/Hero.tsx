import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import resumeENPDF from "../../assets/NguyenTanTrung_CV_EN.pdf";
import resumeVNPDF from "../../assets/NguyenTanTrung_CV_VN.pdf";
import CvModal from "../cvmodel/CvModal";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn, FaPlay } from "react-icons/fa";
import avatar from "../../assets/avatar.png";
import circle from "../../assets/circle.png";
import { useEffect, useState } from "react";

const Hero = () => {
  const [pdfEnUrl, setPdfEnUrl] = useState<string | null>(null);
  const [pdfVnUrl, setPdfVnUrl] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchEnPdf = async () => {
    try {
      const response = await fetch(resumeENPDF);
      const arrayBuffer = await response.arrayBuffer();
      const blob = new Blob([arrayBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setPdfEnUrl(url);
    } catch (error) {
      console.error("Error fetching PDF:", error);
    }
  };

  const fetchVnPdf = async () => {
    try {
      const response = await fetch(resumeVNPDF);
      const arrayBuffer = await response.arrayBuffer();
      const blob = new Blob([arrayBuffer], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setPdfVnUrl(url);
    } catch (error) {
      console.error("Error fetching PDF:", error);
    }
  };

  useEffect(() => {
    fetchEnPdf();
    fetchVnPdf();
  }, []);
  return (
    <div id="home" className={`bg-gradient-to-r from-teal-400 to-yellow-200`}>
      <div className="container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px] flex sm:flex-col-reverse sm:pt-0">
        <div className="left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className="text-5xl font-bold sm:text-[2rem]"
            >
              Hello, I'm Tấn Trung.
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
              className="text-[1.1rem] font-medium w-3/4 md:w-full text-gray-700 sm:text-[.95rem]"
            >
              Graduated from <strong>FPT University HCM</strong> with a Bachelor
              of <strong>Software Engineering</strong>, I have a strong
              foundation in software development, web design, and project
              management.
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href="mailto:nguyentantrung1801@gmail.com"
              className="bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold hover:text-yellow-500"
            >
              Work with Me.
            </a>
            {/* <a
              href={pdfEnUrl || "#"}
              className="flex items-center text-[1rem] bg-white px-4 py-2 sm:px-1 text-center rounded-lg font-bold hover:text-yellow-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-2">
                Resume-EN <FiDownload />
              </div>
            </a>
            <a
              href={pdfVnUrl || "#"}
              className="flex items-center text-[1rem] bg-white px-4 py-2 sm:px-1 text-center rounded-lg font-bold hover:text-yellow-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-2">
                Resume-VN <FiDownload />
              </div>
            </a> */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center text-[1rem] bg-white px-4 py-2 sm:px-1 text-center rounded-lg font-bold hover:text-yellow-500"
            >
              <div className="flex items-center gap-2">
                CV <FiDownload />
              </div>
            </button>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className="flex gap-5"
            >
              <li>
                <a
                  href="https://github.com/TanTrungg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub className="h-[2rem] w-[2rem] text-xl hover:scale-125" />
                </a>
              </li>
              <li>
                <a href="">
                  <FaFacebook className="h-[2rem] w-[2rem] text-xl hover:scale-125" />
                </a>
              </li>
              <li>
                <a href="">
                  <AiFillInstagram className="h-[2rem] w-[2rem] text-xl hover:scale-125" />
                </a>
              </li>
              <li>
                <a href="">
                  <FaLinkedinIn className="h-[2rem] w-[2rem] text-xl hover:scale-125" />
                </a>
              </li>
              <li>
                <a href="">
                  <AiFillTwitterCircle className="h-[2rem] w-[2rem] text-xl hover:scale-125" />
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
              className="bg-gradient-to-tr from-pink-300 to-teal-300 rounded-full overflow-hidden md:h-[95%] z-10 shadow-yellow bouncing-circle"
            >
              <img
                loading="lazy"
                className="h-[90%] w-full object-cover md:h-[100%] md:m-auto sm:m-0 rounded-full shadow-md hover:scale-105"
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
      <CvModal
        pdfEnUrl={pdfEnUrl}
        pdfVnUrl={pdfVnUrl}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Hero;
