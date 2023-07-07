'use client'
import { FaPaperPlane } from 'react-icons/fa'
import amzpectyImg from '../public/img/works/amzpecty-thumbnail.webp'
import autobacsjpImg from '../public/img/works/autobacs-jp-thumbnail.webp'
import autobacstplImg from '../public/img/works/autobacs-tpl-thumbnail.webp'
import beatsonicImg from '../public/img/works/beat-sonic-global-thumbnail.webp'
import cafe209Img from '../public/img/works/cafe-209-thumbnail.webp'
import cathayImg from '../public/img/works/cathay-yss-thumbnail.webp'
import fdmgImg from '../public/img/works/fdmg-1-thumbnail.webp'
import gabccImg from '../public/img/works/gabcc-thumbnail.webp'
import ihImg from '../public/img/works/ih-thumbnail.webp'
import nasyaImg from '../public/img/works/nasya-ph-thumbnail.webp'
import ushcpImg from '../public/img/works/ushcp-thumbnail.webp'
import sphImg from '../public/img/works/sph-thumbnail.webp'

import ProjectItems from './ProjectItems'

import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion'

const MoreProjects = () => {

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
      <div ref={ref} id="works" className="w-full h-full p-2 lg:py-64 py-32 px-8 dark:bg-bg-darker">
        <div className="max-w-[1520px] mx-auto flex flex-col justify-center items-center h-full">
          <motion.p animate={fadeDown} className="uppercase text-sm tracking-widest"><span>Projects</span></motion.p>
          <motion.h1 animate={fadeUp} className="py-4 dark:text-h-dark-light">What I've Build.</motion.h1>

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
              title="Beat Sonic Global"
              backgroundImg={beatsonicImg}
              projectStack="Shopify"
              projectUrl="https://beatsonicglobal.com/"
            />

            <ProjectItems
              title="Cafe 209"
              backgroundImg={cafe209Img}
              projectStack="WordPress CMS"
              projectUrl="https://cafe209aug.com/"
            />

            <ProjectItems
              title="Cathay YSS"
              backgroundImg={cathayImg}
              projectStack="WordPress CMS"
              projectUrl="https://cathay-yss.com/"
            />

            <ProjectItems
              title="Focus Digital Marketing Group"
              backgroundImg={fdmgImg}
              projectStack="WordPress CMS"
              projectUrl="https://getfocusdigital.com/"
            />

            <ProjectItems
              title="Greater Augusta Black Chamber of Commerce"
              backgroundImg={gabccImg}
              projectStack="WordPress CMS"
              projectUrl="https://ushealthcarecareersphilippines.com/"
            />

            <ProjectItems
              title="Infinity Hub"
              backgroundImg={ihImg}
              projectStack="WordPress CMS"
              projectUrl="https://infinityhub.com/"
            />

            <ProjectItems
              title="Nasya PH"
              backgroundImg={nasyaImg}
              projectStack="WordPress CMS"
              projectUrl="https://nasya.ph/"
            />

            <ProjectItems
              title="San Pedro Hospital Davao, Inc."
              backgroundImg={sphImg}
              projectStack="WordPress CMS"
              projectUrl="https://sanpedrohospitaldavao.com/"
            />

            <ProjectItems
              title="US Healthcare Careers Philippines"
              backgroundImg={ushcpImg}
              projectStack="WordPress CMS"
              projectUrl="https://ushealthcarecareersphilippines.com/"
            />
          </motion.div>
          <div class="flex justify-center gap-6 my-8">
            <a href="https://www.linkedin.com/in/cjsabijon/">
              <button type="button" class="btn-primary flex items-center justify-between dark:shadow-shadow-dark">Work With Me <i className="ml-2"><FaPaperPlane /></i></button></a>
          </div>

        </div>
      </div>
    </AnimatePresence>
  )
}

export default MoreProjects