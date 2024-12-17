"use client"; // Tambahkan ini di baris pertama
import NameSection from "@/app/components/name_section";
import Snow from "../../../../public/vendor/snow";
import Timeline from "@/app/components/abouty3";
import QuoteSection from "@/app/components/ayat";
import BackgroundSound from "@/app/components/sound";
import WishCard from "@/app/components/card";
import Kalimat from "@/app/components/teks";

export default function Keisha() {
  return (
    <section
      className="bg-primary-color h-full  "
      style={{
        background: "linear-gradient(-90deg, #042D2F, #094A4D)",
      }}
    >
      <Snow />
      <div className="pt-10 sm:pt-24">
        <NameSection nama={"Gabriella Sharon Jessica"} />
      </div>
      <div className="px-7 sm:px-14 mt-24 flex flex-col justify-center items-center">
        <Kalimat tekskata={"Merry Christmas Cee Jessi, Thnkyouu Yaa cee sudah menjadi CGL & Coach buat diriku hehee, mungkin lek gk ada cc, diriku gk bakal God bless you abundantly! ✨"} />
      </div>
      <div className="mt-10 sm:mt-44 h-full flex flex-col justify-center items-center">
        <Timeline />
      </div>
      <div className="px-7 sm:px-14 py-16 sm:py-24 flex flex-col justify-center items-center">
        <QuoteSection />
      </div>
      <div className="px-7 sm:px-14 py-5 sm:py-10  flex flex-col justify-center items-center">
        <img src="/circle.svg" alt="" className="h-[150px] " />{" "}
      </div>
      <div className="px-7 sm:px-14 py-5 sm:py-10  flex flex-col justify-center items-center">
        <WishCard nama={"Gabriella Sharon Jessica"} />
      </div>
      <BackgroundSound />
    </section>
  );
}
