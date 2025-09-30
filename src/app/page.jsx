"use client"
import Lenis from 'lenis';
import Silk from '../components/Silk';
import HeroSection from '../components/Hero-section';
export default function Home() {

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
  return (
  <div>
  <Silk
  speed={5}
  scale={1}
  color="#FF9443"
  noiseIntensity={1.5}
  rotation={0}
/>
<HeroSection />
<div className='h-screen'>a</div>
</div>
  );
}
