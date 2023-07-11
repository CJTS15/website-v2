import React, { useState, useEffect, lazy, Suspense } from 'react'

import { BiSearch } from 'react-icons/bi'

const AnimeItems = lazy(() => import ('./AnimeItems'))

const AnimeLibrary = () => {

    const [animeList, SetAnimeList] = useState([])
    const [search, SetSearch] = useState("")

    const FetchAnime = async () => {
        const temp = await fetch("https://kitsu.io/api/edge/anime?filter[text]=" + search + "&page[limit]=5")
        const res = await temp.json();
        SetAnimeList(res.data)
    }

    useEffect(() => {
        FetchAnime()
    }, [search])

    return (
        <div className="w-full h-fit md:h-screen lg:h-screen p-2 px-2 dark:bg-bg-darker transition-colors">
            <div className="max-w-[1240px] py-32 mx-auto flex flex-col items-center">

                <p className="uppercase text-sm tracking-widest"><span>Projects</span></p>
                <h2 className="dark:text-h-dark-light">AnimeLibrary</h2>

                <div className="mt-8 grid w-[85%] lg:w-[50%] md:w-[75%]">
                    {/* Search */}
                    <div className="py-6">
                        <div className="relative flex w-full flex-wrap items-stretch">
                            <input
                                type="search"
                                className="relative m-0 -mr-0.5 block w-[1px] min-w-0 
                            flex-auto rounded-l border border-solid border-neutral-300 
                            bg-transparent bg-clip-padding px-3 py-[0.25rem] 
                            text-base font-normal leading-[1.6] text-zinc-900 
                            outline-none transition duration-200 ease-in-out focus:z-[3] 
                            focus:border-primary focus:text-neutral-900 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] 
                            focus:outline-none dark:border-neutral-600 dark:text-p-dark-light 
                            dark:placeholder:text-p-dark-light dark:focus:border-primary"
                                placeholder="Search Anime..."
                                aria-label="Search Anime..."
                                onChange={(e) => SetSearch(e.target.value)} />
                            <button
                                className="relative z-[2] flex items-center rounded-r 
                            bg-blue-500 px-6 py-2.5 text-xs font-medium uppercase 
                            leading-tight text-white shadow-md transition 
                            duration-150 ease-in-out hover:bg-primary-700 
                            hover:shadow-lg focus:bg-primary-700 focus:shadow-lg 
                            focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                                type="button">
                                <BiSearch size={20} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center">
                    <Suspense>
                            <AnimeItems animeInfo = {animeList} /> 
                    </Suspense>
                    {/* <a href="#" className="flex justify-center mt-6"><button type="button" 
                    className="btn-secondary dark:shadow-shadow-dark">Load More</button></a> */}
                </div>
            </div>
        </div>
       

    )
}

export default AnimeLibrary