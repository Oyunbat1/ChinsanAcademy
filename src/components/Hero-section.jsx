"use client";
import TextType from "./TextType";
import TeacherWithStudents from "../../public/teacherWithStudents.png";
import Image from "next/image";
import TiltedCard from './TiltedCard';

export default function HeroSection() {
  return (
    <section className="relative w-full flex justify-center ">
      <div className="container  justify-center   py-4 flex flex-col-reverse lg:flex-row items-center gap-12 ">
        <div className="rounded-2xl overflow-hidden mt-[40px] md:mt-[130px]">
   <TiltedCard
  imageSrc={TeacherWithStudents}
  altText="ChinsanAcademy"
  captionText="ChinsanAcademy"
  containerHeight="450px"
  containerWidth="300px"
  imageHeight="450px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text">
     
    </p>
  }
/>
   </div>
        <div className=" text-center lg:text-left mt-[100px] lg:ml-[100px] w-[340px] lg:w-[600px]">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            Таны амжилтын <br className="hidden sm:block" /> эхлэл эндээс
          </h1>

          <TextType
            className="text-white text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0"
            text={[
              "Бид танд өөртөө итгэлтэйгээр ярих, бичих, танилцуулах чадварыг хөгжүүлэхэд тусална.",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-[#FF9443] hover:text-white transition duration-300">
              Дэлгэрэнгүй
            </button>
          </div>
        </div>
        


      </div>
    </section>
  );
}
