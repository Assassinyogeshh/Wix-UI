import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="flex h-[20vh] w-full flex-col  gap-y-3 justify-start items-start">
    <div className='w-full flex justify-center items-start flex-col gap-y-1'>
        <h1 className='xs:text-[23px] text-[22px] font-[600]'>Press Room</h1>
        <p className='xs:text-[13px] text-[10px] font-[400]'>All the News You Need to Know about Wix</p>
    </div>
    <ul className='w-full flex justify-evenly items-center border-slate-500 border-t-[1.5px] border-b-[1.5px] h-[5vh]'>
  <li className='xs:text-[14px] text-[9.5px] flex justify-center w-[30%] items-center h-[80%]  hover:text-sky-700 border-slate-500 border-r-[1.7px] '>Press Room</li>

  <li className='xs:text-[14px] text-[10px] flex justify-start w-[35%] items-center h-full hover:text-sky-700 border-slate-500 border-r-[1.2px]'>

    Press Releases
    </li>
  <li className='xs:text-[14px] text-[10px] flex justify-start w-[30%] items-center  h-full hover:text-sky-700 border-slate-500'>

    In The News
    </li>
    </ul>
    </div>
    </>
  )
}

export default Navbar
