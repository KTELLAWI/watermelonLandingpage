import Button from "./Button";

const CTA = () => (
  <section dir="rtl"
    className="flexCenter marginY padding sm:flex-row flex-col  bg-gradient-to-r 
    from-primaryOne to-primaryOne bg-opacity-50  rounded-[20px] box-shadow"
  >
    <div className="flex-1 flex flex-col">
      {/* <h6 className="heading2">انضم إلينا وكُن جزءًا من رواد السوق الرقمي، حيث نقدم لك الفرصة للابتكار والتحول. </h6> */}
      <p className="paragraph  mt-5">
      انضم إلينا وكُن جزءًا من رواد السوق الرقمي، حيث نقدم لك الفرصة للابتكار والتحول. 
      </p>
    </div>

    <div className="flexCenter sm:ml-10 ml-0 sm:mt-0 mt-10">
      <Button styles={`mt-10`} />
    </div>
  </section>
);

export default CTA;
