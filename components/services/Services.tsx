import React from "react";
import ServiceCard from "../serviceCard/ServiceCard";
import { services } from "@/constant/services";

function Services() {
  return (
    <div className="w-[100%] h-[100vh] mt-[5%]">
        <div className="flex flex-col items-center">

      <span className="font-bold text-center text-[4rem] text-primary hover:border-b border-10 border-primary">
        Services
      </span>
      <span className="font-normal text-[16px] text-secondary">
      Explore the diverse services I offer, tailored to bring your projects to life with expertise and precision.
      </span>
      </div>
<div className="w-[100%] grid grid-cols-3 px-[10%]">
    {services?.map((item)=>{
        return (
            <ServiceCard />

        )
    })}
</div>
    </div>
  );
}

export default Services;
