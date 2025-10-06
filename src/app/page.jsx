"use client"
import Lenis from 'lenis';
import Silk from '../components/Silk';
import HeroSection from '../components/Hero-section';
import ScrollReveal from '@/components/ScrollReveal';
import SplitText from '@/components/SplitText';
import ScrollCard from '@/components/ScrollCard';
import CircularGallery from '../components/CircularGallery';
import Contact from '@/components/Contact';
import { useEffect } from 'react';
export default function Home() {

useEffect(() => {
  const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
},[])
  return (
  <div >
  <Silk
  speed={5}
  scale={1}
  color="#FF9443"
  noiseIntensity={1.5}
  rotation={0}
/>
<HeroSection />
<div id='about' className='h-screen  flex flex-col gap-10 items-center justify-center text-white m-[10px_20px] lg:m-[10px_40px] mt-[80px] lg:mt-[180px] scroll-mt-[120px]'>
  <SplitText
  text="Chinsan Academy"
  className="text-5xl font-semibold text-center mt-12"
  delay={200}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
/>
  <ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
>
 SkillSpeak нь мэргэжилтэн, оюутан, удирдагч бүрийн ярианы айдсыг даван туулах, харилцааны ур чадварыг хөгжүүлэхэд тусалдаг.
  Бид таныг бичих, илтгэх, олон нийтийн өмнө өөрийгөө итгэлтэй илэрхийлэхэд чиглэсэн сургалтыг санал болгодог.
</ScrollReveal>
</div>
  <div id='services' className='flex flex-col justify-center items-center scroll-mt-[120px] '>
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-center px-4">
  Манай гол үйлчилгээнүүд
</h2>

    <ScrollCard/>
</div>
<div id='reviews' className='relative mb-[200px] mt-[10px] h-[420px] sm:h-[520px] md:h-[600px] lg:h-[640px] xl:h-[720px]'>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} items={[
      { image: "/testimonial/Buyntogtoh.jpg", text: "Б.Буянтогтох", description: "IELTS 7.0, Debate Champion" },
      { image: "/testimonial/Erdem-Tuguldur.jpg", text: "Б.Эрдэм-Төгөлдөр", description: "Public Speaking Finalist" },
      { image: "/testimonial/Misheel.jpg", text: "Б.Мишээл", description: "Creative Writing Award" },
      { image: "/testimonial/Sarnai.jpg", text: "Д.Сарнай", description: "Oratory Top 10" },
      { image: "/testimonial/Saruul.jpg", text: "Г.Саруул", description: "Debate Club Lead" },
      { image: "/testimonial/Turbat.jpg", text: "Б.Төрбат", description: "Storytelling Winner" },
    ]}/>
</div>
<div id='contact' className='scroll-mt-[120px]'>
<Contact />
</div>
</div>
  );
}
