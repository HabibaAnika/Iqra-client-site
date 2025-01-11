import { useLanguage } from "../../providers/LanguageProvider";

function Biography() {
  const { language } = useLanguage();
  return (
    <div className="relative py-24 bg-cover bg-[url('https://i.postimg.cc/mr9GMdcK/11.jpg')]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#df3f6785] to-[#1db9d1cc] bg-opacity-40 z-0"></div>

      {/* content area */}
      <div className="relative z-10 max-w-[80%] mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-5">
          {language === "en"
            ? "Biographies of the Prophets Course"
            : "নবীদের সিরাত কোর্স"}
        </h1>

        <p className="bg-[#1053722a] w-auto p-4 rounded-sm text-sm mb-4">
          {language === "en"
            ? "Explore the lives of the Prophets with the Biographies of the Prophets Course. This course is designed to provide a deep and engaging understanding of the Prophets’ stories, their challenges, and their unwavering faith. By learning about their lives, you will gain valuable lessons and inspiration to navigate your own journey. Join us to connect with the timeless examples of the Prophets and their teachings."
            : "নবীদের সিরাত কোর্সের মাধ্যমে নবীদের জীবন সম্পর্কে জানুন। এই কোর্সটি নবীদের জীবনের গল্প, তাদের চ্যালেঞ্জ এবং তাদের দৃঢ় ঈমান সম্পর্কে গভীর এবং আকর্ষণীয় ধারণা দেওয়ার জন্য ডিজাইন করা হয়েছে। তাদের জীবন সম্পর্কে জানার মাধ্যমে, আপনি মূল্যবান শিক্ষা এবং অনুপ্রেরণা পাবেন যা আপনার নিজের জীবনের পথচলায় কাজে লাগবে। নবীদের শিক্ষা ও উদাহরণের সাথে সংযোগ স্থাপন করতে আমাদের সাথে যোগ দিন।"}
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
          {language === "en" ? "What You'll Learn:" : "আপনি কী শিখবেন:"}
        </h2>

        <ul className="list-disc pl-6 text-sm bg-[#1053722a] w-auto p-4 rounded-sm mb-4">
          {language === "en" ? (
            <>
              <li>
                Detailed stories of major Prophets from Adam (AS) to Muhammad
                (SAW).
              </li>
              <li>Key events and lessons from their lives.</li>
              <li>
                Understanding the historical and cultural context of their
                missions.
              </li>
              <li>
                Practical applications of Prophetic teachings in daily life.
              </li>
              <li>
                Interactive discussions and activities to deepen understanding.
              </li>
            </>
          ) : (
            <>
              <li>
                হজরত আদম (আঃ) থেকে হজরত মুহাম্মাদ (সাঃ) পর্যন্ত প্রধান নবীদের
                বিশদ গল্প।
              </li>
              <li>তাদের জীবনের প্রধান ঘটনা এবং শিক্ষা।</li>
              <li>তাদের মিশনের ঐতিহাসিক এবং সাংস্কৃতিক প্রেক্ষাপট বোঝা।</li>
              <li>নবীদের শিক্ষার দৈনন্দিন জীবনে প্রয়োগ।</li>
              <li>
                বিষয়টি আরও ভালোভাবে বোঝার জন্য ইন্টারেক্টিভ আলোচনা এবং
                কার্যক্রম।
              </li>
            </>
          )}
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
          {language === "en" ? "Course Details:" : "কোর্সের বিবরণ:"}
        </h2>
        <p className="text-sm mb-4 bg-[#1053722a] p-4 rounded-sm">
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

export default Biography;
