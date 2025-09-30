"use client"
import Silk from '../components/Silk';
import HeroSection from '../components/Hero-section';
export default function Home() {
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
</div>
  );
}
