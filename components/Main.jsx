'use client'
import { Link } from 'react-scroll'
import { FaGlobe, FaLinkedin, FaWordpress, FaGithub } from 'react-icons/fa'

import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion'

const Main = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    const fadeDown = useAnimation();
    const fadeUp = useAnimation();
    const fadeUp1 = useAnimation();
    const fadeRight = useAnimation();
    const fadeLeft = useAnimation();

    useEffect(() => {
        if (isInView) {
            fadeDown.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.25 } })
            fadeUp.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.25 } })
            fadeUp1.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.25 } })
            fadeRight.start({ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.25 } })
            fadeLeft.start({ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.25 } })
        } else {
            fadeDown.set({ opacity: 0, y: -25 })
            fadeUp.set({ opacity: 0, y: 45 })
            fadeUp1.set({ opacity: 0, y: 25 })
            fadeRight.set({ opacity: 0, x: -25 })
            fadeLeft.set({ opacity: 0, x: 25 })
        }
    }, [isInView])

    return (
        <AnimatePresence>
            <div ref={ref} id="home" className="w-full h-screen text-center dark:bg-bg-darker transition-colors">
                <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                    <div>
                        <motion.p animate={fadeDown} className="uppercase text-sm tracking-widest dark:text-p-dark-light">Your Friendly Neighborhood Tech Support</motion.p>
                        <motion.h1 animate={fadeUp} className="py-4 dark:text-h-dark-light">Hi, I'm <span>CJ</span>👋</motion.h1>
                        <motion.p animate={fadeUp1} className=" max-w-[90%] m-auto py-2 dark:text-p-dark-light">I am a highly motivated web developer specializing in WordPress, proficient in creating responsive and user-friendly websites.
                            My expertise extends beyond web development, as I am skilled in market research and providing technical support.</motion.p>

                        <motion.div animate={fadeUp1} className="flex items-center justify-between max-w-[330px] m-auto py-4 dark:text-p-dark-light">
                            <div className="rounded-full shadow-md shadow-gray-300 dark:shadow-shadow-dark p-4 cursor-pointer icon-hover">
                                <a href="/"><FaGlobe size={20} /></a>
                            </div>
                            <div className="rounded-full shadow-md shadow-gray-300 dark:shadow-shadow-dark p-4 cursor-pointer icon-hover">
                                <a href="https://www.linkedin.com/in/cjsabijon/"><FaLinkedin size={20} /></a>
                            </div>
                            <div className="rounded-full shadow-md shadow-gray-300 dark:shadow-shadow-dark p-4 cursor-pointer icon-hover">
                                <a href="https://thetechwolfcave.wordpress.com/"><FaWordpress size={20} /></a>
                            </div>
                            <div className="rounded-full shadow-md shadow-gray-300 dark:shadow-shadow-dark p-4 cursor-pointer icon-hover">
                                <a href="https://github.com/CJTS15"><FaGithub size={20} /></a>
                            </div>
                        </motion.div>

                        <div className="flex justify-center gap-6 my-8">
                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={50}
                            ><motion.button animate={fadeRight} type="button" className="btn-primary dark:shadow-shadow-dark">Know About Me</motion.button></Link>
                            <a href="https://thetechwolfcave.wordpress.com/">
                                <motion.button animate={fadeLeft} type="button" className="btn-secondary dark:shadow-shadow-dark">Read My Blogs</motion.button></a>
                        </div>

                    </div>
                </div>

            </div>
        </AnimatePresence>
    )
}

export default Main