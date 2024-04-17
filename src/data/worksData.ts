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
  desc?: string;
  link?: string;
  github?: string;
}

const worksData: Work[] = [
  {
    id: 1,
    img: thanhHuy,
    title: "Thanh Huy Motobike",
    desc: "Thanh Huy",
    link: "http://thanh-huy.azurewebsites.net/swagger/index.html",
    github: "https://github.com/ARTHS-Service-v2/ARTHS-Service-v2",
  },
  {
    id: 2,
    img: gift,
    title: "E-Gift",
    desc: "Participated as a Backend Developer in constructing the API infrastructure for the Ecommerce platform GIFT, employing ASP.NET, Entity Framework, VNPAY, MAILKIT, AZURE and Redis technologies.",
    link: "",
    github: "https://github.com/TanTrungg/EGift-Service-Api",
  },

  {
    id: 3,
    img: smartHome,
    title: "Phat Dat Store",
    desc: "Phat Dat",
    link: "",
    github: "",
  },
  {
    id: 4,
    img: travel,
    title: "Travel",
    desc: "Travel",
    link: "",
    github: "https://github.com/TanTrungg/travel-react-js",
  },
  {
    id: 5,
    img: carRental,
    title: "Car Rental",
    desc: "Car Rental",
    link: "",
    github: "https://github.com/TanTrungg/Car-Rental-RazorPages",
  },
  {
    id: 6,
    img: onlineJob,
    title: "Online Jobs",
    desc: "Car Rental",
    link: "",
    github: "https://github.com/TanTrungg/OnlineJobsApp",
  },
  {
    id: 7,
    img: "https://i.postimg.cc/wBjcJcW7/5890625.jpg",
    title: "Portfolio",
    desc: "Portfolio",
    link: "",
    github: "https://github.com/TanTrungg/portfolio",
  },
  {
    id: 8,
    img: todo,
    title: "React todo app",
    desc: "Todo app",
    link: "",
    github: "https://github.com/TanTrungg/react-todo-app",
  },
  {
    id: 9,
    img: farmerConnect,
    title: "Farmer connected",
    desc: "Farmer connected",
    link: "",
    github: "https://github.com/TanTrungg/FarmerConnected",
  },
];

export default worksData;
