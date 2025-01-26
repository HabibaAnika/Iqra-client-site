import { useLanguage } from "../../providers/LanguageProvider";

function HifzDetails() {
  const { language } = useLanguage();

  return (
    <div className="relative min-h-screen w-full overflow-y-auto py-24">
      {/* Image Container */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.postimg.cc/WzHNK3ZD/5.jpg')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-sky-900 bg-opacity-80"></div>

      {/* Content Area */}
      <div className="relative z-10 max-w-[80%] mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          {language === "en" ? "Hifz Course Details" : "হিফজ কোর্সের বিস্তারিত"}
        </h1>

        <p className="bg-[#42b3e057] w-auto p-4 rounded-sm text-sm mb-4">
          {language === "en"
            ? "Embark on the sacred journey of memorizing the Quran through the Hifz Course. This advanced program is designed to help students commit the entire Quran to memory with precision and understanding. Under the guidance of experienced and certified teachers, students will develop mastery over recitation, Tajweed, and Quranic comprehension."
            : "পবিত্র কুরআন মুখস্থ করার পবিত্র যাত্রা শুরু করুন হিফজ কোর্সের মাধ্যমে। এই উন্নত প্রোগ্রামটি শিক্ষার্থীদের কুরআন পুরোপুরি মুখস্থ করতে এবং তা সঠিকভাবে বুঝতে সাহায্য করার জন্য ডিজাইন করা হয়েছে। অভিজ্ঞ এবং প্রশিক্ষিত শিক্ষকদের তত্ত্বাবধানে শিক্ষার্থীরা তিলাওয়াত, তাজবীদ এবং কুরআনের গভীর বোঝাপড়ায় দক্ষতা অর্জন করবে।"}
        </p>

        <h2 className="text-2xl font-semibold mb-3">
          {language === "en" ? "What You'll Learn:" : "আপনি কী শিখবেন:"}
        </h2>
        <ul className="list-disc pl-6 text-sm bg-[#42b3e057] w-auto p-4 rounded-sm mb-4">
          {language === "en" ? (
            <>
              <li>Complete memorization of the Quran with correct Tajweed.</li>
              <li>Techniques for retaining and revising memorized portions.</li>
              <li>Understanding the meanings of selected verses.</li>
              <li>Daily personalized feedback and progress monitoring.</li>
              <li>Development of discipline and spiritual connection.</li>
            </>
          ) : (
            <>
              <li>কুরআন পুরোপুরি মুখস্থ করা সহীহ তাজবীদের সাথে।</li>
              <li>মুখস্থ অংশগুলো ধরে রাখার এবং পুনরায় পড়ার কৌশল।</li>
              <li>নির্বাচিত আয়াতগুলোর অর্থ বোঝা।</li>
              <li>দৈনিক ব্যক্তিগত মতামত এবং অগ্রগতির পর্যবেক্ষণ।</li>
              <li>শৃঙ্খলা এবং আধ্যাত্মিক সংযোগের উন্নয়ন।</li>
            </>
          )}
        </ul>

        <h2 className="text-2xl font-semibold mb-3">
          {language === "en" ? "Course Details:" : "কোর্সের বিবরণ:"}
        </h2>
        <p className="text-sm bg-[#42b3e057] p-4 rounded-sm mb-4">
          {language === "en"
            ? "The Hifz Course spans 3/4 years depending on individual progress. Classes are held 6 days a week with flexible timing options. Students receive one-on-one sessions to ensure focused learning. A dedicated WhatsApp group is available for continuous support and guidance."
            : "হিফজ কোর্সের সময়কাল ৩/৪ বছর, যা শিক্ষার্থীর অগ্রগতির উপর নির্ভরশীল। সপ্তাহে ৬ দিন ক্লাস এবং সময়ের ক্ষেত্রে নমনীয়তা রয়েছে। শিক্ষার্থীরা ফোকাসড শেখার জন্য একান্ত সেশনের সুযোগ পায়। টানা সহায়তা এবং নির্দেশনার জন্য একটি নিবেদিত হোয়াটসঅ্যাপ গ্রুপ রয়েছে।"}
          {language === "bn" ? (
            <><br />
              কোর্সের সময়সীমা: ৩/৪ বছর <br />
              ক্লাসের সময়: সপ্তাহে ৫ দিন <br />
              কোর্স ফি ঃ ১৪৯৯ টাকা (মাসিক) <br />
              উন্নত তাজবীদ এবং ক্বিরাত শেখানো হবে। <br />
              পুরুষ/মহিলা ও ছোট বাচ্চা সবার জন্য আলাদা ব্যাচ আছে। <br />
              মহিলা শিক্ষার্থীদের ক্লাস মহিলা শিক্ষিকা নিবেন। <br />
              এছাড়াও হোয়াটসঅ্যাপ এর মাধ্যমে সার্বক্ষণিক সহযোগিতা প্রদান করা।{" "}
              <br />
              ঘরে বসেই প্রশিক্ষণপ্রাপ্ত অভিজ্ঞ উস্তাজ, হাফিজ ক্বারী এবং আলেমদের
              দ্বারা অনলাইনে কুরআন তাজবীদ শিখুন। <br />
              ক্লাসের মাধ্যম: জুম, মিট, হোয়াটসঅ্যাপ ,স্কাইপি লাইভ ক্লাস।
              (রেকর্ড ক্লাস দেয়া হয়)
              <br />
              ডেমো ক্লাস করার পর আপনি ভর্তি হতে পারবেন <br />
              সীমিত কোটায় ভর্তি চলছে।
            </>
          ) : (
            <><br />
              Course Duration: 3/4 years <br />
              Class Schedule: 5 days a week <br />
              Course Fee: 1499 Taka (monthly) <br />
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

        <a
          href="/"
          className="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-900"
        >
          {language === "en" ? "Home" : "হোম"}
        </a>

        <div className="flex lg:flex-row flex-col items-center gap-2 mt-4">
          <a
            className="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-900"
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
            className="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-900"
          >
            {language === "en"
              ? "Click here for any information regarding admission"
              : "ভর্তির বিষয়ে যে কোন তথ্য জানতে এখানে ক্লিক করুন"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default HifzDetails;
