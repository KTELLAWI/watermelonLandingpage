// YourComponent.js
"use client"
import { useEffect } from 'react';
import Image from "next/image";
import { logowhitew } from '@/public';

const Intro = () => {
  useEffect(() => {
    // Add a class to the preloader after the component mounts
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.classList.add('preloader-deactivate');
    }
  }, []); // Empty dependency array ensures the effect runs only once after mount

  return (
    <div>
      {/* Your other JSX content here */}
      <div id="preloader" className="preloader">
        <div className="loader">
          <div className="shadow"></div>
          <div className="box">
          <Image
        src={logowhitew}
        alt=""
        width={100}
        height={150}
        className="w-[90%] h-[90%] relative z-[5]"
      />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
