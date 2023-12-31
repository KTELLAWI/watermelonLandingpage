"use client";
import { apple, bill, downloadApp, google, qrcode } from "../../public";
import { slideIn } from "../styles/animations";
import Image from "next/image";
import { motion } from "framer-motion";

const DownloadApp = () => (
  <section id="download" className="sectionReverse">
    <motion.div
      className="sectionImgReverse"
      variants={slideIn("left", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Image
        src={downloadApp}
        alt="billing"
        width={100}
        height={150}
        className="w-[90%] h-[90%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </motion.div>

    <motion.div
      className="sectionInfo"
      variants={slideIn("right", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="heading2" dir="rtl">
        حمل <span className="underlined underline-clip">التطبيق</span>   <br className="sm:block hidden" /> 
      </h2>
      <p className="paragraph max-w-[470px] mt-5 " dir="rtl" >
      اكتشف الإمكانيات - قم بالتحميل الآن لتجربة الميزات السلسة لتطبيقنا
      </p>
      <Image
          src={qrcode}
          alt="google_play"
          width={128.86}
          height={42.05}
          className="object-contain mr-5 cursor-pointer"
        />

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Image
          src={apple}
          alt="google_play"
          width={128.86}
          height={42.05}
          className="object-contain mr-5 cursor-pointer"
        />
        <Image
          src={google}
          alt="google_play"
          width={144.17}
          height={43.08}
          className="object-contain cursor-pointer"
        />
      </div>
    </motion.div>
  </section>
);

export default DownloadApp;
