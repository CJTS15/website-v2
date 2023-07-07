'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItems = ({title, backgroundImg, projectStack, projectUrl}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-md shadow-gray-300 dark:shadow-shadow-dark rounded-md group hover:bg-gradient-to-r from-blue-500 to-cyan-500">
        <Image className="rounded-md group-hover:opacity-10 ease-in duration-200" src={backgroundImg} width='2000' height='1333' alt=""/>
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h5 className="text-white tracking-wider text-center text-3xl lg:text-2xl">{title}</h5>
                <p className="pb-4 pt-2 text-white text-center">{projectStack}</p>
                <Link href={projectUrl}>
                    <button type="button" class="btn-tertiary ">Visit Site</button>
                </Link>
            </div>
    </div>
  )
}

export default ProjectItems