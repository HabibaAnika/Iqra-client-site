import { useLanguage } from "../../providers/LanguageProvider";

function Blog_1() {
  const { language } = useLanguage();
  return (
    <div className="pt-32 bg-gradient-to-r from-[#3a45d859] to-[#d0faa065]">
      <div className="max-w-[80%] mx-auto min-h-screen pb-20">
        <h2 className="font-bold text-2xl text-center">
          {language === "bn" ? (
            <>
              <span className="text-green-400">
                ফ্রিল্যান্সিং এবং আউটসোর্সিং
              </span>{" "}
              সম্পর্কিত বেশকিছু মাসআলা-মাসায়েল
            </>
          ) : (
            <><span className="text-green-400">Several issues related to</span> freelancing and outsourcing</>
          )}
        </h2>

        <div className="flex justify-center mt-2">
          <div className="w-60 h-1 bg-black"></div>
          <div className="w-60 h-1 bg-green-400"></div>
        </div>

        <div className="text-xs textarea-xs mt-10 p-6 bg-gray-100 bg-opacity-60">
          {language === "bn" ? (
            <>
              <h3 className="font-semibold text-amber-500 mb-2">
                ফ্রিল্যান্সিং এবং আউটসোর্সিং একটি বহুল প্রচলিত কাজের
                মাধ্যম,যেখানে বিভিন্ন দেশ ও সংস্কৃতির মানুষ একত্রিত হয়ে কাজ
                করেন। তবে, ইসলামের দৃষ্টিতে এসব কাজ করতে গিয়ে কিছু
                মাসআলা-মাসায়েল এবং তাদের সমাধান জানা জরুরি।
              </h3>
            </>
          ) : (
            <>
              <h3 className="font-semibold text-warning mb-2">
                Freelancing and outsourcing is a very common way of working,
                where people from different countries and cultures work
                together. However, in the eyes of Islam, while doing these
                things, it is important to know some issues and their solutions.
              </h3>
            </>
          )}
          {language === "bn" ? (
            <>
              <h4 className="font-bold bg-green-400 p-2 rounded mb-1 mt-3">
                ১. হালাল এবং হারাম কাজের সীমারেখা
              </h4>{" "}
              <li className="list-none">
                <span className="font-bold">💠সমস্যা :</span> ফ্রিল্যান্সিংয়ের
                মাধ্যমে এমন কোনো কাজ করা হচ্ছে কিনা, যা ইসলাম হারাম ঘোষণা করেছে,
                যেমন হারাম পণ্য প্রচার, জুয়া বা অশ্লীলতা সংক্রান্ত কাজ।
              </li>
              <li className="list-none">
                <span className="font-bold">💠সমাধান : </span>মুসলিম
                ফ্রিল্যান্সারদের উচিত এমন কাজ বেছে নেওয়া যা হালাল এবং শারীয়াহ
                সম্মত। হারাম কোনো কন্টেন্ট তৈরি বা প্রচার থেকে বিরত থাকতে হবে।
              </li>
              <h4 className="font-bold bg-green-400 p-2 rounded mb-1 mt-3">
                ২. চুক্তি এবং প্রতিশ্রুতি পালন
              </h4>
              <li className="list-none">
                <span className="font-bold">💠সমস্যা :</span> ফ্রিল্যান্সিংয়ে
                ক্লায়েন্টের সঙ্গে করা চুক্তি বা ওয়াদা ভঙ্গ করা হলে তা ইসলামিক
                দৃষ্টিকোণে গুনাহর অন্তর্ভুক্ত।{" "}
              </li>
              <li className="list-none">
                <span className="font-bold">💠সমাধান : </span>প্রতিটি চুক্তি বা
                প্রতিশ্রুতি সঠিকভাবে পালন করতে হবে। দেরি বা প্রতারণা থেকে বিরত
                থাকতে হবে। সময়মতো কাজ ডেলিভারি করা একটি ইসলামিক দায়িত্ব।
              </li>
              <h4 className="font-bold bg-green-400 p-2 rounded mb-1 mt-3">
                ৩. মুনাফা এবং কমিশন
              </h4>
              <li className="list-none">
                <span className="font-bold">💠সমস্যা: </span>আউটসোর্সিংয়ের
                ক্ষেত্রে কোনো প্রজেক্ট অন্যের কাছে হস্তান্তর করে কম কাজের
                মাধ্যমে বেশি মুনাফা অর্জন করা জায়েজ কিনা?
              </li>
              <li className="list-none">
                <span className="font-bold">💠সমাধান: </span>যদি ক্লায়েন্টকে কাজ
                হস্তান্তরের বিষয়ে স্পষ্টভাবে জানানো হয় এবং তার সম্মতি থাকে, তবে
                তা জায়েজ। তবে প্রতারণা করা সম্পূর্ণ হারাম।
              </li>
              <h4 className="font-bold bg-green-400 p-2 rounded mb-1 mt-3">
                ৪. কর ও আয়কর
              </h4>
              <li className="list-none">
                <span className="font-bold">💠সমস্যা : </span> ফ্রিল্যান্সিং বা
                আউটসোর্সিংয়ের মাধ্যমে অর্জিত আয়ের ওপর সরকারের কর পরিশোধ করা নিয়ে
                সন্দেহ।{" "}
              </li>
              <li className="list-none">
                <span className="font-bold">💠সমাধান : </span>দেশের আইন অনুযায়ী কর
                পরিশোধ করা ইসলামিক দৃষ্টিতে আবশ্যক, যদি তা কোনো হারাম কাজকে
                সমর্থন না করে।
              </li>
              <h4 className="font-bold bg-green-400 p-2 rounded mb-1 mt-3">
                ৫. রিবা (সুদ) এর সংশ্লেষ
              </h4>
              <li className="list-none">
                <span className="font-bold">💠সমস্যা :</span> পেমেন্ট প্রসেসিং
                প্ল্যাটফর্মে (PayPal, Payoneer) টাকা জমা রেখে সুদ আসা বা ব্যাংক
                লেনদেনে সুদ যুক্ত হওয়া।
              </li>
              <li className="list-none">
                <span className="font-bold">💠সমাধান :</span>চেষ্টা করতে হবে
                সুদমুক্ত পদ্ধতি অনুসরণ করার। সুদ এড়ানোর জন্য সময়মতো অর্থ উত্তোলন
                করুন এবং কোনো সুদ এলে তা দান করে দিন।
              </li>
              <h4 className="font-bold bg-green-400 p-2 rounded mb-1 mt-3">
                ৬. সময় এবং আমানত
              </h4>
              <li className="list-none">
                <span className="font-bold">💠সমস্যা : </span>কাজের সময় যথাযথ
                ব্যবহার না করে দায়িত্বহীন আচরণ।
              </li>
              <li className="list-none">
                <span className="font-bold">💠সমাধান :</span> সময় এবং ক্লায়েন্টের
                বিশ্বাস আমানত হিসেবে গণ্য। তাই সময়ের সদ্ব্যবহার এবং সঠিকভাবে কাজ
                সম্পাদন করা উচিত।
              </li>
              <h4 className="font-bold bg-green-400 p-2 rounded mb-1 mt-3">
                ৭. হারাম পেমেন্ট সোর্স
              </h4>
              <li className="list-none">
                <span className="font-bold">💠সমস্যা :</span> এমন প্ল্যাটফর্ম বা
                মাধ্যম ব্যবহার করা, যা হারাম পদ্ধতিতে পরিচালিত হয়।
              </li>
              <li className="list-none">
                <span className="font-bold">💠সমাধান :</span> হালাল মাধ্যম ব্যবহার
                করা উচিত। প্রয়োজনে ইসলামিক পেমেন্ট সিস্টেমের বিকল্প খুঁজুন।
              </li>
              <h4 className="font-bold bg-green-400 p-2 rounded mb-1 mt-3">
                ৮. কাজের উদ্দেশ্য
              </h4>
              <li className="list-none">
                <span className="font-bold">💠সমস্যা : </span>শুধু দুনিয়ার লাভের
                জন্য কাজ করা এবং আখিরাতের চিন্তা ভুলে যাওয়া।
              </li>
              <li className="list-none">
                <span className="font-bold">💠সমাধান : </span>কাজের উদ্দেশ্য হালাল
                রুজি উপার্জন এবং আল্লাহর সন্তুষ্টি অর্জন হওয়া উচিত। নিয়মিত সাদকা
                এবং ইবাদত চালিয়ে যেতে হবে।
              </li>
            </>
          ) : (
            <>
              <h4 className="font-bold bg-green-400 p-2 rounded">
                1. Boundaries of Halal and Haram
              </h4>{" "}
              <li className="list-none"><span>💠Issue : </span> Whether freelancing involves doing any work that Islam has declared haram, such as promoting haram products, gambling or obscene work.</li>
              <li className="list-none">
                <span className="font-bold">💠Solution : </span>Muslim freelancers
                should choose jobs that are Halal and Shariah compliant. Refrain
                from creating or promoting any Haram content.
              </li>
              <h4 className="font-bold bg-green-400 p-2 rounded">
                2. Keeping Contracts and Promises
              </h4>
              <li className="list-none">
                <span className="font-bold">💠Issue :</span> Breaking a
                contract or promise with a client in freelancing is a sin from
                the Islamic point of view.{" "}
              </li>
              <li className="list-none">
                <span className="font-bold">💠Solution : </span>Every contract or
                promise must be properly fulfilled. Avoid delay or cheating.
                Delivery of work on time is an Islamic duty.
              </li>
              <h4 className="font-bold bg-green-400 p-2 rounded">
                3. Profit and commission{" "}
              </h4>
              <li className="list-none">
                <span className="font-bold">💠Issue : </span>Is it permissible to
                outsource a project to achieve more profit with less work?
              </li>
              <li className="list-none">
                <span className="font-bold">💠Solution : </span>If the client is
                clearly informed about the transfer of work and has consent, it
                is permissible. However cheating is totally prohibited.
              </li>
              <h4 className="font-bold bg-green-400 p-2 rounded">
                4. Taxes and Income Tax
              </h4>
              <li className="list-none">
                <span className="font-bold">💠Issue : </span> Doubts about
                paying government taxes on income earned through freelancing or
                outsourcing.{" "}
              </li>
              <li className="list-none">
                <span className="font-bold">💠Solution : </span>Paying taxes
                according to the laws of the land is Islamically obligatory,
                provided it does not support any haram act.
              </li>
              <h4 className="font-bold bg-green-400 p-2 rounded">
                5. Synthesis of Riba (Interest)
              </h4>
              <li className="list-none"><span className="font-bold">💠Issue : </span>Earning interest by depositing money on payment processing platforms (PayPal, Payoneer) or accruing interest on bank transactions.</li>
              <li className="list-none">
                <span className="font-bold">💠Solution : </span>Try to follow
                interest free method. Withdraw money on time to avoid interest
                and donate any interest that accrues.
              </li>
              <h4 className="font-bold bg-green-400 p-2 rounded">
                6. Time and Deposit
              </h4>
              <li className="list-none">
                <span className="font-bold">💠Issue : </span>Irresponsible
                behavior without proper use of working hours.
              </li>
              <li className="list-none">
                <span className="font-bold">💠Solution : </span>Time and trust of
                the client are treated as deposits. So time should be well
                behaved and properly executed.
              </li>
              <h4 className="font-bold bg-green-400 p-2 rounded">
                7. Haram Payment Source
              </h4>
              <li className="list-none">
                <span className="font-bold">💠Issue : </span>Using platforms or
                mediums that operate in haram ways.
              </li>
              <li className="list-none">
                <span className="font-bold">💠Solution : </span>Halal medium
                should be used. Find Islamic payment system options if needed.
              </li>
              <h4 className="font-bold bg-green-400 p-2 rounded">
                8. Purpose of work
              </h4>
              <li className="list-none">
                <span className="font-bold">💠Issue : </span>Working only for
                the gain of this world and forgetting the thoughts of the
                Hereafter.
              </li>
              <li className="list-none">
                <span className="font-bold">💠Solution : </span>The purpose of
                work should be to earn Halal livelihood and gain the pleasure of
                Allah. Regular Sadaqah and Ibadah should be continued.
              </li>
            </>
          )}{" "}
          <p className="text-error font-semibold mt-2">
            {language === "bn" ? <>ফ্রিল্যান্সিং ও আউটসোর্সিংয়ে সফল হতে হলে এই বিষয়গুলো মনে রাখা
            জরুরি। ইসলামিক দৃষ্টিকোণে প্রতিটি কাজের একটি সীমারেখা রয়েছে, যা মেনে
            চলা আমাদের ঈমানের দাবি।</> : <>It is important to remember these things to be successful in freelancing and outsourcing. From the Islamic point of view, every deed has a boundary, which our faith demands to adhere to.</>}
           
          </p>{" "}
        </div>

      </div>
    </div>
  );
}

export default Blog_1;
