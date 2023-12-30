"use client";
import React from 'react';
import  {Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'; // Adjust the import path as needed

import { motion } from "framer-motion";
import { slideIn } from "../styles/animations";

interface FAQ {
  title: string;
  contents: React.ReactNode;
}

// const faqs: FAQ[] = [
//   // ... (as provided in your code)
// ];
const faqs = [
  {
    title: 'كيف يمكنني إضافة منتج إلى سلة التسوق؟',
    contents: (
      <div>
        يمكنك إضافة منتج إلى سلة التسوق عن طريق النقر على زر "إضافة إلى السلة" الموجود بجوار المنتج في صفحة المنتج.
      </div>
    ),
  },
  {
    title: 'كيف يمكنني تتبع طلبيتي؟',
    contents: (
      <div>
        يمكنك تتبع طلبيتك بعد تسجيل الدخول إلى حسابك. انتقل إلى قسم "طلباتي" لرؤية حالة الطلب وتفاصيل التتبع.
      </div>
    ),
  },
  {
    title: 'هل يمكنني إعادة المنتج إذا لم يعجبني؟',
    contents: (
      <div>
        نعم، يمكنك إعادة المنتج إذا لم يعجبك وفقًا لسياسة الإرجاع. اتصل بخدمة العملاء لمزيد من المساعدة.
      </div>
    ),
  },
  {
    title: 'كيف يمكنني تحديث معلومات حسابي؟',
    contents: (
      <div>
        يمكنك تحديث معلومات حسابك عن طريق الدخول إلى حسابك والانتقال إلى صفحة "إعدادات الحساب".
      </div>
    ),
  },
];


const Faq: React.FC = () => {
  return (
   
    <section dir="rtl" id="faq" className="section  ">
    <motion.div
      className="sectionInfo"
      variants={slideIn("left", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
         <h2 className="heading2 mb-20 text-center mx-auto">
     الأسئلة <span className="underlined underline-clip">المتكررة</span> 
      </h2>
         <Accordion type="single" collapsible className="w-3/4 shadow-lg rounded-[50px] px-4 mx-auto" dir='rtl'>
       {faqs.map((faq, index) => (
            <AccordionItem key={`faq-${index + 1}`} value={`item-${index + 1}`}>
             <AccordionTrigger>{faq.title}</AccordionTrigger>
              <AccordionContent>{faq.contents}</AccordionContent>
            </AccordionItem>
       ))}
         </Accordion>
         </motion.div>
        {/* /// </motion.div> */}
  </section>
  );
}

export default Faq;
