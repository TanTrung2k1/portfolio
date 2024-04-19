import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import SkillBox from "../../chip/SkillBox";
import { SiReact } from "react-icons/si";
import { SiSwagger } from "react-icons/si";
import { FaServer } from "react-icons/fa";
import { SiMicrosoftaccess } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const Skills = () => {
  return (
    <div id="skills">
      <div className="container m-auto mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>

        {/* content */}
        <div className="text-gray-700 font-medium w-[100%]">
          <p data-aos="fade-down">Here are my skills</p>
        </div>
        <div className="flex lg:flex-col">
          <div className="left flex-1 w-full">
            <p
              data-aos="zoom-in"
              className="text-gray-700 font-medium w-[100%] text-center mb-10 lg:mt-10"
            >
              Back-End
            </p>

            <div className="flex flex-wrap gap-10 justify-center">
              <SkillBox
                logo={<FaServer />}
                black={"white"}
                white={"black"}
                skill={"ASP.NET"}
              />
              <SkillBox
                logo={<SiSwagger color="green" />}
                black={"white"}
                white={"black"}
                skill={"Restful API"}
              />
              <SkillBox
                logo={<SiMicrosoftaccess />}
                black={"white"}
                white={"black"}
                skill={"Entity Framework"}
              />

              <SkillBox
                logo={<SiMicrosoftsqlserver color="red" />}
                black={"black"}
                white={"white"}
                skill={"SQL Server"}
              />
              <SkillBox
                logo={<VscAzure color="blue" />}
                black={"black"}
                white={"white"}
                skill={"Azure"}
              />
            </div>
          </div>

          <div className="right flex-1 w-full lg:mt-10 lg:relative">
            <div className="hidden lg:block absolute top-0 left-[5%] right-[5%] h-[1.1px] bg-gray-400"></div>
            <p
              data-aos="zoom-in"
              className="text-gray-700 font-medium w-[100%] text-center mb-10 lg:mt-10"
            >
              Front-End
            </p>
            <div className="flex flex-wrap gap-10 justify-center">
              <SkillBox
                logo={<IoLogoHtml5 color="red" />}
                black={"white"}
                white={"black"}
                skill={"HTML"}
              />
              <SkillBox
                logo={<IoLogoCss3 color="blue" />}
                black={"white"}
                white={"black"}
                skill={"CSS"}
              />
              <SkillBox
                logo={<SiJavascript color="yellow" />}
                black={"white"}
                white={"black"}
                skill={"Javascript"}
              />
              <SkillBox
                logo={<SiTailwindcss color="blue" />}
                black={"black"}
                white={"white"}
                skill={"Tailwind CSS"}
              />
              <SkillBox
                logo={<SiReact color="#7ED5E8" />}
                black={"black"}
                white={"white"}
                skill={"React"}
              />
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className=" container m-auto flex flex-wrap items-center justify-center mt-8 gap-8 md:gap-5 cursor-pointer"
        >
          <img
            title="Next JS"
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px] transition-transform hover:scale-150 cursor-pointer"
            src="https://img.icons8.com/nolan/64/nextjs.png"
            alt="nextjs"
          />

          <img
            title="Spring Boot"
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px] transition-transform hover:scale-150 cursor-pointer"
            src="https://img.icons8.com/color/48/spring-logo.png"
            alt="spring-logo"
          />
          <img
            title="Typescript"
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px] transition-transform hover:scale-150 cursor-pointer"
            src="https://img.icons8.com/color/48/typescript.png"
            alt="typescript"
          />
          <img
            title="Sass"
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px] transition-transform hover:scale-150 cursor-pointer"
            src="https://img.icons8.com/color/48/null/sass.png"
          />

          <img
            title="Git"
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px] transition-transform hover:scale-150 cursor-pointer"
            src="https://img.icons8.com/color/48/git.png"
          />

          <img
            title="Vite"
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px] transition-transform hover:scale-150 cursor-pointer"
            src="https://img.icons8.com/fluency/48/vite.png"
            alt="vite"
          />
          <img
            title="Bootstrap"
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px] transition-transform hover:scale-150 cursor-pointer"
            src="https://img.icons8.com/color-glass/48/bootstrap.png"
            alt="bootstrap"
          />
          <img
            title="Tailwind css"
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px] transition-transform hover:scale-150 cursor-pointer"
            src="https://img.icons8.com/fluency/48/tailwind_css.png"
            alt="tailwind_css"
          />

          {/* <img
            title="Node JS"
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/nodejs.png"
          /> */}
          <img
            title="SQL Server"
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px] transition-transform hover:scale-150 cursor-pointer"
            src="https://img.icons8.com/color/48/microsoft-sql-server.png"
            alt="microsoft-sql-server"
          />
          <img
            title="Redis"
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px] transition-transform hover:scale-150 cursor-pointer"
            src="https://img.icons8.com/fluency/48/redis.png"
            alt="redis"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
