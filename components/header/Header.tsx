import React from "react";
function Header() {
  return (
    <div className="w-[100%] flex  items-center justify-between px-[5%] shadow-md">
      <img src="logo.png" alt="Logo" className="w-[100px] " />
      <button className="bg-primary text-white px-[20px] py-[10px] rounded-[5px] ">
        Downlaod CV
      </button>
    </div>
  );
}

export default Header;
