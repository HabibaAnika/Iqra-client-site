import { useLocation } from "react-router-dom";
import { useLanguage } from "../../providers/LanguageProvider";

function TeacherSchedule() {
  const location = useLocation();
  const teacher = location.state?.teacher;
  const { language } = useLanguage();

  if (!teacher) {
    return (
      <p className="text-center text-red-500 font-bold my-20">
        {language === "bn" ? "কোনো শিডিউল তথ্য উপলব্ধ নয়।" : "No schedule information available."}
      </p>
    );
  }

  const teacherSchedules = [
    {
      teacher: "Hafiz Mawlana Mufti Akm Zonayed Hosen",
      schedule: [
        {
          time: "8:00 AM - 9:00 AM",
          timeBn: "৮:০০ - ৯:০০ সকাল",
          monday: "Basic Quran Course",
          tuesday: "Advance Quran Course (Nazera)",
          wednesday: "30th Part Memorizing Course (Ampara Hifz)",
          thursday: "Memorizing Al Quran (Hifz)",
          friday: "Hifz Revise Course",
          saturday: "Special Hifz Course",
          sunday: "Alim Course",
          mondayBn: "বেসিক কোরআন কোর্স",
          tuesdayBn: "এডভান্স কোরআন কোর্স (নাযেরা)",
          wednesdayBn: "৩০ তম পারা মুখস্থ কোর্স (আমপারা হিফজ)",
          thursdayBn: "হিফয কোর্স",
          fridayBn: "হিফয রিভাইস কোর্স",
          saturdayBn: "ফজিলতের হিফয কোর্স",
          sundayBn: "আলিম কোর্স",
        },
        {
          time: "9:00 AM - 10:00 AM",
          timeBn: "৯:০০ - ১০:০০ সকাল",
          monday: "Advance Quran Course (Nazera)",
          tuesday: "30th Part Memorizing Course (Ampara Hifz)",
          wednesday: "Memorizing Al Quran (Hifz)",
          thursday: "Hifz Revise Course",
          friday: "Special Hifz Course",
          saturday: "Alim Course",
          sunday: "Need for Ummah Course",
          mondayBn: "এডভান্স কোরআন কোর্স (নাযেরা)",
          tuesdayBn: "৩০ তম পারা মুখস্থ কোর্স (আমপারা হিফজ)",
          wednesdayBn: "হিফয কোর্স",
          thursdayBn: "হিফয রিভাইস কোর্স",
          fridayBn: "ফজিলতের হিফয কোর্স",
          saturdayBn: "আলিম কোর্স",
          sundayBn: "ফরজে আইন কোর্স",
        },
      ],
    },
    {
      teacher: "Hafiz Mawlana Mushfiqur Rahman Muaz",
      schedule: [
        {
          time: "8:00 AM - 9:00 AM",
          timeBn: "৮:০০ - ৯:০০ সকাল",
          monday: "Basic Quran Course",
          tuesday: "Advance Quran Course (Nazera)",
          wednesday: "30th Part Memorizing Course (Ampara Hifz)",
          thursday: "Memorizing Al Quran (Hifz)",
          friday: "Hifz Revise Course",
          saturday: "Special Hifz Course",
          sunday: "Alim Course",
          mondayBn: "বেসিক কোরআন কোর্স",
          tuesdayBn: "এডভান্স কোরআন কোর্স (নাযেরা)",
          wednesdayBn: "৩০ তম পারা মুখস্থ কোর্স (আমপারা হিফজ)",
          thursdayBn: "হিফয কোর্স",
          fridayBn: "হিফয রিভাইস কোর্স",
          saturdayBn: "ফজিলতের হিফয কোর্স",
          sundayBn: "আলিম কোর্স",
        },
        {
          time: "9:00 AM - 10:00 AM",
          timeBn: "৯:০০ - ১০:০০ সকাল",
          monday: "Advance Quran Course (Nazera)",
          tuesday: "30th Part Memorizing Course (Ampara Hifz)",
          wednesday: "Memorizing Al Quran (Hifz)",
          thursday: "Hifz Revise Course",
          friday: "Special Hifz Course",
          saturday: "Alim Course",
          sunday: "Need for Ummah Course",
          mondayBn: "এডভান্স কোরআন কোর্স (নাযেরা)",
          tuesdayBn: "৩০ তম পারা মুখস্থ কোর্স (আমপারা হিফজ)",
          wednesdayBn: "হিফয কোর্স",
          thursdayBn: "হিফয রিভাইস কোর্স",
          fridayBn: "ফজিলতের হিফয কোর্স",
          saturdayBn: "আলিম কোর্স",
          sundayBn: "ফরজে আইন কোর্স",
        },
      ],
    },
    {
      teacher: "Hafiz Mawlana Tasneem Hosen",
      schedule: [
        {
          time: "8:00 AM - 9:00 AM",
          timeBn: "৮:০০ - ৯:০০ সকাল",
          monday: "Basic Quran Course",
          tuesday: "Advance Quran Course (Nazera)",
          wednesday: "30th Part Memorizing Course (Ampara Hifz)",
          thursday: "Memorizing Al Quran (Hifz)",
          friday: "Hifz Revise Course",
          saturday: "Special Hifz Course",
          sunday: "Alim Course",
          mondayBn: "বেসিক কোরআন কোর্স",
          tuesdayBn: "এডভান্স কোরআন কোর্স (নাযেরা)",
          wednesdayBn: "৩০ তম পারা মুখস্থ কোর্স (আমপারা হিফজ)",
          thursdayBn: "হিফয কোর্স",
          fridayBn: "হিফয রিভাইস কোর্স",
          saturdayBn: "ফজিলতের হিফয কোর্স",
          sundayBn: "আলিম কোর্স",
        },
        {
          time: "9:00 AM - 10:00 AM",
          timeBn: "৯:০০ - ১০:০০ সকাল",
          monday: "Advance Quran Course (Nazera)",
          tuesday: "30th Part Memorizing Course (Ampara Hifz)",
          wednesday: "Memorizing Al Quran (Hifz)",
          thursday: "Hifz Revise Course",
          friday: "Special Hifz Course",
          saturday: "Alim Course",
          sunday: "Need for Ummah Course",
          mondayBn: "এডভান্স কোরআন কোর্স (নাযেরা)",
          tuesdayBn: "৩০ তম পারা মুখস্থ কোর্স (আমপারা হিফজ)",
          wednesdayBn: "হিফয কোর্স",
          thursdayBn: "হিফয রিভাইস কোর্স",
          fridayBn: "ফজিলতের হিফয কোর্স",
          saturdayBn: "আলিম কোর্স",
          sundayBn: "ফরজে আইন কোর্স",
        },
      ],
    },
    {
      teacher: "Hafiz Mawlana Mashhad Hossain",
      schedule: [
        {
          time: "8:00 AM - 9:00 AM",
          timeBn: "৮:০০ - ৯:০০ সকাল",
          monday: "Basic Quran Course",
          tuesday: "Advance Quran Course (Nazera)",
          wednesday: "30th Part Memorizing Course (Ampara Hifz)",
          thursday: "Memorizing Al Quran (Hifz)",
          friday: "Hifz Revise Course",
          saturday: "Special Hifz Course",
          sunday: "Alim Course",
          mondayBn: "বেসিক কোরআন কোর্স",
          tuesdayBn: "এডভান্স কোরআন কোর্স (নাযেরা)",
          wednesdayBn: "৩০ তম পারা মুখস্থ কোর্স (আমপারা হিফজ)",
          thursdayBn: "হিফয কোর্স",
          fridayBn: "হিফয রিভাইস কোর্স",
          saturdayBn: "ফজিলতের হিফয কোর্স",
          sundayBn: "আলিম কোর্স",
        },
        {
          time: "9:00 AM - 10:00 AM",
          timeBn: "৯:০০ - ১০:০০ সকাল",
          monday: "Advance Quran Course (Nazera)",
          tuesday: "30th Part Memorizing Course (Ampara Hifz)",
          wednesday: "Memorizing Al Quran (Hifz)",
          thursday: "Hifz Revise Course",
          friday: "Special Hifz Course",
          saturday: "Alim Course",
          sunday: "Need for Ummah Course",
          mondayBn: "এডভান্স কোরআন কোর্স (নাযেরা)",
          tuesdayBn: "৩০ তম পারা মুখস্থ কোর্স (আমপারা হিফজ)",
          wednesdayBn: "হিফয কোর্স",
          thursdayBn: "হিফয রিভাইস কোর্স",
          fridayBn: "ফজিলতের হিফয কোর্স",
          saturdayBn: "আলিম কোর্স",
          sundayBn: "ফরজে আইন কোর্স",
        },
      ],
    },
    {
      teacher: "Mawlana Hasibur Rahman",
      schedule: [
        {
          time: "8:00 AM - 9:00 AM",
          timeBn: "৮:০০ - ৯:০০ সকাল",
          monday: "Basic Quran Course",
          tuesday: "Advance Quran Course (Nazera)",
          wednesday: "30th Part Memorizing Course (Ampara Hifz)",
          thursday: "Memorizing Al Quran (Hifz)",
          friday: "Hifz Revise Course",
          saturday: "Special Hifz Course",
          sunday: "Alim Course",
          mondayBn: "বেসিক কোরআন কোর্স",
          tuesdayBn: "এডভান্স কোরআন কোর্স (নাযেরা)",
          wednesdayBn: "৩০ তম পারা মুখস্থ কোর্স (আমপারা হিফজ)",
          thursdayBn: "হিফয কোর্স",
          fridayBn: "হিফয রিভাইস কোর্স",
          saturdayBn: "ফজিলতের হিফয কোর্স",
          sundayBn: "আলিম কোর্স",
        },
        {
          time: "9:00 AM - 10:00 AM",
          timeBn: "৯:০০ - ১০:০০ সকাল",
          monday: "Advance Quran Course (Nazera)",
          tuesday: "30th Part Memorizing Course (Ampara Hifz)",
          wednesday: "Memorizing Al Quran (Hifz)",
          thursday: "Hifz Revise Course",
          friday: "Special Hifz Course",
          saturday: "Alim Course",
          sunday: "Need for Ummah Course",
          mondayBn: "এডভান্স কোরআন কোর্স (নাযেরা)",
          tuesdayBn: "৩০ তম পারা মুখস্থ কোর্স (আমপারা হিফজ)",
          wednesdayBn: "হিফয কোর্স",
          thursdayBn: "হিফয রিভাইস কোর্স",
          fridayBn: "ফজিলতের হিফয কোর্স",
          saturdayBn: "আলিম কোর্স",
          sundayBn: "ফরজে আইন কোর্স",
        },
      ],
    },
    {
      teacher: "Alema Habiba Sultana",
      schedule: [
        {
          time: "8:00 AM - 9:00 AM",
          timeBn: "৮:০০ - ৯:০০ সকাল",
          monday: "Basic Quran Course",
          tuesday: "Advance Quran Course (Nazera)",
          wednesday: "30th Part Memorizing Course (Ampara Hifz)",
          thursday: "Memorizing Al Quran (Hifz)",
          friday: "Hifz Revise Course",
          saturday: "Special Hifz Course",
          sunday: "Alim Course",
          mondayBn: "বেসিক কোরআন কোর্স",
          tuesdayBn: "এডভান্স কোরআন কোর্স (নাযেরা)",
          wednesdayBn: "৩০ তম পারা মুখস্থ কোর্স (আমপারা হিফজ)",
          thursdayBn: "হিফয কোর্স",
          fridayBn: "হিফয রিভাইস কোর্স",
          saturdayBn: "ফজিলতের হিফয কোর্স",
          sundayBn: "আলিম কোর্স",
        },
        {
          time: "9:00 AM - 10:00 AM",
          timeBn: "৯:০০ - ১০:০০ সকাল",
          monday: "Advance Quran Course (Nazera)",
          tuesday: "30th Part Memorizing Course (Ampara Hifz)",
          wednesday: "Memorizing Al Quran (Hifz)",
          thursday: "Hifz Revise Course",
          friday: "Special Hifz Course",
          saturday: "Alim Course",
          sunday: "Need for Ummah Course",
          mondayBn: "এডভান্স কোরআন কোর্স (নাযেরা)",
          tuesdayBn: "৩০ তম পারা মুখস্থ কোর্স (আমপারা হিফজ)",
          wednesdayBn: "হিফয কোর্স",
          thursdayBn: "হিফয রিভাইস কোর্স",
          fridayBn: "ফজিলতের হিফয কোর্স",
          saturdayBn: "আলিম কোর্স",
          sundayBn: "ফরজে আইন কোর্স",
        },
      ],
    },
    {
      teacher: "Alema Qariya Unaisa Bushra",
      schedule: [
        {
          time: "8:00 AM - 9:00 AM",
          timeBn: "৮:০০ - ৯:০০ সকাল",
          monday: "Basic Quran Course",
          tuesday: "Advance Quran Course (Nazera)",
          wednesday: "30th Part Memorizing Course (Ampara Hifz)",
          thursday: "Memorizing Al Quran (Hifz)",
          friday: "Hifz Revise Course",
          saturday: "Special Hifz Course",
          sunday: "Alim Course",
          mondayBn: "বেসিক কোরআন কোর্স",
          tuesdayBn: "এডভান্স কোরআন কোর্স (নাযেরা)",
          wednesdayBn: "৩০ তম পারা মুখস্থ কোর্স (আমপারা হিফজ)",
          thursdayBn: "হিফয কোর্স",
          fridayBn: "হিফয রিভাইস কোর্স",
          saturdayBn: "ফজিলতের হিফয কোর্স",
          sundayBn: "আলিম কোর্স",
        },
        {
          time: "9:00 AM - 10:00 AM",
          timeBn: "৯:০০ - ১০:০০ সকাল",
          monday: "Advance Quran Course (Nazera)",
          tuesday: "30th Part Memorizing Course (Ampara Hifz)",
          wednesday: "Memorizing Al Quran (Hifz)",
          thursday: "Hifz Revise Course",
          friday: "Special Hifz Course",
          saturday: "Alim Course",
          sunday: "Need for Ummah Course",
          mondayBn: "এডভান্স কোরআন কোর্স (নাযেরা)",
          tuesdayBn: "৩০ তম পারা মুখস্থ কোর্স (আমপারা হিফজ)",
          wednesdayBn: "হিফয কোর্স",
          thursdayBn: "হিফয রিভাইস কোর্স",
          fridayBn: "ফজিলতের হিফয কোর্স",
          saturdayBn: "আলিম কোর্স",
          sundayBn: "ফরজে আইন কোর্স",
        },
      ],
    },
    {
      teacher: "Alema Jannat Tahsin",
      schedule: [
        {
          time: "8:00 AM - 9:00 AM",
          timeBn: "৮:০০ - ৯:০০ সকাল",
          monday: "Basic Quran Course",
          tuesday: "Advance Quran Course (Nazera)",
          wednesday: "30th Part Memorizing Course (Ampara Hifz)",
          thursday: "Memorizing Al Quran (Hifz)",
          friday: "Hifz Revise Course",
          saturday: "Special Hifz Course",
          sunday: "Alim Course",
          mondayBn: "বেসিক কোরআন কোর্স",
          tuesdayBn: "এডভান্স কোরআন কোর্স (নাযেরা)",
          wednesdayBn: "৩০ তম পারা মুখস্থ কোর্স (আমপারা হিফজ)",
          thursdayBn: "হিফয কোর্স",
          fridayBn: "হিফয রিভাইস কোর্স",
          saturdayBn: "ফজিলতের হিফয কোর্স",
          sundayBn: "আলিম কোর্স",
        },
        {
          time: "9:00 AM - 10:00 AM",
          timeBn: "৯:০০ - ১০:০০ সকাল",
          monday: "Advance Quran Course (Nazera)",
          tuesday: "30th Part Memorizing Course (Ampara Hifz)",
          wednesday: "Memorizing Al Quran (Hifz)",
          thursday: "Hifz Revise Course",
          friday: "Special Hifz Course",
          saturday: "Alim Course",
          sunday: "Need for Ummah Course",
          mondayBn: "এডভান্স কোরআন কোর্স (নাযেরা)",
          tuesdayBn: "৩০ তম পারা মুখস্থ কোর্স (আমপারা হিফজ)",
          wednesdayBn: "হিফয কোর্স",
          thursdayBn: "হিফয রিভাইস কোর্স",
          fridayBn: "ফজিলতের হিফয কোর্স",
          saturdayBn: "আলিম কোর্স",
          sundayBn: "ফরজে আইন কোর্স",
        },
      ],
    },
    {
      teacher: "Alema Adiba Tasneem",
      schedule: [
        {
          time: "8:00 AM - 9:00 AM",
          timeBn: "৮:০০ - ৯:০০ সকাল",
          monday: "Basic Quran Course",
          tuesday: "Advance Quran Course (Nazera)",
          wednesday: "30th Part Memorizing Course (Ampara Hifz)",
          thursday: "Memorizing Al Quran (Hifz)",
          friday: "Hifz Revise Course",
          saturday: "Special Hifz Course",
          sunday: "Alim Course",
          mondayBn: "বেসিক কোরআন কোর্স",
          tuesdayBn: "এডভান্স কোরআন কোর্স (নাযেরা)",
          wednesdayBn: "৩০ তম পারা মুখস্থ কোর্স (আমপারা হিফজ)",
          thursdayBn: "হিফয কোর্স",
          fridayBn: "হিফয রিভাইস কোর্স",
          saturdayBn: "ফজিলতের হিফয কোর্স",
          sundayBn: "আলিম কোর্স",
        },
        {
          time: "9:00 AM - 10:00 AM",
          timeBn: "৯:০০ - ১০:০০ সকাল",
          monday: "Advance Quran Course (Nazera)",
          tuesday: "30th Part Memorizing Course (Ampara Hifz)",
          wednesday: "Memorizing Al Quran (Hifz)",
          thursday: "Hifz Revise Course",
          friday: "Special Hifz Course",
          saturday: "Alim Course",
          sunday: "Need for Ummah Course",
          mondayBn: "এডভান্স কোরআন কোর্স (নাযেরা)",
          tuesdayBn: "৩০ তম পারা মুখস্থ কোর্স (আমপারা হিফজ)",
          wednesdayBn: "হিফয কোর্স",
          thursdayBn: "হিফয রিভাইস কোর্স",
          fridayBn: "ফজিলতের হিফয কোর্স",
          saturdayBn: "আলিম কোর্স",
          sundayBn: "ফরজে আইন কোর্স",
        },
      ],
    },
  ];
  

  
  // Find the teacher from the schedule array
  const teacherSchedule = teacherSchedules.find(
    (schedule) =>
      schedule.teacher?.trim().toLowerCase() === teacher.name.trim().toLowerCase()
  );
  
  
  if (!teacherSchedule) {
    return (
      <p className="text-center text-red-500 font-bold my-20">
        {language === "bn" ? "কোনো শিডিউল তথ্য উপলব্ধ নয়।" : "No schedule information available."}
      </p>
    );
  }

  return (
    <div className="max-w-[80%] mx-auto my-36">
      {/* card */}
      <div className="bg-white text-center border shadow-md rounded-lg p-6">
        <img
          src={teacher?.img}
          alt={language === "bn" ? teacher?.banglaName : teacher?.name}
          className="w-36 h-36 mx-auto rounded-full mb-4 border-2 border-green-300 object-cover object-top"
        />
        <h3 className="text-lg font-bold text-green-500">
          {language === "bn" ? `${teacher?.banglaName}` : `${teacher?.name}`}
        </h3>
        <p className="text-sm text-amber-500">{language === "bn" ? teacher?.bnRol : teacher?.rol}</p>

        <div className="mt-4">
          <p className="text-sm text-gray-600">
            <strong>{language === "bn" ? "অভিজ্ঞতা " : "Experience "}:</strong>{" "}
            {language === "bn" ? teacher?.banglaExperience : teacher?.experience}
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <strong>{language === "bn" ? "শিক্ষাগত যোগ্যতা " : "Education "}:</strong>{" "}
            {language === "bn"
              ? `${teacher?.education?.banglaDegree}, ${teacher?.education?.banglaInstitute}`
              : `${teacher?.education?.degree}, ${teacher?.education?.institute}`}
          </p>

          <div className="flex justify-center items-center gap-4">
            {teacher ? (
              <>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>{language === "bn" ? "পাশের বছর " : "Pass Year "}:</strong>{" "}
                  {language === "bn" ? teacher?.banglaYear : teacher?.passYear}
                </p>
                <span className="text-gray-600">|</span>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>{language === "bn" ? "ফলাফল " : "Result "}:</strong>{" "}
                  {language === "bn" ? teacher?.banglaResult : teacher?.result}
                </p>
              </>
            ) : (
              <>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>{language === "bn" ? "পাশের বছর " : "Pass Year "}:</strong>{" "}
                  {language === "bn" ? "পড়াশোনা চলমান" : "Study is ongoing"}
                </p>
                <span className="text-gray-600">|</span>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>{language === "bn" ? "ফলাফল " : "Result "}:</strong>{" "}
                  {language === "bn" ? "পড়াশোনা চলমান" : "Study is ongoing"}
                </p>
              </>
            )}
          </div>

          <p className="text-sm text-gray-600 my-2">
            <strong>{language === "bn" ? "সময়সূচি " : "Schedule "}:</strong>{" "}
            {language === "bn" ? teacher?.banglaSchedule.join(", ") : teacher?.schedule.join(", ")}
          </p>
          <a
            className={`text-xs font-semibold outline outline-1 rounded-badge px-2 ${
              teacher.time === "Available" ? "outline-green-500" : "outline-red-500"
            } ${teacher.time === "Available" ? "text-green-500" : "text-red-500"}`}
          >
            {language === "bn" ? teacher?.bnTime : teacher?.time}
          </a>
        </div>
      </div>{" "}
      {/* end card */}
      <h2 className="text-2xl font-extrabold text-center mt-16 mb-8 border">
        {language === "bn" ? `${teacher?.banglaName} এর শিডিউল` : `${teacher?.name}'s Schedule`}
      </h2>
      {/* Table */}
      <div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  {language === "bn" ? "সময়" : "Time"}
                </th>
                
                <th scope="col" className="px-6 py-3">
                  {language === "bn" ? "শনিবার" : "Saturday"}
                </th>
                <th scope="col" className="px-6 py-3">
                  {language === "bn" ? "রবিবার" : "Sunday"}
                </th>
                <th scope="col" className="px-6 py-3">
                  {language === "bn" ? "সোমবার" : "Monday"}
                </th>
                <th scope="col" className="px-6 py-3">
                  {language === "bn" ? "মঙ্গলবার" : "Tuesday"}
                </th>
                <th scope="col" className="px-6 py-3">
                  {language === "bn" ? "বুধবার" : "Wednesday"}
                </th>
                <th scope="col" className="px-6 py-3">
                  {language === "bn" ? "বৃহস্পতিবার" : "Thursday"}
                </th>
                <th scope="col" className="px-6 py-3">
                  {language === "bn" ? "শুক্রবার" : "Friday"}
                </th>
              </tr>
            </thead>
            <tbody>
              {teacherSchedule?.schedule?.map((slot, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td
                    scope="row"
                    className="px-6 py-4 font-bold whitespace-nowrap"
                  >
                    {language === "bn" ? slot.timeBn : slot.time}
                  </td>
                  
                  <td className="px-6 py-4">
                    {language === "bn" ? slot.saturdayBn : slot.saturday}
                  </td>
                  <td className="px-6 py-4">
                    {language === "bn" ? slot.sundayBn : slot.sunday}
                  </td>
                  <td className="px-6 py-4">
                    {language === "bn" ? slot.mondayBn : slot.monday}
                  </td>
                  <td className="px-6 py-4">
                    {language === "bn" ? slot.tuesdayBn : slot.tuesday}
                  </td>
                  <td className="px-6 py-4">
                    {language === "bn" ? slot.wednesdayBn : slot.wednesday}
                  </td>
                  <td className="px-6 py-4">
                    {language === "bn" ? slot.thursdayBn : slot.thursday}
                  </td>
                  <td className="px-6 py-4">
                    {language === "bn" ? slot.fridayBn : slot.friday}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* End table */}
    </div>
  );
}

export default TeacherSchedule;
