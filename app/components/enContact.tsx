"use client";
import { apple, contact, google } from "../../public";
import { slideIn } from "../styles/animations";
import Image from "next/image";
import { motion } from "framer-motion";
import { contactForm, encontacForm } from "../constants";

const EnContact = () => (
  <section id="contact" className="sectionReverse shadow-lg py-auto  rounded-lg border-primaryOne border-t-8 border-b-8">
    <motion.div
      className="sectionImgReverse px-8"
      variants={slideIn("left", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >

      <iframe

        id="JotFormIFrame"
        title="Appointment Request Form"
        //  onLoad={() => window.parent.scrollTo(0, 0)}


        src={encontacForm}
        style={{ minWidth: '100%', maxWidth: '100%', height: '480px', border: 'none' }}
      // Enable scrolling
      ></iframe>


    </motion.div>

    <motion.div
      className="sectionInfo  "
      variants={slideIn("right", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >

      <Image
        src={contact}
        alt=""
        width={0}
        height={0}
        className="w-[75%] h-[80%]  z-[5]"
      />

    </motion.div>
  </section>
);

export default EnContact;
