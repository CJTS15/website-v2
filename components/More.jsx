'use client'
import Link from 'next/link'
import Image from 'next/image'

import workImg from '../public/img/work.webp'

import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion'

const More = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    const fadeDown = useAnimation();
    const fadeUp = useAnimation();
    const fadeUp1 = useAnimation();

    useEffect(() => {
        if (isInView) {
            fadeDown.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.25 } })
            fadeUp.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.25 } })
            fadeUp1.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.25 } })
           
        } else {
            fadeDown.set({ opacity: 0, y: -55 })
            fadeUp.set({ opacity: 0, y: 75 })
            fadeUp1.set({ opacity: 0, y: 55 })
        }
    }, [isInView])

    return (
        <AnimatePresence>
        <div ref={ref} className="w-full lg:h-screen flex items-center lg:py-28 py-16 px-8 dark:bg-bg-darker transition-colors">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
                <div className="col-span-2">
                    <motion.p animate={fadeDown} className="uppercase text-sm tracking-widest"><span>More About Me</span></motion.p>
                    <motion.h1 animate={fadeUp} className="py-4 dark:text-h-dark-light">Game. Code. Sleep.</motion.h1>
                    <motion.p animate={fadeUp} className="py-2 dark:text-p-dark-light">Gaming serves as my personal retreat from reality.
                        On Friday and weekend nights, I indulge in playing PC games either in the company of friends
                        or by myself. I particularly enjoy engaging in FPS, RPG, and MOBA games such as Valorant,
                        Apex Legends, Divisions (I & II), Tomb Raider series, League of Legends, DotA, and similar
                        titles. Playing games allows me to unwind and disconnect from the stresses of the workweek and
                        the various challenges I may encounter. When I sit down at my desk and embark on a
                        gaming session, it provides me with a much-needed respite.</motion.p>
                    <motion.p animate={fadeUp} className="py-2 dark:text-p-dark-light">In addition to my gaming pursuits, I also engage in coding and research activities.
                        I have a fondness for coding and dedicate time to study and improve my coding skills. In addition to my indoor activities,
                        I prioritize spending time outdoors to rejuvenate and maintain a healthy body. I thoroughly enjoy
                        engaging in activities such as biking, jogging, and participating in various sports.
                        Given the opportunity, I have a deep desire to travel and explore different places, as it offers a
                        sense of excitement and adventure.</motion.p>
                    <div className="flex justify-center md:justify-start gap-6 my-8">
                        <Link href="/linktree"><motion.button animate={fadeUp} type="button" className="btn-primary dark:shadow-shadow-dark">Connect With Me</motion.button></Link>
                        <Link href="/projects"><motion.button animate={fadeUp} type="button" className="btn-secondary dark:shadow-shadow-dark">See My Works</motion.button></Link>
                    </div>
                </div>
                <motion.div animate={fadeUp} className="w-full h-auto m-auto my-4">
                    <Image src={workImg} width='768' height='1024' alt="" className="rounded-md" />
                </motion.div>
            </div>
        </div>
        </AnimatePresence>
    )
}

export default More