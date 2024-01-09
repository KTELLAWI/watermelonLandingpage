"use client";
import { apple, contact, google } from "../../public";
import { slideIn } from "../styles/animations";
import Image from "next/image";
import { motion } from "framer-motion";

const EmbededComponent = ({ url }: {
  url: string
}) => (
  //   <section id="contact" className=" w-full">
  <motion.div
    className=" px-0 w-full flex-1"
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

      id=""
      title=""
      //  onLoad={() => window.parent.scrollTo(0, 0)}


      src={url}
      style={{ minWidth: '100%', maxWidth: '100%', height: '800px', border: 'none' }}
    // Enable scrolling
    ></iframe>

    {/* gradient start */}
    {/* <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" /> */}
    {/* <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" /> */}
    {/* gradient end */}
  </motion.div>


  //   </section>
);

export default EmbededComponent;
