import { useLanguage } from "../../providers/LanguageProvider";
import { motion } from "framer-motion";

function SomeFeatured() {
  const { language } = useLanguage();

   // Variants for the cards
   const cardvariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { scale: 1.1, borderRadius: "20px" },
  };

  const elementVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className='relative bg-[url("https://i.postimg.cc/63PFxGHN/f.webp")] bg-no-repeat bg-cover pt-20 pb-28'>
      {/* <!-- Overlay --> */}
      <div className="absolute bg-[#d8c9c928] bg-opacity-40"></div>

      <motion.div
        className="max-w-[80%] mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={cardVariants}
      >
        <motion.h2
          className="text-2xl font-bold mb-6"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
          }}
        >
          {language === "bn" ? "কিছু ফিচার" : "Some Feature"}
        </motion.h2>

        <motion.div
          className="flex xl:flex-row flex-col items-center gap-5 justify-center"
          variants={cardvariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {/* Card Items */}
          {[
            {
              img: "https://i.postimg.cc/zG1ZfKqz/group.png",
              title: language === "bn" ? "সুদক্ষ শিক্ষকমন্ডলী দ্বারা পাঠদান" : "Teaching by qualified faculty",
              description: language === "bn"
                ? "বাংলাদেশের স্বনামধন্য শিক্ষাপ্রতিষ্ঠান থেকে সনদপ্রাপ্ত হাফেয,আলেম, ক্বারী, মুফতি ও অভিজ্ঞ পরিচালনা পরিষদ"
                : "Certified Hafeez, Alem, Qari, Mufti and experienced Board of Directors from reputed educational institutions of Bangladesh.",
            },
            {
              img: "https://i.postimg.cc/W4XQSygz/hand.png",
              title: language === "bn" ? "পার্সোনাল ক্লাস" : "Personal class",
              description: language === "bn"
                ? "সরাসরি একজন শিক্ষকের কাছে বিশেষভাবে আপনি ও আপনার বাচ্চার সুশিক্ষা নিশ্চিতের জন্য পার্সোনাল ক্লাস।"
                : "Personal classes directly with a teacher to ensure the best education for you and your child.",
            },
            {
              img: "https://i.postimg.cc/fLgQWPRp/date.png",
              title: language === "bn" ? "সুবিধাজনক সময়" : "Convenient time",
              description: language === "bn"
                ? "আপনার ব্যক্তিগত সুবিধাজনক সময়ে ক্লাসের আবেদন করতে পারবেন। মাসিক/সাপ্তাহিক অথবা আপনার নির্দিষ্ট তারিখ ও সময়ে।"
                : "You can apply for classes at your personal convenience. Monthly/weekly or at your specified date and time.",
            },
            {
              img: "https://i.postimg.cc/QC9GFqBt/clock.png",
              title: language === "bn" ? "২৪ ঘন্টা সহায়তা" : "24 hour support",
              description: language === "bn"
                ? "২৪ ঘন্টা আপনার ক্লাসের পাঠ সংক্রান্ত যেকোনো প্রশ্ন এবং আপনার সমস্যা সমাধান দেয়ার জন্য আমাদের টিম মেম্বার প্রস্তুত রয়েছে"
                : "Our team members are ready 24 hours a day to solve any queries and problems related to your class lessons",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="xl:w-[24%] p-10 bg-[#00000075] rounded-md text-white text-center shadow-black"
              variants={cardvariants}
              whileHover="hover"
              initial="hidden"
              animate="visible"
            >
              <motion.img
                className="mx-auto w-12 mb-2"
                src={feature.img}
                alt="icon"
                variants={elementVariants}
                whileHover={{ rotate: 10, scale: 1.2 }}
              />
              <motion.h3
                className="font-semibold text-lg mb-3 text-[#33b2e4]"
                variants={elementVariants}
                whileHover={{ color: "#FFD700" }}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                variants={elementVariants}
                whileHover={{ scale: 1.1 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Section */}
        <motion.div
          className="bg-[#00000075] rounded-md mt-5 gap-5 flex xl:flex-row md:flex-col flex-col items-center text-white py-8 font-extrabold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false}}
        >
          {[
            { value: language === "bn" ? "৯+" : "9+", label: language === "bn" ? "বিশেষজ্ঞ শিক্ষক" : "Expert teacher" },
            { value: language === "bn" ? "১৫০+" : "150+", label: language === "bn" ? "শিক্ষার্থী ভর্তি হয়েছে" : "Student is admitted" },
            { value: language === "bn" ? "৮+" : "8+", label: language === "bn" ? "আটটিরও বেশী কোর্স" : "More than eight courses" },
            { value: language === "bn" ? "১০০০+" : "1000+", label: language === "bn" ? "ইসলামী পুস্তক পাঠদান" : "Teaching Islamic books" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`w-[24%] ${index !== 3 ? "xl:border-r-2 xl:border-green-400 md:border-0" : ""}`}
              variants={cardVariants}
            >
              <h2 className="text-amber-400">{item.value}</h2>
              <h3>{item.label}</h3>
            </motion.div>
          ))}
        </motion.div>
        {/* End Footer Section */}

      </motion.div>
    </div>
  );
}

export default SomeFeatured;
