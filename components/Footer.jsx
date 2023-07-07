'use client'
import { animateScroll as scroll } from 'react-scroll'
import React from 'react'

const Footer = () => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="bg-slate-200 w-full flex items-center py-8 px-8 dark:bg-bg-dark transition-colors">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center items-center">
        <div className="flex items-center justify-center ">
          <p className="text-sm uppercase tracking-wider dark:text-p-dark-light">All Rights Reserved &nbsp;</p>
          <p className="text-sm uppercase tracking-wider dark:text-p-dark-light">{new Date().getFullYear()}</p>
          <p className="text-sm uppercase tracking-wider dark:text-p-dark-light">&nbsp; Created With 💖</p>
        </div>
        <div className="flex items-center justify-center">
          <button className="text-sm uppercase tracking-wider dark:text-p-dark-light" onClick={scrollToTop}>Scroll To Top</button>
        </div>
      </div>
    </div>
  )
}

export default Footer