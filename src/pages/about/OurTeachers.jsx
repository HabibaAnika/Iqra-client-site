import { useLanguage } from "../../providers/LanguageProvider";
import { motion } from "framer-motion";

function OurTeachers() {
  const allTeacher = [
    {
      name: "Hafiz Mawlana Mufti Akm Zonayed Hosen",
      banglaName: "হাফেয মাওলানা মুফতি এ কে এম জুনাইদ হোসেন",
      rol: "Founding Director",
      bnRol: "প্রতিষ্ঠাতা পরিচালক",
      experience: "7 years",
      banglaExperience: "৭ বছর",
      education: {
        degree: "Islamic Studies",
        banglaDegree: "মাস্টার্স (ইসলামিক স্ট্যাডিজ)",
        institute: "Ananda Mohan College",
        banglaInstitute: "আনন্দ মোহন কলেজ , ময়মনসিংহ",
      },
      passYear: 2022,
      banglaYear: "২০২২ ইং",
      result: "First Class",
      banglaResult: "ফার্স্ট ক্লাস",
      img: "https://i.postimg.cc/sXLq3fkF/t-1.jpg",
      location: "Founding Director, Netrokona, Mymensingh",
      banglaLocation: "সদর ময়মনসিংহ",
      schedule: ["10:00 am - 12:00 pm","2:30 pm - 4:00 pm",],
      banglaSchedule: ["১০:০০ সকাল - ১২:০০ দুপুর", "২:৩০ দুপুর - ৪:০০ বিকাল"],
      time: "Available",
      bnTime: "পাওয়া যাবে",
    },
    {
      name: "Hafiz Mawlana Mashhad Hossain",
      banglaName: "হাফেয মাওলানা মাশহাদ হসাইন",
      rol: "Assistant Teacher",
      bnRol: "সহকারী শিক্ষক",
      experience: "2 years",
      banglaExperience: "২ বছর",
      education: {
        degree: "Jalalain Running",
        banglaDegree: "জালালাইন রানিং",
        institute: "Jamiya Arabiya Miftahul Ulum",
        banglaInstitute: "জামিয়া আরাবিয়া মিফতাহুল উলূম",
        passYear: {
          year: 2022,
          banglaYear: "২০২২ ইং",
        },
        result: {
          english: "First Class",
          bangla: "ফার্স্ট ক্লাস",
        },
      },
      passYear: 2022,
      banglaYear: "২০২২ ইং",
      result: "First Class",
      banglaResult: "ফার্স্ট ক্লাস",
      img: "https://i.postimg.cc/7hMcGQHq/t-2.jpg",
      location: "Maskanda, Mymensingh",
      banglaLocation: "মাসকান্দা, ময়মনসিংহ",
      schedule: [ "10:00 am - 12:00 pm", "2:30 pm - 4:00 pm",],
      banglaSchedule: ["১০:০০ সকাল - ১২:০০ দুপুর", "২:৩০ দুপুর - ৪:০০ বিকাল"],
      time: "Available",
      bnTime: "পাওয়া যাবে",
    },
    {
      name: "Hafiz Mawlana Mushfiqur Rahman Muaz",
      banglaName: "হাফেয মাওলানা মুশফিকুর রহমান মোয়াজ",
      rol: "Assistant Teacher",
      bnRol: "সহকারী শিক্ষক",
      experience: "2 years",
      banglaExperience: "২ বছর", 
      education: {
        degree: "Mawlana Running",
        banglaDegree: "মাওলানা রানিং",
        institute: "Jamiya Islamiya Mymensingh",
        banglaInstitute: "জামিয়া ইসলামিয়া মোমেনশাহী",
        passYear: {
          year: 2022,
          banglaYear: "২০২২ ইং",
        },
        result: {
          english: "First Class",
          bangla: "ফার্স্ট ক্লাস",
        },
      },
      passYear: 2022,
      banglaYear: "২০২২ ইং",
      result: "First Class",
      banglaResult: "ফার্স্ট ক্লাস",
      img: "https://i.postimg.cc/d1GNpSTG/t-5.jpg",
      location: "Akua, Mymensingh",
      banglaLocation: "আকুয়া, ময়মনসিংহ",
      schedule: [ "10:00 am - 12:00 pm", "2:30 pm - 4:00 pm",],
      banglaSchedule: ["১০:০০ সকাল - ১২:০০ দুপুর", "২:৩০ দুপুর - ৪:০০ বিকাল"],
      time: "Available",
      bnTime: "পাওয়া যাবে",
    },
    {
      name: "Mawlana Hasibur Rahman",
      banglaName: "মাওলানা হাসিবুর রহমান",
      rol: "Assistant Teacher",
      bnRol: "সহকারী শিক্ষক",
      experience: "3 years",
      banglaExperience: "৩ বছর",
      education: {
        degree: "Jalalain Running",
        banglaDegree: "জালালাইন রানিং",
        institute: "Jamiya Arabiya Miftahul Ulum",
        banglaInstitute: "জামিয়া আরাবিয়া মিফতাহুল উলূম",
        passYear: {
          year: 2024,
          banglaYear: "২০২৪ ইং",
        },
        result: {
          english: "First Class",
          bangla: "ফার্স্ট ক্লাস",
        },
      },
      passYear: 2022,
      banglaYear: "২০২২ ইং",
      result: "First Class",
      banglaResult: "ফার্স্ট ক্লাস",
      img: "https://i.postimg.cc/L6Dwm7QT/t-3.jpg",
      location: "Maskanda, Mymensingh",
      banglaLocation: "মাসকান্দা, ময়মনসিংহ",
      schedule: [ "10:00 am - 12:00 pm", "2:30 pm - 4:00 pm",],
      banglaSchedule: ["১০:০০ সকাল - ১২:০০ দুপুর", "২:৩০ দুপুর - ৪:০০ বিকাল"],
      time: "Available",
      bnTime: "পাওয়া যাবে",
    },
    {
      name: "Hafiz Mawlana Tasneem Hosen",
      banglaName: "হাফেয মাওলানা তাসনীম হোসেন",
      rol: "Assistant Teacher",
      bnRol: "সহকারী শিক্ষক",
      experience: "3 years",
      banglaExperience: "৩ বছর",
      education: {
        degree: "Sanawiyah Ulya Running",
        banglaDegree: "সানাবিয়াহ উলইয়াহ রানিং",
        institute: "Jamiya Arabiya Miftahul Ulum",
        banglaInstitute: "জামিয়া আরাবিয়া মিফতাহুল উলূম",
        passYear: {
          year: 2021,
          banglaYear: "২০২১ ইং",
        },
        result: {
          english: "First Class",
          bangla: "ফার্স্ট ক্লাস",
        },
      },
      passYear: 2022,
      banglaYear: "২০২২ ইং",
      result: "First Class",
      banglaResult: "ফার্স্ট ক্লাস",
      img: "https://i.postimg.cc/HnHvg4QR/t-4.jpg",
      location: "Maskanda, Mymensingh",
      banglaLocation: "মাসকান্দা, ময়মনসিংহ",
      schedule: [ "10:00 am - 12:00 pm", "2:30 pm - 4:00 pm",],
      banglaSchedule: ["১০:০০ সকাল - ১২:০০ দুপুর", "২:৩০ দুপুর - ৪:০০ বিকাল"],
      time: "Available",
      bnTime: "পাওয়া যাবে",
    },
    {
      name: "Alema Habiba Sultana",
      banglaName: "আলেমা হাবিবা সুলতানা",
      rol: "Assistant Teacher",
      bnRol: "সহকারী শিক্ষক",
      experience: "5 years",
      banglaExperience: "৫ বছর",
      education: {
        degree: "Dawra Hadith",
        banglaDegree: "দাওরায়ে হাদিস",
        institute: "Ayesha Siddika R. Girls Institute",
        banglaInstitute: "আয়শা সিদ্দিকা রা. মহিলা মাদ্রাসা, কিশোরগঞ্জ",
        passYear: {
          year: 2022,
          banglaYear: "২০২২ ইং",
        },
        result: {
          english: "First Class",
          bangla: "ফার্স্ট ক্লাস",
        },
      },
      passYear: 2022,
      banglaYear: "২০২২ ইং",
      result: "First Class",
      banglaResult: "ফার্স্ট ক্লাস",
      img: "https://i.postimg.cc/NF4Jf9DM/t-f.jpg",
      location: "Sadar Mymensingh",
      banglaLocation: "সদর ময়মনসিংহ",
      schedule: [ "10:00 am - 12:00 pm", "2:30 pm - 4:00 pm",],
      banglaSchedule: ["১০:০০ সকাল - ১২:০০ দুপুর", "২:৩০ দুপুর - ৪:০০ বিকাল"],
      time: "Unavailable",
      bnTime: "পাওয়া যাবে না",
    },
    {
      name: "Alema Qariya Unaisa Bushra",
      banglaName: "আলেমা ক্বারিয়া উনাইসা বুশরা",
      rol: "Assistant Teacher",
      bnRol: "সহকারী শিক্ষক",
      experience: "4 years",
      banglaExperience: "৪ বছর",
      education: {
        degree: "Dawra Hadith",
        banglaDegree: "দাওরায়ে হাদিস",
        institute: "Ayesha Siddika R. Girls Institute",
        banglaInstitute: "আয়শা সিদ্দিকা রা. মহিলা মাদ্রাসা, কিশোরগঞ্জ",
        passYear: {
          year: 2022,
          banglaYear: "২০২২ ইং",
        },
        result: {
          english: "First Class",
          bangla: "ফার্স্ট ক্লাস",
        },
      },
      passYear: 2022,
      banglaYear: "২০২২ ইং",
      result: "First Class",
      banglaResult: "ফার্স্ট ক্লাস",
      img: "https://i.postimg.cc/NF4Jf9DM/t-f.jpg",
      location: "Kishoregonj, Dhaka",
      banglaLocation: "কিশোরগঞ্জ, ঢাকা",
      schedule: [ "10:00 am - 12:00 pm", "2:30 pm - 4:00 pm",],
      banglaSchedule: ["১০:০০ সকাল - ১২:০০ দুপুর", "২:৩০ দুপুর - ৪:০০ বিকাল"],
      time: "Available",
      bnTime: "পাওয়া যাবে",
    },
    {
      name: "Alema Jannat Tahsin",
      banglaName: "আলেমা জান্নাত তাহসিন",
      rol: "Assistant Teacher",
      bnRol: "সহকারী শিক্ষক",
      experience: "4 years",
      banglaExperience: "৪ বছর",
      education: {
        degree: "Dawra Hadith",
        banglaDegree: "দাওরায়ে হাদিস",
        institute: "Ayesha Siddika R. Girl's Institute, Kishoregonj",
        banglaInstitute: "আয়শা সিদ্দিকা রা. মহিলা মাদ্রাসা, কিশোরগঞ্জ",
        passYear: {
          year: 2022,
          banglaYear: "২০২২ ইং",
        },
        result: {
          english: "First Class",
          bangla: "ফার্স্ট ক্লাস",
        },
      },
      passYear: 2022,
      banglaYear: "২০২২ ইং",
      result: "First Class",
      banglaResult: "ফার্স্ট ক্লাস",
      img: "https://i.postimg.cc/NF4Jf9DM/t-f.jpg",
      location: "Kishoregonj, Dhaka",
      banglaLocation: "কিশোরগঞ্জ, ঢাকা",
      schedule: ["10:00 am - 12:00 pm","2:30 pm - 4:00 pm",],
      banglaSchedule: ["১০:০০ সকাল - ১২:০০ দুপুর", "২:৩০ দুপুর - ৪:০০ বিকাল"],
      time: "Available",
      bnTime: "পাওয়া যাবে",
    },
    {
      name: "Alema Adiba Tasneem",
      banglaName: "আলেমা আদিবা তাসনীম",
      rol: "Assistant Teacher",
      bnRol: "সহকারী শিক্ষক",
      experience: "3 years",
      banglaExperience: "৩ বছর", 
      education: {
        degree: "Dawra Hadith",
        banglaDegree: "দাওরায়ে হাদিস",
        institute: "Fatematuz Zahra Ra: Mahila Madrasa, Bhogra, Gazipur",
        banglaInstitute: "ফাতেমাতুয যাহরা রা: মহিলা মাদ্রাসা, ভোগড়া, গাজীপুর",
        passYear: {
          year: 2022,
          banglaYear: "২০২২ ইং",
        },
        result: {
          english: "First Class",
          bangla: "ফার্স্ট ক্লাস",
        },
      },
      passYear: 2022,
      banglaYear: "২০২২ ইং",
      result: "First Class",
      banglaResult: "ফার্স্ট ক্লাস",
      img: "https://i.postimg.cc/NF4Jf9DM/t-f.jpg",
      location: "Gajipur, Dhaka",
      banglaLocation: "গাজীপুর, ঢাকা",
      schedule: ["10:00 am - 12:00 pm","3:00 pm - 5:00 pm"],
      banglaSchedule: ["১০:০০ সকাল - ১২:০০ দুপুর", "৩:০০ দুপুর - ৫:০০ বিকাল"],
      time: "Available",
      bnTime: "পাওয়া যাবে",
    },
  ];

  const { language } = useLanguage();
   // Variants for the container and cards
   const containerVariants = {
    hidden: { opacity: 1 }, // Ensures the container is always visible
    visible: {
      transition: {
        staggerChildren: 0.3, // Increased delay between each child animation
      },
    },
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 }, // Cards start off invisible and slightly below their position
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5, // Increased animation duration to 1.5 seconds
      },
    },
  };
  

  return (
    <div className="mb-20">
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 3 }}
        className="relative bg-[url('https://i.postimg.cc/05phBrph/t1-bg.jpg')] bg-no-repeat md:bg-cover text-green-500 text-center py-56 -z-10"
      ></motion.header>

      <div className="max-w-[80%] mx-auto relative -mt-20 z-10">
        {/* Container for staggered animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {allTeacher.map((teacher, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-[#4b9efd3d] border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 p-6 text-center"
            >
              <img
                className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-green-300 object-cover object-top"
                src={teacher.img || "default-image.jpg"}
                alt={`${teacher.name}'s profile`}
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {language === "bn" ? teacher.banglaName : teacher.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {language === "bn" ? teacher.banglaLocation : teacher.location}
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {language === "bn"
                  ? `${teacher.bnRol}, অভিজ্ঞতা: ${teacher.banglaExperience}`
                  : `${teacher.rol}, Experience: ${teacher.experience}`}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                {language === "bn"
                  ? `শিক্ষা: ${teacher.education.banglaDegree}, ${teacher.education.banglaInstitute}`
                  : `Education: ${teacher.education.degree}, ${teacher.education.institute}`}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );

}

export default OurTeachers;
