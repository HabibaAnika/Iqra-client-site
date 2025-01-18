import { useLanguage } from "../../providers/LanguageProvider";

function Blog_3() {
  const { language } = useLanguage();

  return (
    <div className="py-32 bg-gradient-to-r from-[#d83a8459] to-[#68cfd665]">
      <div className="max-w-[80%] mx-auto">
        <h2 className="font-bold text-2xl text-center">
          {language === "bn" ? (
            <>
              <span className="text-green-400">আরাফার রোজা</span> এবং কিছু
              গুরুত্বপূর্ণ মাসআলা
            </>
          ) : (
            <><span className="text-green-400">Arafa Fast</span> and Related Issues</>
          )}
        </h2>

        <div className="flex justify-center mt-2">
          <div className="w-32 h-1 bg-black"></div>
          <div className="w-32 h-1 bg-green-400"></div>
        </div>

        {/* Arafa Fast Section */}
        <div className="text-xs textarea-xs mt-10 p-6 bg-gray-100 bg-opacity-60">
          {language === "bn" ? (
            <>
              <h3 className="font-semibold text-amber-500 mb-2">
                আরাফার রোজার ফজিলত
              </h3>
              <p>
                আরাফার রোজা এমন একটি রোজা যা ৯ জিলহজ পালন করা হয়। এটি
                আল্লাহর নিকট অত্যন্ত প্রিয় এবং গুরুত্বপূর্ণ একটি ইবাদত। এই
                রোজা পালনকারী দুই বছরের গুনাহ মাফের সুসংবাদ পেয়েছেন।
              </p>

              <h4 className="font-bold bg-green-400 p-2 rounded mb-1 mt-3">
                ১. রোজার নিয়ত এবং সময়
              </h4>
              <li className="list-none">
                <span className="font-bold">💠সমস্যা : </span> অনেকেই
                আরাফার রোজার সঠিক নিয়ত এবং সময় নিয়ে সন্দিহান।
              </li>
              <li className="list-none">
                <span className="font-bold">💠সমাধান : </span> নিয়ত
                সহজ এবং অন্তরের ইচ্ছা অনুযায়ী করা যায়। সময় হলো ফজরের
                আগে থেকে মাগরিব পর্যন্ত।
              </li>

              <h4 className="font-bold bg-green-400 p-2 rounded mb-1 mt-3">
                ২. হজ পালনকারীদের জন্য রোজা
              </h4>
              <li className="list-none">
                <span className="font-bold">💠সমস্যা : </span> যারা
                আরাফায় অবস্থান করছেন, তাদের জন্য রোজা রাখা উচিত কিনা?
              </li>
              <li className="list-none">
                <span className="font-bold">💠সমাধান : </span> আরাফায়
                অবস্থানরত হজযাত্রীদের জন্য রোজা রাখা মাকরুহ। কারণ, তাদের শক্তি
                সংরক্ষণ করতে হবে।
              </li>

              <h4 className="font-bold bg-green-400 p-2 rounded mb-1 mt-3">
                ৩. রোজা ভঙ্গকারী কাজ
              </h4>
              <li className="list-none">
                <span className="font-bold">💠সমস্যা : </span> রোজার
                সময় ভুল করে খাওয়া বা পান করা হলে রোজা ভঙ্গ হবে কি না?
              </li>
              <li className="list-none">
                <span className="font-bold">💠সমাধান : </span> ভুল করে
                কিছু খেলে বা পান করলে রোজা ভঙ্গ হবে না। এটি আল্লাহর পক্ষ
                থেকে উপহার।
              </li>

              <h4 className="font-bold bg-green-400 p-2 rounded mb-1 mt-3">
                ৪. আরাফার রোজার বিশেষ দোয়া
              </h4>
              <p>
                এই দিনে “লা ইলাহা ইল্লাল্লাহু ওয়াহদাহু লা শরীকালাহু, লাহুল
                মুলকু ওয়ালাহুল হামদু, ওয়া হুয়া আলা কুল্লি শাই’ইন কাদির”
                (لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على
                كل شيء قدير) বেশি করে পড়া উচিত।
              </p>
            </>
          ) : (
            <>
              <h3 className="font-semibold text-amber-500 mb-2">
                Virtues of Arafa Fast
              </h3>
              <p>
                Arafa fast is observed on the 9th of Dhul-Hijjah. It is a highly
                virtuous act of worship, beloved to Allah. Observing this fast
                brings the glad tidings of forgiveness for two years worth of
                sins.
              </p>

              <h4 className="font-bold bg-green-400 p-2 rounded mb-1 mt-3">
                1. Intention and Timing
              </h4>
              <li className="list-none">
                <span className="font-bold">💠Issue :</span> Many are
                uncertain about the correct intention and timing for the Arafa
                fast.
              </li>
              <li className="list-none">
                <span className="font-bold">💠Solution :</span> The
                intention is simple and can be made in the heart. The fast lasts
                from Fajr to Maghrib.
              </li>

              <h4 className="font-bold bg-green-400 p-2 rounded mb-1 mt-3">
                2. Fast for Pilgrims
              </h4>
              <li className="list-none">
                <span className="font-bold">💠Issue :</span> Should those
                performing Hajj observe the fast of Arafa?
              </li>
              <li className="list-none">
                <span className="font-bold">💠Solution :</span> It is
                discouraged (Makruh) for pilgrims staying at Arafa to fast, as
                they need to conserve energy.
              </li>

              <h4 className="font-bold bg-green-400 p-2 rounded mb-1 mt-3">
                3. Breaking the Fast
              </h4>
              <li className="list-none">
                <span className="font-bold">💠Issue :</span> Does the
                fast break if someone eats or drinks unintentionally during the
                fast?
              </li>
              <li className="list-none">
                <span className="font-bold">💠Solution :</span> Unintentional
                eating or drinking does not break the fast. It is considered a
                gift from Allah.
              </li>

              <h4 className="font-bold bg-green-400 p-2 rounded mb-1 mt-3">
                4. Special Supplication for Arafa
              </h4>
              <p>
                On this day, it is highly recommended to frequently recite:
                “La ilaha illallahu wahdahu la sharikalahu, lahul mulku wa lahul
                hamdu, wa huwa ‘ala kulli shai’in qadeer.”
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Blog_3;
