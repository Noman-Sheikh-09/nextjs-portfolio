import { CgWebsite } from "react-icons/cg";
import { FaMobileAlt,FaWordpressSimple  } from "react-icons/fa";
import { AiOutlineAntDesign } from "react-icons/ai";

export const services = [
  {
    title: "Web Development",
    description: "We will build your website in a professional way",
    icon: <CgWebsite size={50} className="text-white" />,
    bgColor:"#FD6F00"
  },
  {
    title: "Mobile App Development",
    description: "We will build your Mobile Application in React Native",
    icon: <FaMobileAlt size={40} className="text-white" />,
    bgColor:"Violet"

  },
  {
    title: "UX/UI Designing",
    description:
      "We can give life to product ideas and give improved user experience",
    icon: <AiOutlineAntDesign size={40} className="text-white" />,
    bgColor:"green"

  },
  {
    title: "WordPress Development",
    description: "Develop your website in low-code technology",
    icon: <FaWordpressSimple  size={40} className="text-white" />,
    bgColor:"DodgerBlue"

  },
];
