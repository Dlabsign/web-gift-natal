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
        <NameSection nama={"Ce Maria"} />
      </div>
      <div className="px-7 sm:px-14 mt-24 flex flex-col justify-center items-center">
        <Kalimat
          tekskata={
            "Selamat Natal, Ce Maria! 🎋🎄 Terima kasih banyak, Ce, karena sudah menjadi Gembala AOG yang luar biasa buat kami di Sidoarjo. Melalui Ce Maria, kami belajar dan menyaksikan gimana rencana Tuhan dapat terwujud dengan begitu cepatt. Dari Ce Maria, kita juga belajar kalau pemakaian Tuhan ndak bisa dibatasi oleh apa pun! Terima kasih ya Cee atas teladan dan pelayanan yang Selalu mengukatkan kami semua. Terima Kasih Ce Maria ✨✨. ~ CGL Y3"
          }
        />
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
        <WishCard nama={"Ce Maria"} />
      </div>
      <BackgroundSound />
    </section>
  );
}
