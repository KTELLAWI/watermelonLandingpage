"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../styles/animations";
import { enFeatures } from "../constants";


// interface featureCardProps {
//     icon: string;
//     title: string;
//     content: string;
//     id: number;
// }

const FeatureCard = ({ icon, title, content,id }: any) => (
    <div className="flex-1">
        <div className="process-item mx-auto  max-w-[50%] ">
        <Image
        src={icon}
        alt="icon"
        width={0}
        height={0}
        // className="w-[90%] h-[90%] object-contain flaticon-data-analytics"
        // priority={true}
      />

            {/* <img src={icon} alt="image"/> */}
                <h3><span className= " underlined underline-clip text-black">{title}</span></h3>
                <p className="mt-10">{content}</p>
                {/* <a className="process-btn" href="/project-details/">Read More<i className="flaticon-right"></i></a> */}
                </div>
    </div>
);

const EnFeatures = () => (
    <section dir="ltr" id="features" className="flex flex-col  mt-3 mb-3 shadow-lg py-auto rounded-lg border-primaryOne border-t-2 border-b-8">
        <motion.div
            className="sectionInfo"
            variants={slideIn("left", "tween", 0.2, 1.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
            <h2 className="heading2 text-black text-center mx-auto">
                <span className="underlined underline-clip text-black">Features</span>

            </h2>
            {/* <p className="text-center font-tajawal paragraph w-full mt-24 mb-20 max-w-[400px] sm:max-w-[75%] mx-auto sm:text-wrap sm:text-center text-black">
                وترميلون منصة إلكترونية هدفها جميع أصحاب المتاجر ومقدمي الخدمات في مكانٍ واحد،يتمكنون من خلالها إضافة خدماتهم وإنشاء صفحات خاصة بها، بحيث تصبح بمثابة متجر إلكتروني متكامل لهم، فمن التسجيل على المنصة تصبح لديهم صفحة خاصة تتضمن رفع الخدمات أو المنتجات
            </p> */}

            {/* <Button styles={`mt-10`} /> */}
        </motion.div>

        <div dir="ltr" className="flex flex-col mx-auto my-auto  sm:flex sm:flex-row items-center mb-0 justify-between gap-5 ">
            {enFeatures.map((feature, index) => (
                <motion.div
                    key={feature.id}
                    variants={fadeIn("left", "spring", index * 0.5, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <FeatureCard key={feature.id} {...feature}  />
                </motion.div>
            ))}
        </div>
    </section>
);

export default EnFeatures;
