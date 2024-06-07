import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Projects from "@/components/projects/Projects";
import Services from "@/components/services/Services";
import Technologies from "@/components/technologies/Technologies";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
export default function Portfolio() {
  return (
    <div className="w-[100%] min-h-[100vh] pt-[1%]">
      <Header />
      {/* hero section  */}
      <div className="w-[100%] flex flex-row bg-gray-100 justify-between px-[3%] py-[5%]">
        <div className="w-[50%]">
          <p className="font-bold text-[2rem] text-black">I'm Noman Farooq</p>
          <p className="font-medium text-[4rem] text-black leading-[80px]">
            Software
            <br />{" "}
            <span className="ml-[5%] text-primary text-[5rem] font-bold">
              Developer
            </span>
          </p>
          <p className="text-[14px] text-secondary font-inter font-medium mt-[10px]">
            I am a Full Stack MERN Developer with proficiency and expertise in
            all aspects of Front-End and Back-End development. I have been
            working full-time for the past two years, and during development, I
            try my best to follow best practices ( DRY and SOLID ) and Software
            Development specifications.
          </p>
          <div className="flex items-center justify-start gap-2 mt-[3%]">
            <a href="https://www.facebook.com/itx.xheixh/" target="blank">
              <FaFacebook
                size={35}
                className="border border-1 border-secondary p-[5px] rounded-[10px] transition-transform transform hover:border-none hover:scale-110 hover:bg-primary cursor-pointer hover:text-white"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/noman-sheikh-8b8092232/"
              target="blank"
            >
              <FaLinkedinIn
                size={35}
                className="border border-1 border-secondary p-[5px] rounded-[10px] transition-transform transform hover:border-none hover:scale-110 hover:bg-primary cursor-pointer hover:text-white"
              />
            </a>
            <a href="https://github.com/Noman-Sheikh-09" target="blank">
              <FaGithub
                size={35}
                className="border border-1 border-secondary p-[5px] rounded-[10px] transition-transform transform hover:scale-110 hover:bg-primary cursor-pointer hover:border-none hover:text-white"
              />
            </a>
            <a
              href="https://www.instagram.com/__n_o_m_a_n___09/"
              target="blank"
            >
              <FaInstagram
                size={35}
                className="border border-1 border-secondary p-[5px] rounded-[10px] transition-transform transform hover:border-none hover:scale-110 hover:bg-primary cursor-pointer hover:text-white"
              />
            </a>
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <img src="image.jpg" className="w-[60%]" />
        </div>
      </div>

      <Services />
      <Projects />
      <Technologies />
      <Footer />
    </div>
  );
}
