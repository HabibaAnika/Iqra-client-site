import { useLanguage } from "../../providers/LanguageProvider";

function Blog_2() {
  const { language } = useLanguage();
  return (
    <div className="bg-gradient-to-r from-[#3ad8a359] to-[#fac1a065] py-32">
      <div className="max-w-[80%] mx-auto">
        <h2 className="font-bold text-2xl text-center">
          {language === "bn" ? (
            <>
              <span className="text-green-400">পবিত্র জুমুআর দিনে করণীয়</span>{" "}
              এবং কিছু মাসআলা-মাসায়েল
            </>
          ) : (
            <>
              <span className="text-green-400">Dos and don&#39;ts</span> on the
              day of Holy Juma
            </>
          )}
        </h2>

        <div className="flex justify-center mt-2">
          <div className="w-52 h-1 bg-black"></div>
          <div className="w-52 h-1 bg-green-400"></div>
        </div>

        <div className="text-xs textarea-xs mt-10 p-6 bg-gray-100 bg-opacity-60">
          {language === "bn" ? (
            <>
              <h3 className="font-semibold text-amber-500 mb-2">
                পবিত্র জুমুআর দিন মুসলমানদের জন্য একটি বিশেষ গুরুত্বপূর্ণ দিন।
                এই দিনে কিছু করণীয় এবং গুরুত্বপূর্ণ মাসআলা-মাসায়েল রয়েছে, যেগুলো
                জানা জরুরি।
              </h3>
            </>
          ) : (
            <>
              <h3 className="font-semibold text-warning mb-2">
                Holy Friday is a very important day for Muslims. There are some
                dos and don&#39;ts on this day that are important to know.
              </h3>
            </>
          )}
          {language === "bn" ? (
            <>
              <h4 className="font-bold bg-green-400 p-2 rounded mb-1 mt-3">
                🔰জুমুআর দিনে করণীয়সমূহ
              </h4>{" "}
              <ul>
                <li className="">
                  <span className="font-bold">💠গোসল করা :</span> জুমুআর দিন গোসল
                  করা সুন্নত। রাসুলুল্লাহ (সা.) বলেছেন: &#39;যে ব্যক্তি জুমুআর
                  দিন গোসল করে, ভালোভাবে পরিষ্কার-পরিচ্ছন্ন হয়, উত্তম পোশাক পরে
                  এবং তেল ব্যবহার করে, সে জুমুআর নামাজে অংশগ্রহণ করলে তার ছোট
                  গুনাহসমূহ মাফ করে দেওয়া হয়।&#39;(সহীহ বুখারি)
                </li>
                <li>
                  <span className="font-bold">💠পরিচ্ছন্নতা বজায় রাখা : </span>নখ
                  কাটা, দাড়ি ঠিক করা, শরীরের অঙ্গ-প্রত্যঙ্গ পরিষ্কার রাখা
                  ইত্যাদি করা উত্তম।
                </li>
                <li>
                  <span className="font-bold">💠সুগন্ধি ব্যবহার করা :</span>{" "}
                  রাসুলুল্লাহ (সা.) বলেন: &#34;যে ব্যক্তি জুমুআর দিনে সূরা কাহফ
                  তিলাওয়াত করে, তার পরবর্তী জুমুআ পর্যন্ত আল্লাহ তার জন্য নূর
                  দান করেন।&#34; (মুস্তাদরাকে হাকিম)
                </li>
                <li>
                  <span className="font-bold">💠জুমুআর নামাজে শামিল হওয়া : </span>
                  জুমুআর নামাজ মুসলিম পুরুষদের জন্য ফরজ। নারীরা ইচ্ছা করলে পড়তে
                  পারে।
                </li>
                <li>
                  <span className="font-bold">💠খুতবা মনোযোগ সহকারে শোনা : </span>
                  খুতবার সময় চুপ থাকা এবং মনোযোগ সহকারে শোনা আবশ্যক। কথা বলা বা
                  অন্য কিছু করা নিষিদ্ধ।
                </li>
                <li>
                  <span className="font-bold">💠দরুদ শরিফ পাঠ করা : </span>জুমুআর
                  দিনে নবী (সা.)-এর ওপর বেশি বেশি দরুদ পাঠ করার তাগিদ দেওয়া
                  হয়েছে।
                </li>
              </ul>
              <h4 className="font-bold bg-green-400 p-2 rounded mb-1 mt-3">
                🔰কিছু গুরুত্বপূর্ণ মাসআলা-মাসায়েল
              </h4>
              <ul className="list-none">
                <li>
                  <span className="font-bold">
                    💠জুমুআর নামাজ ফরজ হওয়ার শর্ত :
                  </span>{" "}
                  জুমুআর নামাজ শুধুমাত্র পুরুষদের জন্য ফরজ। নারী, শিশু, মুসাফির
                  ও অসুস্থ ব্যক্তিদের জন্য এটি বাধ্যতামূলক নয়।
                </li>
                <li>
                  <span className="font-bold">
                    💠জুমুআর নামাজের আগে সুন্নত নামাজ :
                  </span>{" "}
                  জুমুআর আগে দুই বা চার রাকাত সুন্নত নামাজ পড়া উত্তম।
                </li>
                <li>
                  <span className="font-bold">
                    💠জুমুআর নামাজের পরে সুন্নত নামাজ :
                  </span>{" "}
                  জুমুআর পরে দুই বা চার রাকাত সুন্নত নামাজ পড়া সুন্নত।
                </li>
                <li>
                  <span className="font-bold">
                    💠জুমুআর দিন বিশেষ দোয়া কবুলের সময় :
                  </span>{" "}
                  হাদিসে উল্লেখ রয়েছে, জুমুআর দিনে এমন একটি বিশেষ মুহূর্ত রয়েছে,
                  যখন আল্লাহ বান্দার দোয়া কবুল করেন। (সহীহ বুখারি, সহীহ মুসলিম)
                </li>

                <li>
                  <span className="font-bold">💠খুতবার সময় নিরব থাকা :</span>{" "}
                  খুতবার সময় কথা বলা, এমনকি অন্যকে কিছু বলাও নিষিদ্ধ।
                </li>
              </ul>
            </>
          ) : (
            <></>
          )}{" "}
          <p className="text-error font-semibold mt-2">
            {language === "bn" ? (
              <>
                জুমুআর দিন মুসলিমদের জন্য বারাকাতপূর্ণ দিন। এ দিনটি আল্লাহর
                নৈকট্য অর্জনের জন্য বিশেষ সুযোগ এনে দেয়। তাই এ দিনের করণীয়
                বিষয়গুলো যথাযথভাবে পালন করা উচিত এবং মাসআলা-মাসায়েল সম্পর্কে
                সচেতন থাকা উচিত।
              </>
            ) : (
              <>
                Friday is a blessed day for Muslims. This day brings a special
                opportunity to gain closeness to Allah. So the things to be done
                on this day should be observed properly and one should be aware
                of the masala-masael.
              </>
            )}
          </p>{" "}
        </div>
      </div>
    </div>
  );
}

export default Blog_2;
