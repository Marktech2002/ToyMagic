"use client";

import PuzzleIcon from "@/components/icons/PuzzleIcon";
import CameraEmojiIcon from "@/components/icons/CameraEmojiIcon";
import PeaceHandIcon from "@/components/icons/PeaceHandIcon";
import SparklesIcon from "@/components/icons/SparklesIcon";
import ArrowEmojiIcon from "@/components/icons/ArrowEmojiIcon";
import SmileyFaceIcon from "@/components/icons/SmileyFaceIcon";
import CurvedArrowIcon from "@/components/icons/CurvedArrowIcon";
import ScribbleArrowIcon from "@/components/icons/ScribbleArrowIcon";
import YellowArrowIcon from "@/components/icons/YellowArrowIcon";
import ArrowToFirstDiv from "@/components/icons/ArrowToFirstDiv";
import ArrowToSecondDiv from "@/components/icons/ArrowToSecondDiv";
import BlowEmojiIcon from "@/components/icons/BlowEmojiIcon";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StepCardProps {
  title: string;
  description: string;
  phoneImage: string;
  backgroundColor: string;
  titleColor: string;
  emojiIcon: React.ReactNode;
  position: "left" | "right";
  reverseOrder?: boolean;
  cardRef?: (el: HTMLDivElement | null) => void;
}

function StepCard({
  title,
  description,
  phoneImage,
  backgroundColor,
  titleColor,
  emojiIcon,
  position,
  reverseOrder = false,
  cardRef,
}: StepCardProps) {
  const textContent = (
    <div className="flex flex-col gap-2 pl-4 lg:gap-3">
      <div className="flex items-center gap-1 lg:gap-1">
        <h3
          className="max-w-[488px] text-[24px] txt-fnt md:leading-[34px] lg:text-[35px] lg:leading-[inherit]"
          style={{ color: titleColor }}
        >
          {title}
        </h3>
        <div className="flex items-center gap-4 md:gap-4 justify-center w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] flex-shrink-0">
          {emojiIcon}
        </div>
      </div>

      <p className="body-how-it-works text-black md:max-w-[488px] max-w-[300px] pb-4 text-[16px] leading-[24px] lg:text-[18px] lg:leading-[inherit]">
        {description}
      </p>
    </div>
  );

  const imageContent = (
    <div
      className="w-full lg:w-[488px] h-[380px] lg:h-[488px] rounded-3xl lg:rounded-4xl flex items-center md:justify-center px-4 lg:p-0"
      // style={{ backgroundColor }}
    >
      <div className="relative w-full h-full max-w-[320px] lg:max-w-none">
        <Image
          src={phoneImage}
          alt={title}
          width={488}
          height={488}
          className="absolute rounded-4xl inset-0 w-full h-full object-cover md:object-contain"
        />
      </div>
    </div>
  );

  return (
    <div ref={cardRef} className="flex flex-col gap-6 lg:gap-8 lg:mt-8">
      {/* Mobile: Always text first */}
      <div className="lg:hidden">
        {textContent}
        {imageContent}
      </div>

      {/* Desktop: Respect reverseOrder prop */}
      <div className="hidden lg:flex lg:flex-col lg:gap-8">
        {reverseOrder ? (
          <>
            {imageContent}
            {textContent}
          </>
        ) : (
          <>
            {textContent}
            {imageContent}
          </>
        )}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const decorationsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Cards animation - stagger them in
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });

      // Decorations animation - fade and scale in
      decorationsRef.current.forEach((decoration) => {
        if (!decoration) return;

        gsap.from(decoration, {
          opacity: 0,
          scale: 0.8,
          duration: 0.6,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: decoration,
            start: "top 90%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-8 lg:py-2">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        {/* Header Badge */}
        <div
          ref={headerRef}
          className="flex items-center text-[#3474FF] gap-[12px] px-5 py-2 lg:px-6 lg:py-2 rounded-[100px] bg-blue-light w-fit mb-10 lg:mb-12"
        >
          <PuzzleIcon width={18} height={18} color="#3474FF" className="lg:w-[20px] lg:h-[20px]" />
          <span className="text-[#3474FF] font-medium text-[16px]">
            How it Works
          </span>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-20 lg:items-start">
          {/* Left Column - Starts at top */}
          <div className="flex flex-col gap-10 lg:gap-12 relative">
            {/* Card 1 - Take a Picture - TEXT FIRST */}
            <div className="relative">
              <StepCard
                title="Take a Picture!"
                description="Open the app and snap a photo of your toy. It's just like magic!"
                phoneImage="/images/phone-blue.png"
                backgroundColor="#3474FF"
                titleColor="#3474FF"
                emojiIcon={<CameraEmojiIcon width={40} height={40} />}
                position="left"
                reverseOrder={false}
                cardRef={(el) => { cardsRef.current[0] = el; }}
              />

              {/* Smiley Icon - top right - DESKTOP ONLY */}
              <div
                ref={(el) => { decorationsRef.current[0] = el; }}
                className="hidden lg:block absolute -top-10 -right-[500px]"
              >
                <SmileyFaceIcon width={141} height={140} />
              </div>

              {/* Curved Arrow - points down-right to Card 2 - DESKTOP ONLY */}
              <div
                ref={(el) => { decorationsRef.current[1] = el; }}
                className="hidden lg:block absolute bottom-[-350px] right-[-200px]"
              >
                <CurvedArrowIcon width={150} height={150} />
              </div>
            </div>

            {/* Spacer between Card 1 and Card 3 - DESKTOP ONLY */}
            <div className="hidden lg:block h-44" />

            {/* Card 3 - Meet Your Toy - IMAGE FIRST */}
            <StepCard
              title="Meet Your Toy"
              description="Open the app and snap a photo of your toy. It's just like magic!"
              phoneImage="/images/phone-orange.png"
              backgroundColor="#E09800"
              titleColor="#E09800"
              emojiIcon={<PeaceHandIcon width={40} height={40} />}
              position="left"
              reverseOrder={true}
              cardRef={(el) => { cardsRef.current[2] = el; }}
            />

            {/* Blow Emoji at bottom - DESKTOP ONLY */}
            <div
              ref={(el) => { decorationsRef.current[2] = el; }}
              className="hidden lg:block"
            >
              <BlowEmojiIcon width={200} height={200} />
            </div>
          </div>

          {/* Right Column - PUSHED DOWN to start below Card 1 */}
          <div className="flex flex-col gap-10 lg:gap-12 lg:mt-[600px] relative">
            {/* Card 2 - Let the Scanner Work - TEXT FIRST */}
            <div className="relative">
              <StepCard
                title="Let the Scanner Work"
                description="Our friendly AI scans your toy, finds its name, and learns all about it!"
                phoneImage="/images/phone-purple.png"
                backgroundColor="#893DED"
                titleColor="#893DED"
                emojiIcon={<SparklesIcon width={40} height={40} />}
                position="right"
                reverseOrder={true}
                cardRef={(el) => { cardsRef.current[1] = el; }}
              />

              {/* Arrow from Card 1 to Card 2 - DESKTOP ONLY */}
              <div
                ref={(el) => { decorationsRef.current[3] = el; }}
                className="hidden lg:block absolute -top-[255px] -left-[220px]"
              >
                <ArrowToFirstDiv width={150} height={150} />
              </div>
            </div>

            {/* Spacer between Card 2 and Card 4 - DESKTOP ONLY */}
            <div className="hidden lg:block h-28 -mb-32" />

            {/* Card 4 - Share with Friends - IMAGE FIRST */}
            <div className="relative">
              <StepCard
                title="Share with Friends"
                description="Open the app and snap a photo of your toy. It's just like magic!"
                phoneImage="/images/phone-green.png"
                backgroundColor="#3BC377"
                titleColor="#3BC377"
                emojiIcon={<ArrowEmojiIcon width={40} height={40} />}
                position="right"
                reverseOrder={false}
                cardRef={(el) => { cardsRef.current[3] = el; }}
              />

              {/* Arrow from Card 3 to Card 4 - DESKTOP ONLY */}
              <div
                ref={(el) => { decorationsRef.current[4] = el; }}
                className="hidden lg:block absolute -top-[190px] -left-60"
              >
                <ArrowToSecondDiv width={356} height={242} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}