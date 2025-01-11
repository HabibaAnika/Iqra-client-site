import { useState } from "react";
import { useLanguage } from "../../providers/LanguageProvider";
import { useNavigate } from "react-router-dom";

function Teachers() {
  const navigate = useNavigate();

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
      img: "https://i.postimg.cc/CKzWPNN4/t-1.jpg",
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? allTeacher.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === allTeacher.length - 1 ? 0 : prev + 1));
  };
  // bg-[#b2ddc31e]
  return (
    <div className="py-20 bg-[url('https://i.postimg.cc/xT8qRrmJ/99.jpg')] bg-no-repeat bg-cover">
      <div className="container mx-auto relative">
        <h2 className="text-2xl font-extrabold text-center mb-4">
          {language === "bn" ? "শিক্ষক প্যানেল" : "Teachers Panel"}
        </h2>

        <div className="relative overflow-hidden w-full max-w-3xl mx-auto">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {allTeacher.map((teacher, index) => (
              <div key={index} className="w-full flex-shrink-0 p-6 bg-white text-center border shadow-md rounded-lg">
                <img
                  src={teacher.img}
                  alt={language === "bn" ? teacher.banglaName : teacher.name}
                  className="w-36 h-36 mx-auto rounded-full mb-4 border-2 border-green-300 object-cover object-top"
                />
                <h3 className="text-lg font-bold text-green-500">
                  {language === "bn" ? teacher.banglaName : teacher.name}
                </h3>
                <p className="text-sm text-amber-500">{language === "bn" ? teacher.bnRol : teacher.rol}</p>

                <div className="mt-4">
                  <p className="text-sm text-gray-600">
                    <strong>{language === "bn" ? "অভিজ্ঞতা " : "Experience "}:</strong>{" "}
                    {language === "bn" ? teacher.banglaExperience : teacher.experience}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>{language === "bn" ? "শিক্ষাগত যোগ্যতা " : "Education "}:</strong>{" "}
                    {language === "bn" ? teacher.education.banglaDegree : teacher.education.degree},{" "}
                    {language === "bn" ? teacher.education.banglaInstitute : teacher.education.institute}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>{language === "bn" ? "সময়সূচি " : "Schedule "}:</strong>{" "}
                    {language === "bn" ? teacher.banglaSchedule.join(", ") : teacher.schedule.join(", ")}
                  </p>
                </div>

                {/* time */}
                <a onClick={() => navigate("/teacher-schedule", { state: { teacher } })}
                  className={`mt-4 btn-xs btn btn-outline mr-2 ${
                    teacher.time === "Available" ? "btn-success" : "btn-error"
                  }  hover:text-white btn-xs rounded-badge ${
                    teacher.time === "Available" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {language === "bn" ? teacher.bnTime : teacher.time}
                </a>
                {/* time */}
                <a
                  onClick={() => navigate("/teacher-schedule", { state: { teacher } })}
                  className="btn btn-outline btn-warning hover:text-white btn-xs rounded-badge"
                >
                  {language === "bn" ? "শিডিউল দেখুন " : "Show Schedule"}
                </a>
              </div>
            ))}
          </div>
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-4xl font-black text-green-500 p-2 rounded-full pointer opacity-[0.8] hover:opacity-[1]"
            onClick={prevSlide}
          >
            &#8249;
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 font-black text-4xl text-green-500 p-2 rounded-full pointer opacity-[0.8] hover:opacity-[1]"
            onClick={nextSlide}
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Teachers;
