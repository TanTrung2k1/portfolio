import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import "react-toastify/dist/ReactToastify.css";
import {
  showErrorAlert,
  showSuccessAlert,
  showWarningAlert,
} from "../constants/ChooseToastify";
import { MdMarkEmailRead } from "react-icons/md";
import { MdOutlineContactPhone } from "react-icons/md";
import { TbLocation } from "react-icons/tb";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");

  const handleSendMail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !sender.trim() || !message.trim()) {
      showErrorAlert("Please fill in all fields!");
      return;
    }
    if (!emailRegex.test(email)) {
      showWarningAlert("Please enter a valid email address!");
      return;
    }
    console.log("email", email);
    console.log("sender", sender);
    console.log("message", message);
    showSuccessAlert("Send success <3");
  };

  return (
    <div id="contact" className="container m-auto mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Contact
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* card */}
      <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center md:flex-col">
        <div className="left flex-1 items-center sm:w-full">
          <div className="w-[85%] md:w-[100%] sm:w-[95%] gap-3 flex items-center justify-center flex-col p-5 sm:mb-3 border-2 rounded-lg border-green-400 shadow-[0_0_10px_1px_rgba(255,227,72,0.693)]">
            <div data-aos="zoom-in">
              <h1 className="text-2xl font-bold sm:text-lg">
                Contact me for works
              </h1>
              <div className="text-base font-semibold sm:text-xs mt-10 sm:mt-5 flex flex-col gap-2">
                <div className="flex items-center justify-start">
                  <MdMarkEmailRead className="mr-5 hover:scale-125 text-2xl text-orange-500" />
                  <p className="text-gray-600">nguyentantrung1801@gmail.com</p>
                </div>
                <div className="flex items-center justify-start">
                  <MdOutlineContactPhone className="mr-5 hover:scale-125 text-2xl " />
                  <p className="text-gray-600">0969 920 894</p>
                </div>
                <div className="flex items-center justify-start">
                  <TbLocation className="mr-5 hover:scale-125 text-2xl text-blue-400" />
                  <p className="text-gray-600">Thủ Dầu Một - Bình Dương</p>
                </div>
              </div>
              {/* <h1 className="text-5xl font-bold sm:text-3xl">About Me</h1>
              <p className="text-sm font-semibold sm:text-xs">
                Email: nguyentantrung1801@gmail.com
              </p>
              <h3 className="text-xl sm:text-lg">
                Beautiful design for your website leave a request
              </h3> */}
            </div>
            {/* icons */}
            <div
              data-aos="zoom-out"
              className="icons flex justify-center items-center gap-4"
            >
              <a
                href="https://github.com/TanTrungg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub className="h-8 w-8 hover:scale-125" />
              </a>

              <FaFacebook className="h-8 w-8 hover:scale-125 text-blue-800" />
              <AiFillInstagram className="h-8 w-8 hover:scale-125 text-pink-400" />
            </div>
          </div>
        </div>
        <div className="p-5 items-center justify-center ">
          <button
            data-aos="zoom-in"
            className=" text-yellow-500 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] "
          >
            <BsArrowRight className=" md:rotate-90 " />
          </button>
        </div>
        <div className="right flex-1">
          <form
            data-aos="zoom-in"
            className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
            // action="mailto:nguyentantrung1801@gmail.com?subject=Subject%20Here&body=Hello%20from%20the%20website%21"
          >
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="email"
              placeholder="e.g. example@email.com"
              value={email}
              onChange={(event) => setEmail(event?.target.value)}
            />
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="text"
              placeholder="e.g. Tấn Trung"
              value={sender}
              onChange={(event) => setSender(event?.target.value)}
            />
            <textarea
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              rows={4}
              cols={50}
              placeholder="Write your message..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <button
              className="bg-yellow-500 w-full text-white font-semibold p-2 rounded-lg flex items-center justify-center space-x-4"
              type="button"
              onClick={handleSendMail}
            >
              <span>Send</span>
              <RiSendPlaneFill className="text-xl text-green-600" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
