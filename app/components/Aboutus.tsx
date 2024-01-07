"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../styles/animations";
import { AboutusDescription, aboutfeatures, features } from "../constants";

interface featureCardProps {
  icon: string;
  title: string;
  content: string;
  index: number;
}

const FeatureCard = ({ icon, title, content, index }: featureCardProps) => (
   <div className= "">
   <div  dir ="rtl" className="single-services-box ">
    <div className="icon">
    <Image
        src={icon}
        alt="icon"
        width={100}
        height={100}
        className="w-[90%] h-[90%] object-contain flaticon-data-analytics"
        priority={true}
      />
        {/* <i className="flaticon-data-analytics"></i> */}
    </div>
    {/* <h3>Data Analytics</h3> */}
    <p>{content} </p>
    {/* <div className="services-btn">
        <a href="single-services.html" className="services-btn-one">
            Read More
            <i className="flaticon-right"></i>
        </a>
    </div> */}
    </div>
    </div>
);

const Aboutus = () => (
  <section dir="rtl" id="about" className="flex flex-col gap-5">
    <motion.div
      className="sectionInfo"
      variants={slideIn("left", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="heading2 text-black text-center mx-auto">
        من <span className= "underlined underline-clip text-black">نحن</span>
        
      </h2>
      <p className="text-center font-tajawal paragraph w-full mt-24 mb-10 max-w-[400px] sm:max-w-[75%] mx-auto sm:text-wrap sm:text-center text-black">
      {AboutusDescription}
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </motion.div>

    <div dir="rtl" className=" flex-col mx-auto  sm:flex sm:flex-row items-center justify-between gap-5 ">
      {aboutfeatures.map((feature, index) => (
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

export default Aboutus;
