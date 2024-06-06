import React from "react";
import ServiceCard from "../serviceCard/ServiceCard";
import { services } from "@/constant/services";

function Projects() {
  return (
    <div className="w-[100%]  mt-[10%]">
        <div className="flex flex-col items-center">

      <span className="font-bold text-center text-[4rem] text-primary hover:border-b border-10 border-primary">
  Work Cases
      </span>
      <span className="font-normal text-[16px] text-secondary">
      Explore the diverse services I offer, tailored to bring your projects to life with expertise and precision.
      </span>
      </div>
<div className="w-[100%] h-[100vh] flex  bg-[#F3F6FF] mt-[5%]">
<div className="w-[50%] px-[2%] ">
    <p className="font-bold text-[2rem] text-black mt-[15%]">Easy Server</p>
    <p>
    Techloset Solution worked on Chizel app that allows you to create and share your own digital art. You can use various tools and brushes to draw, paint, sketch, and doodle on a blank canvas or a photo. You can also use layers, filters, stickers, and text to enhance your artwork. You can save your artwork as a PNG or JPG file and share it with your friends and family on social media platforms, such as Facebook, Instagram, Twitter, and more.
    Techloset Solution worked on Chizel app that allows you to create and share your own digital art. You can use various tools and brushes to draw, paint, sketch, and doodle on a blank canvas or a photo. You can also use layers, filters, stickers, and text to enhance your artwork. You can save your artwork as a PNG or JPG file and share it with your friends and family on social media platforms, such as Facebook, Instagram, Twitter, and more.
    Techloset Solution worked on Chizel app that allows you to create and share your own digital art. You can use various tools and brushes to draw, paint, sketch, and doodle on a blank canvas or a photo. You can also use layers, filters, stickers, and text to enhance your artwork. You can save your artwork as a PNG or JPG file and share it with your friends and family on social media platforms, such as Facebook, Instagram, Twitter, and more.
    </p>
</div>
<div className="w-[50%]">
    <img src="one.jpg" className="w-[100%] h-[100vh] object-contain " />
</div>
</div>
    </div>
  );
}

export default Projects;
