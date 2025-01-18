import { Link } from "react-router-dom";
import { useLanguage } from "../../providers/LanguageProvider";
import { motion } from "framer-motion";

function AllBlog() {
  const { language } = useLanguage();
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <motion.div
      className="max-w-[80%] mx-auto py-20"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <motion.h2
        className="mb-2 font-bold text-2xl text-center text-green-400"
        variants={fadeIn}
      >
        {language === "bn" ? (
          <>
            ইসলামী <span className="text-warning">ব্লগ</span>
          </>
        ) : (
          <>
            Islamic <span className="text-warning">Blog</span>
          </>
        )}
      </motion.h2>
      <motion.div
        className="grid xl:grid-cols-4 grid-cols-1 gap-2"
        variants={staggerContainer}
      >
        <motion.div className="bg-gray-100 h-auto p-4 shadow" variants={fadeIn}>
          <img src="https://i.postimg.cc/YCZHvcS1/12.jpg" alt="" />
          <h2>
            {language === "bn"
              ? "ফ্রিল্যান্সিং এবং আউটসোর্সিং সম্পর্কিত বেশ কিছু মাসআলা-মাসায়েল"
              : "There are several issues related to freelancing and outsourcing"}
          </h2>
          <Link to={"/blog-1"} className="btn btn-warning btn-xs mt-1">
            {language === "bn" ? "আরও পড়ুন" : "Read More"}
          </Link>
        </motion.div>
        <motion.div
          className="bg-gray-100  h-auto p-4 shadow"
          variants={fadeIn}
        >
          <img src="https://i.postimg.cc/YCZHvcS1/12.jpg" alt="" />
          <h2>
            {language === "bn"
              ? "পবিত্র জুমুআর দিনে করণীয় এবং কিছু মাসআলা-মাসায়েল"
              : "Dos and don'ts on Holy Juma Day"}
          </h2>
          <Link to={"/blog-2"} className="btn btn-warning btn-xs mt-1">
            {language === "bn" ? "আরও পড়ুন" : "Read More"}
          </Link>
        </motion.div>
        <motion.div
          className="bg-gray-100  h-auto p-4 shadow"
          variants={fadeIn}
        >
          <img src="https://i.postimg.cc/YCZHvcS1/12.jpg" alt="" />
          <h2>
            {language === "bn"
              ? "আরাফার রোজা এবং আরাফার রোজা সম্পর্কিত কিছু মাসআলা"
              : "Fasting of Arafah and some issues related to Fasting of Arafah"}
          </h2>
          <Link to={"/blog-3"} className="btn btn-warning btn-xs mt-1">
            {language === "bn" ? "আরও পড়ুন" : "Read More"}
          </Link>
        </motion.div>
        <motion.div className="bg-gray-100 h-auto p-4 shadow" variants={fadeIn}>
          <img className="h-[292px]" src="https://i.postimg.cc/L4xN3KTJ/halal.jpg" alt="" />
          <h2>
            {language === "bn"
              ? "আমাদের দৈনন্দিন জীবনে হালাল ও হারাম বোঝা"
              : "Understanding the Halal and Haram in Our Daily Activities"}
          </h2>
          <Link to={"/blog-4"} className="btn btn-warning btn-xs mt-1">
            {language === "bn" ? "আরও পড়ুন" : "Read More"}
          </Link>
        </motion.div>
        <motion.div className="bg-gray-100 h-auto p-4 shadow" variants={fadeIn}>
          <img className="h-[292px]" src="https://i.postimg.cc/nzkTW6fw/dan.png" alt="" />
          <h2>
            {language === "bn"
              ? "দান ও সাদাকার ফজিলত"
              : "The Virtues of Charity and Sadaqah"}
          </h2>
          <Link to={"/blog-5"} className="btn btn-warning btn-xs mt-1">
            {language === "bn" ? "আরও পড়ুন" : "Read More"}
          </Link>
        </motion.div>
        <motion.div className="bg-gray-100 h-auto p-4 shadow" variants={fadeIn}>
          <img className="h-[292px]" src="https://i.postimg.cc/vHm2JHB7/masque.jpg" alt="" />
          <h2>
            {language === "bn"
              ? "মসজিদ পরিদর্শনের আদব"
              : "Proper Etiquette for Visiting Mosques"}
          </h2>
          <Link to={"/blog-6"} className="btn btn-warning btn-xs mt-1">
            {language === "bn" ? "আরও পড়ুন" : "Read More"}
          </Link>
        </motion.div>
        <motion.div className="bg-gray-100 h-auto p-4 shadow" variants={fadeIn}>
          <img className="h-[292px]" src="https://i.postimg.cc/wxrjNMS3/p.jpg" alt="" />
          <h2>
            {language === "bn"
              ? "ইসলামে পিতামাতার অধিকার ও সম্মানের গুরুত্ব"
              : "The Importance of Obeying and Respecting Parents in Islam"}
          </h2>
          <Link to={"/blog-7"} className="btn btn-warning btn-xs mt-1">
            {language === "bn" ? "আরও পড়ুন" : "Read More"}
          </Link>
        </motion.div>
        <motion.div className="bg-gray-100 h-auto p-4 shadow" variants={fadeIn}>
          <img className="h-[292px]" src="https://i.postimg.cc/ZqLqvcSh/nari.jpg" alt="" />
          <h2>
            {language === "bn"
              ? "ইসলামে নারীর অধিকার ও দায়িত্ব"
              : "Women’s Rights and Responsibilities in Islam"}
          </h2>
          <Link to={"/blog-8"} className="btn btn-warning btn-xs mt-1">
            {language === "bn" ? "আরও পড়ুন" : "Read More"}
          </Link>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Link to={"/"} className="btn btn-outline btn-error btn-xs mt-2">
            {language === "bn" ? "হোমে ফিরে যান" : "Return to Home"}
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default AllBlog;
