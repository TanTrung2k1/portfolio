import travel from "../assets/travel.jpg";
import carRental from "../assets/carRental.jpg";
import thanhHuy from "../assets/thanh-huy.png";
import gift from "../assets/e-gift.jpg";
import smartHome from "../assets/smart-home.png";
import onlineJob from "../assets/online-jobs.jpg";
import todo from "../assets/to-do.jpg";
import farmerConnect from "../assets/farmer-connected.png";

export interface Work {
  id: number;
  img: string;
  title: string;
  role: string;
  desc?: string;
  link?: string;
  github?: string;
}

const worksData: Work[] = [
  {
    id: 1,
    img: thanhHuy,
    title: "Thanh Huy Motobike",
    role: "Back-end Developer",
    desc: "Thanh Huy Motobike is a website providing products and services of spare parts and decorations for motorbikes. Besides, it also supports online repair scheduling, making it easy and convenient for users to maintain or repair their vehicle.",
    link: "http://thanh-huy.azurewebsites.net/swagger/index.html",
    github: "https://github.com/ARTHS-Service-v2/ARTHS-Service-v2",
  },
  {
    id: 2,
    img: gift,
    title: "E-Gift",
    role: "Back-end Developer",
    desc: "Participated as a Backend Developer in constructing the API infrastructure for the Ecommerce platform GIFT, employing ASP.NET, Entity Framework, VNPAY, MAILKIT, AZURE and Redis technologies.",
    link: "",
    github: "https://github.com/TanTrungg/EGift-Service-Api",
  },

  {
    id: 3,
    img: smartHome,
    title: "Smart Home",
    role: "Back-end Developer",
    desc: "As the main Back-end developer, I contributed to building a system for receiving requests, monitoring the progress of employees, and managing customer contracts for smart home installations and constructions.",
    link: "https://phat-dat-store.azurewebsites.net/swagger/index.html",
    github: "",
  },
  {
    id: 4,
    img: travel,
    title: "Travel",
    role: "Front-end Developer",
    desc: "I worked in front-end development with a focus on creating a dynamic website to enhance user experience. In this project, I using React, HTML, SCSS",
    link: "",
    github: "https://github.com/TanTrungg/travel-react-js",
  },
  {
    id: 5,
    img: carRental,
    title: "Car Rental",
    role: "Full-stack Developer",
    desc: "A car rental website is an online platform that helps users search and book rental cars conveniently. In addition to providing car rental services, the website also allows users to post information about their cars for rent.",
    link: "",
    github: "https://github.com/TanTrungg/Car-Rental-RazorPages",
  },
  {
    id: 6,
    img: onlineJob,
    title: "Online Jobs",
    role: "Full-stack Developer",
    desc: "Using Razor Pages, I designed a web application that brings job seekers and employers together. This platform allows employers to post job listings on the website, from which candidates can read and send their CVs to employers through that post.",
    link: "",
    github: "https://github.com/TanTrungg/OnlineJobsApp",
  },
  // {
  //   id: 7,
  //   img: "https://i.postimg.cc/wBjcJcW7/5890625.jpg",
  //   title: "Portfolio",
  //   desc: "Portfolio",
  //   link: "",
  //   github: "https://github.com/TanTrungg/portfolio",
  // },
  {
    id: 8,
    img: todo,
    title: "React to-do app",
    role: "Front-end Developer",
    desc: "A simple to-do application built using React, Redux, allowing users to manage their tasks efficiently",
    link: "",
    github: "https://github.com/TanTrungg/react-todo-app",
  },
  {
    id: 9,
    img: farmerConnect,
    title: "Farmer connected",
    role: "Back-end Developer",
    desc: "The project creates a website to connect farmers with traders more effectively, facilitate trade between the two sides and share resources and experiences in the agricultural community.",
    link: "",
    github: "https://github.com/TanTrungg/FarmerConnected",
  },
];

export default worksData;
