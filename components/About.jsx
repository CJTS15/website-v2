'use client'
import { Link, animateScroll as scroll } from 'react-scroll'
import Image from 'next/image'

import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion'

const About = () => {

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
            <div ref={ref} id="about" className="bg-slate-200 w-full lg:h-screen flex items-center lg:py-28 py-16 px-8 dark:bg-bg-dark transition-colors">
                <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                    <div className="col-span-2">
                        <motion.p animate={fadeDown} className="uppercase text-sm tracking-widest"><span>About Me</span></motion.p>
                        <motion.h1 animate={fadeRight} className="py-4 dark:text-h-dark-light">I'm <span>CJ</span>.</motion.h1>
                        <motion.p animate={fadeRight} className="py-2 dark:text-p-dark-light">I possess a goal-oriented mindset, along with strong collaboration skills and friendly characteristics.
                            Consider me as your dependable tech support ally within your local community.
                            I am capable of assisting you with various technology-related issues.
                            Moreover, I have garnered valuable experience as an IT virtual assistant while actively volunteering within the tech community.
                            I find great joy in engaging in activities that allow me to enhance my skills, such as coding, writing blogs, fixing broken items, and organizing desk setups. </motion.p>
                        <motion.p animate={fadeRight} className="py-2 dark:text-p-dark-light">I completed my IT degree at Mindanao State University - Iligan Institute of Technology.
                            Presently, I am an enthusiastic volunteer for both the GDG-CDO and DEVCON-CDO chapters in Mindanao.
                            I have a fondness for coding and dedicate time to study and improve my coding skills.
                            I manage two websites: my WordPress blogsite and my personal website, similar to the one you are currently viewing.
                            I am consistently enhancing these sites by implementing fixes and introducing new features.</motion.p>
                        <div className="flex justify-center md:justify-start gap-6 my-8">
                            <Link
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={50}><motion.button animate={fadeRight} type="button" className="btn-primary dark:shadow-shadow-dark">What I Can Do</motion.button></Link>
                            <Link
                                to="works"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={50}><motion.button animate={fadeLeft} type="button" className="btn-secondary dark:shadow-shadow-dark">See My Works</motion.button></Link>
                        </div>
                    </div>
                    <motion.div animate={fadeLeft} className="w-full h-auto m-auto my-4">
                        <Image src='/../public/img/gdg-prof-pic.webp' width='768' height='1024' alt="" className="rounded-md" />
                    </motion.div>
                </div>
            </div>
        </AnimatePresence>
    )
}

export default About