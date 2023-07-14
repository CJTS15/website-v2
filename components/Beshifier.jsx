'use client'
import { FaCopy } from 'react-icons/fa'

import React, { useState } from 'react'
import copy from 'copy-to-clipboard'

const Beshifier = () => {

    const [isShown, setIsShown] = useState(false);
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const copyToClipboard = () => {
        var upperText = text.toUpperCase();
        copy(upperText.replace(/\s/g, "🤸"));
        setText("");
        setIsShown(true);
    };


    return (
        <div className="w-full min-h-screen p-2 px-2 dark:bg-bg-darker transition-colors">
        <div className="max-w-[1240px] py-32 mx-auto flex flex-col justify-center items-center">

                <p className="uppercase text-sm tracking-widest"><span>Projects</span></p>
                <h2 className="dark:text-h-dark-light">🤸Beshifier🤸</h2>

                <div className="mt-8 mx-auto grid w-[95%] lg:w-[50%] md:w-[75%]">
                    <div className="flex flex-col px-3 py-2 rounded-l">
                        <input type="text" value={text} onChange={handleChange} className="w-full resize-none block p-2.5 text-sm 
                        text-gray-900 bg-white rounded-l border-solid dark:bg-bg-dark dark:text-p-dark-light focus:z-[3] 
                        focus:border-blue-500" placeholder="Your Text Here..."></input>
                    </div>
                    <div className="flex flex-col justify-between px-3 py-2 pb-12 rounded-l">
                        <div className="flex justify-between items-center">
                            <p className="w-full h-20 resize-none p-2.5 text-sm text-gray-900 bg-white rounded-l border-solid
                            bg-transparent dark:bg-bg-dark dark:text-white uppercase">{text.replace(/\s/g, "🤸")}</p>
                            <button type="button" className="p-2 mx-2 text-blue-500 rounded-full cursor-pointer hover:bg-slate-200"
                                onClick={copyToClipboard}>
                                <FaCopy size={20} />
                            </button>
                        </div>
                    </div>
                </div>
                {isShown && <Toast />}
            </div>
        </div>
    )
}

export default Beshifier

function Toast() {
    return (
        <div>
            <div className="flex flex-1 flex-col items-center pb-6 animate-fade-up animate-ease-out duration-300 delay-75">
                <div class="p-2 bg-gray-100 dark:bg-custom-bg-dark1  items-center text-white leading-none rounded-full flex lg:inline-flex" role="alert">
                    <span className="flex rounded-full bg-blue-500 text-white uppercase px-2 py-1 text-xs font-bold mr-3">Beshified!</span>
                    <span className="mr-2 text-left flex-auto text-zinc-900 text-sm font-bold">Text Copied Successfully.</span>
                </div>
            </div>
        </div>
    )

}