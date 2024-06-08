import Link from "next/link";
import React from "react";
function Header() {
  return (
    <div className="w-[100%] flex  items-center justify-between px-[5%] shadow-md">
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="w-[100px] " />

        <p className="font-semibold text-primary  text-[2rem]">Noman</p>
      </div>
      <div className="flex gap-x-5">
        <Link href="mailto:ahsanbutt515@icloud.com" target={"_blank"}>
          <button className="bg-primary text-white px-[20px] py-[10px] rounded-[5px] ">
            Hire me
          </button>
        </Link>
        <Link href="/Noman.pdf" download={true} target="blank">

        <button className="bg-primary text-white px-[20px] py-[10px] rounded-[5px] ">
          Downlaod CV
        </button>
        </Link>

      </div>
    </div>
  );
}

export default Header;
