"use client";
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import type { Testimonial } from "@/types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PuzzleIcon from "../icons/PuzzleIcon";
import ThumbsUpIcon from "../icons/ThumbsUpIcon";

gsap.registerPlugin(ScrollTrigger);

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (sectionRef.current && !hasAnimated) {
      const ctx = gsap.context(() => {
        // Stagger animation for initial load
        gsap.from(".animate-scroll", {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            onEnter: () => setHasAnimated(true),
          },
        });

        // Floating animation for decorative icon
        gsap.to(".thumbs-icon", {
          y: -20,
          duration: 2.5,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        });

        // Subtle rotation for puzzle icon
        gsap.to(".puzzle-icon", {
          rotation: 360,
          duration: 20,
          ease: "none",
          repeat: -1,
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, [hasAnimated]);

  useEffect(() => {
    if (hasAnimated && cardsRef.current.length > 0) {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          // Cards entrance with bounce
          gsap.from(card, {
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
          });

          // Continuous subtle hover effect
          gsap.to(card, {
            y: -5,
            duration: 2 + index * 0.3,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        }
      });
    }
  }, [hasAnimated, testimonials, currentIndex]);

  const handleInteraction = (index: number) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  const handleMouseEnter = (index: number) => {
    if (!isMobile) {
      setActiveIndex(index);
      
      const card = cardsRef.current[index];
      if (card) {
        gsap.to(card, {
          y: -16,
          scale: 1.05,
          duration: 0.4,
          ease: "power2.out",
        });

        // Animate quote marks
        const quotes = card.querySelectorAll('.quote-mark');
        gsap.to(quotes, {
          scale: 1.2,
          duration: 0.3,
          ease: "back.out(2)",
        });

        // Animate avatar
        const avatar = card.querySelector('.avatar-wrapper');
        if (avatar) {
          gsap.to(avatar, {
            scale: 1.15,
            rotation: 5,
            duration: 0.4,
            ease: "elastic.out(1, 0.5)",
          });
        }
      }

      // Blur other cards
      cardsRef.current.forEach((otherCard, i) => {
        if (i !== index && otherCard) {
          gsap.to(otherCard, {
            opacity: 0.5,
            filter: "blur(3px)",
            duration: 0.3,
          });
        }
      });
    }
  };

  const handleMouseLeave = (index: number) => {
    if (!isMobile) {
      setActiveIndex(null);
      
      const card = cardsRef.current[index];
      if (card) {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.inOut",
        });

        const quotes = card.querySelectorAll('.quote-mark');
        gsap.to(quotes, {
          scale: 1,
          duration: 0.2,
        });

        const avatar = card.querySelector('.avatar-wrapper');
        if (avatar) {
          gsap.to(avatar, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
          });
        }
      }

      // Reset all cards
      cardsRef.current.forEach((otherCard) => {
        if (otherCard) {
          gsap.to(otherCard, {
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.3,
          });
        }
      });
    }
  };

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const getVisibleTestimonials = () => {
    if (testimonials.length <= 4) {
      return testimonials;
    }

    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section ref={sectionRef} className="py-24 max-w-7xl mx-auto px-4 lg:px-16">
      <div className="absolute -mt-12 right-[120px] hidden md:block thumbs-icon">
        <ThumbsUpIcon
          width={229}
          height={260}
          className="-z-10"
        />
      </div>

      <div className="animate-scroll">
        <div className="flex items-center text-[#3474FF] gap-[12px] px-5 py-2 lg:px-6 lg:py-2 rounded-[100px] bg-blue-light w-fit mb-10 lg:mb-12 transition-all duration-300 hover:shadow-md hover:scale-105">
          <PuzzleIcon
            width={18}
            height={18}
            color="#3474FF"
            className="lg:w-[20px] lg:h-[20px] puzzle-icon"
          />
          <span className="text-[#3474FF] font-medium text-[16px]">
            Testimonials
          </span>
        </div>
        <div className="flex flex-col justify-start items-start gap-1.5 mb-8 lg:mb-12">
          <h2 className="font-bold text-[#3474FF] txt-fnt text-[24px] md:text-[40px] md:leading-normal">What Our Kids & Parent Are Saying</h2>
          <p className="font-medium text-[16px] pb-1.5 md:text-[18px]">Real joy, real stories, straight from toy-loving families!</p>
        </div>
      </div>

      <div className="md:-ml-12 -mt-10 overflow-visible">
        <div className="flex flex-col md:flex-row justify-center md:justify-center relative py-8 gap-6 md:gap-0">
          {visibleTestimonials.map((testimonial, index) => {
            const nameColors = ["#3474FF", "#145F35", "#826218", "#A83324"];
            const cardClassName = index > 0 ? "md:-ml-48" : "";
            const isActive = activeIndex === index;
            const isOtherActive = activeIndex !== null && activeIndex !== index;

            return (
              <Card
                key={`${testimonial.id}-${index}`}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className={`p-6 border-none w-full md:w-fit rounded-3xl ${cardClassName} shrink-0 ${isMobile ? 'cursor-pointer active:scale-95' : 'cursor-pointer'}`}
                style={{
                  backgroundColor: testimonial.color || "#ffffff",
                  borderColor: isActive ? nameColors[index % nameColors.length] : 'rgba(0, 0, 0, 0.08)',
                  zIndex: isActive ? 999 : index,
                  transform: isMobile && isActive ? 'scale(1.02)' : 'none',
                  opacity: isMobile && isOtherActive ? 0.6 : 1,
                  transition: isMobile ? 'opacity 0.3s ease, transform 0.2s ease' : 'none',
                  boxShadow: isActive
                    ? `0 24px 48px rgba(${index === 0 ? '52, 116, 255' : index === 1 ? '20, 95, 53' : index === 2 ? '130, 98, 24' : '168, 51, 36'}, 0.2)`
                    : '0 4px 12px rgba(0, 0, 0, 0.08)',
                }}
                onClick={() => handleInteraction(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <p className="text-[#000000] max-w-[369px] leading-tight relative">
                  <span className="quote-mark text-xl text-[#1a1a1a] font-serif align-top mr-1 leading-none inline-block">
                    ❝
                  </span>
                  {testimonial.quote}
                  <span className="quote-mark text-xl text-[#1a1a1a] font-serif align-bottom ml-1 leading-none inline-block">
                    ❞
                  </span>
                </p>
                <div className="flex items-center gap-2">
                  <Avatar className="w-14 h-14 avatar-wrapper">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback
                      className="font-bold text-[18px] txt-fnt"
                      style={{
                        color: nameColors[index % nameColors.length],
                      }}
                    >
                      {testimonial.name
                        .split(" ")
                        .map((n) => n.charAt(0))
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3
                      className="font-bold text-[18px] txt-fnt"
                      style={{
                        color: nameColors[index % nameColors.length],
                      }}
                    >
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Age: {testimonial.age}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}