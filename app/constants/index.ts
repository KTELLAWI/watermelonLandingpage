import {
    people01,
    people02,
    people03,
    facebook,
    instagram,
    linkedin,
    twitter,
    airbnb,
    binance,
    coinbase,
    dropbox,
    send,
    shield,
    star,
    person,
    rose,
    homeshope,
    shops,
    savetim,
    payments
  } from "../../public";
  
  export const navLinks = [
    {
      id: "#home",
      title: "الرئيسية",
    },
    {
      id: "#about",
      title: "من نحن",
    },
    {
      id: "#features",
      title: "الميزات",
    },
    {
      id: "#faq",
      title: "الأسئلة المتكررة",
    },
    {
      id: "#contact",
      title: "تواصل معنا",
    },
    {
      id: "#download",
      title: "حمل التطبيق",
    },
   
    {
      id: "privacy",
      title: "سياسة الخصوصية",
    },
   
    
  ];
  
  export const features = [
  {
      id: "feature-1",
      icon: person, // Assuming you have a 'person' variable defined
      title: "",
      content: `
        توفير أكبر عدد من مقدمي الخدمات بجودة عالية وخدمة مميزة لتحسين حياة المستهلكين في المملكة العربية السعودية.
        ويترتب على نجاحنا التوسع وخلق فرص عمل أكثر لشباب السعودي لنجاح والازدهار.
      `,
    },
    {
      id: "feature-2",
      icon: homeshope,
      title: "",
      content:
        "تسهيل عملية التسوق عبر الإنترنت وتوفير الوقت والجهد لعملائنا ومقدمي الخدمات",
    },
    {
      id: "feature-3",
      icon: rose,
      title: " ",
      content:
        "منصة من ابداع شباب سعودين يطمحون لجعل المملكة تكون من افضل الدول تقدمآ في مجال التجارة الالكترونية في العالم",
    },
  ];
  export const features2 = [
    {
        id: "feature-1",
        icon: payments, // Assuming you have a 'person' variable defined
        title: "طرق دفع متعددة",
        content: `
        توفر المنصة العديد من طرق الدفع تسهيلًا على العملاء للدفع بالوسيلة المناسبة، مع ضمان سياسة دفع آمنة
        `,
      },
      {
        id: "feature-2",
        icon: savetim,
        title: "وفر وقتك",
        content:
          "فرصة مميزة لمقدمي الخدمات بعرض خدماته واستقبال الطلبات في الحصول على احتياجاتهم في أسرع وقت مع تحليلات على مدار الوقت",
      },
      {
        id: "feature-3",
        icon: shops,
        title: "متاجر منتوعة",
        content:
          "إذا كان لديكم نشاط تجاري يمكنكم الانضمام لمنصة وترمليون وإنشاء صفحتكم الخاصة بمثابة متجر مستقل لعرض الخدمات واستقبال الطلبات ",
      },
    ];
  
  export const feedback = [
    {
      id: "feedback-1",
      content:
        "التطبيق جميل جدا وأصبح اساسيا في حياتي",
      name: "أحمد",
      title: "طالب جامعي",
      img: people01,
    },
    {
      id: "feedback-2",
      content:
      "التطبيق جميل جدا وأصبح اساسيا في حياتي",
    name: "أحمد",
    title: "طالب جامعي",
    img: people01,
    },
    {
      id: "feedback-3",
      content:
        "التطبيق جميل جدا وأصبح اساسيا في حياتي",
      name: "أحمد",
      title: "طالب جامعي",
      img: people01,
    },
  ];
  
  export const stats = [
    {
      id: "stats-1",
      title: "User Active",
      value: "3800+",
    },
    {
      id: "stats-2",
      title: "Trusted by Company",
      value: "230+",
    },
    {
      id: "stats-3",
      title: "Transaction",
      value: "$230M+",
    },
  ];
  
  export const footerLinks = [
    {
      title: "روابط سريعة",
      links: [
        {
          name: "الرئيسية",
          link: "#home",
        },
        {
          name: "من نحن",
          link: "#about",
        },
        {
          name: "الميزات",
          link: "#features",
        },
        {
          name: "سياسة الخصوصية",
          link: "privacy",
        },
        {
          name: "الشروط والاحكام",
          link: "terms",
        },
      ],
    },
    {
      title: "الشركة",
      links: [
        {
          name: "info@watermelon.sa",
          link: "https://www.hoobank.com/help-center/",
        },
        {
          name: "00905456789088",
          link: "https://www.hoobank.com/partners/",
        },
        {
          name: "الرياض - السعودية",
          link: "https://www.hoobank.com/suggestions/",
        },
        // {
        //   name: "سياسة الخصوصية",
        //   link: "https://www.hoobank.com/blog/",
        // },
        // {
        //   name: "الشروط والاحكام",
        //   link: "https://www.hoobank.com/newsletters/",
        // },
      ],
    },
    {
      title: "حمل التطبيق",
      links: [
        {
          name: "googleplay",
          link: "",
        },
        {
          name: "apple",
          link: "",
        },
      ],
    },
  ];
  
  export const socialMedia = [
    {
      id: "social-media-1",
      icon: instagram,
      link: "https://www.instagram.com/",
    },
    {
      id: "social-media-2",
      icon: facebook,
      link: "https://www.facebook.com/",
    },
    {
      id: "social-media-3",
      icon: twitter,
      link: "https://www.twitter.com/",
    },
    {
      id: "social-media-4",
      icon: linkedin,
      link: "https://www.linkedin.com/",
    },
  ];
  
  export const clients = [
    {
      id: "client-1",
      logo: airbnb,
      bgImg: "../assets/airbnb-small.png"
    },
    {
      id: "client-2",
      logo: binance,
      bgImg: "../assets/binance-small.png"
    },
    {
      id: "client-3",
      logo: coinbase,
      bgImg: "../assets/binance-small.png"
    },
    {
      id: "client-4",
      logo: dropbox,
      bgImg: "../assets/dropbox-small.png"
    },
  ];