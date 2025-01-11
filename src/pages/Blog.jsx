import { useState } from "react";
import { useLanguage } from "../providers/LanguageProvider";
import { Link } from "react-router-dom";

function Blog() {
  const { language } = useLanguage();
  const [selectedTab, setSelectedTab] = useState("goal");
  return (
    <div className="bg-[url('https://i.postimg.cc/h4wB4hNz/31.jpg')] bg-cover bg-center relative text-justify">
      <div className="absolute  bg-[#56df9f41] opacity-60"></div>
      <div className="container mx-auto py-40">
        <div className="flex flex-col lg:flex-row items-center lg:gap-20">
          <div className="w-[50%]">
            <h2 className="text-2xl font-bold text-center mb-5 text-black">
              {language === "bn" ? "ব্লগ পোস্ট" : "Blog Post"}
            </h2>

            <p className="text-gray-500 text-sm">
              {language === "bn" ? (
                <>
                  ইক্বরা কওমি ইনস্টিটিউট বাংলাদেশসহ সারা বিশ্বে অনলাইনে পবিত্র কোরআনের ক্লাস প্রদান করে থাকে। বিশেষভাবে
                  বাংলাদেশী ও বাংলাদেশী প্রবাসীদের জন্য রয়েছে আমাদের হাফেজ, আলেম ও সহি শুদ্ধ কুরআন শিক্ষার ব্যবস্থা।
                  আসুন অনলাইনে কুরআন শিখি সেরা অনলাইন কুরআন শেখার প্ল্যাটফর্মের সাথে। আমরা সারা বিশ্ব জুড়ে শিশু এবং
                  প্রাপ্তবয়স্ক,পুরুষ এবং মহিলাদের জন্য অনলাইন কোরআন শিক্ষার পরিষেবা প্রদান করে থাকি। আমাদের কোরআন শেখার
                  কোর্সগুলো বিশেষভাবে আপনার এবং আপনার বাচ্চাদের জন্য ডিজাইন করা হয়েছে। যোগ্য কুরআন শিক্ষকদের
                  নির্দেশনায়, আমরা আপনাকে ধাপে ধাপে তাজভীদের নিয়মাবলী এবং প্রয়োজনীয় ইসলামিক জ্ঞানের সাথে কুরআন
                  শিক্ষা প্রদান করব।{" "}
                  <h2 className="font-semibold text-lg text-green-400 mt-5">
                    আপনি কি নিজের জন্য বা আপনার সন্তানদের জন্য একটি অনলাইন ইনস্টিটিউট খুঁজছেন ?
                  </h2>{" "}
                  আপনি কি আপনার সন্তানকে কোরআন পড়াতে চাচ্ছেন বা হাফেজ/হাফেজা বানাতে চাচ্ছেন ? সন্তান আপনার, দায়িত্ব
                  আমাদের। আমরা নিয়ে এসেছি আধুনিক অনলাইন ইক্বরা কওমি ইনস্টিটিউট।{" "}
                  <h2 className="text-lg font-semibold text-green-400">কেন আমাদের নির্বাচন করবেন?</h2>
                  <span className="font-semibold text-amber-500">বিস্তারিত পাঠক্রম :</span>আমরা ইসলামিক শিক্ষার বিভিন্ন
                  বিষয়ে কোর্স প্রদান করি, যেমন কুরআন শিক্ষা, হাদীস, ফিকহ, আকীদা, ইসলামিক ইতিহাস এবং আরও অনেক কিছু।{" "}
                  <br />
                  <span className="font-semibold text-amber-500">অভিজ্ঞ শিক্ষকগণ :</span> আমাদের শিক্ষকগণ তাদের নিজ নিজ
                  ক্ষেত্রে দক্ষ এবং মানসম্মত শিক্ষা প্রদান করতে প্রতিশ্রুতিবদ্ধ। <br />
                  <span className="font-semibold text-amber-500">ভিজ্যুয়াল স্টাডিজ :</span> আপনি যেকোনো সময় এবং যেকোনো
                  স্থান থেকে নিজস্ব গতিতে পড়াশোনা করতে পারেন। আমাদের কোর্সগুলো অনলাইনে হয়ে থাকে, যা আপনাকে আপনার ব্যস্ত
                  সময়সূচির মধ্যে পড়াশোনা করতে সহায়ক। <br />
                  <span className="font-semibold text-amber-500">সাশ্রয়ী : </span>
                  আমরা বিশ্বাস করি যে মানসম্মত শিক্ষা সবার জন্য পাওয়া উচিত, তাদের আর্থিক অবস্থার পরিপ্রেক্ষিতে। আমাদের
                  কোর্সগুলোতে যুক্তিসংগত মূল্যে নির্ধারণ করা হয়, যাতে সকলের জন্য এটি সহজলভ্য হয়।
                  <br />
                  <span className="font-semibold text-amber-500">ইন্টারঅ্যাকটিভ প্ল্যাটফর্ম : </span>
                  আমাদের অনলাইন প্ল্যাটফর্ম আপনাকে শিক্ষকদের এবং সহপাঠীদের সাথে যোগাযোগ করার সুযোগ দেয়, যা একটি
                  কমিউনিটি এবং সহযোগিতার অনুভূতি তৈরি করে। <br />
                  <h2 className="font-semibold text-lg text-green-400 mt-5">আজই আমাদের একাডেমিতে যোগ দিন </h2>একটি
                  বিশ্ব, যেখানে তথ্য অনেক, সেখানে প্রামাণিক ইসলামিক জ্ঞান খুঁজে পাওয়া অত্যন্ত গুরুত্বপূর্ণ। আমাদের
                  অনলাইন ইসলামিক একাডেমি এই জ্ঞান প্রদান করার জন্য প্রতিশ্রুতিবদ্ধ, যা সহজলভ্য এবং বিস্তৃত। আপনি যদি
                  ব্যক্তিগত উন্নতির জন্য অথবা আপনার সম্প্রদায়ের সেবা করার জন্য শিখতে চান, আমরা আপনার যাত্রায় সহায়তা
                  করতে এখানে আছি । আজই ভর্তি হন এবং ইসলামিক শিক্ষার আলোয় চলা একটি সম্প্রদায়ের অংশ হন।
                </>
              ) : (
                <>
                  Iqra Qawmi Institute provides online Holy Quran classes all over the world including Bangladesh.
                  Specially for Bangladeshis and Bangladeshi expatriates, we have Hafez, Alem and Sahi Suddh Quran
                  teaching system. Let&#39;s learn Quran online, with the best online Quran learning platform. We
                  provide online Quran learning services for children and adults, men and women all over the world. Our
                  Quran learning courses are specially designed for you and your children. Under the guidance of
                  qualified Quran teachers, we will provide you step-by-step Quran education along with tajwid rules and
                  essential Islamic knowledge.
                  <h2 className="font-semibold text-lg text-green-400 mt-5">
                    Are you looking for an online institute for yourself or your children?
                  </h2>{" "}
                  Do you want to teach your child Quran or make Hafez/Hafezah? The child is yours, the responsibility is
                  ours. We bring modern online Institute.
                  <h2 className="text-lg font-semibold text-green-400">Why choose us?</h2>
                  <span className="font-semibold text-amber-500">Detailed Courses :</span>We offer courses in various
                  subjects of Islamic education, such as Quranic teaching, Hadith, Fiqh, Aqeedah, Islamic History and
                  many more. <br />
                  <span className="font-semibold text-amber-500">Experienced Teachers :</span> Our teachers are skilled
                  in their respective fields and committed to providing quality education. <br />
                  <span className="font-semibold text-amber-500">Visual Studies :</span> You can study at your own pace
                  anytime and anywhere. Our courses are online, which helps you fit your studies into your busy
                  schedule. <br />
                  <span className="font-semibold text-amber-500">Affordable : </span> We believe that quality education
                  should be available to all. Our courses are priced reasonably, so that it is accessible to all.
                  <br />
                  <span className="font-semibold text-amber-500">Interactive Platform : </span>
                  Our online platform allows you to interact with teachers and classmates, creating a sense of community
                  and collaboration. <br />
                  <h2 className="font-semibold text-lg text-green-400 mt-5">Join our Academy today </h2>
                  In a world where information abounds, finding authentic Islamic knowledge is crucial. Our Online
                  Islamic Academy is committed to providing this knowledge, which is accessible and comprehensive.
                  Whether you want to learn for personal improvement or to serve your community, we are here to support
                  your journey. Enroll today and become part of a community guided by Islamic teachings.
                </>
              )}
            </p>
          </div>
          <div className="text-sm text-gray-500 w-[50%]">
            <h2 className="font-semibold text-lg text-green-400 mt-5">{language === "bn" ? "কোর্সসমুহ" : "Courses"}</h2>
            <ul className="mb-2">
              <li className="list-disc ml-5">
                {language === "bn" ? "প্রাথমিক কোরআন শিক্ষা কোর্স" : "Basic Quran Course"}
              </li>
              <li className="list-disc  ml-5">
                {language === "bn" ? "উচ্চতর কোরআন কোর্স (নাযেরা)" : "Advance Quran Course (Nazera)"}
              </li>
              <li className="list-disc  ml-5">
                {language === "bn"
                  ? "৩০তম পারা মুখস্থ করার কোর্স (আমপারা হিফজ)"
                  : "30th Part Memorizing Course (Ampara Hifz)"}
              </li>
              <li className="list-disc  ml-5">
                {language === "bn" ? "মুখস্থ কোরআন কোর্স (হিফজ)" : "Memorizing Al Quran (Hifz)"}
              </li>
              <li className="list-disc  ml-5">{language === "bn" ? "হিফজ পুনরুদ্ধার কোর্স" : "Hifz Revise Course"}</li>
              <li className="list-disc  ml-5">
                {language === "bn" ? "ফজিলতের সুরাসমুহ হিফয কোর্স" : "Special Hifz Course"}
              </li>
              <li className="list-disc  ml-5">
                {language === "bn" ? "আলিম কোর্স" : "Course to become an Islamic scholar(Alim Course)"}
              </li>
              <li className="list-disc  ml-5">{language === "bn" ? "ফরজে আইন কোর্স" : "Need for Ummah Course"}</li>
            </ul>
            <img className="h-[250px] rounded-3xl" src="(11).jpg" alt="" />
          </div>
        </div>
        
         {/* btn section */}
         <div className="flex lg:flex-row flex-col items-center gap-1 mt-8">
          <a
            className="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300"
            target="_blank"
            href="https://forms.gle/axmVRr88k5hnSJmd8"
          >
            {language === "en" ? "Click Here for Admission Form" : "ভর্তি ফর্ম পেতে এখানে ক্লিক করুন"}
          </a>
          <Link to={"https://wa.me/message/RCTHVDUIYROZB1"}
            className="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300"
          >
            {language === "bn"
              ? "ভর্তির বিষয়ে বা যে কোন তথ্য জানতে এখানে ক্লিক করুন"
              : "Click here for any information regarding admission"}
          </Link>
        </div>
        {/*end btn section */}
       

        {/* Tab Section */}
        <div className="tabs mt-10 mx-auto w-[60%]">
          {/* Tab Headers */}
          <div className="flex">
            <button
              className={`tab ${
                selectedTab === "goal" ? "tab-active" : ""
              } border border-white hover:bg-green-400 hover:text-white w-[50%] h-14`}
              onClick={() => setSelectedTab("goal")}
            >
              {language === "bn" ? "আমাদের লক্ষ্য" : "Our Goal"}
            </button>
            <button
              className={`tab ${
                selectedTab === "why" ? "tab-active" : ""
              } border border-white hover:bg-green-400 hover:text-white w-[50%] h-14`}
              onClick={() => setSelectedTab("why")}
            >
              {language === "bn" ? "কেন এই প্রতিষ্ঠান ?" : "Why this Institute?"}
            </button>
          </div>

          {/* Tab Panels */}
          <div className="">
            {selectedTab === "goal" && (
              <div className="p-12 bg-white border text-gray-600 text-sm">
                {language === "bn" ? (
                  <p>
                    মুসলিম উম্মাহর জন্য পবিত্র কোরআনই একমাত্র পথপ্রদর্শক। আল্লাহ সুবহানাহু ওয়া তায়ালা বলেন (অর্থের
                    ব্যাখ্যা): “তোমরা নিজেদেরকে জাহান্নামের আগুন থেকে বাঁচাও এবং তোমার পরিবারকে বাঁচাও”। অন্যদিকে হাদিসে
                    স্পষ্টভাবে বলা হয়েছে যে, ধর্মীয় জ্ঞান অর্জন করা প্রত্যেক নর-নারীর কর্তব্য। দুঃখের বিষয়, অধিকাংশ
                    মুসলমান কুরআন বোঝে না, শিক্ষার জন্যও বেশি সময় দেয় না। উম্মাহর এই অবস্থার পরিবর্তনের জন্য, আমরা
                    আপনার সন্তানদেরকে ঘরে বসে স্বল্প সময়ের জন্য পার্থিব শিক্ষার পাশাপাশি দ্বীন শিক্ষার জন্য বাংলাদেশে
                    এবং প্রবাসে অনলাইনে কুরআন শিক্ষা দিতে চাই।
                  </p>
                ) : (
                  <p>
                    The Holy Qur&#39;an is the only guide for the Muslim Ummah. Allah subhanahu wa ta&#39;ala says
                    (explanation of meaning): “Save yourselves from the fire of Hell and save your families”. On the
                    other hand, it is clearly stated in the hadith that acquiring religious knowledge is the duty of
                    every man and woman. Sadly, most Muslims do not understand the Quran, nor do they devote much time
                    to learning. To change this situation of the Ummah, we want to teach your children Quran online in
                    Bangladesh and abroad for worldly education as well as deen education for a short period of time at
                    home.
                  </p>
                )}
              </div>
            )}
            {selectedTab === "why" && (
              <div className="p-6 bg-white border text-gray-600 text-sm">
                {language === "bn" ? (
                  <ul className="list-disc list-inside space-y-2">
                    <li>কুরআন সুন্নাহ ভিত্তিক জীবন গঠন।</li>
                    <li>মুসলিম ভাই-বোন ও শিশু কিশোরদের সুপ্ত প্রতিভা বিকাশ সাধন।</li>
                    <li>
                      দক্ষ হাফেজ / আলেম ও আরবি ভাষা শিক্ষার মাধ্যমে যুগ শ্রেষ্ঠ আলেমে দ্বীন ও ইসলামিক স্কলার তৈরীর করা।
                    </li>
                    <li>আদর্শ জাতি গঠনে দেশপ্রেমিক ও কর্তব্যনিষ্ঠা নাগরিক তৈরি করা।</li>
                    <li>মুসলিম ভাই-বোন ও শিশু-কিশোরদের যোগ্য ইসলামী স্কলার তৈরি করা।</li>
                  </ul>
                ) : (
                  <ul className="list-disc list-inside space-y-2">
                    <li>Building life based on Quran and Sunnah.</li>
                    <li>Developing latent talents of Muslim brothers and sisters and children and teenagers.</li>
                    <li>
                      Making Deen and Islamic scholars into the best scholars of the age through skillful Hafez/scholars
                      and Arabic language education.
                    </li>
                    <li>Creating patriotic and dutiful citizens to build an ideal nation.</li>
                    <li>Making Muslim Brothers and Sisters and Children and Adolescents Qualified Islamic Scholars.</li>
                  </ul>
                )}
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
