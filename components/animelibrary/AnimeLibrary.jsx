'use client'
import React, { useState, useEffect } from "react";

import AnimeItems from "./AnimeItems";

const AnimeLibrary = () => {
  const [animeList, SetAnimeList] = useState([]);
  const [search, setSearch] = useState("");

  const url =
    "https://kitsu.io/api/edge/anime?filter[text]="+search+"&page[limit]=5";

    const fetchAnime = async () => {
        try {
            const res = await fetch(url)
            const resData = await res.json()
            SetAnimeList(resData.data)
            console.log(resData.data)
        } catch (error) {
          console.log(error)
        }
      };

    useEffect(() => {
    fetchAnime();
    }, [search]);

  return (
    <div className="w-full min-h-screen p-2 px-2 dark:bg-bg-darker transition-colors">
      <div className="max-w-[1240px] pt-32 mx-auto flex flex-col grow items-center">
        <p className="uppercase text-sm tracking-widest">
          <span>Projects</span>
        </p>
        <h2 className="dark:text-h-dark-light">AnimeLibrary</h2>

        <div className="my-8 grid w-[85%] lg:w-[50%] md:w-[75%]">
          {/* Search */}
          <div className="py-6">
            <div className="relative flex w-full flex-wrap items-stretch">
              <input
                type="search"
                className="relative m-0 -mr-0.5 block w-[1px] min-w-0 
                            flex-auto rounded-full border border-solid
                            bg-transparent bg-clip-padding px-3 py-[0.25rem] 
                            text-base font-normal leading-[1.6] text-gray-900 bg-white
                            outline-none transition duration-200 ease-in-out focus:z-[3] 
                            border-gray-300 dark:bg-bg-dark dark:text-p-dark-light
                            focus:border-blue-500"
                placeholder="Search Anime..."
                aria-label="Search Anime..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-full pb-6">
      <AnimeItems animeList = {animeList}/>
      </div>
    </div>
  );
};

export default AnimeLibrary;
