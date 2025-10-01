"use client"
import Lenis from 'lenis';
import Silk from '../components/Silk';
import HeroSection from '../components/Hero-section';
import ScrollReveal from '@/components/ScrollReveal';
import SplitText from '@/components/SplitText';
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
<div className='h-screen  flex flex-col gap-10 items-center justify-center text-white m-[10px_20px] lg:m-[10px_40px] mt-[80px] lg:mt-[180px]'>
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
</div>
  );
}
