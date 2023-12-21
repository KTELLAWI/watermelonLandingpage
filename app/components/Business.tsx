"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../styles/animations";
import { features } from "../constants";
import Button from "./Button";

interface featureCardProps {
  icon: string;
  title: string;
  content: string;
  index: number;
}

const FeatureCard = ({ icon, title, content, index }: featureCardProps) => (
  <div dir="rtl"
    className={`flex p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div dir="rtl" className="w-[64px] h-[64px] rounded-full flexCenter bg-primaryOne">
      <Image
        src={icon}
        alt="icon"
        width={100}
        height={100}
        className="w-[90%] h-[90%] object-contain"
        priority={true}
      />
    </div>
    <div className="flex-1 flex flex-col mr-3" dir="rtl">
      {/* <h1 className="font-poppins font-semibold text-white text-[18px] text-right leading-[23px] mb-1">
        {title}
      </h1> */}
      <p className="paragraph text-black  leading-[24px] mb-1 text-right">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section dir="rtl" id="features" className="section">
    <motion.div
      className="sectionInfo"
      variants={slideIn("left", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* <h2 className="heading2 text-right">
        You do the business, <br className="sm:block hidden text-right" /> we&#8217;ll
        handle the money.
      </h2> */}
      <p className="text-right font-tajawal paragraph max-w-[470px] mt-5 text-black">
      وترميلون منصة إلكترونية هدفها جميع أصحاب المتاجر ومقدمي الخدمات في مكانٍ واحد،يتمكنون من خلالها إضافة خدماتهم وإنشاء صفحات خاصة بها، بحيث تصبح بمثابة متجر إلكتروني متكامل لهم، فمن التسجيل على المنصة تصبح لديهم صفحة خاصة تتضمن رفع الخدمات أو المنتجات
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </motion.div>

    <div dir="rtl" className="sectionImg flex-col">
      {features.map((feature, index) => (
        <motion.div
          key={feature.id}
          variants={fadeIn("left", "spring", index * 0.5, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <FeatureCard key={feature.id} {...feature} index={index} />
        </motion.div>
      ))}
    </div>
  </section>
);

export default Business;
