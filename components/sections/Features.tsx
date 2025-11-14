"use client";

import { Crown, Plus } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Only apply on mobile
    const mm = gsap.matchMedia();

    mm.add("(max-width: 1023px)", () => {
      const section = document.querySelector('section');
      
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const isLastCard = index === cardsRef.current.length - 1;
        
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: isLastCard ? section : card,
          end: isLastCard ? "bottom bottom" : "bottom top",
          pin: true,
          pinSpacing: false,
          scrub: true,
        });

        // Scale down effect as it scrolls away (but not for last card)
        if (!isLastCard) {
          gsap.to(card, {
            scale: 0.9,
            opacity: 0.8,
            scrollTrigger: {
              trigger: card,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        {/* Features Badge */}
        <div className="mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#3474FF1A] rounded-full px-4 py-2 shadow-sm">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 22H7C6.59 22 6.25 21.66 6.25 21.25C6.25 20.84 6.59 20.5 7 20.5H17C17.41 20.5 17.75 20.84 17.75 21.25C17.75 21.66 17.41 22 17 22Z" fill="#0976FF" />
              <path d="M20.35 5.52004L16.35 8.38004C15.82 8.76004 15.06 8.53004 14.83 7.92004L12.94 2.88004C12.62 2.01004 11.39 2.01004 11.07 2.88004L9.16998 7.91004C8.93998 8.53004 8.18997 8.76004 7.65998 8.37004L3.65998 5.51004C2.85998 4.95004 1.79998 5.74004 2.12998 6.67004L6.28998 18.32C6.42998 18.72 6.80998 18.98 7.22998 18.98H16.76C17.18 18.98 17.56 18.71 17.7 18.32L21.86 6.67004C22.2 5.74004 21.14 4.95004 20.35 5.52004ZM14.5 14.75H9.49998C9.08998 14.75 8.74998 14.41 8.74998 14C8.74998 13.59 9.08998 13.25 9.49998 13.25H14.5C14.91 13.25 15.25 13.59 15.25 14C15.25 14.41 14.91 14.75 14.5 14.75Z" fill="#0976FF" />
            </svg>

            <span className="text-[#3474FF] font-medium text-[16px]">Features</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 lg:gap-6">
            {/* Card 1: Audio summaries */}
            <div 
              ref={(el) => { cardsRef.current[0] = el; }}
              className="bg-[#C8D9F9] w-full max-h-[448px] lg:w-fit rounded-3xl p-6 lg:p-8 flex flex-col gap-4 lg:gap-6 overflow-hidden"
            >
              <div className="space-y-3">
                <h3 className="text-2xl txt-fnt lg:text-3xl xl:text-4xl font-bold text-[#1E3A8A] leading-tight lg:leading-none">
                  Audio summaries<br />for each toy
                </h3>
                <p className="text-sm font-normal lg:text-base leading-5 lg:max-w-[491px]">
                  Perfect for kids who can't read yet with engaging audio summaries that bring each toy to life.
                </p>
              </div>

              {/* Audio Player Visual */}
              <div className="mt-auto w-full">
                <img
                  src="/images/features/audio.png"
                  alt=""
                  className="w-full h-auto max-w-full"
                />
              </div>
            </div>

            {/* Card 3: Toy collection library */}
            <div 
              ref={(el) => { cardsRef.current[2] = el; }}
              className="bg-[#B5E2C7] max-h-[512px] lg:w-full rounded-3xl p-6 lg:p-8 flex flex-col gap-4 lg:gap-6 overflow-hidden"
            >
              <div className="space-y-3">
                <h3 className="text-2xl txt-fnt lg:text-3xl xl:text-4xl font-bold text-[#145F35] leading-tight lg:leading-none">
                  Toy collection<br />library
                </h3>
                <p className="text-sm lg:text-base lg:max-w-[390px]">
                 Smart AI recognition for quick toy discovery and effortless collection cataloging.

                </p>
              </div>

              {/* Stacked Cards with SpongeBob */}
              <div className="mt-auto relative w-full max-w-full lg:w-fit">
                {/* Bottom card shadows - now visible */}
                <div className="">
                  <div className="absolute -bottom-4 left-1/2 lg:left-[220px] transform -translate-x-1/2 w-[80%] h-3 bg-[#FCBAB3] rounded-b-2xl z-11" />
                  <div className="absolute -bottom-2 left-1/2 lg:left-[220px] transform -translate-x-1/2 w-[90%] h-3 bg-[#FEE6AD] rounded-b-2xl z-11" />
                </div>

                {/* Main card */}
                <div className="relative bg-[#3BC377] left-0 lg:left-[94px] rounded-2xl p-2 overflow-hidden z-10 mx-auto lg:mx-0">
                  <div className="flex flex-col gap-3">
                    {/* Text content - now in row */}
                    <div className="">
                      <h4 className="text-base sm:text-lg lg:text-2xl font-bold leading-tight">SpongeBob</h4>
                      <p className="text-xs leading-relaxed mt-1">
                        Sponge living in a pineapple under the sea
                      </p>
                    </div>

                    {/* SpongeBob image - now in row */}
                    <div className="flex justify-center lg:justify-start">
                      <Image
                        src="/images/features/spongebob.png"
                        alt="SpongeBob Toy"
                        width={175}
                        height={260}
                        className="w-full md:max-w-[175px] lg:max-w-none object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 lg:gap-6">
            {/* Card 2: AI-powered recognition */}
            <div 
              ref={(el) => { cardsRef.current[1] = el; }}
              className="bg-[#FCBAB3] w-full max-h-[512px] lg:w-full rounded-3xl px-6 pt-6 lg:pt-8 lg:px-8 lg:pb-0 flex flex-col gap-4 lg:gap-6 overflow-hidden"
            >
              <div className="space-y-3">
                <h3 className="text-2xl txt-fnt lg:text-3xl xl:text-4xl font-bold text-[#A83324] leading-tight lg:leading-none">
                  AI-powered<br />recognition
                </h3>
                <p className="text-sm lg:text-base lg:max-w-[390px]">
                  Smart identification using AI-powered recognition for fast and accurate toy discovery.
                </p>
              </div>

              {/* Robot Illustration */}
              <div className="mt-auto flex items-center justify-center w-full pb-0">
                <img
                  src="/images/features/ai-image.png"
                  alt=""
                  className="w-full max-w-[250px] lg:max-w-[310px] h-auto"
                />
              </div>
            </div>

            {/* Card 4: Share with friends - reduced height */}
            <div 
              ref={(el) => { cardsRef.current[3] = el; }}
              className="bg-[#FEE6AC] w-full max-h-[448px] lg:w-full rounded-3xl p-4 lg:p-6 flex flex-col gap-3 lg:gap-4 overflow-hidden"
            >
              <div className="space-y-2">
                <h3 className="text-2xl txt-fnt lg:text-3xl xl:text-4xl font-bold text-[#826218] leading-tight lg:leading-none">
                  Share with friends<br />easily
                </h3>
                <p className="text-sm lg:text-base lg:max-w-[390px]">
                  Share your favourite toy collection list with friends and family in just a few taps.
                </p>
              </div>

              {/* Share Interface - reduced spacing */}
              <div className="mt-auto w-full">
                <div className="bg-[#FFC644] rounded-2xl p-4 lg:p-5">
                  <div className="mb-3">
                    <h4 className="text-sm txt-fnt lg:text-base font-bold mb-0.5 text-[#826218]">Share your toy</h4>
                    <p className="text-xs text-[#826218]/80">Choose who to share your toy with</p>
                  </div>

                  {/* Avatar List - reduced spacing */}
                  <div className="flex items-center gap-2 mb-3 overflow-x-auto pb-1 scrollbar-hide">
                    {[
                      { name: "Bran", image: "/images/features/bran.svg" },
                      { name: "Don", image: "/images/features/dan.svg" },
                      { name: "Joy", image: "/images/features/joy.svg" },
                      { name: "Ava", image: "/images/features/ava.svg" }
                    ].map((person) => (
                      <div key={person.name} className="flex flex-col items-center gap-1 flex-shrink-0">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden bg-gray-200">
                          <img
                            src={person.image}
                            alt={person.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-xs font-medium text-[#826218]">{person.name}</span>
                      </div>
                    ))}

                    {/* Add New Button */}
                    <div className="flex flex-col items-center gap-1 flex-shrink-0">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-dashed border-[#826218]/40 flex items-center justify-center">
                        <Plus className="w-5 h-5 text-[#826218]/60" />
                      </div>
                      <span className="text-xs font-medium text-[#826218]">Add New</span>
                    </div>
                  </div>
                </div>

                {/* Share Button */}
                <div className="flex justify-end mt-1">
                  <button className="w-fit bg-[#FFC644] hover:bg-[#e0b03d] text-[#826218] font-normal py-1.5 px-5 lg:py-2 lg:px-6 rounded-xl transition-all duration-300 flex items-center gap-2 text-sm">
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}