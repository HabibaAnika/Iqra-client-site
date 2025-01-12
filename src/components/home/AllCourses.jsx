import { useLanguage } from "../../providers/LanguageProvider";
import CourseCard from "../CourseCard";
import { motion } from "framer-motion";

function AllCourses() {
  const { language } = useLanguage();
  const courses = [
    // বেসিক কোরআন
    {
      courseName: "Basic Quran Course",
      img: "https://i.postimg.cc/14hTf1hC/p-1.jpg",
      description: {
        english:
          "Start your journey of understanding the Quran with this foundational course. Learn the Arabic alphabet, proper pronunciation, and basic rules of Quranic recitation in an engaging and interactive environment.",
        bangla:
          "কোরআন বোঝার যাত্রা শুরু করুন এই ভিত্তিমূলক কোর্স দিয়ে। আরবি বর্ণমালা, সঠিক উচ্চারণ এবং কোরআনের তিলাওয়াতের মৌলিক নিয়ম শিখুন।",
      },
      price: {
        en: "999 Tk",
        bn: "৯৯৯ টাকা",
      },
      seats: {
        en: "5",
        bn: "৫",
      },
      duration: {
        english: "3/4 Months (6 Days a Week)",
        bangla: "৩/৪ মাস (সপ্তাহে ৬ দিন)",
      },
      link: "/basic",
    },
    // নাযেরা কোর্স
    {
      courseName: "Advance Quran Course (Nazera)",
      img: "https://i.postimg.cc/rsxThJqH/p-2.jpg",
      description: {
        english:
          "Master the art of reading the Quran fluently and accurately. This course focuses on enhancing tajweed skills and achieving proficiency in Quranic recitation.",
        bangla:
          "কোরআন স্পষ্ট এবং সঠিকভাবে পড়ার দক্ষতা অর্জন করুন। এই কোর্সটি তাজবীদের দক্ষতা বাড়াতে এবং তিলাওয়াতের পারদর্শিতা অর্জনে মনোযোগী।",
      },
      price: {
        en: "999 Tk",
        bn: "৯৯৯ টাকা",
      },
      seats: {
        en: "5",
        bn: "৫",
      },
      duration: {
        english: "1 Year (6 Days a Week)",
        bangla: "১ বছর (সপ্তাহে ৬ দিন)",
      },
      link: "/nazera",
    },
    // আমপারা কোর্স
    {
      courseName: "30th Part Memorizing Course (Ampara Hifz)",
      img: "https://i.postimg.cc/WpF1Fmcg/p-3.jpg",
      description: {
        english:
          "Begin your Quran memorization journey with Juz Amma, the 30th part of the Quran. This course is ideal for beginners focusing on short surahs.",
        bangla:
          "কোরআনের ৩০তম পারা দিয়ে আপনার মুখস্থ যাত্রা শুরু করুন। এই কোর্সটি ছোট সূরার উপর ফোকাস করা, যেটি নবাগতদের জন্য উপযুক্ত।",
      },
      price: {
        en: "999 Tk",
        bn: "৯৯৯ টাকা",
      },
      seats: {
        en: "5",
        bn: "৫",
      },
      duration: {
        english: "5/6 Months (6 Days a Week)",
        bangla: "৫/৬ মাস (সপ্তাহে ৬ দিন)",
      },
      link: "/ampara",
    },
    // হিফয কোর্স
    {
      courseName: "Memorizing Al Quran (Hifz)",
      img: "https://i.postimg.cc/nVDncHq1/p-4.jpg",
      description: {
        english:
          "Designed for students aiming to become Hafiz, this comprehensive course guides you step-by-step in memorizing the entire Quran with revision and tajweed techniques.",
        bangla:
          "যারা হাফিজ হতে চান তাদের জন্য এই পূর্ণাঙ্গ কোর্সটি কোরআন মুখস্থ করতে এবং তাজবীদের কৌশল শিখতে ধাপে ধাপে গাইড করবে।",
      },
      price: {
        en: "1499 Tk",
        bn: "১৪৯৯ টাকা",
      },
      seats: {
        en: "5",
        bn: "৫",
      },
      duration: {
        english: "3/4 Years (6 Days a Week)",
        bangla: "৩/৪ বছর (সপ্তাহে ৬ দিন)",
      },
      link: "/hifz",
    },
    // হিফয রিভাইস
    {
      courseName: "Hifz Revise Course",
      img: "https://i.postimg.cc/kXPq2kcP/p-5.jpg",
      description: {
        english:
          "Rediscover and strengthen your memorization of the Holy Quran with our Revise Hifz Course. Specifically designed for those who have completed Hifz but need guidance in recalling forgotten portions, this course focuses on revision techniques.",
        bangla:
          "আমাদের সংশোধিত হিফজ কোর্সের মাধ্যমে আপনার পবিত্র কুরআনের মুখস্থকে পুনরায় আবিষ্কার করুন এবং শক্তিশালী করুন। বিশেষত তাদের জন্য ডিজাইন করা হয়েছে যারা হিফজ সম্পন্ন করেছেন কিন্তু ভুলে যাওয়া অংশগুলি স্মরণ করার জন্য নির্দেশিকা প্রয়োজন, এই কোর্সটি পুনর্বিবেচনা কৌশলগুলির উপর দৃষ্টি নিবদ্ধ করে৷",
      },
      price: {
        en: "1499 Tk",
        bn: "১৪৯৯ টাকা",
      },
      seats: {
        en: "5",
        bn: "৫",
      },
      duration: {
        english: "1/2 Years (6 Days a Week)",
        bangla: "১/২ বছর (সপ্তাহে ৬ দিন)",
      },
      link: "/revise",
    },
    // ফজিলতের সূরা হিফয
    {
      courseName: "Special Hifz Course",
      img: "https://i.postimg.cc/P5tH4Y96/p-6.jpg",
      description: {
        english:
          "Focused on memorizing specific Surahs of virtue (Fazilat Surahs) from the Quran, this course caters to students seeking spiritual and practical excellence in Quranic memorization.",
        bangla:
          "কোরআনের বিশেষ ফজিলতপূর্ণ সুরাসমূহ হিফজের উপর ভিত্তি করে এই কোর্সটি শিক্ষার্থীদের আত্মিক এবং ব্যবহারিক দক্ষতা বৃদ্ধিতে সহায়তা করে।",
      },
      price: {
        en: "999 Tk",
        bn: "৯৯৯ টাকা",
      },
      seats: {
        en: "5",
        bn: "৫",
      },
      duration: {
        english: "3/4 Years (6 Days a Week)",
        bangla: "৩/৪ বছর (সপ্তাহে ৬ দিন)",
      },
      link: "/special",
    },
    // আলিম কোর্স
    {
      courseName: "Course to become an Islamic scholar (Alim Course)",
      img: "https://i.postimg.cc/d32MRVBP/p-7.jpg",
      description: {
        english:
          "Gain deep knowledge of Islamic sciences, Hadith, Fiqh, and Quran Tafseer in this advanced course. Ideal for those aspiring to become Islamic scholars.",
        bangla:
          "ইসলামী বিজ্ঞান, হাদিস, ফিকহ এবং কোরআন তাফসীর সম্পর্কে গভীর জ্ঞান অর্জন করুন। যারা ইসলামী পণ্ডিত হতে চান তাদের জন্য উপযুক্ত।",
      },
      price: {
        en: "1499 Tk",
        bn: "১৪৯৯ টাকা",
      },
      seats: {
        en: "5",
        bn: "৫",
      },
      duration: {
        english: "3/4 Years (6 Days a Week)",
        bangla: "৩/৪ বছর (সপ্তাহে ৬ দিন)",
      },
      link: "/alim",
    },
    // ফরজে আইন
    {
      courseName: "Need for Ummah Course",
      img: "https://i.postimg.cc/L6SF9j9H/p-8.jpg",
      description: {
        english:
          "Focused on the essentials of Islamic living, this course teaches values, ethics, and foundational knowledge needed to contribute meaningfully to the Ummah.",
        bangla:
          "ইসলামী জীবনের মৌলিক বিষয়গুলোর উপর ভিত্তি করে এই কোর্সটি মূল্যবোধ, নীতি এবং উম্মাহতে অর্থপূর্ণ অবদান রাখার জন্য প্রয়োজনীয় জ্ঞান শেখায়।",
      },
      price: {
        en: "1199 Tk",
        bn: "১১৯৯ টাকা",
      },
      seats: {
        en: "5",
        bn: "৫",
      },
      duration: {
        english: "1/2 Year (6 Days a Week)",
        bangla: "১/২ বছর (সপ্তাহে ৬ দিন)",
      },
      link: "/need",
    },
    // কোরআন তরজমা
    {
      courseName: "Quran translation course",
      img: "https://i.postimg.cc/HLtzNS28/p-12.jpg",
      description: {
        english:
          "This Quran Translation Course provides a deep understanding of the sacred text, translating the meanings of the Quran into accessible language. It covers key verses, themes, and provides insight into the spiritual and practical teachings of Islam. Students will gain an understanding of the Quran’s language, context, and message, helping them connect more deeply with the teachings of Islam.",
        bangla:
          "এই কুরআন অনুবাদ কোর্সটি পবিত্র কুরআনের অর্থ এবং মর্ম উপলব্ধি করার সুযোগ দেয়। এতে গুরুত্বপূর্ণ আয়াত, বিষয়বস্তু এবং ইসলামের আধ্যাত্মিক ও ব্যবহারিক শিক্ষাগুলি অন্তর্ভুক্ত রয়েছে। শিক্ষার্থীরা কুরআনের ভাষা, প্রসঙ্গ এবং বার্তা সম্পর্কে ধারণা লাভ করবে, যা তাদের ইসলামের শিক্ষাগুলির সাথে আরও গভীরভাবে সংযুক্ত হতে সাহায্য করবে।"
      },
      price: {
        en: "1199 Tk",
        bn: "১১৯৯ টাকা",
      },
      seats: {
        en: "5",
        bn: "৫",
      },
      duration: {
        english: "1/2 Year (6 Days a Week)",
        bangla: "১/২ বছর (সপ্তাহে ৬ দিন)",
      },
      link: "/quran",
    },
    // নবিদের সিরাত
    {
      courseName: "Biographies of the Prophets Course",
      img: "https://i.postimg.cc/6QKzYsdN/p-11.jpg",
      description: {
        english:
          "This course offers an in-depth study of the lives of the Prophets in Islam. Students will learn about their challenges, teachings, and the lessons that can be applied to our daily lives, helping to strengthen faith and understanding.",
        bangla:
          "এই কোর্সটি ইসলামে নবীদের জীবনের বিস্তারিত অধ্যয়ন প্রদান করে। শিক্ষার্থীরা তাদের চ্যালেঞ্জ, শিক্ষা এবং আমাদের দৈনন্দিন জীবনে প্রয়োগযোগ্য পাঠ শেখে, যা ইমান ও উপলব্ধি শক্তিশালী করতে সাহায্য করে।",
      },
      price: {
        en: "1199 Tk",
        bn: "১১৯৯ টাকা",
      },
      seats: {
        en: "5",
        bn: "৫",
      },
      duration: {
        english: "1/2 Year (6 Days a Week)",
        bangla: "১/২ বছর (সপ্তাহে ৬ দিন)",
      },
      link: "/bio",
    },
    //ইলমুল ফারায়েয কোর্স 
    {
      courseName: "Inheritance law Course",
      img: "https://i.postimg.cc/ZR7cbCXT/p-10.jpg",
      description: {
        english:
          "This course teaches the principles of Islamic inheritance law, covering the distribution of wealth according to the Quran and Hadith. Students will learn how to calculate shares, understand legal heirs, and apply the laws in real-life scenarios.",
        bangla:
          "এই কোর্সটি ইসলামী উত্তরাধিকার আইন শেখায়, যা কুরআন ও হাদীথ অনুযায়ী সম্পদ বিতরণের পদ্ধতি নিয়ে আলোচনা করে। শিক্ষার্থীরা উত্তরাধিকারীর অংশ হিসাব করা, আইনি উত্তরাধিকারী নির্ধারণ এবং বাস্তব জীবনে এই আইন প্রয়োগ করতে শিখবে।"

,
      },
      price: {
        en: "1199 Tk",
        bn: "১১৯৯ টাকা",
      },
      seats: {
        en: "5",
        bn: "৫",
      },
      duration: {
        english: "1/2 Year (6 Days a Week)",
        bangla: "১/২ বছর (সপ্তাহে ৬ দিন)",
      },
      link: "/law",
    },

    // নামাজ ও মাসায়েল শিক্ষা 
    {
      courseName: "Prayer and Masael Education Course",
      img: "https://i.postimg.cc/Jn4xCb66/p-9.jpg",
      description: {
        english:
          "This course offers comprehensive education on the practices of prayer (Salah) and its related rulings (Masael). Students will also learn about common mistakes, how to correct them, and how to perform prayer in different circumstances. This course aims to strengthen the students' connection with their daily worship and ensure they perform their prayers correctly according to Islamic teachings.",
        bangla:
          "এই কোর্সটি সালাত (নামায) এবং এর সম্পর্কিত মাসায়েল সম্পর্কে ব্যাপক শিক্ষা প্রদান করে। শিক্ষার্থীরা সাধারণ ভুলগুলি সম্পর্কে জানবে, সেগুলি কিভাবে সংশোধন করতে হবে এবং বিভিন্ন পরিস্থিতিতে নামায কিভাবে আদায় করতে হয়, তা শিখবে। এই কোর্সটির উদ্দেশ্য হল শিক্ষার্থীদের তাদের দৈনিক ইবাদতের সাথে সম্পর্ক আরও দৃঢ় করা এবং ইসলামিক শিক্ষা অনুসারে সঠিকভাবে নামায আদায় করা নিশ্চিত করা।"
      },
      price: {
        en: "1199 Tk",
        bn: "১১৯৯ টাকা",
      },
      seats: {
        en: "5",
        bn: "৫",
      },
      duration: {
        english: "1/2 Year (6 Days a Week)",
        bangla: "১/২ বছর (সপ্তাহে ৬ দিন)",
      },
      link: "/prayer",
    },

   
  ];

  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

   return (
    <div className="bg-[url('16.jpg')] bg-no-repeat bg-cover xl:bg-top">
      <div className="max-w-[80%] mx-auto py-20">
        <motion.h2
          className="font-bold text-2xl text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        >
          {language === "en" ? "All Courses" : "সকল কোর্স"}
        </motion.h2>
        
        <motion.div
          className="grid lg:grid-cols-4 gap-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              whileInView="visible" // Scroll animation triggers when in view
              viewport={{ once: false }} // Trigger the animation when 50% of the card is visible
            >
              <CourseCard key={index} course={course} language={language} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default AllCourses;
