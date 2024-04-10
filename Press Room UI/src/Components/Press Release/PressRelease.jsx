import React, { useState } from "react";

const PressRelease = () => {
  const [eachDetails, setEachDetails] = useState(Array(4).fill(false));

  const handleEachDetails = (index) => {
    setEachDetails((prevState) => {
      const getAllState = Array.isArray(prevState) ? [...prevState] : [];
      getAllState[index] = getAllState[index] ? false : true;

      return getAllState;
    });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full gap-y-[1rem]">
        <span className="flex w-full justify-start items-baseline gap-1">
          <h1 className=" xs:text-[25px] text-[22px] font-[600]">
            In Press Releases
          </h1>
          <button
            className="md:text-[10px] border-slate-950 xs:text-[8px] border-b-[1.5px] text-[7px] font-[500] p-[2px] cursor-pointer"
            onClick={() => setEachDetails(Array(eachDetails.length).fill(true))}
          >
            View All
          </button>
        </span>

        <div className="flex flex-col justify-center items-center w-full h-auto border-b-[1px] border-slate-400">
          <div className="flex flex-col justify-start items-center h-auto w-full">
            <span className="flex flex-col justify-start items-start w-full">
              <h3 className="md:text-[19px] xs:text-[14px] text-[10px] font-[500]">
                June 14, 2022
              </h3>
              <span className="flex justify-between w-full p-[0.2rem] items-center">
                <p className="md:text-[16px] xs:text-[11.5px] text-[7.5px] w-[60%]">
                  Wix Win Google Cloud Expansion Partner Of the Year Award
                </p>
                <p
                  className="md:text-[13px] xs:text-[9px] xs:border-b-4 border-b-2 cursor-pointer text-[5px] w-fit"
                  onClick={() => handleEachDetails(0)}
                >
                  READ MORE
                </p>
              </span>
            </span>
            <span
              className={
                eachDetails[0]
                  ? `md:text-[17px] md:font-[600] xs:text-[13px] p-[0.8rem] text-[11px] font-[500] mt-1 text-pretty tracking-tight leading-[18px]`
                  : `hidden`
              }
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt expedita ducimus reprehenderit non soluta temporibus.
              </p>
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full h-auto border-b-[1px] border-slate-400">
          <div className="flex flex-col justify-start items-center h-auto w-full">
            <span className="flex flex-col justify-start items-start w-full">
              <h3 className="md:text-[19px] xs:text-[14px] text-[10px] font-[500]">
                June 7, 2022
              </h3>
              <span className="flex justify-between w-full p-[0.2rem] items-center">
                <p className="md:text-[16px] xs:text-[11.5px] text-[7.5px] w-[60%]">
                  Wix Relaunches its Solutuions For Hotels- Now Powered by
                  HotelRunner, Providing a Comp...
                </p>
                <p
                  className="md:text-[13px] xs:text-[9px] xs:border-b-4 border-b-2 cursor-pointer text-[5px] w-fit"
                  onClick={() => handleEachDetails(1)}
                >
                  READ MORE
                </p>
              </span>
            </span>
            <span
              className={
                eachDetails[1]
                  ? `md:text-[17px] md:font-[600] xs:text-[13px] p-[0.8rem] text-[11px] font-[500] mt-1 text-pretty tracking-tight leading-[18px]`
                  : `hidden`
              }
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt expedita ducimus reprehenderit non soluta temporibus.
              </p>
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full h-auto border-b-[1px] border-slate-400">
          <div className="flex flex-col justify-start items-center h-auto w-full">
            <span className="flex flex-col justify-start items-start w-full">
              <h3 className="md:text-[19px] xs:text-[14px] text-[10px] font-[500]">
                April 27, 2022
              </h3>
              <span className="flex justify-between w-full p-[0.2rem] items-center">
                <p className="md:text-[16px] xs:text-[11.5px] text-[7.5px] w-[60%]">
                  Wix and LegalZoom Join Forces to Offer Personalized Solutions
                  for Small Businesses to...
                </p>
                <p
                  className="md:text-[13px] xs:text-[9px] xs:border-b-4 border-b-2 cursor-pointer text-[5px] w-fit"
                  onClick={() => handleEachDetails(2)}
                >
                  READ MORE
                </p>
              </span>
            </span>
            <span
              className={
                eachDetails[2]
                  ? `md:text-[17px] md:font-[600] xs:text-[13px] p-[0.8rem] text-[11px] font-[500] mt-1 text-pretty tracking-tight leading-[18px]`
                  : `hidden`
              }
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt expedita ducimus reprehenderit non soluta temporibus.
              </p>
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full h-auto border-b-[1px] border-slate-400">
          <div className="flex flex-col justify-start items-center h-auto w-full">
            <span className="flex flex-col justify-start items-start w-full">
              <h3 className="md:text-[19px] xs:text-[14px] text-[10px] font-[500]">
                April 18, 2022
              </h3>
              <span className="flex justify-between w-full p-[0.2rem] items-center">
                <p className="md:text-[16px] xs:text-[11.5px] text-[7.5px] w-[60%]">
                  Wix Events Launches Seating Map Builder
                </p>
                <p
                  className="md:text-[13px] xs:text-[9px] xs:border-b-4 border-b-2 cursor-pointer text-[5px] w-fit"
                  onClick={() => handleEachDetails(3)}
                >
                  READ MORE
                </p>
              </span>
            </span>
            <span
              className={
                eachDetails[3]
                  ? `md:text-[17px] md:font-[600] xs:text-[13px] p-[0.8rem] text-[11px] font-[500] mt-1 text-pretty tracking-tight leading-[18px]`
                  : `hidden`
              }
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt expedita ducimus reprehenderit non soluta temporibus.
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PressRelease;
