import { useLanguage } from "../../providers/LanguageProvider";

function Quran() {
  const { language } = useLanguage();
  return (
    <div className="relative py-24 bg-cover bg-[url('https://i.postimg.cc/1XmxksWZ/low.jpg')]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4d3a1680] to-[#ad9f1c57] bg-opacity-40 z-0"></div>

      {/* content area */}
      <div className="relative z-10 max-w-[80%] mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-5">
          {language === "en" ? "Quran translation course" : "কোরআন তরজমা কোর্স"}
        </h1>

        <p className="bg-[#8285863a] w-auto p-4 rounded-sm text-sm mb-4">
          {language === "en"
            ? "Deepen your understanding of the Quran with the Quran Translation Course. This course is designed for those who want to comprehend the meaning and message of the Quran. Through structured lessons, participants will learn the translation of the Quran alongside insights into its context and themes. Embark on this enlightening journey to connect with the divine message in a meaningful way."
            : "কোরআন অনুবাদ কোর্সের মাধ্যমে কোরআন বোঝার গভীরে যান। এই কোর্সটি তাদের জন্য ডিজাইন করা হয়েছে যারা কোরআনের অর্থ এবং বার্তা বুঝতে চান। সংগঠিত পাঠের মাধ্যমে অংশগ্রহণকারীরা কোরআনের অনুবাদ শিখবেন এবং এর প্রসঙ্গ এবং বিষয় সম্পর্কে অন্তর্দৃষ্টি পাবেন। এই আলোকিত যাত্রায় যোগ দিন এবং আল্লাহর বাণীর সাথে অর্থপূর্ণ সম্পর্ক গড়ে তুলুন।"}
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
          {language === "en" ? "What You'll Learn:" : "আপনি কী শিখবেন:"}
        </h2>
        <ul className="list-disc pl-6 text-sm bg-[#8285863a]  w-auto p-4 rounded-sm mb-4">
          {language === "en" ? (
            <>
              <li>Translation of Quranic verses in a simple and clear way.</li>
              <li>Understanding the context and themes of Surahs.</li>
              <li>Learning key Arabic words and phrases from the Quran.</li>
              <li>Daily practice of translating Quranic passages.</li>
              <li>
                Insights into the practical application of Quranic teachings.
              </li>
            </>
          ) : (
            <>
              <li>সহজ এবং স্পষ্টভাবে কোরআনের আয়াতের অনুবাদ।</li>
              <li>সুরাগুলোর প্রসঙ্গ এবং বিষয়বস্তু বোঝা।</li>
              <li>কোরআনের গুরুত্বপূর্ণ আরবি শব্দ এবং বাক্যাংশ শেখা।</li>
              <li>দৈনিক কোরআনের অনুবাদ অনুশীলন।</li>
              <li>
                কোরআনের শিক্ষার বাস্তব জীবনে প্রয়োগ সম্পর্কে অন্তর্দৃষ্টি।
              </li>
            </>
          )}
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
          {language === "en" ? "Course Details:" : "কোর্সের বিবরণ:"}
        </h2>
        <p className="text-sm mb-2 bg-[#8285863a] p-4 rounded-sm">
          {language === "en"
            ? "This course is conducted over 3-4 months, with 6 classes per week. Students will be taught in small batches of 5 to ensure personalized attention and guidance. The course fee is 999 per month."
            : "এই কোর্সটি ৩-৪ মাস ধরে পরিচালিত হয়, সপ্তাহে ৬টি ক্লাস। শিক্ষার্থীদের ব্যক্তিগত মনোযোগ এবং দিকনির্দেশনা নিশ্চিত করতে ৫ জনের ছোট ব্যাচে পাঠ দেওয়া হয়। কোর্স ফি প্রতি মাসে ৯৯৯। "}
          <p>
            {language === "bn" ? (
              <>
                কোর্সের সময়সীমা: ৩/৪ মাস মেয়াদী কোর্স
                <br />
                ক্লাসের সময়: সপ্তাহে ৬ দিন
                <br />
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
                Course Duration: 3/4 month course <br />
                Class Schedule: 6 days a week <br />
                There are separate batches for men/women and children. <br />
                Class of female students will be taken by female teacher. <br />
                Also providing round the clock support through WhatsApp. <br />
                Learn Quran Tajweed online by trained experienced Ustaz, Hafiz
                Qari and Scholars from home. <br />
                Class Medium: Zoom , Google Meet, WhatsApp, Skype Live Class.
                (Recorded video is provided) <br />
                After demo className you can get admission <br />
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

export default Quran;
