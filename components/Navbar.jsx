'use client'
import { Link as LinkScroll } from 'react-scroll'
import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaGlobe, FaLinkedin, FaWordpress, FaGithub } from 'react-icons/fa'

import ThemeSwitcher from './ThemeSwitcher'

const navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false)

 const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() =>{
        const handleShadow = () => {
            if (window.scrollY >= 90){
                setShadow(true);
            }else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow)
    }, [])

  return (
    <div className={shadow 
    ? 'fixed w-full h-20 shadow-md z-[100] px-4 md:px-8 bg-slate-50 dark:bg-bg-dark transition-colors' 
    : 'fixed w-full h-20 z-[100] px-4 md:px-8 bg-slate-50 dark:bg-bg-dark transition-colors'}>
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
            <a href="/">
                <h2 className="logo flex border-l-4 border-blue-500 px-2 dark:text-h-dark-light">CJ👋</h2>
            </a>
                <div>
                    <ul className="hidden md:flex items-center nav-menu active ">
                        <li className="ml-10 text-sm uppercase nav-item dark:text-p-dark-light">
                        <LinkScroll to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={50}>
                            About Me</LinkScroll></li>
                        <li className="ml-10 text-sm uppercase nav-item dark:text-p-dark-light">
                        <LinkScroll to="works"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={50}>
                            Works</LinkScroll></li>
                        <li className="ml-10 text-sm uppercase nav-item dark:text-p-dark-light">
                            <a href="https://www.linkedin.com/in/cjsabijon/">Connect</a></li>
                        <li className="ml-10 text-sm uppercase nav-item dark:text-p-dark-light">
                            <a href="/linktree">Links</a></li>
                        <div className="ml-6">
                            <ThemeSwitcher />
                        </div>
                    </ul>
                    <div className="flex items-center">
                        <div onClick={handleNav} className="md:hidden ml-6 dark:text-p-dark-light">
                            <AiOutlineMenu size={25} />
                        </div>
                        <div className="md:hidden ml-6">
                            <ThemeSwitcher />
                        </div>
                    </div>
                    
                </div>

                 <div className={nav 
                 ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/80 ' 
                 : 'fixed left-0 top-0'}>
                    <div className={nav 
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-bg-dark p-8 ease-in duration-300' 
                    : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-bg-dark p8 ease-in duration-300'}>  
                        <div className="flex w-full items-center justify-between">
                            <a href="/">
                                <h2 className="logo flex border-l-4 border-blue-500 px-2 dark:text-h-dark-light">CJ👋</h2>
                            </a>
                            <div onClick={handleNav} className="rounded-full shadow-md shadow-gray-200 dark:shadow-shadow-dark cursor-pointer p-3 dark:text-p-dark-light">
                                <AiOutlineClose size={15} />
                            </div>
                        </div>
                        <div className="mt-4 border-b border-gray-200 my-4">
                            <p className="w-[85%] md:w-[95%] py-4 dark:text-p-dark-light">Your Friendly Neighborhood Tech Support.</p>
                        </div>
                        <div className="py-4 flex flex-col ">
                            <ul className="uppercase nav-menu active">
                                <LinkScroll to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={50}>
                                    <li className="py-4 text-sm dark:text-p-dark-light nav-item" onClick={handleNav}>About Me</li>
                                </LinkScroll>
                                <LinkScroll to="works"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={50}>
                                    <li className="py-4 text-sm dark:text-p-dark-light nav-item" onClick={handleNav}>Works</li>
                                </LinkScroll>
                                <a href="https://www.linkedin.com/in/cjsabijon/">
                                    <li className="py-4 text-sm dark:text-p-dark-light nav-item" onClick={handleNav}>Connect</li>
                                </a>
                                <a href="/linktree">
                                    <li className="py-4 text-sm dark:text-p-dark-light nav-item" onClick={handleNav}>Links</li>
                                </a>
                            </ul>
                        </div>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest dark:text-p-dark-light">Let's Connect</p>
                        </div>
                        <div className="flex items-center justify-start my-4 w-full sm:w-[80%] dark:text-p-dark-light">
                            <div className="rounded-full shadow-md shadow-gray-200 dark:shadow-shadow-dark p-3 mx-3 cursor-pointer hover:scale-105 ease-in duraction-400">
                                <a href="/"><FaGlobe size={20} /></a>
                            </div>
                            <div className="rounded-full shadow-md shadow-gray-200 dark:shadow-shadow-dark p-3 mx-3 cursor-pointer hover:scale-105 ease-in duraction-400">
                                <a href="https://www.linkedin.com/in/cjsabijon/"><FaLinkedin size={20} /></a>
                            </div>
                            <div className="rounded-full shadow-md shadow-gray-200 dark:shadow-shadow-dark p-3 mx-3 cursor-pointer hover:scale-105 ease-in duraction-400">
                                <a href="https://thetechwolfcave.wordpress.com/"><FaWordpress size={20} /></a>
                            </div>
                            <div className="rounded-full shadow-md shadow-gray-200 dark:shadow-shadow-dark p-3 mx-3 cursor-pointer hover:scale-105 ease-in duraction-400">
                                <a href="https://github.com/CJTS15"><FaGithub size={20} /></a>
                            </div>                 
                        </div> 
                    </div>
                </div>
        </div>
    </div>
  )
}

export default navbar