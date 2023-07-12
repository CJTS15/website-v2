import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'

import { WiThermometer, WiHumidity, WiWindy } from 'react-icons/wi'
import { BiSearch } from 'react-icons/bi'

const WeatherToday = () => {
    const [data, setData] = useState({})
    const [location, setLocation] = useState("")

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

    const locale = "en"
    const [today, setToday] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setToday(new Date())
        }, 60 * 100)
        return () => {
            clearInterval(timer)
        }
    })

    const day = today.toLocaleDateString(locale, { weekday: "long" })
    const month = today.toLocaleDateString(locale, { month: "long" })

    const hour = today.getHours();
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'} `;

    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });

    return (
        <div className="bg-gradient bg-cover bg-center flex flex-col w-full h-screen p-2">
            <div className="flex flex-col w-[95%] sm-w[100%] md:w-[75%] lg:w-[35%] h-[700px] 
            m-auto p-6 relative justify-between bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg  rounded-3xl">
                {/* Search */}
                <div className="w-full mx-auto">
                    <div className="relative flex w-full">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-zinc-700">
                            <BiSearch size={20} />
                        </div>
                        <input
                            type="search"
                            className="m-auto relative block w-[1px] min-w-0 
                        flex-auto rounded-full border border-solid
                        bg-transparent bg-clip-padding p-2 pl-10
                        text-base font-normal leading-[1.6] text-zinc-700 placeholder:text-zinc-600 
                         outline-none transition duration-200 ease-in-out focus:z-[3] 
                        border-slate-400"
                            placeholder=" Type Location..."
                            aria-label="Type Location..."
                            onChange={(e) => setLocation(e.target.value)} />
                    </div>
                </div>

                <div className="grid grid-cols-1 justify-items-center animate animate-fade-down">
                    <div className="px-2 text-center">
                        <h1 className="font-light text-4xl py-4 text-zinc-700">{wish}👋</h1>
                        <p className="font-light text-xl text-zinc-700 uppercase">{day}, {time}</p>
                    </div>
                </div>

                {data.name != undefined &&
                    <div className="grid grid-cols-1 justify-items-center animate animate-fade-down">
                        <div className="px-2 text-center">
                            {data.weather
                                ? <Image className="mx-auto" src={"http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"}
                                    width="64" height="64" />
                                : null}
                            {data.weather
                                ? <p className="text-zinc-700">{data.weather[0].main}</p>
                                : null}
                            <p className="text-zinc-700">{data.name}, {data.sys.country}</p>
                            {data.main
                                ? <h1 className="text-7xl py-4 text-zinc-700">{data.main.temp.toFixed()}°C</h1>
                                : null}

                        </div>
                    </div>
                }

                {data.name != undefined &&
                    <div className="w-full grid grid-cols-3 justify-items-center
                    bg-slate-400 bg-opacity-25 p-4 rounded-xl animate animate-fade-up">
                        <div className="mx-auto text-center">
                            {data.main
                                ? <p className="text-xl font-bold text-zinc-700"><WiThermometer className="mx-auto" />{data.main.feels_like.toFixed()}°C</p>
                                : null}
                            <p className="text-sm text-zinc-700 tracking-wide">Feels Like</p>
                        </div>
                        <div className="mx-auto text-center">
                            {data.main
                                ? <p className="text-xl font-bold text-zinc-700"><WiHumidity className="mx-auto" />{data.main.humidity}%</p>
                                : null}
                            <p className="text-sm text-zinc-700 tracking-wide">Humidity</p>
                        </div>
                        <div className="mx-auto text-center">
                            {data.wind
                                ? <p className="text-xl font-bold text-zinc-700"><WiWindy className="mx-auto" />{data.wind.speed.toFixed()}MPH</p>
                                : null}
                            <p className="text-sm text-zinc-700 tracking-wide">Wind</p>
                        </div>
                    </div>
                }


            </div>
        </div>


    )
}

export default WeatherToday