import Image from 'next/image'
import React from 'react'

const AnimeItems = ({ animeInfo }) => {

    return (
        animeInfo?.map((anime, index) => {

            return (
                <div className="w-full flex flex-col items-center">
                    <a className="flex rounded-sm w-[85%] h-full md:w-[95%] lg:w-[95%] bg-white dark:bg-bg-dark shadow 
                    p-6 m-2 items-center hover:shadow-md" href={anime.url}>
                        <Image className="rounded-md mr-4" src={anime.images.webp.large_image_url} 
                        width='64' height='64' alt=""/>
                        <div> 
                            <p className="text-zinc-900 font-bold dark:text-p-dark-light"> 
                            {anime.title}</p>
                            <p className="text-sm font-semibold text-gray-800 dark:text-p-dark-light"> 
                            Number of Episodes - {anime.episodes}</p>
                            <p className="text-sm font-semibold text-gray-800 dark:text-p-dark-light"> 
                            Duration - {anime.duration}</p>
                            <p className="text-sm font-semibold text-gray-800 dark:text-p-dark-light"> 
                            Ranking - {anime.rank}</p>
                            <p className="text-sm text-gray-800 font-light line-clamp-3 dark:text-p-dark-light"> 
                            {anime.synopsis}</p>
                        </div>
                    </a>
                </div>
            )
        })
    )
}

export default AnimeItems