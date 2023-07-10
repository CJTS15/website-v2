'use client'
import Link from 'next/link'
import amzpectyImg from '../public/img/works/amzpecty-thumbnail.webp'
import autobacsjpImg from '../public/img/works/autobacs-jp-thumbnail.webp'
import autobacstplImg from '../public/img/works/autobacs-tpl-thumbnail.webp'
import fdmgImg from '../public/img/works/fdmg-1-thumbnail.webp'
import ihImg from '../public/img/works/ih-thumbnail.webp'
import nasyaImg from '../public/img/works/nasya-ph-thumbnail.webp'

import ProjectItems from './ProjectItems'

import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion'

const Projects = () => {
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
    <div ref={ref} id="works" className="bg-slate-200 w-full lg:h-full p-2 lg:py-28 py-16 px-8 dark:bg-bg-dark transition-colors">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center items-center h-full">
        <motion.p animate={fadeDown} className="uppercase text-sm tracking-widest"><span>Projects</span></motion.p>
        <motion.h1 animate={fadeUp} className="py-4 dark:text-h-dark-light">My Works.</motion.h1>

        <motion.div animate={fadeUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 text-center">

          <ProjectItems
            title="Amzpecty"
            backgroundImg={amzpectyImg}
            projectStack="WordPress CMS"
            projectUrl="https://www.amzpecty.com"
          />

          <ProjectItems
            title="AUTOBACS JP"
            backgroundImg={autobacsjpImg}
            projectStack="WordPress CMS"
            projectUrl="https://autobacsbrand.com/"
          />

          <ProjectItems
            title="AUTOBACS TPL"
            backgroundImg={autobacstplImg}
            projectStack="WordPress CMS"
            projectUrl="https://autobacsbrand.com/ph/tpl/"
          />

          <ProjectItems
            title="FDMG"
            backgroundImg={fdmgImg}
            projectStack="WordPress CMS"
            projectUrl="https://getfocusdigital.com/"
          />

          <ProjectItems
            title="FDMG"
            backgroundImg={ihImg}
            projectStack="WordPress CMS"
            projectUrl="https://infinityhub.com/"
          />

          <ProjectItems
            title="FDMG"
            backgroundImg={nasyaImg}
            projectStack="WordPress CMS"
            projectUrl="https://nasya.ph/"
          />
        </motion.div>

        <div className="flex justify-center gap-6 my-8">
          <Link href="/projects">
            <motion.button animate={fadeUp} type="button" className="btn-primary dark:shadow-shadow-dark">See More Works</motion.button>
          </Link>
        </div>

      </div>
    </div>
    </AnimatePresence>
  )
}

export default Projects