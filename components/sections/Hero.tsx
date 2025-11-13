"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const decorBlueFlowerRef = useRef<HTMLDivElement>(null);
  const decorOrangePathRef = useRef<HTMLDivElement>(null);
  const decorArrowRef = useRef<HTMLDivElement>(null);
  const decorPurpleCircleRef = useRef<HTMLDivElement>(null);
  const sparkleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([headingRef.current, subtitleRef.current, buttonRef.current, phoneRef.current], {
        opacity: 0,
      });

      gsap.set(headingRef.current, { y: 30 });
      gsap.set(subtitleRef.current, { y: 20 });
      gsap.set(buttonRef.current, { y: 15, scale: 0.95 });
      gsap.set(phoneRef.current, { x: 50, scale: 0.95 });

      // Decorative elements initial states
      // gsap.set(decorBlueFlowerRef.current, { scale: 0, rotation: -45, transformOrigin: "top right" });
      gsap.set(decorOrangePathRef.current, { scale: 0, rotation: 45, transformOrigin: "bottom left" });
      gsap.set(decorPurpleCircleRef.current, { scale: 0, transformOrigin: "bottom right" });
      gsap.set(decorArrowRef.current, { scale: 0, rotation: -180 });
      gsap.set(sparkleRef.current, { scale: 0, rotation: -90 });

      // Main timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Heading animation
      tl.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // Subtitle animation
      tl.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      }, "-=0.4");

      // Button animation with bounce
      tl.to(buttonRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.4)",
      }, "-=0.3");

      // Phone mockup animation
      tl.to(phoneRef.current, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
      }, "-=0.6");

      // Decorative elements - staggered entrance
      // tl.to(decorBlueFlowerRef.current, {
      //   scale: 1,
      //   rotation: 0,
      //   duration: 0.6,
      //   ease: "back.out(1.7)",
      // }, "-=0.5");

      tl.to(decorOrangePathRef.current, {
        scale: 1,
        rotation: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      }, "-=0.4");

      tl.to(decorPurpleCircleRef.current, {
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.5)",
      }, "-=0.3");

      tl.to(decorArrowRef.current, {
        scale: 1,
        rotation: 0,
        duration: 0.5,
        ease: "back.out(2)",
      }, "-=0.3");

      // Sparkle animation with rotation
      tl.to(sparkleRef.current, {
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: "back.out(3)",
      }, "-=0.2");


      // Continuous animations
      // Sparkle twinkle
      gsap.to(sparkleRef.current, {
        x: 15, 
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1,
      });

      // Blue flower gentle rotation
      // gsap.to(decorBlueFlowerRef.current, {
      //   rotation: 5,
      //   duration: 3,
      //   ease: "sine.inOut",
      //   yoyo: true,
      //   repeat: -1,
      //   delay: 1.5,
      // });

      // Orange path subtle movement
      gsap.to(decorOrangePathRef.current, {
        x: -3,
        y: 3,
        duration: 2.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.5,
      });

      // Purple circle breathing effect
      gsap.to(decorPurpleCircleRef.current, {
        scale: 1.05,
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.5,
      });

      // Arrow bounce
      gsap.to(decorArrowRef.current, {
        y: -5,
        x: 3,
        duration: 1.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.5,
      });

      // Phone subtle float
      gsap.to(phoneRef.current, {
        y: -10,
        duration: 2.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1,
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative bg-[#F0F2F9] overflow-hidden"
      style={{ minHeight: "747px" }}
    >
      <div className="mx-auto px-4 lg:px-16 py-2.5 md:py-6 lg:py-[24px]">
        <div className="grid lg:grid-cols-2 gap-8 items-start relative">
          {/* Left Content */}
          <div className="relative z-10 pt-8 sm:pt-16 lg:pt-[138px] bg-white w-full max-w-full lg:max-w-[664px] h-full rounded-2xl sm:rounded-3xl lg:rounded-4xl mx-auto lg:ml-[70px] px-6 sm:px-8 lg:px-10 pb-8 sm:pb-12 lg:pb-0">
            {/* Decorative blue flower - top right */}
            <div
              ref={decorBlueFlowerRef}
              className="absolute right-0 top-0 w-[120px] h-[100px] sm:w-[180px] sm:h-[150px] lg:w-[220px] lg:h-[182px] pointer-events-none overflow-hidden rounded-tr-2xl sm:rounded-tr-3xl lg:rounded-tr-4xl"
            >
              <Image
                src="/images/hero/path.svg"
                alt=""
                width={220}
                height={182}
                className="w-full h-full filter opacity-40"
              />
            </div>
            {/* Decorative orange path - bottom left */}
            <div
              ref={decorOrangePathRef}
              className="absolute left-0 bottom-0 w-[150px] h-[110px] sm:w-[220px] sm:h-[160px] lg:w-[297px] lg:h-[213px] pointer-events-none"
            >
              <Image
                src="/images/hero/orange-path.svg"
                alt=""
                width={297}
                height={213}
                className="w-full h-full opacity-40"
              />
            </div>

            {/* Decorative curved arrow - middle - hidden on mobile */}
            <div
              ref={decorArrowRef}
              className="hidden lg:block absolute left-[305px] top-[420px] w-[132px] h-[109px] pointer-events-none"
            >
              <Image
                src="/images/hero/curved-arrow.svg"
                alt=""
                width={113}
                height={64}
              />
            </div>

            {/* Decorative purple circle - bottom right */}
            <div
              ref={decorPurpleCircleRef}
              className="absolute right-0 bottom-4 sm:bottom-6 lg:bottom-[32px] w-[100px] h-[128px] sm:w-[140px] sm:h-[179px] lg:w-[173px] lg:h-[221px] pointer-events-none"
            >
              <Image
                src="/images/hero/purple-circle.svg"
                alt=""
                width={173}
                height={221}
                className="w-full h-full opacity-40"
              />
            </div>

            {/* Main Content */}
            <div className="relative z-10 space-y-4 sm:space-y-6 lg:space-y-[24px]">
              {/* Main Heading */}
              <h1
                ref={headingRef}
                className="heading-hero leading-tight sm:leading-snug lg:leading-[72px] max-w-fit"
              >
                Scan, Name &{" "}
                <span className="block">
                  Discover <span className="text-[#3BC377] inline">Your Toys</span>
                </span>
                <span className="block">
                  Like {""}
                  <span className="relative inline-block text-[#E09800]">
                    Magic
                    <span
                      ref={sparkleRef}
                      className="absolute -right-4 sm:-right-5 lg:-right-6 -top-1 sm:top-0 inline-block"
                    >
                      <Image
                        src="/images/hero/sparkle.svg"
                        alt=""
                        width={25}
                        height={31}
                        className="w-[18px] h-[22px] sm:w-[22px] sm:h-[27px] lg:w-[25px] lg:h-[31px]"
                      />
                    </span>
                  </span>
                </span>
              </h1>

              {/* Subtitle */}
              <p
                ref={subtitleRef}
                className="text-base sm:text-lg lg:text-[20px] md:font-medium leading-snug sm:leading-[26px] lg:leading-[28px] text-black max-w-full lg:max-w-[577px]"
              >
                Instantly identify and organize your toy collection with a
                single scan.
              </p>

              {/* CTA Button */}
              <div ref={buttonRef} className="pt-4 sm:pt-5 lg:pt-6">
                <button className="bg-[#3474FF] hover:bg-[#2563eb] text-white font-semibold text-base sm:text-[17px] lg:text-[18px] px-6 sm:px-7 lg:px-8 py-4 sm:py-[18px] lg:py-5 rounded-3xl lg:rounded-[32px] transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center">
                  <span style={{ letterSpacing: "-0.90px" }}>
                    Download on Appstore
                  </span>
                  <Image
                    src="/images/hero/apple-logo.svg"
                    alt="Apple"
                    width={18}
                    height={16}
                    className="w-4 h-[14px] sm:w-[17px] sm:h-[15px] lg:w-[18px] lg:h-[16px]"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Right Container - Phone Mockup */}
          <div ref={phoneRef} className="relative lg:ml-8">
            <div className="w-full lg:w-[664px] aspect-[664/747] lg:h-[747px] rounded-2xl sm:rounded-3xl lg:rounded-[32px] overflow-hidden">
              <Image
                src="/images/hero/phone-mockup.png"
                alt="App Preview"
                width={664}
                height={747}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}