"use client";
import { apple, appleblack, downloadApp, google, qrcode } from "../../public";
import { slideIn } from "../styles/animations";
import Image from "next/image";
import { motion } from "framer-motion";
import { applestoreUrl, enDownloadAppDescriptoption, googleplayStoreUrl } from "../constants";
import Link from "next/link";

const EnDownloadApp = () => (
  <section id="download" className="sectionReverse">

<motion.div
      className="sectionInfo"
      variants={slideIn("right", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="heading2" dir="ltr">
        Download <span className="underlined underline-clip">App</span>   <br className="sm:block hidden" /> 
      </h2>
      <p className=" max-w-[470px] mt-5 ml-8 mx-auto text-black " dir="ltr" >
     {enDownloadAppDescriptoption}
      </p>
      {/* <Image
          src={qrcode}
          alt="google_play"
          width={128.86}
          height={42.05}
          className="object-contain mx-auto mt-5 cursor-pointer"
        /> */}

      <div className="flex flex-row flex-wrap justify-center mx-auto items-center sm:mt-10 mt-6">
      <a href={applestoreUrl}>
        <Image
          src={appleblack}
          alt="google_play"
          width={128.86}
          height={42.05}
          className="object-contain mr-5 cursor-pointer"
        />
         </a>
         <Link href={googleplayStoreUrl}>
        <Image
          src={google}
          alt="google_play"
          width={144.17}
          height={43.08}
          className="object-contain mr-5 z-5 cursor-pointer"
        />
         </Link>
      </div>
    </motion.div>


    <motion.div
      className="sectionImgReverse"
      variants={slideIn("left", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Image
        src={downloadApp}
        alt=""
        width={0}
        height={0}
        className="w-[80%] h-[90%] relative z-[5]"
      />

      {/* gradient start */}
      {/* <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" /> */}
      {/* gradient end */}
    </motion.div>

    
  </section>
);

export default EnDownloadApp;
