"use client";

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
const CardDynamic = dynamic(() => import("../../components/card"));

export default function Home() {
  return (
    <div className="flex relative text-green-500  h-screen  items-center max-w-7xl mx-auto bg-black  ">
      <img
        src="https://w0.peakpx.com/wallpaper/638/737/HD-wallpaper-windows-windows-11.jpg"
        alt="backroundImage"
        className="object-cover fill-inherit absolute w-full h-full  "
      />
      <motion.span
        initial={{ x: -220, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.2, type: "spring", delay: 0.4, stiffness: 50, damping: 10
        }}
        className=" absolute top-[10rem] md:top-[3rem] right-12  md:left-24 text-sm text-white text-center w-[150px] h-39   bourder-2  brightness-75  transition-all duration-150 shadowred bg-[#FF0000]  rounded-full
         bourder-2 px-2 py-1 bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-[''] 
         before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]
          uppercase  before:opacity-30">Sie Sparen 1.800 €
      </motion.span>
      <div className=" z-40 flex items-center ">
        <CardDynamic />
        <div className=" absolute  left-0 right-0  h-[27rem] md:h-[34rem] w-[94%]  mx-3  bg-gray-700/50  rounded-r-full  flex items-end justify-end ">
          <div className=" relative  h-[20rem] w-[20rem] md:h-[30rem] md:w-[30rem]  bg-cyan-700/40 blur-xl    rounded-full flex flex-col items-end justify-end  mix-blend-overlay btnCard " >
            <div className="absolute top-0 w-36 h-36 md:w-72 md:h-72 rounded-full   bg-cyan-700 mix-blend-multiply filter blur-xl opacity-50  btnCard   " />
            <div className="absolute  bottom-7 h-36 w-36 md:w-72 md:h-72 rounded-full  bg-cyan-700  mix-blend-multiply filter blur-xl opacity-50 animation-delay-2s btnCard" />
            <div className="absolute right-2 h-36 w-36 md:w-72 md:h-72 rounded-full bg-cyan-700 mix-blend-multiply filter blur-xl opacity-50 animation-delay-4s btnCard" />
          </div>
        </div>
        <div className=" -top-2 md:-top-14 mx-7 md:mx-24 relative  flex flex-col  text-white ">
          <h1 className="text-2xl pb-2 md:pb-2 uppercase  text-amber-500" >GXL new update</h1>
          <p className='text-sm text-gray-400 pb-1  '> ROG Zephyrsu Duo 16 (2022) (GX650RW-GLx)</p>
          <p className='text-sm text-amber-500/60'>Gaming-Notebook </p>
          <ul className=' text-sm text-gray-400 list-disc px-6 pt-2'>
            <li>Windows 11 Home 64-Bit</li>
            <li>165 Hz Display</li>
            <li>2 TB SSD</li>
            <li>Intel Wireless-AX 200</li>
          </ul>
          <p className='pt-5 px-5 space-x-3 flex  text-xl'>
            <span className='line-through  text-gray-300'>2.899 €</span>
            <span className='text-red-600  font-bold'>1.099 € {" "}
              <span className='text-[9px] p-[0.10rem] font-light bg-red-600  text-gray-200'>70% -</span>
            </span>
          </p>
          <p className=' flex items-center pl-5  text-[10px] '><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500 pr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
          </svg>
          </span>
            Liferziet 1-3 werktage
          </p>
          <motion.button
            initial={{ x: -220, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1.2, type: "spring", delay: 0.6, stiffness: 50, damping: 10
            }}
            className="  ml-5 relative mt-5 md:mt-6 text-sm w-[60%] md:w-[70%] h-39   bourder-2  brightness-[0.5] transition-all duration-150 bg-amber-500 text-[#111] font-bold shadowgray  rounded-full
              border-2 border-amber-500 py-2 bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-[''] 
              before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]
              before:opacity-30 space-x-3"><span className='pr-3 '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="currentColor" className="w-6 absolute top-[0.35rem] left-3 md:left-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            </span>
            <span> In den Warenkorb</span>
          </motion.button >
          <motion.div
            initial={{ z: -100, opacity: 0, scale: 0.5 }}
            whileInView={{ z: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: 1, type: "spring", delay: 0.3, stiffness: 50, damping: 10
            }}
            className=' ml-5 relative  mt-9 w-[70%] '>
            <div className="absolute -inset-1 pay bg-gradient-to-tl from-cyan-600 to-gray-300  rounded-full blur opacity-75" />
            <button className=" divide-x divide-gray-600 relative flex flex-row items-center space-x-2  w-full  text-sm    bourder-2  brightness-[0.8] transition-all duration-150 bg-[#111]   rounded-full
              border-2 border-[#111] py-[0.7rem] my-1 bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-[''] 
              before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]
              before:opacity-30">
              <span className='flex h-[0.10rem]  pl-4 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" id="paypal"><path fill="#139AD6" d="M49.2 28.2h-3.4c-.2 0-.4.2-.5.4l-1.4 8.8c0 .2.1.3.3.3H46c.2 0 .3-.1.3-.3l.4-2.5c0-.2.2-.4.5-.4h1.1c2.3 0 3.6-1.1 3.9-3.3.2-.9 0-1.7-.4-2.2-.6-.5-1.5-.8-2.6-.8m.4 3.3c-.2 1.2-1.1 1.2-2 1.2H47l.4-2.3c0-.1.1-.2.3-.2h.2c.6 0 1.2 0 1.5.4.2.1.2.4.2.9"></path><path fill="#263B80" d="M24.7 28.2h-3.4c-.2 0-.4.2-.5.4l-1.4 8.8c0 .2.1.3.3.3h1.6c.2 0 .4-.2.5-.4l.4-2.4c0-.2.2-.4.5-.4h1.1c2.3 0 3.6-1.1 3.9-3.3.2-.9 0-1.7-.4-2.2-.6-.5-1.4-.8-2.6-.8m.4 3.3c-.2 1.2-1.1 1.2-2 1.2h-.5l.4-2.3c0-.1.1-.2.3-.2h.2c.6 0 1.2 0 1.5.4.1.1.2.4.1.9M35 31.4h-1.6c-.1 0-.3.1-.3.2l-.1.5-.1-.2c-.4-.5-1.1-.7-1.9-.7-1.8 0-3.4 1.4-3.7 3.3-.2 1 .1 1.9.6 2.5.5.6 1.2.8 2.1.8 1.5 0 2.3-.9 2.3-.9l-.1.5c0 .2.1.3.3.3H34c.2 0 .4-.2.5-.4l.9-5.6c-.1-.1-.3-.3-.4-.3m-2.3 3.2c-.2.9-.9 1.6-1.9 1.6-.5 0-.9-.2-1.1-.4-.2-.3-.3-.7-.3-1.2.1-.9.9-1.6 1.8-1.6.5 0 .8.2 1.1.4.3.3.4.8.4 1.2"></path><path fill="#139AD6" d="M59.4 31.4h-1.6c-.1 0-.3.1-.3.2l-.1.5-.1-.2c-.4-.5-1.1-.7-1.9-.7-1.8 0-3.4 1.4-3.7 3.3-.2 1 .1 1.9.6 2.5.5.6 1.2.8 2.1.8 1.5 0 2.3-.9 2.3-.9l-.1.5c0 .2.1.3.3.3h1.5c.2 0 .4-.2.5-.4l.9-5.6c-.1-.1-.2-.3-.4-.3m-2.3 3.2c-.2.9-.9 1.6-1.9 1.6-.5 0-.9-.2-1.1-.4-.2-.3-.3-.7-.3-1.2.1-.9.9-1.6 1.8-1.6.5 0 .8.2 1.1.4.4.3.5.8.4 1.2"></path><path fill="#263B80" d="M43.7 31.4H42c-.2 0-.3.1-.4.2L39.4 35l-1-3.2c-.1-.2-.2-.3-.5-.3h-1.6c-.2 0-.3.2-.3.4l1.8 5.3-1.7 2.4c-.1.2 0 .5.2.5h1.6c.2 0 .3-.1.4-.2l5.5-7.9c.3-.3.1-.6-.1-.6"></path><path fill="#139AD6" d="m61.3 28.5-1.4 9c0 .2.1.3.3.3h1.4c.2 0 .4-.2.5-.4l1.4-8.8c0-.2-.1-.3-.3-.3h-1.6c-.1-.1-.2 0-.3.2"></path><path fill="#263B80" d="M12 25.2c-.7-.8-2-1.2-3.8-1.2h-5c-.3 0-.6.3-.7.6l-2 13.1c0 .3.2.5.4.5H4l.8-4.9v.2c.1-.3.4-.6.7-.6H7c2.9 0 5.1-1.2 5.8-4.5v-.3c-.1 0-.1 0 0 0 .1-1.3-.1-2.1-.8-2.9"></path><path fill="#139AD6" d="M12.7 28.1v.3c-.7 3.4-2.9 4.5-5.8 4.5H5.4c-.3 0-.6.3-.7.6l-1 6.1c0 .2.1.4.4.4h2.6c.3 0 .6-.2.6-.5v-.1l.5-3.1v-.2c0-.3.3-.5.6-.5h.4c2.5 0 4.5-1 5-4 .2-1.2.1-2.3-.5-3-.1-.2-.3-.4-.6-.5"></path><path fill="#232C65" d="M12 27.8c-.1 0-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.4-.1-.8-.1-1.3-.1H6.2c-.1 0-.2 0-.3.1-.2.1-.3.3-.3.5l-.8 5.2v.2c.1-.3.4-.6.7-.6H7c2.9 0 5.1-1.2 5.8-4.5 0-.1 0-.2.1-.3-.2-.1-.3-.2-.5-.2-.3-.1-.3-.1-.4-.1"></path></svg>
              </span><span className='text-sm pl-3 md:text-sm text-gray-300 '>Einkaufen</span>
            </button>
            <hr className='border absolute w-[100%] hidden md:block  mt-12 border-gray-500' />
            <div className='ml-6 mt-4 absolute flex space-x-3 items-center w-full mix-blend-screen '>
              <ul className=' absolute flex items-center  text-sm list-disc text-amber-500'>
                <li className=''> <span className=''>(157)</span>{" "} <span className='text-gray-500 text-lg'>/</span> </li>
              </ul>
              <img
                className=' h-[9rem] w-[15rem] '
                src="https://cdn.sanity.io/images/7n5v8za3/production/fd2263ae2f1da44f2efd0e6a9b400ae614870809-3500x2333.png" alt=" feedbackImage" />
            </div>
          </motion.div>
        </div>
      </div>
      <div className=" absolute   w-full h-full   bg-gradient-to-t from-gray-900/40  brightness-50" />
    </div>
  )
}



