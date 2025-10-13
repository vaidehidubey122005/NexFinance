"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    // FIX 1: Added top padding (pt-28) to push content below the fixed header.
    <div className="pt-28 pb-20 px-4 bg-gradient-to-br from-gray-950 via-blue-950 to-black">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Column (Text Content) */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl pb-6  font-bold text-blue-600">
              Welcome to NexFinance
            </h1>
            
            {/* FIX 3: Removed <br /> for natural text flow and better alignment. */}
            <p className="text-lg text-gray-200 mb-8 max-w-xl">
              NexFinance is your personal money coach — powered by AI. It adapts to your spending in real time, guiding every choice you make.
            </p>

            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="/dashboard">
                <Button size="lg" className="px-8 bg-blue-600 hover:bg-blue-700 text-white">
                  Get Started
                </Button>
              </Link>
              <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                {/* FIX 2: Corrected invalid class and improved hover state for better contrast. */}
                <Button size="lg" variant="outline" className="px-8 border-blue-500 text-black hover:bg-blue-950 hover:text-white">
                  Watch Demo
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div> 
              <Image 
                src="/banner.png"
                alt="NexFinance AI Dashboard"
                width={1080}
                height={700}
                className="rounded-lg shadow-2xl border border-blue-800/50"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;