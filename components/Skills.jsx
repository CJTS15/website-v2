'use client'
import { FaWordpressSimple, FaHeadset, FaSwatchbook, FaPalette } from 'react-icons/fa'

import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion'

const Skills = () => {

const ref = useRef(null);
const isInView = useInView(ref, {once: false});

const fadeDown = useAnimation();
const fadeUp = useAnimation();

useEffect(() => {
    if(isInView) {    
        fadeDown.start({opacity: 1, y: 0, transition:{ duration: 0.5, delay: 0.25 }})   
        fadeUp.start({opacity: 1, y: 0, transition:{ duration: 0.5, delay: 0.25 }})
    }else {
        fadeDown.set({opacity: 0, y: -25})
        fadeUp.set({opacity: 0, y: 45}) 
        }
},[isInView])
  return (
    <AnimatePresence>
    <div ref={ref} id="skills" className="w-full lg:h-full p-2 lg:py-28 py-16 px-8 dark:bg-bg-darker transition-colors">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center items-center h-full">
            <motion.p animate={fadeDown} className="uppercase text-sm tracking-widest"><span>Skills</span></motion.p>
            <motion.h2 animate={fadeUp} className="py-4 dark:text-h-dark-light">What I Can Do.</motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 text-center">
                
                <motion.div animate={fadeUp} className="skill-card dark:hover:bg-bg-dark">
                    <div className="icon-hover mb-4 inline-block rounded-full bg-primary-100 p-4 shadow-sm dark:text-p-dark-light">
                        <FaWordpressSimple size={45}/>
                    </div>
                    <h5 className="mb-4 text-lg font-bold dark:text-h-dark-light">Website Development</h5>
                    <p className="dark:text-p-dark-light">
                    I specialize in building websites using WordPress and other popular 
                    Content Management Systems (CMS). With WordPress, I harness its flexible nature and 
                    leverage its extensive plugin ecosystem to create customized and easily 
                    manageable websites that meet the unique needs of my clients.
                    </p>
                </motion.div>

                <motion.div animate={fadeUp} className="skill-card dark:hover:bg-bg-dark">
                    <div className="icon-hover mb-4 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm dark:text-p-dark-light">
                        <FaHeadset size={45}/>
                    </div>
                    <h5 className="mb-4 text-lg font-bold dark:text-h-dark-light">Technical & Client Support</h5>
                    <p className="dark:text-p-dark-light">
                    I provide comprehensive support to clients, addressing both their technical 
                    and business concerns. My role involves managing and maintaining their websites, 
                    ensuring optimal performance and regular updates. By collaborating with clients, 
                    I strive to resolve any issues, ensuring a seamless experience.
                    </p>
                </motion.div>

                <motion.div animate={fadeUp} className="skill-card dark:hover:bg-bg-dark">
                    <div className="icon-hover mb-4 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm dark:text-p-dark-light">
                        <FaSwatchbook size={45}/>
                    </div>
                    <h5 className="mb-4 text-lg font-bold dark:text-h-dark-light">Market & Project Research</h5>
                    <p className="dark:text-p-dark-light">
                    In addition, I offer valuable services in providing documentations and reports to 
                    clients. I conduct thorough research to stay up-to-date with the latest 
                    trends, enabling me to deliver accurate reports tailored to each client's specific 
                    projects. With this, I assist clients in making informed decisions and achieving their goals effectively.
                    </p>
                </motion.div>

                <motion.div animate={fadeUp} className="skill-card dark:hover:bg-bg-dark">
                    <div className="icon-hover mb-4 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm dark:text-p-dark-light">
                        <FaPalette size={45}/>
                    </div>
                    <h5 className="mb-4 text-lg font-bold dark:text-h-dark-light">Multimedia & Graphics</h5>
                    <p className="dark:text-p-dark-light">
                    I also specialize in light multimedia work such as photo resizing and enhancement. 
                    Using tools like Canva, I create visually appealing graphics including posters, logos, 
                    infographics, and banners, ensuring that they effectively convey the desired message 
                    and enhance the overall visual experience.
                    </p>
                </motion.div>

                <motion.div animate={fadeUp} className="skill-card dark:hover:bg-bg-dark">
                    <div className="icon-hover mb-4 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm dark:text-p-dark-light">
                        <FaHeadset size={45}/>
                    </div>
                    <h5 className="mb-4 text-lg font-bold dark:text-h-dark-light">Virtual Assistant</h5>
                    <p className="dark:text-p-dark-light">
                    As a virtual assistant specializing in the technical side, I provide a range of services 
                    tailored to meet client requirements such as creating websites, landing pages 
                    and funnels. Additionally, I offer ongoing technical support to ensure a smooth and 
                    seamless experience for my clients.
                    </p>
                </motion.div>

            </div>
          
        </div>
    </div>
    </AnimatePresence>
  )
}

export default Skills