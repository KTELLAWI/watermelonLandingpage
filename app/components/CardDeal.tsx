"use client";
import { motion } from "framer-motion";
import { card, savetime } from "../../public";
import { slideIn } from "../styles/animations";
import Button from "./Button";
import Image from "next/image";

const CardDeal = () => (
  <section className="section">
    <motion.div
      className="sectionInfo"
      variants={slideIn("left", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="heading2" dir="rtl">
       وفر<span className="underlined underline-clip"> وقتك</span> 
 <br className="sm:block hidden" /> 
      </h2>
      <p className="paragraph max-w-[470px] mt-5" dir="rtl">
      فرصة مميزة لمقدمي الخدمات بعرض خدماته واستقبال الطلبات في الحصول على احتياجاتهم في أسرع وقت مع تحليلات على مدار الوقت
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </motion.div>

    <motion.div
      className="sectionImg"
      variants={slideIn("right", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Image
        src={savetime}
        width={0}
        height={0}
        alt="billing"
        className="w-[100%] h-[100%]"
      />
    </motion.div>
  </section>
);

export default CardDeal;
