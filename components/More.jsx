'use client'
import Image from 'next/image'
import React from 'react'

const More = () => {
    return (
        <div className="w-full lg:h-screen flex items-center lg:py-28 py-16 px-8 dark:bg-bg-darker transition-colors">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
                <div className="col-span-2">
                    <p className="uppercase text-sm tracking-widest"><span>More About Me</span></p>
                    <h1 className="py-4 dark:text-h-dark-light">Game. Code. Sleep.</h1>
                    <p className="py-2 dark:text-p-dark-light">Gaming serves as my personal retreat from reality.
                        On Friday and weekend nights, I indulge in playing PC games either in the company of friends
                        or by myself. I particularly enjoy engaging in FPS, RPG, and MOBA games such as Valorant,
                        Apex Legends, Divisions (I & II), Tomb Raider series, League of Legends, DotA, and similar
                        titles. Playing games allows me to unwind and disconnect from the stresses of the workweek and
                        the various challenges I may encounter. When I sit down at my desk and embark on a
                        gaming session, it provides me with a much-needed respite.</p>
                    <p className="py-2 dark:text-p-dark-light">In addition to my gaming pursuits, I also engage in coding and research activities.
                        I have a fondness for coding and dedicate time to study and improve my coding skills. In addition to my indoor activities,
                        I prioritize spending time outdoors to rejuvenate and maintain a healthy body. I thoroughly enjoy
                        engaging in activities such as biking, jogging, and participating in various sports.
                        Given the opportunity, I have a deep desire to travel and explore different places, as it offers a
                        sense of excitement and adventure.</p>
                    <div className="flex justify-center md:justify-start gap-6 my-8">
                        <a href="#"><button type="button" class="btn-primary dark:shadow-shadow-dark">Connect With Me</button></a>
                        <a href="#"><button type="button" class="btn-secondary dark:shadow-shadow-dark">See My Other Works</button></a>
                    </div>
                </div>
                <div className="w-full h-auto m-auto my-4">
                    <Image src='/../public/img/work.webp' width='768' height='1024' alt="" className="rounded-md" />
                </div>
            </div>
        </div>
    )
}

export default More