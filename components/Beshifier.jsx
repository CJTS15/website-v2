'use client'
import { FaCopy } from 'react-icons/fa'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion'
import copy from 'copy-to-clipboard'

const Beshifier = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const [isShown, setIsShown] = useState(false);
    
    const fadeDown = useAnimation();
    const fadeUp = useAnimation();
    
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
    
    const [text, setText] = useState("");
    const handleChange = (event) => {
        setText(event.target.value);
      };

    const copyToClipboard = () => {
        var upperText = text.toUpperCase();
        copy(upperText.replace(/\s/g, "🤸"));
        setText("");
        setIsShown(true);
      };

    useEffect(() => {
        if (isInView) {
            fadeDown.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.25 } })
            fadeUp.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.25 } })
        } else {
            fadeDown.set({ opacity: 0, y: -25 })
            fadeUp.set({ opacity: 0, y: 45 })
        }
    }, [isInView])

    return (
        <AnimatePresence>
            <div ref={ref} id="home" className="w-full h-screen p-2 lg:py-28 py-16 px-8 dark:bg-bg-darker transition-colors">
                <div className="max-w-[1240px] mx-auto flex flex-col justify-center items-center h-full">
                
                <motion.p animate={fadeDown} className="uppercase text-sm tracking-widest"><span>Projects</span></motion.p>
                <motion.h2 animate={fadeUp} className="py-4 dark:text-h-dark-light">🤸Beshifier🤸</motion.h2>
                
                    <motion.div animate={fadeUp} className="grid w-[85%] lg:w-[50%] md:w-[75%]">  
                        <div className="flex flex-col px-3 py-2 rounded-l">
                            <input type="text" value={text} onChange={handleChange} className="w-full resize-none block mx-4 p-2.5 text-sm text-gray-900 bg-white rounded-lg border border-gray-300
                            dark:bg-bg-dark dark:text-p-dark-light" placeholder="Your Text Here..."></input>
                        </div>
                        <div className="flex flex-col justify-between px-3 py-2 pb-12 rounded-l">
                            <div className="flex justify-between items-center">
                            <p className="w-full h-20 resize-none mx-4 p-2.5 text-sm text-gray-900 bg-white rounded-lg border border-gray-300
                            dark:bg-bg-dark dark:text-white uppercase">{text.replace(/\s/g, "🤸")}</p>
                                <button type="button" className="p-2 text-blue-600 rounded-full cursor-pointer hover:bg-slate-200"
                                onClick={copyToClipboard}>
                                    <FaCopy size={20} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                    {isShown && <Toast />}
                </div>
            </div>
        </AnimatePresence>
    )
}

export default Beshifier

function Toast() {
    return (
        <div>
            <div className="flex flex-1 flex-col items-center pb-6 animate-fade-up animate-ease-out duration-300 delay-75">
                <div class="p-2 bg-gray-100 dark:bg-custom-bg-dark1  items-center text-white leading-none rounded-full flex lg:inline-flex" role="alert">
                    <span className="flex rounded-full bg-blue-500 text-white uppercase px-2 py-1 text-xs font-bold mr-3">Beshified!</span>
                    <span className="mr-2 text-left flex-auto text-zinc-900 text-sm font-bold">Text Copied Successfully.</span>
                </div>
            </div>
        </div>
    )
    
}