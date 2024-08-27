import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col sm:flex-row gap-10 items-center">
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold">
            Discover best classes for the best learning
          </h1>
          <p className="py-4 leading-7 text-gray-500">
            We designed Connections Academy to give students all across the
            nation a tuition-free online public school that lets them learn.
          </p>
          <button className="bg-primary text-white py-3 px-6 rounded-lg mb-4">
            Get Started
          </button>
          <p className="text-gray-500">
            Not sure when to start?{" "}
            <Link href="#" className="text-blue-500 underline">
              Learn more
            </Link>
          </p>
        </div>
        
        {/* Right Section */}
        <div className="flex-1 flex justify-end">
          <Image
            src="/hero-image.svg"
            alt="hero"
            width={400}
            height={400}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
