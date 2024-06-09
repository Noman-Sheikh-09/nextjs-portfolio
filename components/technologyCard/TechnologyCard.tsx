import React from "react";

// Step 1: Define the interface for the item prop
interface Item {
  title: string;
  percentage: string;
  logo: any;
}

// Step 2: Update the component to use the defined interface
interface TechCardProps {
  item: Item;
}

const TechnologyCard: React.FC<TechCardProps> = ({ item }) => {
  return (
    <div className="w-[100%] h-[200px] flex flex-col items-center justify-center rounded-[10px]  border-[0.5px] cursor-pointer shadow-md bg-white px-[5%]">
      <div>{item?.logo}</div>
      <p className="font-bold text-[1.2rem] text-black">{item.title}</p>
      {/* <p>{item.percentage}</p> */}
    </div>
  );
};

export default TechnologyCard;
