import React, { useState } from 'react'
import { FaFileInvoice } from "react-icons/fa";
import { MdCloudDownload } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"

function Card({ data, reference }) {


  return (
    <motion.div drag whileDrag={{ scale: 1 }}  dragTransition={{ bounceStiffness: 200, bounceDamping: 100 }} dragConstraints={reference} className='relative w-60 h-72 rounded-[30px] bg-zinc-900/90 p-5 overflow-hidden cursor-pointer'>
      <div className='absolute'>
        <FaFileInvoice size="1rem" className='text-zinc-300' />
        <p className='font-semibold mt-5 text-zinc-400 text-md leading-none tracking-tight'>{data.cardText}</p>
      </div>
      <div className='absolute bottom-0 left-0 w-full'>
        <div className='px-5 mb-4 flex justify-between items-center'>
          <p className='text-white font-mono font-semibold text-md'>{data.fileSize}</p>
          {data.optionIcon ?
            <MdCloudDownload size="1rem" className='text-zinc-300' />
            : <IoMdCloseCircle size="1rem" className='text-zinc-300' />
          }
        </div>
        {data.footer.isActive &&
          <div className={`w-full py-2 ${data.footer.bgColor} text-center`}>
            <h3 className='text-md font-semibold text-white'>{data.footer.footerText}</h3>
          </div>
          }

      </div>
    </motion.div>
  )
}

export default Card