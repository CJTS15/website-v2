import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

import { WiThermometer, WiHumidity, WiWindy } from "react-icons/wi";

import { PiCoffeeLight } from "react-icons/pi";

const WeatherToday = () => {
  const [data, setData] = useState({});

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=oroquieta+city&units=imperial&appid=" +
    process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const fetchWeather = async () => {
    try {
      axios.get(url).then((response) => {
        setData(response.data)
      });
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const locale = "en";
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setToday(new Date());
    }, 60 * 100);
    return () => {
      clearInterval(timer);
    };
  });

  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const month = today.toLocaleDateString(locale, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const hour = today.getHours();
  const wish = `Good ${
    (hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Evening"
  }`;

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  return (
    <div className="bg-gradient bg-cover bg-center flex flex-col w-full h-screen p-2">
      <div
        className="flex flex-col w-[95%] sm-w[100%] md:w-[75%] lg:w-[25%] h-[700px] 
            m-auto p-6 relative justify-between bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg  rounded-3xl"
      >
        <div className="grid grid-cols-1 justify-items-center animate animate-fade-down">
          <div className="px-2 text-center">
            <i className="flex justify-center mx-auto my-2.5 text-zinc-700">
                <PiCoffeeLight size={28} />
              </i>
            <h1 className="font-medium text-4xl py-2 text-zinc-700 justify-center gap-2">
              {wish}
            </h1>
            <p className="font-medium text-l text-zinc-700 uppercase">{month}</p>
            <p className="font-medium text-xl text-zinc-700 uppercase">
              {day}, {time}
            </p>
          </div>
        </div>

        {data.name != undefined && (
          <div className="grid grid-cols-1 justify-items-center animate animate-fade-down">
            <div className="px-2 text-center">
              {data.weather ? (
                <Image
                  className="mx-auto"
                  src={
                    "http://openweathermap.org/img/wn/" +
                    data.weather[0].icon +
                    "@2x.png"
                  }
                  width="98"
                  height="98"
                  alt="Icon"
                />
              ) : null}
              {data.weather ? (
                <p className="text-zinc-700">{data.weather[0].main}</p>
              ) : null}
              <p className="text-zinc-700">
                {data.name}, {data.sys.country}
              </p>
              {data.main ? (
                <h1 className="text-7xl py-4 text-zinc-700">
                  {data.main.temp.toFixed()}°c
                </h1>
              ) : null}
            </div>
          </div>
        )}

        {data.name != undefined && (
          <div
            className="w-full grid grid-cols-3 justify-items-center
                    bg-slate-400 bg-opacity-25 p-4 rounded-3xl animate animate-fade-up"
          >
            <div className="mx-auto text-center">
              {data.main ? (
                <p className="text-xl font-bold text-zinc-700">
                  <WiThermometer size={25} className="mx-auto" />
                  {data.main.feels_like.toFixed()}°c
                </p>
              ) : null}
              <p className="text-sm text-zinc-700 tracking-wide">Feels Like</p>
            </div>
            <div className="mx-auto text-center">
              {data.main ? (
                <p className="text-xl font-bold text-zinc-700">
                  <WiHumidity size={25} className="mx-auto" />
                  {data.main.humidity}%
                </p>
              ) : null}
              <p className="text-sm text-zinc-700 tracking-wide">Humidity</p>
            </div>
            <div className="mx-auto text-center">
              {data.wind ? (
                <p className="text-xl font-bold text-zinc-700">
                  <WiWindy size={25} className="mx-auto" />
                  {data.wind.speed.toFixed()}MPH
                </p>
              ) : null}
              <p className="text-sm text-zinc-700 tracking-wide">Wind</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherToday;
