import { FaHtml5, FaCss3Alt,FaReact ,FaNodeJs, FaDharmachakra  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill,RiTailwindCssFill,RiSvelteLine  } from "react-icons/ri";
import { SiMui,SiRedux,SiMongodb, SiMysql  } from "react-icons/si";



export const technologies = [
  {
    title: "HTML",
    percentage: "90%",
    logo: <FaHtml5 size={100} className="text-primary" />,
  },
  {
    title: "CSS",
    percentage: "90%",
    logo: <FaCss3Alt size={100} color="#039BE5" />,
  },
  {
    title: "Javascript",
    percentage: "90%",
    logo: <IoLogoJavascript size={100} color="#E9C80F"  />,
  },
  {
    title: "NextJS",
    percentage: "90%",
    logo:<RiNextjsFill size={100} color=""  />
  },
  
  {
    title: "Tailwind CSS",
    percentage: "100%",
    logo:<RiTailwindCssFill size={100} color="#07B6D3"  />
    

  },
  {
    title: "Svelte",
    percentage: "90%",
    logo:<RiSvelteLine size={100} color="#F73E00" />
  },
  {
    title: "Redux",
    percentage: "90%",
    logo:<SiRedux size={100} color="#F73E00" />

  },
  {
    title: "Chakra UI",
    percentage: "90%",
    logo:<FaDharmachakra  size={100} color="#07B6D3" />

  },
  {
    title: "NodeJS",
    percentage: "90%",
    logo:<FaNodeJs  size={100} color="green" />
  },
  {
    title: "Material UI",
    percentage: "90%",
    logo:<SiMui size={100} color="#07B6D3"  />

  },
  {
    title: "MongoDB",
    percentage: "90%",
    logo:<SiMongodb size={100} color="green"  />
  },
  {
    title: "ReactJS",
    percentage: "90%",
    logo:<FaReact  size={100} color="#07B6D3" />

  },
 
  {
    title: "MySQL",
    percentage: "90%",
    logo:<SiMysql  size={100} color="#00618B" />

  },
 
];
