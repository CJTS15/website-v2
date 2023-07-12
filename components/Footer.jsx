'use client'
import { animateScroll as scroll } from 'react-scroll'
import React from 'react'
import { FaChevronUp } from 'react-icons/fa';

const Footer = () => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="bg-slate-200 w-full flex items-center py-8 px-8 dark:bg-bg-dark transition-colors">
      <div className="max-w-[1240px] mx-auto flex justify-center items-center">
        <div className="flex flex-col items-center justify-center ">
        <button className="text-sm uppercase tracking-wider dark:text-p-dark-light my-2 animate animate-bounce" onClick={scrollToTop}><FaChevronUp /></button>
          <p className="text-sm uppercase tracking-wider dark:text-p-dark-light">All Rights Reserved. {new Date().getFullYear()}</p>
          <p className="text-sm uppercase tracking-wider dark:text-p-dark-light">Created With 💖</p>
        </div>
      </div>
    </div>
  )
}

export default Footer