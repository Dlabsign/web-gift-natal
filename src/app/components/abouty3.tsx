import React from "react";
import { events } from "../../../backend/data.js";
import { motion } from "framer-motion";
import Image from "next/image.js";

const Timeline = () => {
  return (
    <div className="w-full mx-auto bg-[#B79D65] px-4 md:px-8 lg:px-16">
      <div className="flex flex-col sm:flex-row justify-center text-white items-center gap-2 sm:gap-x-2 tracking-wide py-8 sm:py-16">
        <h1 className="text-2xl font-semibold font-SourceSerifProItl text-center sm:text-left">
          Sefruit Momentsss -
        </h1>
        <h2 className="text-3xl font-bold font-SourceSerifProItl underline text-center sm:text-left">
          CG Youth 03
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white rounded-full h-full"></div>

        {events.map((event, index) => (
          <motion.div
            key={index}
            className={`mb-2 flex items-center w-full ${
              event.align === "left" ? "justify-start" : "justify-end"
            }`}
          >
            <span className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#B5A37C]"></span>
            <span className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#fd4949]"></span>
            <span className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full "></span>

            <div
              className={`w-5/12 ${
                event.align === "left" ? "text-right" : "text-left"
              } relative`}
            >
              {/* Center the dots on the timeline line */}

              <motion.div
                className="relative ease-in-out"
                whileHover={{ rotate: 0 }}
                initial={{ opacity: 0, y: 20, rotate: -15 }}
                whileInView={{ opacity: 1, y: 0, rotate: 5 }}
                transition={{ duration: 1.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="p-1 sm:p-2 bg-white shadow-lg rounded-lg">
                  <Image
                    src={event.gambar}
                    alt=""
                    className="mt-0 sm:mt-1 rounded"
                    width={500} // Define width for aspect ratio calculation
                    height={300} // Define height for aspect ratio calculation
                  />{" "}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
