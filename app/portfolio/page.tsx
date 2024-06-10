"use client"
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Projects from "@/components/projects/Projects";
import Services from "@/components/services/Services";
import Technologies from "@/components/technologies/Technologies";
import Link from "next/link";
import React, { useEffect } from "react";
import {
  FaFacebook,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
export default function Portfolio() {

  useEffect(() => {
    const container = document.getElementById('ball-container');
    const numberOfBalls = 10;

    if (container) { // Add null check here
      for (let i = 0; i < numberOfBalls; i++) {
        const ball = document.createElement('div');
        ball.className = 'ball';
        ball.style.top = `${Math.random() * 100}vh`;
        ball.style.left = `${Math.random() * 100}%`;
        container.appendChild(ball);
      }
    }
}, []);
  return (
    <div className="w-[100%] min-h-[100vh] pt-[1%]" >
      <Header />
      {/* hero section  */}
      {/* <BackgroundAnimation /> */}
      <div className="w-[100%] flex xs:flex-col lg:flex-row full-screen-bg justify-between px-[3%] py-[5%]" id="ball-container">
        <div className="xs:w-[100%] lg:w-[50%] z-50">
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
          <div className="flex items-center justify-start gap-3 mt-[3%]">
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
        <div className="xs:w-[100%] lg:w-[50%] flex justify-center items-center ">
          <img src="image.jpg" className="w-[60%]  border-[5px] border-primary dance-animation hover:rotate-[15deg] hover:transition-all hover:ease-in-out hover:duration-500" />
          
        </div>
      </div>
      

      <Services />
      <Projects />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
}
