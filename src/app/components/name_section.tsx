import { motion } from "framer-motion";

export default function NameSection({ nama }) {
  return (
    <section className="justify-between items-center flex flex-wrap w-full px-4 md:px-8 lg:px-16">
      <div className="flex flex-col justify-center items-center w-full lg:w-auto mb-4 lg:mb-0">
        {/* Animasi Fade-in pada Teks "Merry" */}
        <motion.div
          className="px-3 md:px-5 bg-[#caab7f] justify-center items-center inline-flex rounded"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-center text-white text-lg md:text-2xl font-semibold font-SourceSerifProItl">
            Merry
          </h1>
        </motion.div>

        <div className="flex justify-center items-center gap-2 md:gap-5 mt-3">
          {/* Animasi Glow pada Gambar Bintang */}
          <motion.img
            src="/star.png"
            width={32}
            height={32}
            alt="Picture of the author"
            initial={{ filter: "drop-shadow(0px 0px 0px rgba(0, 255, 0, 0))" }}
            animate={{
              filter: [
                "drop-shadow(0px 0px 7px rgba(255, 255, 255, 1))", // Glow aktif
                "drop-shadow(0px 0px 0px rgba(255, 255, 255, 0))", // Glow mati
              ],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />

          {/* Animasi Bouncing pada Teks "Christmast" */}
          <motion.h1
            className="text-center text-white text-7xl sm:text-6xl md:text-7xl lg:text-8xl font-imperialScript"
            style={{ textShadow: "0 1px 25px rgba(255, 255, 255, 0.8)" }}
            initial={{ x: 0 }}
            animate={{
              x: [0, -10, 0], // Melompat naik dan turun
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            Christmast
          </motion.h1>

          {/* Animasi Glow pada Gambar Bintang */}
          <motion.img
            src="/star.png"
            width={35}
            height={35}
            alt="Picture of the author"
            initial={{ filter: "drop-shadow(0px 0px 0px rgba(0, 255, 0, 0))" }}
            animate={{
              filter: [
                "drop-shadow(0px 0px 7px rgba(255, 255, 255, 1))", // Glow aktif
                "drop-shadow(0px 0px 0px rgba(255, 255, 255, 0))", // Glow mati
              ],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        </div>
      </div>

      {/* Tree Image */}
      <div className="w-full sm:w-auto flex justify-center items-center mt-4 lg:mt-0">
        <motion.img
          src="/tree.svg"
          alt="imageoffigma"
          className=" sm:h-44 md:h-52 lg:h-64"
          initial={{ filter: "drop-shadow(0px 0px 0px rgba(0, 255, 0, 0))" }}
          animate={{
            filter: [
              "drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.8))", // Glow aktif
              "drop-shadow(0px 0px 0px rgba(255, 255, 255, 0))", // Glow mati
            ],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </div>

      {/* Name Text */}
      <div className="w-full lg:w-auto flex justify-center sm:justify-start items-center mt-4 lg:mt-0 pl-3 md:pl-7">
        <div className="text-white text-3xl sm:text-5xl  font-thin italic font-SourceSerifProItl">
          *{nama}
        </div>
      </div>
    </section>
  );
}
