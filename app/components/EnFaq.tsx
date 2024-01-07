"use client";
import React from 'react';
import  {Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'; // Adjust the import path as needed

import { motion } from "framer-motion";
import { slideIn } from "../styles/animations";
import {enFaqs} from "../constants/index"
interface FAQ {
  title: string;
  contents: React.ReactNode;
}




const EnFaq = () => {
  return (
   
    <section dir="ltr" id="faq" className="section   ">
    <motion.div
      className="sectionInfo"
      variants={slideIn("left", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
         <h2 className="heading2 mb-20 text-center mx-auto">
      <span className="underlined underline-clip">FAQ</span> 
      </h2>
         <Accordion type="single" collapsible className="w-[90%] border-t-primaryOne border-t-4  border-b-primaryOne border-b-4 shadow-lg rounded-[50px] px-4 mx-auto" dir='ltr'>
       {enFaqs.map((faq, index) => (
            <AccordionItem key={`faq-${index + 1}`} value={`item-${index + 1}`}>
             <AccordionTrigger className=''>{faq.title}</AccordionTrigger>
              <AccordionContent>{faq.contents}</AccordionContent>
            </AccordionItem>
       ))}
         </Accordion>
         </motion.div>
        {/* /// </motion.div> */}
  </section>
  );
}

export default EnFaq;
