"use client"
import services from "../constants/services"
import Card from "./Card";
import { useScroll } from "framer-motion"
import { useRef } from "react";

export default function ScrollCard() {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    })

    return (
        <div 
            ref={container} 
            className="flex flex-col items-center justify-center   px-4"
        >
            {services.map((service, i) => {
                const targetScale = 1 - ((services.length - i) * 0.05)
                return (
                    <Card
                        key={i}
                        i={i}
                        {...service}
                        progress={scrollYProgress}
                        range={[i * 0.25, 1]}
                        targetScale={targetScale}
                    />
                )
            })}
        </div>
    );
}
