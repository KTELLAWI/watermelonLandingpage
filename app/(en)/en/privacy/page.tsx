
import Image from "next/image";
import {
  Navbar,
  Hero,

  CTA,
  Footer,
} from "../../../components";
import DownloadApp from "../../../components/DownloadApp";
import Faq from "../../../components/Faq";
import Features from "../../../components/Features";
import Intro from "../../../components/Intro";
import Sectionbanner from "../../../components/Sectionbanner";
import Services from "../../../components/Aboutus";
import Slider from "../../../components/TestimonialSlider";
import { logowhitew } from "@/public";
import ContactForm from "../../../components/EmbededComponent";
import { enprivacyPage, privacyPage } from "../../../constants";
import EmbededComponent from "../../../components/EmbededComponent";

export default function Home() {
  return (

    <div className="paddingX">
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0  grow-0 basis-auto lg:mb-0 lg:w-5/12">
              <div className="flex relative h-[200px] sm:h-[40%] lg:py-12 ">
                <img src="../titlebanner.png"
                  className="z-[10] w-full  rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]" alt="image" />
                <div className="w-full absolute flex-col top-[30%]  my-auto lg:ml-[50px]  z-[11]  flex items-center justify-center  ">
                  <Image
                    src={logowhitew}
                    alt=""
                    width={0}
                    height={0}
                    className="w-[10%] h-[10%]  z-[5]"
                  />
                  <h1 className=" text-right mb-8 text-3xl font-bold text-white">Privacy Policy</h1>
                </div>
              </div>

            </div>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12 text-right" dir="rtl">
              <div
                className="flex h-full items-center rounded-lg bg-dimWhite border-primaryOne border-t-8 border-b-8 border-r-1 border-l-1 shadow-lg shadow-gray-300 p-6 text-center text-black lg:pl-12 lg:text-left">
                <EmbededComponent url={enprivacyPage} />
               
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

  );
}


// 
{/* <div className="lg:pl-12">
<h2 className=" text-right mb-8 text-3xl font-bold"></h2>
<p className="mb-8 pb-2 lg:pb-0 text-right text-black">

</p> 

<div className="mx-auto mb-8 flex flex-col md:flex-row md:justify-around xl:justify-start">
<p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
stroke="currentColor" className="mr-2 h-5 w-5">
<path stroke-linecap="round" stroke-linejoin="round"
  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
Best team
</p>

<p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
stroke="currentColor" className="mr-2 h-5 w-5">
<path stroke-linecap="round" stroke-linejoin="round"
  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
Best quality
</p>

<p className="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
stroke="currentColor" className="mr-2 h-5 w-5">
<path stroke-linecap="round" stroke-linejoin="round"
  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
Best experience
</p>
</div> 

 <p className="text-right text-black">
عزيزي العميل ، نود أن نقدم لك نظرة عامة يمكن فهمها بسهولة عن سياسة الخصوصية الخاصة بتطبيق وترميلون الموجودة في هذه الصفحة، وفي حال لم تكن موافق على أي من بنود هذه السياسة فإنه يتوجب عليك عدم استخدام تطبيق وترميلون. إن استخدامك لتطبيق وترميلون يعني ضمنيا موافقتك على جميع البنود والأحكام الموجودة في سياسة الخصوصية.

.

حق التعديل

نحتفظ بحقنا في تحديث سياسة الخصوصية هذه بما يتوافق مع الأحكام القانونية. وسنقوم بإعلامك بأي تغييرات مهمة.

المعلومات الشخصية

يقوم تطبيق وترميلون بجمع معلومات شخصية للمستخدم من خلال تسجيله بالتطبيق، وأثناء اتصال فريق عمل وترميلون بالعميل، وعند إجراء استبيان عن الخدمة بعد تنفيذها، وعبر شبكات التواصل الاجتماعي المختلفة، وقد يقوم التطبيق بجمع معلومات اخرى عن العميل من طرق مستحدثة قد يتم عملها مستقبلا..

المعلومات غير شخصية

يقوم تطبيق وترميلون بجمع معلومات شاملة غير شخصية عن المستخدمين، تحدد أماكن تواجدهم والاجهزة المستخدمة والأعمار والجنس، وغيرها من المعلومات التي تحتاجها إدارة التطبيق لتتمكن من تحليل الأداء واتخاذ القرارات المناسبة.

ما الغرض من هذه المعلومات؟

يستفيد تطبيق وترميلون من هذه المعلومات للأغراض التالية:

تحسين تجربة العميل

تساعدنا المعلومات التي نقوم بجمعها على تحسين تجربة العميل في النسخ القادمة من التطوير، لتحقيق أعلى درجات السهولة والراحة اثناء استخدام التطبيق.

التطويرات المستقبلية

عند اجراء اي تحديث للتطبيق فإننا نستند إلى المعلومات التي قمنا بجمعها من العملاء السابقين لتطبيق وترميلون.

قياس رضى العميل

تمكننا المعلومات من قياس مدى رضى العملاء عن خدمات وترميلون، وبالتالي تقديم مستويات اعلى من الخدمة في التطويرات القادمة.

هل معلوماتي الشخصية مؤمنة؟

يلتزم تطبيق وترميلون بتقديم أعلى مستويات الأمان للمعلومات الشخصية المفصح عنها من قبل العميل، وذلك عبر عدم إفشائها لأي طرف آخر إلا بعد موافقة العميل.

مشاركة بياناتي الشخصية

تطبيق وترميلون لا يقوم بمشاركة المعلومات الشخصية الخاصة بأي عميل بشكل عام. فقط نقوم بمشاركة الاحصائيات العامة التي تتعلق بحجم السوق وقطاعاته وشرائح العملاء.

تغيير سياسة الخصوصية

نقوم في تطبيق وترميلون بتحديث سياسة الخصوصية باستمرار، ولذلك فإننا نحث عملائنا على متابعة تحديثات سياسة الخصوصية بشكل مستمر.


</p> 
</div> */}
// 