import React from "react";

// Step 1: Define the interface for the item prop
interface Item {
  title: string;
  description: string;
  bgColor: string;
}

// Step 2: Update the component to use the defined interface
interface ServiceCardProps {
  item: Item;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
  return (
    <div className="w-[100%] h-[220px] flex flex-col  rounded-[10px]  border-[0.5px] cursor-pointer shadow-md bg-white px-[5%]">
     <div className={`flex justify-center items-center w-[70px] h-[70px] mt-[5%] rounded-full`} style={{backgroundColor:item.bgColor?item?.bgColor:""}}>
      {item?.icon}
     </div>
     <div className="flex flex-col items-center justify-center mt-[5%]">

      <p className="font-bold text-[1.2rem] text-black">{item.title}</p>
      <p>{item.description}</p>
     </div>

    </div>
  );
};

export default ServiceCard;
