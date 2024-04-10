import React from "react";

const Contact = () => {
  return (
    <>
      <div className=" mb-[6rem] mt-[6rem] w-full justify-center items-center flex flex-col gap-y-8 border-b-[1px] border-slate-500">
        <div className="flex justify-between items-start gap-3">
          <h1 className="md:text-[23px] xs:text-[14px] xs:w-[15rem] text-[12px] font-[700]">
            Contact Us
          </h1>
          <p className=" md:text-[15px] xs:text-[12px] text-[10px] font-[500] tracking-tight leading-[15px] text-pretty">
            If you're a member of the media and would like to get in touch,
            please send us a note.For non-press-related inquiries, please use
            our
            <mark className=" bg-inherit pl-1 text-blue-600">
              general contact page.{" "}
            </mark>
          </p>
        </div>

        <form className="xs:gap-y-[1.5rem] flex justify-center items-center flex-col gap-x-2 gap-y-2 w-full">
          <span className="flex justify-center  gap-1 items-center w-full">
            <input
              type="text"
              placeholder="First Name"
              className="md:text-[18px] xs:text-[13px] w-[45%] border-slate-400  border-b-[2px] text-[12px] outline-none "
            />
            <input
              type="text"
              placeholder="Phone"
              className="md:text-[18px] xs:text-[13px] w-[45%] border-slate-400  border-b-[2px] text-[12px] outline-none "
            />
          </span>
          <input
            type="email"
            placeholder="Email"
            className="md:text-[18px] xs:text-[13px] w-[90%] border-slate-400  border-b-[2px] text-[12px] outline-none "
          />

          <textarea
            placeholder="Enter Your Message Here"
            cols="30"
            rows="10"
            className=" md:text-[18px] xs:text-[13px] w-[90%] border-slate-400  border text-[12px] outline-none"
          ></textarea>

          <button className=" border-slate-900  border-[1.5px] w-[30%] h-[2rem] text-[15px] font-[500] cursor-pointer rounded-[1rem] mb-2">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
