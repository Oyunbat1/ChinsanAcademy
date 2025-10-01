"use client"
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Card({ i, title, description, img, color, range, targetScale, progress }) {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"]
    })

    const Imagescale = useTransform(scrollYProgress, [0, 1], [2, 1])
    const scale = useTransform(progress, range, [1, targetScale])

    return (
        <div 
            ref={container} 
            className="h-screen sticky top-6 flex items-center justify-center"
        >
            <motion.div 
                style={{ scale, backgroundColor: color, top: `calc(20% + ${i * 25}px)` }}
                className="w-full max-w-[900px] min-h-[400px] sm:h-[500px] rounded-2xl flex flex-col justify-around items-center border border-black p-6 sm:p-10 shadow-lg"
            >
                {/* Title */}
                <div className="mb-4 sm:mb-6 text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#FF9443] font-sans font-bold">
                        {title}
                    </h1>
                </div>

                {/* Content Row */}
                <div className="flex flex-col md:flex-row justify-center gap-6 sm:gap-10 w-full items-center">
                    {/* Text */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-[22px] max-w-[500px] text-center md:text-left">
                        {description}
                    </p>

                    {/* Image */}
                    <div className="rounded-2xl overflow-hidden relative w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]">
                        <motion.div style={{ scale: Imagescale }} className="h-full w-full ">
                            <Image 
                                src={`/${img}`} 
                                alt="service image"
                                fill
                                className="object-contain  rounded-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
