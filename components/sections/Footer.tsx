"use client";

import { useState } from "react";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email);
    setEmail("");
  };
  return (
    <section className="w-full bg-[#3474FF] pb-0 px-4 lg:px-16 py-16 md:pt-32 overflow-hidden">
      <div className=" mx-auto px-4 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-[540px]">
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-xl txt-fnt md:text-2xl font-bold text-[#FFFFFF]">ToyMagic</span>
            </Link>
          </div>
          <div className="lg:col-span-3 col-end-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

              <div className="space-y-4">
                <h4 className="text-[14px] txt-fnt font-bold text-white">ABOUT TOYMAGIC</h4>
                <nav className="flex flex-col gap-2">
                  <Link href="/" className="text-xl font-normal hover:text-white text-[#FFFFFFB2]">
                    Features
                  </Link>
                  <Link href="#" className="text-xl font-normal hover:text-white text-[#FFFFFFB2]">
                    How it works
                  </Link>
                  <Link href="#" className="text-xl font-normal hover:text-white text-[#FFFFFFB2]">
                    Meet the team
                  </Link>
                  <Link href="#t" className="text-xl font-normal hover:text-white text-[#FFFFFFB2]">
                    Blog
                  </Link>
                </nav>
              </div>

              <div className="space-y-4">
                <h4 className="text-[14px] txt-fnt font-bold text-white">RESOURCES</h4>
                <nav className="flex flex-col gap-2">
                  <Link href="/terms" className="text-xl font-normal hover:text-white text-[#FFFFFFB2]">
                    FAQ
                  </Link>
                  <Link href="#" className="text-xl font-normal hover:text-white text-[#FFFFFFB2]">
                    For parents
                  </Link>
                  <Link href="#" className="text-xl font-normal hover:text-white text-[#FFFFFFB2]">
                    Privacy Policy
                  </Link>
                  <Link href="#" className="text-xl font-normal hover:text-white text-[#FFFFFFB2]">
                    Terms of Use
                  </Link>
                </nav>
              </div>

              <div className="space-y-4">
                <h4 className="text-[14px] txt-fnt font-bold text-white">GET THE APP</h4>
                <nav className="flex flex-row gap-2 items-center">
                  <Image
                    src="/images/hero/apple-logo.svg"
                    alt="Apple"
                    width={18}
                    height={16}
                    className="w-4 h-[14px] sm:w-[17px] sm:h-[15px] lg:w-[18px] lg:h-[16px]"
                  />
                  <Link href="#" className="text-xl font-normal hover:text-white text-[#FFFFFFB2]">
                    App Store
                  </Link>
                </nav>
              </div>

              <div className="space-y-4">
                <h4 className="text-[14px] txt-fnt font-bold text-white">SOCIALS</h4>
                <div className="grid grid-cols-2 gap-3 max-w-[100px]">
                  <Link href="#" className="hover:opacity-80 transition-opacity">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0 2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </Link>

                  <Link href="#" className="hover:opacity-80 transition-opacity">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </Link>

                  <Link href="#" className="hover:opacity-80 transition-opacity">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 6 6 18M6 6l12 12"></path>
                    </svg>
                  </Link>

                  <Link href="#" className="hover:opacity-80 transition-opacity">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path fill="none" d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0 2 2 0 0 1 1.4 1.4 24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0 2 2 0 0 1-1.4-1.4z"></path>
                      <polygon fill="currentColor" stroke="none" points="9.5 12 15.5 8.5 15.5 15.5 9.5 12"></polygon>
                    </svg>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* footer under */}
      <div className="flex flex-col sm:flex-row px-4 lg:px-16 py-12 sm:pt-16 overflow-hidden justify-between items-center text-[#FFFFFFB2] font-medium text-sm sm:text-[16px] text-center sm:text-left gap-4 sm:gap-0">
        <h2 className="max-w-[260px] sm:max-w-none leading-snug">
          © 2025 TOYMAGIC. ALL RIGHTS RESERVED.
        </h2>

        <div className="flex flex-row gap-3 sm:gap-4">
          <p className="cursor-pointer hover:text-white transition">TERMS</p>
          <p className="cursor-pointer hover:text-white transition">PRIVACY POLICY</p>
        </div>
      </div>

     {/* footer MADE BY */}
      <div className="text-[#FFFFFF] md:font-bold text-sm sm:text-[16px] items-center justify-center text-center px-4 pb-0">
        <p className="max-w-[340px] txt-fnt sm:max-w-none leading-snug mb-0">
          MADE WITH 💖 AND 🧸 BY TOBI & BIOLA <span className="block pt-4 text-[#145F35]"> NKUNZI 👨‍🍳</span>
        </p>
        <div className="relative w-full mx-auto md:gap-2 gap-6 flex items-center justify-center -mt-10 mb-0 pb-0">
          <svg width="338" height="153" viewBox="0 0 238 153" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M66.2074 125.735C72.8121 114.832 95.7617 101.341 114.423 114.66M194.769 96.5367C183.316 88.7752 160.781 91.732 152.276 108.076M86.1566 163.889C107.214 216.286 199.571 191.153 192.43 135.702C192.43 135.702 172.233 145.528 143.418 153.171C114.603 160.813 86.1566 163.889 86.1566 163.889ZM231.753 111.975C237.729 180.67 182.731 229.435 120.545 230.26C58.3589 231.085 15.9792 195.005 6.6881 131.57C-2.60299 68.1354 50.2269 11.1466 108.964 6.03271C167.702 0.918828 225.778 43.2806 231.753 111.975Z" stroke="white" strokeOpacity="0.2" strokeWidth="11.2329" />
          </svg>
          <svg width="314" height="153" viewBox="0 0 214 153" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M79.8997 159.678C54.6422 149.283 26.2358 202.754 12.1454 182.085C-4.86646 157.131 67.9082 159.536 68.8606 129.339C69.8807 96.9987 -7.18796 101.015 7.47347 73.7177C21.9233 46.8145 56.9779 110.421 82.9073 94.2588C112.198 76.0016 52.2924 12.8873 86.1185 6.04698C120.471 -0.899727 84.4236 78.1089 117.35 90.0375C149.053 101.523 172.898 24.3914 194.197 50.5025C213.021 73.5796 131.542 88.5477 135.566 125.446C139.501 161.528 223.22 154.004 206.058 186.024C188.839 218.15 145.833 137.918 116.551 159.654C93.4961 176.767 131.188 226.38 102.716 230.045C72.4084 233.946 108.136 171.299 79.8997 159.678Z" stroke="white" strokeOpacity="0.2" strokeWidth="11.2329" />
          </svg>
          <svg width="399" height="153" viewBox="0 0 299 153" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M202.072 5.79028C179.431 2.36415 175.469 51.5561 152.83 48.1157C138.942 46.0052 138.258 24.0871 124.356 26.1057C111.095 28.0312 113.939 45.2517 102.996 52.9959C72.9287 74.2748 35.4682 -5.16679 11.9332 28.5468C-22.2469 77.5096 94.3547 80.4219 74.5443 118.296C63.7305 138.969 20.7957 128.161 24.7063 151.168C30.5873 185.769 88.7705 138.821 110.86 164.785C125.632 182.149 104.653 212.323 125.592 221.303C149.985 231.763 149.801 183.55 174.647 174.222C218.954 157.587 250.198 255.738 285.21 223.862C320.305 191.911 228.187 153.038 245.64 108.873C254.105 87.4491 295.933 87.5324 287.467 66.109C278.491 43.3955 241.586 77.2964 221.042 64.1248C200.624 51.0331 226.045 9.41794 202.072 5.79028Z" stroke="white" strokeOpacity="0.2" strokeWidth="11.2329" />
          </svg>
          <svg width="345" height="153" viewBox="0 0 245 153" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41.6141 187.528C78.4541 279.789 122.017 154.559 122.017 154.559C122.017 154.559 165.254 293.556 204.291 194.893C301.451 155.632 165.425 112.283 165.425 112.283C165.425 112.283 283.975 71.1084 191.122 38.2871C152.797 -41.1449 113.838 72.5899 113.838 72.5899C113.838 72.5899 74.2671 -50.2538 35.6241 36.8017C-52.4351 73.0577 81.3501 112.506 81.3501 112.506C81.3501 112.506 -41.3819 156.434 41.6141 187.528Z" stroke="white" strokeOpacity="0.2" strokeWidth="11.2329" />
          </svg>
          <svg width="314" height="152" viewBox="0 0 214 152" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M125.295 4.12598L51.6311 72.1652L125.295 33.4385L54.6203 98.6962L171.201 28.3034L3.58966 167.591L210.061 39.2154L51.6311 163.74L171.201 103.831L74.0504 187.062L164.155 135.497L106.078 228.784" stroke="white" strokeOpacity="0.2" strokeWidth="11.2329" />
          </svg>
        </div>
      </div>
    </section>
  );
}