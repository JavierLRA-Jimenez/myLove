import React, { useState } from 'react';
import { IoFlowerOutline } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { TbClover } from "react-icons/tb";
import { RiPlantLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";

const Love = () => {
  const [isFirstMonthExpanded, setIsFirstMonthExpanded] = useState(false);
  const [isSecondMonthExpanded, setIsSecondMonthExpanded] = useState(false);
  const [isThirdMonthExpanded, setIsThirdMonthExpanded] = useState(false);

  return (
    <div className="grid grid-cols-5 grid-rows-12 h-screen bg-teal-300">
      <h1 className='flex col-start-2 col-end-5 text-7xl w-full items-center justify-center text-center mt-10 font-bold font-serif'>Te Iubesc Draga Mea</h1>
      <div className="flex col-start-2 col-end-5 row-start-2 row-end-12 rounded-xl mt-8">
        <div className='w-1/2 p-1'>
        <div className='flex flex-1 items-center justify-center text-5xl text-center font-serif cursor-pointer bg-pink-500 rounded-xl h-1/2 m-3 font-bold transform hover:scale-95 transition-all ease-in-out duration-300'>
         <div onClick={() => setIsThirdMonthExpanded(!isThirdMonthExpanded)}>
              {isThirdMonthExpanded ? (
                <>
                  <div>
                  <p className="italic text-sm justify-center items-center text-center">"It is convenient to love what happens to you for two reasons: 1 because it was made for you and it was assigned to you and in a certain way, it was linked to you from above, chained by very ancient causes. Secondly, because what happens to each one is cause of progress, perfection and the same continuity of the one who governs the entire universe" - Marco Aurelio
</p>
                  </div>
                </>
              ) : (
                <>
                
                  <IoFlowerOutline className=' text-7xl ml-44' />Silvia Hirtobanu 
                
                </>
                )}
                </div></div>

          <div className="items-center justify-center text-center font-serif cursor-pointer bg-indigo-500 rounded-xl h-1/2 m-3 transform hover:scale-95 transition-all ease-in-out duration-300">
            <a href='https://www.youtube.com/watch?v=PotgTZpZvFw' target='_blank'><div className="flex items-center justify-center ">
              <h2 className="text-3xl flex font-bold mb-2 mt-20 ">My Special Girl <IoIosStarOutline className="text-4xl items-center justify-center text-center" /></h2>
            </div>
            <div>
              <p className="italic text-sm justify-center items-center text-center">All the love you give me, the passion that burns between us, and your soul enchant me, chaining my heart to yours in a bold and gentle embrace.</p>
            </div></a>
          </div>
        </div>

        <div className="w-1/2 p-1 font-bold">
          {/* First Month Section */}
          <div className='flex flex-1 items-center text-center justify-center text-4xl font-serif cursor-pointer bg-orange-500 rounded-xl h-1/3 m-2 transform hover:scale-95 transition-all ease-in-out duration-300 '>
            <div
              onClick={() => setIsFirstMonthExpanded(!isFirstMonthExpanded)}
            >
              {isFirstMonthExpanded ? (
                <>
                  <div>
                  <iframe width="430" height="150" src="https://www.youtube.com/embed/wygOT9Jn1bw?si=kIuD8RkSPNAXCl9p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                </>
              ) : (
                <>
                  First Month <RiPlantLine className='text-7xl text-center items-center justify-center ml-20' />
                  <p className='text-sm italic'>The month you stole my heart</p>
                </>
              )}
            </div>
          </div>



          <div className='flex flex-1 items-center text-center justify-center text-4xl font-serif cursor-pointer bg-green-500 rounded-xl h-1/3 m-2 transform hover:scale-95 transition-all ease-in-out duration-300'>
            <div onClick={() => setIsSecondMonthExpanded(!isSecondMonthExpanded)}>
              {isSecondMonthExpanded ? (
                <>
                  <div>
                  <iframe width="430" height="150" src="https://www.youtube.com/embed/fnr1qUgdoXc?si=GuLiKLMc5NpOzXZW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                </>
              ) : (
                <>
                <p className='text-sm italic'>The month in which I opened my emotions with you</p><FaRegHeart className='text-6xl ml-40'/>
                 Second Month
                </>
              )}
              </div>
          </div>








        
          <div className='flex h-[32.5rem]'>
            <div className='flex-1 flex items-center justify-center text-center text-3xl font-serif cursor-pointer bg-red-500 rounded-xl h-1/3 m-2 transform hover:scale-95 transition-all ease-in-out duration-300'>
              <a href='https://www.youtube.com/watch?v=4j2Uzwv4L2g' target='_blank'><FaFire className='text-7xl' /></a>
            </div>
            <div className='flex flex-1 items-center justify-center text-3xl font-serif cursor-pointer bg-fuchsia-500 rounded-xl h-1/3 m-2 transform hover:scale-95 transition-all ease-in-out duration-300'>
              <a href='https://www.youtube.com/watch?v=XQ_YrqmmpIw' target='_blank'><TbClover className='text-7xl' /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Love;