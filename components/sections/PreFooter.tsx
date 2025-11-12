"use client";

import { useEffect, useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import type { FAQ as FAQType } from "@/types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MockUpPattern from "@/components/icons/MockUpPattern";

gsap.registerPlugin(ScrollTrigger);



export default function PreFooter() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (sectionRef.current) {
  //     gsap.from(sectionRef.current.querySelectorAll(".animate-scroll"), {
  //       opacity: 0,
  //       y: 50,
  //       duration: 0.8,
  //       stagger: 0.1,
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top 80%",
  //       },
  //     });
  //   }
  // }, []);

return (
  <section
    ref={sectionRef}
    className="relative w-full border-b border-b-white px-4 max-h-[646px] lg:px-16 pt-16 bg-[#3474FF] overflow-hidden"
  >
    <div className="max-w-7xl mx-auto px-4 lg:px-16 relative">
      <div className="absolute -mt-12 right-[170px] bottom-0 hidden md:block z-0">
        <MockUpPattern width={849} height={634} className="opacity-90" />
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between relative z-10">
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h2 className="text-[32px] txt-fnt sm:text-[40px] lg:text-[50px] font-bold text-white leading-[1.2] max-w-[534px] mx-auto lg:mx-0 relative">
            Ready to see the  <br className="hidden sm:block" />  magic of your <br className="hidden sm:block" /> toys?
            <span className="absolute left-[60%] sm:left-[250px] inline-block">
              <Image
                src="/images/hero/sparkle.svg"
                alt=""
                width={25}
                height={31}
                className="w-[16px] h-[20px] sm:w-[22px] sm:h-[27px] lg:w-[25px] lg:h-[31px]"
              />
            </span>
          </h2>

          <div className="flex justify-center lg:justify-start">
            <button className="bg-[#FFFFFF] hover:bg-[#2563eb] italic leading-none hover:text-white text-[#3474FF] font-semibold text-[16px] sm:text-[18px] px-5 sm:px-7 lg:px-8 py-3 sm:py-[18px] lg:py-5 rounded-4xl transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-xl flex items-center gap-2 sm:w-fit justify-center">
              <span style={{ letterSpacing: '-0.90px' }}>
                Download on Appstore
              </span>
              <Image
                src="/images/stories/blueApple.png"
                alt="Apple"
                width={18}
                height={16}
                className="w-4 h-[14px] sm:w-[17px] sm:h-[15px] lg:w-[18px] lg:h-[16px]"
              />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE – shown on all screens but styled nicely on mobile */}
        <div className="mt-10 lg:mt-0 relative z-10 flex justify-center lg:justify-end w-full lg:w-auto">
          <Image
            src="/images/stories/mock-up.png"
            alt=""
            width={300}
            height={600}
            className="block lg:hidden w-[220px] sm:w-[260px] md:w-[300px] h-auto drop-shadow-2xl"
          />
          <Image
            src="/images/stories/mock-up.png"
            alt=""
            width={443}
            height={917}
            className="hidden lg:block z-10"
          />
        </div>
      </div>
    </div>
  </section>
);


}