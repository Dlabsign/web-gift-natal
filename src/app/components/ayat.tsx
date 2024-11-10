"use client";
import React from "react";
import {bibleVerse} from"../../../backend/data.js";

export default function QuoteSection() {
  

  const kalimatRandom = bibleVerse[Math.floor(Math.random()*bibleVerse.length)]

  return (
    <section className="w-full flex flex-col justify-center items-center text-white ">
      <div className="relative  flex justify-between items-center">
        <img
          src="/quotes.svg"
          alt=""
          className="absolute top-0 left-0 h-5 sm:h-9 "
        />
        <p className="px-6 sm:px-10 text-center text-lg sm:text-xl md:text-2xl italic leading-relaxed tracking-wide mx-4 font-SourceSerifProItl font-bold sm:font-medium  text-slate-100">
          {kalimatRandom.kalimat}
        </p>
        <img
          src="/quotes.svg"
          alt=""
          className="absolute bottom-0 right-0 rotate-180 h-5 sm:h-9 "
        />
      </div>
      <p className="mt-4 text-sm sm:text-base md:text-lg italic text-gray-300 font-SourceSerifPro">
        {kalimatRandom.pasal}
      </p>
    </section>
  );
}
