import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className="paddingY flexCenter flex-col relative" dir="rtl">
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className="heading2">
      آراء  <span className="underlined underline-clip">عملاء وترميلون</span> <br className="sm:block hidden" /> 
      </h2>
      <div className="w-full md:mt-0 mt-6">
        {/* <p className="paragraph text-left max-w-[450px]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p> */}
      </div>
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
