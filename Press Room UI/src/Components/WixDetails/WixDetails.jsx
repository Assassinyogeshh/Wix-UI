import React from "react";
import img2 from "../../assets/IMG2.jpg";
import img3 from "../../assets/IMG3.jpg";
import img4 from "../../assets/IMG4.jpg";
import img5 from "../../assets/IMG5.jpg";
const WixDetails = () => {
  return (
    <>
      <div
        className=" flex flex-col justify-center items-center
   w-full mb-2"
      >
        <div className="flex  justify-center items-center w-full">
          <div className="md:flex-row xs:gap-0  flex flex-col pl-0 items-center w-full md:p-7 md:pl-0">
            <div className="flex flex-col justify-center items-center w-full">
              <span className="md:w-[100%] md:p-2 xs:w-[90%] w-[90%] h-[40%] ">
                <img src={img2} className="w-full h-full" alt="image" />
              </span>
              <span className=" w-full flex flex-col gap-y-2 justify-center items-center md:justify-start md:items-start">
                <h4 className=" lg:text-[19px] text-[15px] font-[700]">
                  Brand Assets
                </h4>
                <p className=" lg:text-[15px] w-[100%] p-2 xs:text-[15px] text-[11px] font-[400]">
                  All of the official design assets and guidelines used by Wix
                  can be found here, along with all the information you need
                  about our graphic elements and the philosophy behind them.
                </p>
              </span>
            </div>
            <div className="flex flex-col justify-center items-center w-full">
              <span className="md:w-[100%] md:p-2 w-[90%] h-[40%] ">
                <img
                  src={img3}
                  className="w-full h-full md:pb-[0.1rem] md:mt-[-0.5rem] lg:m-0 lg:p-0"
                  alt="image"
                />
              </span>
              <span className=" w-full flex flex-col gap-y-2 justify-center items-center md:justify-start md:items-start">
                <h4 className=" lg:text-[19px] text-[15px] font-[700]">
                  About Us
                </h4>
                <p className=" lg:text-[15px] w-[100%] p-2 xs:text-[15px] text-[11px] font-[400]">
                  Wix makes it easy for everyone to get online with a stunning,
                  professional and powerful web presence.Learn more about our
                  company, customers, products and people.
                </p>
              </span>
            </div>
            <div className="flex flex-col justify-center items-center w-full">
              <span className="md:w-[95%]  w-[90%] h-[40%] ">
                <img
                  src={img4}
                  className="w-full h-full md:pb-[2rem] md:mt-[-0.5rem] lg:m-0 lg:p-0"
                  alt="image"
                />
              </span>
              <span className=" w-full flex flex-col gap-y-2 justify-center items-center md:justify-start md:items-start">
                <h4 className=" lg:text-[19px] text-[15px] font-[700]">
                  Investor Relations
                </h4>
                <p className=" lg:text-[15px] w-[100%] p-2 xs:text-[15px] text-[11px] font-[400]">
                  Information about Wix for investors and financial analysts.You
                  can also find a company-glossary,stats,and a list of IR events
                  and presentations.
                </p>
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start w-full">
          <h1 className="text-[12px] xs:text-[15px] md:text-[25px] font-[700]">
            Social
          </h1>
          <div className="flex justify-center items-center w-full">
            <img src={img5} className="w-[80%] h-[80%] cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WixDetails;
