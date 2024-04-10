import React from "react";
import img1 from "../../assets/IMG1.jpg";
const NavContent = () => {
  return (
    <>
      <div className="flex flex-col justify-start items-center text-[12px] text-wrap tracking-tight w-full h-auto mb-6 ">
        <span className="xs:text-[15px] xs:p-[10px] p-[1px] font-[400] leading-[17px]">
          <p>
            The parameter is incorrect.Image size is not supported. Each image
            dimension must be between 40 and 2600 pixels.
          </p>
        </span>
        <div className="flex justify-center items-center w-full">
          <img src={img1} alt="Nav Content Image" className="w-[90%]" />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default NavContent;
