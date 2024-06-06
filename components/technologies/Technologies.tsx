import React from "react";
import ServiceCard from "../serviceCard/ServiceCard";
import { services } from "@/constant/services";
import { technologies } from "@/constant/technologies";
import TechnologyCard from "../technologyCard/TechnologyCard";

function Technologies() {
  return (
    <div className="w-[100%] min-h-[100vh] mt-[5%]">
      <div className="flex flex-col items-center">
        <span className="font-bold text-center text-[4rem] text-primary hover:border-b border-10 border-primary">
          Technologies
        </span>
        <span className="font-normal text-[16px] text-secondary">
          Explore the diverse Technologies I offer, tailored to bring your
          projects to life with expertise and precision.
        </span>
      </div>
      <div className="w-[100%] grid grid-cols-3 px-[5%] mt-[4%] gap-6">
        {technologies?.map((item) => {
          return <TechnologyCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default Technologies;