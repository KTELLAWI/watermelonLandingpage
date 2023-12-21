// "use client"
// import React from "react";

// const Button = ({ styles,onClick }: { styles: string,onClick: }) => (
//   <button
//   onClick={}
//     type="button"
//     className={`py-4 px-6 font-poppins font-medium text-[18px] text-black bg-blue-gradient rounded-[10px] outline-none ${styles}`}
//   >
//     ارسل طلبك
//   </button>
// );

// export default Button;
const Button = ({ styles, onClick }: { styles: string; onClick: () => void }) => (
  <button
    onClick={onClick}
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-black bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    ارسل طلبك
  </button>
);
	
export default Button;