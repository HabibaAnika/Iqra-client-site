import { useLanguage } from "../../providers/LanguageProvider";

function FeaturedBlog() {
  const { language } = useLanguage();
  return (
    <div className="bg-[url('https://i.postimg.cc/kXHGYjNj/97.jpg')] py-20 bg-no-repeat bg-cover bg-center">

    <div className="max-w-[80%] mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">
        {language === "bn" ? "পরিচিতি ব্লগ" : " Blog"} 
      </h2>
      <p className="text-gray-500 text-sm text-justify">
        {language === "bn" ? (
          <>
            আমাদের অনলাইন ইসলামিক একাডেমিতে স্বাগতম !! ডিজিটাল যুগে, জ্ঞানে প্রবেশ করা আগে কখনো এত সহজ ছিল না। অনলাইন
            শিক্ষার প্ল্যাটফর্মগুলির উদ্ভবের সাথে, শিক্ষা ভৌগলিক সীমানাগুলি অতিক্রম করেছে। আমাদের অনলাইন ইসলামিক একাডেমি
            একটি আলোর দিশারি হিসেবে কাজ করছে, যা পৃথিবীর যেকোনো প্রান্তে মানুষকে মানসম্মত ইসলামিক শিক্ষা প্রদান করছে।
            আমাদের একাডেমিতে, আমরা বিশ্বাস করি যে ইসলামিক জ্ঞান ব্যক্তিগত উন্নতি, সমাজ নির্মাণ এবং আধ্যাত্মিক বিকাশের
            জন্য একটি শক্তিশালী হাতিয়ার। আপনি যদি মৌলিক শিক্ষায় আগ্রহী হন অথবা ইসলামিক জ্ঞান গভীরভাবে শিখতে চান,
            আমাদের কোর্সগুলো সকল স্তরের শিক্ষার্থীর জন্য উপযুক্ত। আকীদার মৌলিক বিষয় থেকে শুরু করে ইসলামিক ফিকহের জটিলতা
            পর্যন্ত, আমাদের একাডেমি বিস্তৃত কোর্স অফার করে। <br />{" "}
            <h2 className="text-lg font-semibold mt-4 text-amber-500">আমাদের লক্ষ্য</h2> আমাদের অনলাইন ইসলামিক একাডেমির
            লক্ষ্য হল সবার জন্য প্রামাণিক ইসলামিক জ্ঞান সহজলভ্য করা, বিশেষত এমন একটি যুগে যেখানে ভুল তথ্য খুব সহজে
            ছড়িয়ে পড়তে পারে। আমরা একটি এমন প্ল্যাটফর্ম তৈরি করতে চাই, যেখানে শিক্ষার্থীরা যোগ্য এবং অভিজ্ঞ শিক্ষকদের
            কাছ থেকে শিখতে পারবেন, যা শিক্ষার প্রামাণিকতা নিশ্চিত করে। আমাদের কোর্সগুলোতে শিক্ষকরা এমন ব্যক্তি, যারা
            ইসলামিক বিজ্ঞানে বহু বছর ধরে অধ্যয়ন এবং শিক্ষা প্রদান করেছেন। তারা আধুনিক বিশ্বের সঙ্গে সঙ্গতিপূর্ণভাবে
            ইসলামিক শিক্ষা প্রদান করতে প্রতিশ্রুতিবদ্ধ।{" "}
            <h2 className="text-lg font-semibold mt-4 text-amber-500">দ্বীন শিক্ষার গুরুত্ব ও আমাদের পদক্ষেপ</h2>
            দ্বীনি ইলম শিক্ষা করা প্রত্যেক মুসলমানের উপর ফরজ। রাসূল সাল্লাল্লাহু আলাইহি ওয়া সালাম বলেছেন,
            <span className="text-amber-600 text-lg"> طَلَبُ الْعِلْمِ فَرِيْضَةٌ عَلَى كُلِّ مُسْلِمٍ</span>
            <br />
            আপনি ও আপনার বাচ্চার জীবন সুন্দর করার জন্য ইসলামী জ্ঞান এবং ইসলাম শিক্ষা একটি গুরুত্বপূর্ণ অধ্যায়। ইসলাম
            শিক্ষা একমাত্র জাতীকে সভ্য সংস্কৃতি এবং উন্নত কালচারে নিয়ে যেতে সহযোগিতা করে। তাই আপনার বাচ্চাকে হাফেজ/
            আলেম, সহি শুদ্ধ কুরআন শিক্ষা ও আরবি ভাষা শিক্ষায় পারদর্শী করে তুলতে ইক্বরা কওমি ইনস্টিটিউটে ভর্তি হয়ে
            ক্লাসে অংশগ্রহণ করুন। সুদক্ষ শিক্ষকগণের পাঠদানের মাধ্যমে যোগ্য হাফেজ আলেম ও ইসলামী স্কলার তৈরি করতে পারবেন।
            কোর্স শেষে সার্টিফিকেট প্রদান করা হবে।
            <br />
            আল্লাহ তায়ালা মানবজাতির জন্য কুরআন শিক্ষাকে সহজ করে দিয়েছেন। কিন্তু প্রচলিত শিক্ষায় পদ্ধতিগত ভুলের কারনে
            কঠিন মনে হয়। <br />
            আলহামদুলিল্লাহ!দীর্ঘ দিনের প্রচেষ্টার ফলে এমন এক পদ্ধতি উদ্ভাবনে সক্ষম হয়েছি। আপনরা একটু মনোযোগ দিয়ে চেষ্টা
            করলে সহীহ্ শুদ্ধভাবে কোরআন শরীফ শিখতে পারবে, ইনশাআল্লাহ। <br /> কেমন হয় যদি (অনলাইনে) ঘরে বসেই পবিত্র
            কুরআনের হাফেজ /আলিম/আরবি ভাষা শিক্ষা ইসলামি স্কলার হওয়া যায় ! দূরে নয়, সন্তানকে নিজের চোখের সামনে রেখেই
            হাফেজ\হাফেজা বানানোর স্বপ্ন বাস্তবায়ন করুন।
          </>
        ) : (
          <>
            Welcome to our Online Islamic Academy!! In the digital age, accessing knowledge has never been easier. With the emergence of online learning platforms, education has transcended geographical boundaries. 
            Our Online Islamic Academy acts as a beacon of light, providing quality Islamic education to people anywhere in the world.
            At our academy, we believe that Islamic knowledge is a powerful tool for personal improvement,
            community building and spiritual development. Whether you are interested in basic education or want to learn Islamic knowledge in depth, our courses are suitable for all levels of students. From the basics of Aqeedah to the intricacies of Islamic Fiqh, our academy offers a wide range of courses. <br />
            <h2 className="text-amber-500 font-bold text-2xl mt-5">Our goal</h2> Our online Islamic Academy aims to make authentic Islamic knowledge accessible to everyone, especially in an age where misinformation can spread so easily.
             We want to create a platform where students can learn from qualified and experienced teachers, which ensures authenticity of education. 
             The teachers in our courses are individuals who have studied and taught Islamic sciences for many years. They are committed to providing Islamic education in line with the modern world. 
             <h2 className="text-amber-500 font-bold text-2xl mt-5">Importance of dual education and our steps</h2> Studying religious knowledge is obligatory on every Muslim. 
             The Prophet, (may God bless him and grant him peace) said, <p className="text-amber-600 text-lg">طَلَبُ الْعِلْمِ فَرِيْضَةٌ عَلَى كُلِّ مُسْلِمٍ</p> 
            Islamic knowledge and Islamic education is an important chapter to make life better for you and your child.
            Islamic education only helps to lead the nation to civilized culture and advanced culture.
             So enroll your child in Iqra Qawmi Institute and attend classes to make your child proficient in Hafez/Alem, Quran and Arabic language learning.
            Qualified Hafez scholars and Islamic scholars can be produced through the teaching of good teachers. 
            Certificate will be awarded at the end of the course. <br />
            Allah Ta&#39;ala has made Quran learning easy for mankind. But it seems difficult due to systematic mistakes in conventionaleducation. <br />
            Alhamdulillah! As a result of long efforts, I have been able to develop such a method. If you try with a little attention, you will be able to learn the Qur&#39;an Sharif in a right manner, inshallah. <br />
            What if (online) you can become a Hafez / Alim / Arabic language Islamic scholar of the Holy Quran sitting at home!
            Realize the dream of making Hafez/Hafeza with your child not far away.
          </>
        )}
      </p>
      <a className="btn btn-sm btn-outline btn-success mt-4" href={"/blog"}>
        {language === "bn" ? "আরও পড়ুন" : "Read More"}{" "}
      </a>
    </div>
    </div>
  );
}

export default FeaturedBlog;
