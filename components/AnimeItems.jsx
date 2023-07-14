'use client'
import Image from "next/image";
import React from "react";

const AnimeItems = ({ animeList }) => {
  return (
    <>
      {animeList
        ? animeList.map((anime, index) => {
            return (
              <div key={index} className="w-full flex flex-col items-center">
                <div
                  className="flex rounded-sm w-[85%] h-full md:w-[95%] lg:w-[95%] bg-white dark:bg-bg-dark shadow 
                        p-6 m-2 items-center hover:shadow-md"
                >
                  <Image
                    className="rounded-md mr-4"
                    src={anime.attributes.posterImage.large}
                    width="64"
                    height="64"
                    alt=""
                  />
                  <div>
                    <p className="text-zinc-900 font-bold dark:text-p-dark-light">
                      {anime.attributes.canonicalTitle}
                    </p>
                    <p className="text-sm font-semibold text-gray-800 dark:text-p-dark-light">
                      Number of Episodes - {anime.attributes.episodeCount}
                    </p>
                    <p className="text-sm font-semibold text-gray-800 dark:text-p-dark-light">
                      Duration - {anime.attributes.episodeLength}
                    </p>
                    <p className="text-sm font-semibold text-gray-800 dark:text-p-dark-light">
                      Status - {anime.attributes.status}
                    </p>
                    <p className="text-sm text-gray-800 font-light line-clamp-3 dark:text-p-dark-light">
                      {anime.attributes.synopsis}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        : "Not Found"}
    </>
  );
};

export default AnimeItems;
