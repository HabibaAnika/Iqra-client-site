import { Link } from "react-router-dom";
import { useLanguage } from "../../providers/LanguageProvider";
import { motion } from "framer-motion";

function Islamic() {
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
      whileInView="visible"
      variants={fadeIn}
      viewport={{ once: false, amount: 0.1 }} // Trigger animation when 10% of the element is visible
    >
      {/* Heading */}
      <motion.h2
        className="xl:ml-[32%] md:ml-[40%] ml-[35%] mb-2 font-bold text-2xl text-green-400"
        variants={fadeIn}
        viewport={{ once: false }}
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

      {/* Main Content */}
      <motion.div
        className="flex xl:flex-row flex-col xl:gap-4 gap-28"
        variants={staggerContainer}
        viewport={{ once: false }}
      >
        {/* Blog Posts Section */}
        <div className="grid xl:grid-cols-3 grid-cols-1 gap-2 xl:w-[70%]">
          {/* Blog 1 */}
          <motion.div
            className="bg-gray-100 h-auto p-4 shadow"
            variants={fadeIn}
            viewport={{ once: false, amount: 0.3 }}
          >
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

          {/* Blog 2 */}
          <motion.div
            className="bg-gray-100 h-auto p-4 shadow"
            variants={fadeIn}
            viewport={{ once: false, amount: 0.3 }}
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

          {/* Blog 3 */}
          <motion.div
            className="bg-gray-100 h-auto p-4 shadow"
            variants={fadeIn}
            viewport={{ once: false, amount: 0.3 }}
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

          {/* View All Blogs */}
          <motion.div variants={fadeIn}>
            <Link to={"/allBlog"} className="btn btn-outline btn-warning btn-sm mt-2">
              {language === "bn" ? "সকল কন্টেন্ট পড়ুন" : "Read all content"}
            </Link>
          </motion.div>
        </div>

        {/* Student Corner Section */}
        <motion.div
          className="xl:w-[30%] text-center"
          variants={fadeIn}
          viewport={{ once: false }}
        >
          <motion.h2
            className="font-bold text-green-400 text-2xl mb-2 -mt-10 border"
            variants={fadeIn}
          >
            {language === "bn" ? (
              <>
                স্টুডেন্ট <span className="text-warning">কর্নার</span>
              </>
            ) : (
              <>
                Student<span className="text-warning">Corner</span>
              </>
            )}
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 gap-2"
            variants={staggerContainer}
            viewport={{ once: false }}
          >
            <Link to={"/routine"} className="btn btn-info">
              {language === "en" ? "Class routine" : "ক্লাস রুটিন"}
            </Link>
            <Link to={"/"} className="btn btn-info">
              {language === "en" ? "Deposit slip" : "ডিপজিট স্লিপ"}
            </Link>
            <Link to={"/book"} className="btn btn-info">
              {language === "en" ? "Book list" : "বুক লিস্ট"}
            </Link>
            <Link to={"/id"} className="btn btn-info">
              {language === "en" ? "ID card" : "আইডি কার্ড"}
            </Link>
            <Link to={"/support"} className="btn btn-info">
              {language === "en" ? "Support" : "সাপোর্ট"}
            </Link>
            <Link to={"/"} className="btn btn-info">
              {language === "en" ? "Live class approval" : "লাইভ ক্লাস এপ্রুভাল"}
            </Link>
            <Link to={"/attendance"} className="btn btn-info">
              {language === "en" ? "Attendance" : "এটেনডেন্স"}
            </Link>
            <Link to={"/certificate"} className="btn btn-info">
              {language === "en" ? "Certificate" : "সার্টিফিকেট"}
            </Link>
            <Link to={"/rules"} className="btn btn-info">
              {language === "en" ? "Policy" : "নীতিমালা"}
            </Link>
            <Link to={"/"} className="btn btn-info">
              {language === "en" ? "Refund Policy" : "রিফান্ড পলিসি"}
            </Link>
            <Link to={"/"} className="btn btn-info">
              {language === "en" ? "Manual Payment" : "ম্যানুয়াল পেমেন্ট"}
            </Link>
            <Link to={"/"} className="btn btn-info">
              {language === "en" ? "Re-admission" : "রি-এডমিশন"}
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Islamic;
