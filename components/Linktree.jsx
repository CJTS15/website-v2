import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import aboutImg from '../public/img/links-prof-pic.webp'
import aboutbgImg from '../public/img/shattered-island.webp'

import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion'

const LinkTree = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    
    const fadeDown = useAnimation();
    const fadeUp = useAnimation();
    

    useEffect(() => {
        if (isInView) {
            fadeDown.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.25 } })
            fadeUp.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.25 } })
        } else {
            fadeDown.set({ opacity: 0, y: -55 })
            fadeUp.set({ opacity: 0, y: 75 })
        }
    }, [isInView])

    return (
        <AnimatePresence>
            <div ref={ref} id="home" className="w-full h-screen p-2 lg:py-28 py-16 px-8 dark:bg-bg-darker transition-colors">
                <div className="max-w-[1240px] mx-auto flex flex-col justify-center items-center h-full">
                
                <motion.p animate={fadeDown} className="uppercase text-sm tracking-widest"><span>Projects</span></motion.p>
                <motion.h2 animate={fadeUp} className="py-4 dark:text-h-dark-light">LinkTree</motion.h2>
                
                <div className="grid w-[85%] lg:w-[35%] md:w-[55%]">
                    <div className="mr-auto ml-auto bg-white shadow-lg transform duration-200 easy-in-out pb-8 rounded-lg">
                        <div className="h-32 overflow-hidden m-0">
                            <Image src={aboutbgImg} width='864' height='324' alt="" />
                        </div>
                        <div className="flex justify-center px-5 -mt-12 mb-5">
                            <Image src={aboutImg} width='512' height='512' alt="" className="w-32 h-32 rounded-full"/>
                        </div>
                        <div className="">
                            <div className="text-center px-12">
                                <h2 className="text-3xl font-bold">CJ Sabijon</h2>
                                <a href="/" className="text-gray-400 mt-2 hover:text-blue-500" >@cj_wolfy15</a>
                                <p className="mt-2 text-gray-600 text-sm">♒ | Tech | Gamer | Developer | 💻 Support | 👨🏻‍💻 GDG | 👨🏻‍💻 DEVCON</p>
                            </div>              
                        </div>
                        <div className="flex flex-col space-y-1 mt-4 items-center max-w-full ">
                            <a href="/">
                                <button type="button" className="btn-primary w-[240px]">Website</button></a>
                            <a href="https://thetechwolfcave.wordpress.com/">
                                <button type="button" className="btn-primary w-[240px]">Blog</button></a>
                            <a href="https://www.linkedin.com/in/cjsabijon/">
                                <button type="button" className="btn-primary w-[240px]">LinkedIn</button></a>
                            <a href="https://youtube.com/channel/UCO0VebhOX9eKVVYa1_PXnFg?sub_confirmation=1">
                                <button type="button" className="btn-primary w-[240px]">Youtube</button></a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </AnimatePresence>
    )
}

export default LinkTree
