export interface Work{
    id: number,
    img: string,
    title: string,
    desc?: string,
    link?: string,
    github?: string,
}

const worksData: Work[] =[
    {
        id: 1,
        img: "https://i.postimg.cc/VkRWdHWx/57214s81.jpg",
        title: "Multimedia Web",
        desc: "",
        link: "s",
        github: "s",
      },
      {
        id: 2,
        img: "https://i.postimg.cc/Bv75CLyN/4167022.jpg",
        title: "Travel Agency",
        link: "",
        github: "",
      },
      {
        id: 3,
        img: "https://i.postimg.cc/wBjcJcW7/5890625.jpg",
        title: "Music Player",
        desc: "",
        link: "",
        github: "",
      },
]

export default worksData