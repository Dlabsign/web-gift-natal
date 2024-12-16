"use client";
import React from "react";

interface NameSectionProps {
  tekskata: string;
}

export default function Kalimat({ tekskata }: NameSectionProps) {
  return (
    <section className="w-full flex flex-col justify-center items-center text-white ">
      <div className="relative  flex justify-between items-center">
        <img
          src="/quotes.svg"
          alt=""
          className="absolute top-0 left-0 h-5 sm:h-9 "
        />
        <p className="px-6 sm:px-10 text-center text-lg sm:text-xl md:text-2xl italic leading-relaxed tracking-wide mx-4 font-SourceSerifProItl font-bold sm:font-medium  text-slate-100">
          {tekskata}
        </p>
        <img
          src="/quotes.svg"
          alt=""
          className="absolute bottom-0 right-0 rotate-180 h-5 sm:h-9 "
        />
      </div>
    </section>
  );
}
