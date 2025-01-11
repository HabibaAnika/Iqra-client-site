import { useLanguage } from "../../providers/LanguageProvider";

function AdvanceDetails() {
  const { language } = useLanguage();

  return (
    <div className="relative py-24 bg-cover bg-[url('https://i.postimg.cc/xdvdCnw7/3.jpg')]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3facdfbd] to-[#1ac6e0e1] bg-opacity-40 z-0"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-sky-800 bg-opacity-40"></div>

      {/* Content Area */}
      <div className="relative z-10 max-w-[80%] mx-auto">
        <h1 className="text-3xl font-bold mb-5">
          {language === "en"
            ? "Advanced Quran Course Details"
            : "উচ্চতর কোরআন বা নাযেরা কোর্সের বিস্তারিত"}
        </h1>

        <p className="bg-[#27bfe675] w-auto p-4 rounded-sm text-sm mb-4">
          {language === "en"
            ? "The Advanced Quran Course is designed for those who already have a basic understanding of Quranic recitation. This course focuses on advanced Tajweed, recitation techniques, and memorization of selected Surahs. It is ideal for individuals who want to perfect their Quranic knowledge and recitation skills."
            : "উচ্চতর কোরআন কোর্সটি তাদের জন্য ডিজাইন করা হয়েছে যারা ইতিমধ্যে কোরআন তিলাওয়াতের মৌলিক জ্ঞান রাখেন। এই কোর্সটি উন্নত তাজবীদ, তিলাওয়াতের কৌশল এবং নির্বাচিত সূরাগুলো মুখস্থ করার উপর গুরুত্ব দেয়। এটি তাদের জন্য আদর্শ যারা তাদের কোরআন তিলাওয়াতের দক্ষতা উন্নত করতে চান।"}
        </p>

        <h2 className="text-2xl font-semibold mb-3">
          {language === "en" ? "What You'll Learn:" : "আপনি কী শিখবেন:"}
        </h2>
        <ul className="list-disc pl-6 text-sm bg-[#27bfe675] w-auto p-4 rounded-sm mb-4">
          {language === "en" ? (
            <>
              <li>Advanced rules of Tajweed.</li>
              <li>Perfecting Quranic recitation (Qirat).</li>
              <li>Memorization of Juz Amma and selected Surahs.</li>
              <li>Correcting recitation mistakes.</li>
              <li>Important masala and masnoon prayer</li>
              <li>99 names of Allah Ta&#39;ala</li>
            </>
          ) : (
            <>
              <li>সিফাত , উন্নত তাজবীদের নিয়ম।</li>
              <li>কোরআন তিলাওয়াতের দক্ষতা উন্নত করা (ক্বিরাত)।</li>
              <li>আমপারা এবং নির্বাচিত সূরা মুখস্থ করা।</li>
              <li>তিলাওয়াতের ভুল সংশোধন করা।</li>
              <li>গুরুত্বপূর্ণ মাসায়েল ও মাসনূন দোয়া</li>
              <li>আল্লাহ তায়ালার ৯৯ নাম</li>
            </>
          )}
        </ul>

        <h2 className="text-2xl font-semibold mb-3">
          {language === "en" ? "Course Details:" : "কোর্সের বিবরণ:"}
        </h2>
        <p className="text-sm mb-4 bg-[#27bfe675] p-4 rounded-sm">
          {language === "en"
            ? "This course runs for 6 months, with 6 classes per week. Students will get personalized guidance to perfect their recitation and Tajweed. The course fee is 1499 per month."
            : "এই কোর্সটি ৬ মাসের জন্য পরিচালিত হয়, সপ্তাহে ৫ দিন ক্লাস। শিক্ষার্থীদের তিলাওয়াত এবং তাজবীদ নিখুঁত করার জন্য ব্যক্তিগত দিকনির্দেশনা প্রদান করা হয়। কোর্স ফি প্রতি মাসে ১৪৯৯।"}
          <p>
            {language === "bn" ? (
              <>
                কোর্সের সময়সীমা: ৬ মাস <br />
                ক্লাসের সময়: সপ্তাহে ৬ দিন <br />
                উন্নত তাজবীদ এবং ক্বিরাত শেখানো হবে। <br />
                পুরুষ/মহিলা ও ছোট বাচ্চা সবার জন্য আলাদা ব্যাচ আছে। <br />
                মহিলা শিক্ষার্থীদের ক্লাস মহিলা শিক্ষিকা নিবেন। <br />
                এছাড়াও হোয়াটসঅ্যাপ এর মাধ্যমে সার্বক্ষণিক সহযোগিতা প্রদান করা।{" "}
                <br />
                ঘরে বসেই প্রশিক্ষণপ্রাপ্ত অভিজ্ঞ উস্তাজ, হাফিজ ক্বারী এবং
                আলেমদের দ্বারা অনলাইনে কুরআন তাজবীদ শিখুন। <br />
                ক্লাসের মাধ্যম: জুম, মিট, হোয়াটসঅ্যাপ ,স্কাইপি লাইভ ক্লাস।
                (রেকর্ড ক্লাস দেয়া হয়)
                <br />
                ডেমো ক্লাস করার পর আপনি ভর্তি হতে পারবেন <br />
                সীমিত কোটায় ভর্তি চলছে।
              </>
            ) : (
              <>
                Course Duration: 6 months <br />
                Class Schedule: 6 days a week <br />
                Advanced Tajweed and Qirat training will be provided. <br />
                There are separate batches for men/women and children. <br />
                Class of female students will be taken by female teacher. <br />
                Also providing round the clock support through WhatsApp. <br />
                Learn Quran Tajweed online by trained experienced Ustaz, Hafiz
                Qari and Scholars from home. <br />
                Class Medium: Zoom , Google Meet, WhatsApp, Skype Live Class.
                (Recorded video is provided) <br />
                After demo className you can get admission <br />
                Admission is going on in limited quota.
              </>
            )}
          </p>
        </p>

        <a
          href="/"
          className="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          {language === "en" ? "Home" : "হোম"}
        </a>

        <div className="flex lg:flex-row flex-col items-center gap-2 mt-4">
          <a
            className="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            target="_blank"
            href="https://forms.gle/axmVRr88k5hnSJmd8"
          >
            {language === "en"
              ? "Click Here for Admission Form"
              : "ভর্তি ফর্ম পেতে এখানে ক্লিক করুন"}
          </a>
          <a
            href="https://wa.me/message/RCTHVDUIYROZB1"
            target="_blank"
            className="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            {language === "bn"
              ? "ভর্তির বিষয়ে যে কোন তথ্য জানতে এখানে ক্লিক করুন"
              : "Click here for any information regarding admission"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default AdvanceDetails;
