import React from 'react'
import Image from 'next/image'
import aboutImg from '../public/img/links-prof-pic.webp'
import aboutbgImg from '../public/img/shattered-island.webp'

const LinkTree = () => {

    return (
        <div className="w-full h-fit md:h-screen lg:h-screen p-2 px-2 dark:bg-bg-darker transition-colors">
        <div className="max-w-[1240px] py-32 mx-auto flex flex-col items-center">

                <p className="uppercase text-sm tracking-widest"><span>Projects</span></p>
                <h2 className="dark:text-h-dark-light">LinkTree</h2>

                <div className="mt-8 grid w-[95%] lg:w-[35%] md:w-[45%]">
                    <div className="max-w-full mr-auto ml-auto bg-white shadow-lg transform duration-200 easy-in-out pb-8 rounded-lg">
                        <div className="h-32 overflow-hidden m-0">
                            <Image src={aboutbgImg} width='864' height='324' alt="" />
                        </div>
                        <div className="flex justify-center px-5 -mt-12 mb-5">
                            <Image src={aboutImg} width='512' height='512' alt="" className="w-32 h-32 rounded-full" />
                        </div>
                        <div className="">
                            <div className="text-center px-12">
                                <h2 className="text-3xl font-bold">CJ Sabijon</h2>
                                <a href="/" className="text-gray-400 mt-2 hover:text-blue-500" >@cj_wolfy15</a>
                                <p className="mt-2 text-gray-600 text-sm">♒ | Tech | Gamer | Developer | 💻 Support | 👨🏻‍💻 GDG | 👨🏻‍💻 DEVCON</p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1 mt-4 items-center">
                            <a href="/">
                                <button type="button" className="btn-primary w-[280px] lg:w-[320px] md:w-[300px]">Website</button></a>
                            <a href="https://thetechwolfcave.wordpress.com/">
                                <button type="button" className="btn-primary w-[280px] lg:w-[320px] md:w-[300px]">Blog</button></a>
                            <a href="https://www.linkedin.com/in/cjsabijon/">
                                <button type="button" className="btn-primary w-[280px] lg:w-[320px] md:w-[300px]">LinkedIn</button></a>
                            <a href="https://youtube.com/channel/UCO0VebhOX9eKVVYa1_PXnFg?sub_confirmation=1">
                                <button type="button" className="btn-primary w-[280px] lg:w-[320px] md:w-[300px]">Youtube</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LinkTree
