import { useLanguage } from "../../providers/LanguageProvider";
function Law() {
  const { language } = useLanguage();
  return (
    <div className="relative py-24 bg-cover bg-[url('https://i.postimg.cc/76yrNg0h/m.jpg')]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#dfe2e175] to-[#c3ecd057] bg-opacity-40 z-0"></div>

      {/* content area */}
      <div className="relative z-10 max-w-[80%] mx-auto">
        <h1 className="text-3xl font-bold mb-5">
          {language === "en"
            ? "Inheritance law Course"
            : "উত্তরাধিকার আইন কোর্স"}
        </h1>

        <p className="bg-[#2185b35d] w-auto p-4 rounded-sm text-sm mb-4">
          {language === "en"
            ? "Gain a comprehensive understanding of Islamic inheritance laws with the Inheritance Law Course. This course is designed to educate participants about the principles and rules governing the distribution of wealth among heirs in accordance with Shariah. Whether you are looking to enhance your knowledge or resolve real-life inheritance scenarios, this course offers practical insights and clarity on the subject."
            : "উত্তরাধিকার আইন কোর্সের মাধ্যমে ইসলামিক উত্তরাধিকার আইনের ব্যাপারে বিস্তারিত ধারণা অর্জন করুন। এই কোর্সটি শারিয়াহ অনুসারে উত্তরাধিকারীদের মধ্যে সম্পদ বণ্টনের নীতিমালা ও নিয়ম সম্পর্কে শিক্ষাদান করার জন্য ডিজাইন করা হয়েছে। আপনি জ্ঞান বৃদ্ধি করতে চান বা বাস্তব জীবনের উত্তরাধিকার সংক্রান্ত সমস্যার সমাধান খুঁজছেন, এই কোর্সটি এই বিষয়ে বাস্তবিক অন্তর্দৃষ্টি এবং স্পষ্টতা প্রদান করে।"}
        </p>

        <h2 className="text-2xl font-semibold mb-3">
          {language === "en" ? "What You'll Learn:" : "আপনি কী শিখবেন:"}
        </h2>
        <ul className="list-disc pl-6 text-sm bg-[#2185b354] w-auto p-4 rounded-sm mb-4">
          {language === "en" ? (
            <>
              <li>Basic principles of Islamic inheritance law.</li>
              <li>Understanding shares and rightful heirs.</li>
              <li>Case studies on inheritance distribution.</li>
              <li>Resolving disputes in inheritance matters.</li>
              <li>
                Practical application of inheritance laws in modern contexts.
              </li>
            </>
          ) : (
            <>
              <li>ইসলামিক উত্তরাধিকার আইনের মৌলিক নীতিমালা।</li>
              <li>উত্তরাধিকারীদের অংশ এবং অধিকার বোঝা।</li>
              <li>উত্তরাধিকার বণ্টনের কেস স্টাডি।</li>
              <li>উত্তরাধিকার বিষয়ে বিরোধ নিষ্পত্তি।</li>
              <li>আধুনিক প্রেক্ষাপটে উত্তরাধিকার আইন প্রয়োগ।</li>
            </>
          )}
        </ul>

        <h2 className="text-2xl font-semibold mb-3">
          {language === "en" ? "Course Details:" : "কোর্সের বিবরণ:"}
        </h2>
        <p className="text-sm mb-4 bg-[#2185b36e] p-4 rounded-sm">
          {language === "en"
            ? "This course is conducted over 1/2 Years, with 5 classes per week. Students will be taught in small batches of 5 to ensure personalized attention and guidance."
            : "এই কোর্সটি ১/২ বছর ধরে পরিচালিত হয়, সপ্তাহে ৫টি ক্লাস। শিক্ষার্থীদের ব্যক্তিগত মনোযোগ এবং দিকনির্দেশনা নিশ্চিত করতে ৫ জনের ছোট ব্যাচে পাঠ দেওয়া হয়।"}
          <p>
            {language === "bn" ? (
              <> 
                কোর্সের সময়সীমা: ৩/৪ মাস মেয়াদী কোর্স
                <br />
                ক্লাসের সময়: সপ্তাহে ৫ দিন
                <br />
                কোর্স ফি ঃ ১১৯৯ টাকা (মাসিক) <br />
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
                Class Schedule: 5 days a week <br />
                Course Fee: 1199 Taka (monthly) <br />
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

export default Law;
