import { useLanguage } from "../../providers/LanguageProvider";

function PrayerDetails() {
  const { language } = useLanguage();
  return (
    <div className="relative py-24 bg-cover bg-center bg-[url('https://i.postimg.cc/85BQXjmH/quran.jpg')]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4a5657c4] to-[#666e6d6e] bg-opacity-40 z-0"></div>

      {/* content area */}
      <div className="relative z-10 max-w-[80%] mx-auto">
        <h1 className="text-3xl font-bold mb-5">
          {language === "en"
            ? "Prayer and Masael Education Course"
            : "নামাজ ও মাসায়েল শিক্ষা কোর্স"}
        </h1>

        <p className="bg-[#e9347f38] w-auto p-4 rounded-sm text-sm mb-4">
          {language === "en"
            ? "Master the fundamentals of Salah and Islamic rulings with the Prayer and Masael Education Course. This course is designed to help participants learn the correct method of performing Salah and understand the essential rulings (Masael) related to daily worship. Gain the knowledge and confidence to perform your prayers perfectly and address common questions about worship practices."
            : "নামাজ ও মাসায়েল শিক্ষা কোর্সের মাধ্যমে নামাজের মৌলিক বিষয়গুলো এবং ইসলামিক বিধান আয়ত্ত করুন। এই কোর্সটি অংশগ্রহণকারীদের সঠিক পদ্ধতিতে নামাজ আদায় এবং দৈনন্দিন ইবাদতের সাথে সম্পর্কিত প্রয়োজনীয় মাসায়েল বুঝতে সাহায্য করার জন্য ডিজাইন করা হয়েছে। নামাজ সঠিকভাবে আদায় এবং ইবাদতের বিষয়ে সাধারণ প্রশ্নগুলোর উত্তর দেওয়ার জ্ঞান ও আত্মবিশ্বাস অর্জন করুন।"}
        </p>

        <h2 className="text-2xl font-semibold mb-3">
          {language === "en" ? "What You'll Learn:" : "আপনি কী শিখবেন:"}
        </h2>

        <ul className="list-disc pl-6 text-sm bg-[#3b3ee438] w-auto p-4 rounded-sm mb-4">
          {language === "en" ? (
            <>
              <li>Step-by-step guidance on performing Salah correctly.</li>
              <li>Understanding the importance and significance of Salah.</li>
              <li>
                Learning the essential rulings (Masael) of purification and
                prayer.
              </li>
              <li>Resolving common mistakes in Salah.</li>
              <li>Practical tips for improving concentration in prayer.</li>
            </>
          ) : (
            <>
              <li>সঠিকভাবে নামাজ আদায়ের ধাপে ধাপে নির্দেশনা।</li>
              <li>নামাজের গুরুত্ব এবং তাৎপর্য বোঝা।</li>
              <li>পবিত্রতা এবং নামাজ সম্পর্কিত প্রয়োজনীয় মাসায়েল শেখা।</li>
              <li>নামাজে সাধারণ ভুলগুলো সংশোধন।</li>
              <li>নামাজে মনোযোগ উন্নত করার জন্য বাস্তব পরামর্শ।</li>
            </>
          )}
        </ul>

        <h2 className="text-2xl font-semibold mb-3">
          {language === "en" ? "Course Details:" : "কোর্সের বিবরণ:"}
        </h2>
        <p className="text-sm mb-4 bg-[#2beb754b] p-4 rounded-sm">
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

export default PrayerDetails;
