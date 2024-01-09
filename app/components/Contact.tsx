"use client";
import { apple, contact, google } from "../../public";
import { slideIn } from "../styles/animations";
import Image from "next/image";
import { motion } from "framer-motion";
import { contactForm } from "../constants";

const Contact = () => (
  <section id="contact" className="sectionReverse shadow-lg py-auto  rounded-lg border-primaryOne border-t-8 border-b-8">
    <motion.div 
      className="sectionImgReverse px-8"
      variants={slideIn("left", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* <Image
        src={}
        alt=""
        width={0}
        height={0}
        className="w-[100%] h-[100%] relative z-[5]"
      /> */}
      <iframe

        id="JotFormIFrame"
        title="Appointment Request Form"
        //  onLoad={() => window.parent.scrollTo(0, 0)}


        src={contactForm}
        style={{ minWidth: '100%', maxWidth: '100%', height: '480px', border: 'none' }}
      // Enable scrolling
      ></iframe>

      {/* gradient start */}
      {/* <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" /> */}
      {/* <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" /> */}
      {/* gradient end */}
    </motion.div>

    <motion.div
      className="sectionInfo  "
      variants={slideIn("right", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* <h2 className="heading2 " dir="rtl">
        طرق دفع  <span className="underlined underline-clip">متعددة</span><br className="sm:block hidden" /> 
      </h2>
      <p className="paragraph max-w-[470px] mt-5 " dir="rtl" >
      توفر المنصة العديد من طرق الدفع تسهيلًا على العملاء للدفع بالوسيلة المناسبة، مع ضمان سياسة دفع آمنة

      </p> */}
      <Image
        src={contact}
        alt=""
        width={0}
        height={0}
        className="w-[75%] h-[80%]  z-[5]"
      />

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
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
      </div> */}
    </motion.div>
  </section>
);

export default Contact;
