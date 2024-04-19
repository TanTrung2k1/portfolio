import styled from "styled-components";
import { SiSwagger } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import worksData, { Work } from "../data/worksData";

const WorkCard = () => {
  const reversedData: Work[] = [...worksData];

  return (
    <>
      {reversedData.map((data, index) => {
        return (
          <div
            data-aos="zoom-in"
            key={data.id}
            className={`${
              index === 0 ? "mt-5 ml-5" : ""
            } flex flex-col justify-center items-center gap-4`}
          >
            <POPUP className="img-content relative">
              <div className="h-[280px] w-[380px] hover:scale-125 transition duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] sm:bg-cover mx-auto ">
                <img
                  src={data.img}
                  alt={data.title}
                  className="object-fit w-full h-full hover:scale-125 transition duration-500 cursor-pointer"
                />
              </div>

              <div
                className={`popup w-full h-[280px] shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] p-4`}
              >
                <p className=" text-gray-950 text-base font-bold text-center mb-2 sm:mb-0">
                  {data.role}
                </p>
                <p className=" text-gray-950 text-base sm:text-sm leading-[1.4] text-left w-[90%]">
                  {data.desc}
                </p>
                <div className=" flex items-center justify-center gap-4">
                  {data.link && (
                    <Link
                      to={data.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium hover:bg-green-200"
                    >
                      <SiSwagger className=" text-black bg-green-600 rounded-full border  w-[35px] h-[35px] p-2 sm:w-[25px] sm:h-[25px]" />
                      <p className="sm:text-sm text-black">Swagger</p>
                    </Link>
                  )}
                  <br className="w-[2px] bg-white" />
                  {data.github && (
                    <Link
                      to={data.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="  mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium hover:bg-slate-200"
                    >
                      <AiOutlineGithub className="  text-black bg-white rounded-full border  w-[35px] h-[35px] p-2 sm:w-[25px] sm:h-[25px]" />
                      <p className=" sm:text-sm text-black">Code</p>
                    </Link>
                  )}
                </div>
              </div>
            </POPUP>
            <p className="text-gray-800 text-xl font-medium sm:text-lg">
              {data.title}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default WorkCard;

const POPUP = styled.div`
  position: relative;
  img {
    &:hover {
      transform: scaleX(2);
    }
  }
  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon {
    color: #fff !important;
  }
  &:hover .popup {
    opacity: 1;
    color: #fff;
  }
`;
