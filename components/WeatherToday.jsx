import React, { useState, useEffect } from 'react'
import axios from 'axios'

const WeatherToday = () => {
    const [data, setData] = useState({})
    const [location, setLocation] = useState("")

    const url = ""

    const searchLocation = () => {

        axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=imperial&appid=af74a38c175d420e6b4fab8313401c87").then((response) => {
            setData(response.data)
            console.log(response.data)

        })
        setLocation("")

    }

    useEffect(() => {
        searchLocation()
    }, [location])

    return (
        <div className="bg-sunny bg-cover bg-center flex flex-col w-full h-screen p-6">
            <div className="flex flex-col w-[85%] md:w-[75%] lg:w-[35%] h-[700px] 
            m-auto p-6 relative justify-between bg-zinc-900 bg-opacity-50 rounded-3xl">
                {/* Search */}
                <div className="w-full mx-auto">
                    <div className="flex w-full">
                        <input
                            type="search"
                            className="relative m-0 -mr-0.5 block w-[1px] min-w-0 
                        flex-auto rounded-full border border-solid
                        bg-transparent bg-clip-padding p-3
                        text-base font-normal leading-[1.6] text-slate-200 placeholder:text-gray-300
                        outline-none transition duration-200 ease-in-out focus:z-[3] 
                        border-gray-300"
                            placeholder="Type Location..."
                            aria-label="Type Location..."
                            onChange={(e) => setLocation(e.target.value)} />
                    </div>
                </div>

                {data.name != undefined &&
                    <div className="grid grid-cols-1 content-center animate animate-fade-down">
                        <div className="px-8">
                            <p className="text-slate-200">{data.name}, {data.sys.country}</p>
                            {data.main
                                ? <h1 className="text-8xl py-4 text-slate-200">{data.main.temp.toFixed()}°C</h1>
                                : null}
                            {data.weather
                                ? <p className="text-slate-200">{data.weather[0].main}</p>
                                : null}
                            {data.weather
                                ? <p className="text-slate-200">{data.weather[0].description}</p>
                                : null}
                        </div>
                    </div>
                }

                {data.name != undefined &&
                    <div className="w-full grid grid-cols-3 text-center bg-slate-200 bg-opacity-25 p-4 rounded-xl animate animate-fade-up">
                        <div className="">
                            {data.main
                                ? <p className="text-2xl font-bold text-slate-200">{data.main.feels_like.toFixed()}°C</p>
                                : null}
                            <p className="text-slate-200 tracking-wide">Feels Like</p>
                        </div>
                        <div className="">
                            {data.main
                                ? <p className="text-2xl font-bold text-slate-200">{data.main.humidity}%</p>
                                : null}
                            <p className="text-slate-200 tracking-wide">Humidity</p>
                        </div>
                        <div className="">
                            {data.wind
                                ? <p className="text-2xl font-bold text-slate-200">{data.wind.speed}MPH</p>
                                : null}
                            <p className="text-slate-200 tracking-wide">Wind Speed</p>
                        </div>
                    </div>
                }


            </div>
        </div>


    )
}

export default WeatherToday