'use client'

import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="pt-[100px] sm:pt-40 pb-[0px] px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-7xl font-semibold text-black mb-8">
          Apply to 100 jobs in 1 minute.
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-1xl mx-auto">
          Our team of freelancers applies to jobs and messages hiring managers on your behalf.
        </p>
        <div>
          <Link href="/login" className="cursor-pointer bg-orange-600 text-white px-8 py-4 rounded-md text-lg font-semibold bg-gradient-to-r from-red-500 to-orange-450 hover:bg-gradient-to-bl from-red-450 to-orange-500 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-center me-2 mb-2">
            Get Started
          </Link>
          <a 
            href="#pricing" 
            className="border border-black text-black px-8 py-4 rounded-md text-lg font-semibold hover:bg-orange-50"
          >
            Check Plans
          </a>
          <div className="max-w-7xl mx-auto px-0 lg:pt-[25px]">
            {isMobile ? (
              <img 
              src="/images/frame.svg"
              alt="Frame"
              width="600" 
              height="500" 
              className="block ml-auto mr-auto w-full h-auto max-w-xl mb-0" 
            />
            ) : (
              <div className="flex justify-center">
                <img 
                  src="/images/frame.svg"
                  alt="Frame"
                  width="1000" 
                  height="650" 
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}