// Mapping for course name translations
const translatedNames = {
  "Basic Quran Course": "প্রাথমিক কোরআন শিক্ষা কোর্স",
  "Advance Quran Course (Nazera)": "উচ্চতর কোরআন কোর্স (নাযেরা)",
  "30th Part Memorizing Course (Ampara Hifz)": "৩০তম পারা মুখস্থ করার কোর্স (আমপারা হিফজ)",
  "Memorizing Al Quran (Hifz)": "মুখস্থ কোরআন কোর্স (হিফজ)",
  "Hifz Revise Course": "হিফজ পুনরুদ্ধার কোর্স",
  "Special Hifz Course": "ফজিলতের সুরাসমুহ হিফয কোর্স",
  "Course to become an Islamic scholar (Alim Course)": "আলিম কোর্স",
  "Need for Ummah Course": "ফরজে আইন কোর্স",
  "Quran translation course": "কোরআন তরজমা কোর্স",
  "Biographies of the Prophets Course": "নবীদের সিরাত কোর্স",
  "Inheritance law Course": "উত্তরাধিকার আইন কোর্স",
  "Prayer and Masael Education Course": "নামাজ ও মাসায়েল শিক্ষা কোর্স"
};


const getTranslatedName = (name, language) => {
  const translatedName = translatedNames[name.trim()];
  console.log("Course Name: ", name, "Translated: ", translatedName);  // Add this line
  return language === "en" ? name : translatedName || name;
};


// Reusable CourseCard Component
function CourseCard({ course, language }) {
  return (
    <div className="max-w-sm bg-green-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto transform transition-transform duration-300 hover:scale-105">
        <img className="rounded-t-lg h-[300px] w-full" src={course.img} alt={`Image for ${course.courseName}`} />
      <div className="p-5 h-[295px] text-justify">
        <h5 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
          {getTranslatedName(course.courseName, language)}
        </h5>

        <p className="mb-1 text-gray-700 text-xs dark:text-gray-400 text-justify">
          {language === "en" ? course.description.english : course.description.bangla}
        </p>
        <div className="flex items-center gap-4">
          <p className="text-xs">
            {language === "en" ? (
              <>
                <span className="font-black">Price :</span> {course.price.en} (Per Month)
              </>
            ) : (
              <>
                <span className="font-black">মূল্য :</span> {course.price.bn} (মাসিক)
              </>
            )}
          </p>
          <p className="text-xs">
            {language === "en" ? (
              <>
                <span className="font-black">Seats Available :</span> {course.seats.en} (Per Batch)
              </>
            ) : (
              <>
                <span className="font-black">আসন সংখ্যা :</span> {course.seats.bn} (প্রতি ব্যাচে)
              </>
            )}
          </p>
        </div>
        <p className="text-xs mt-1 mb-2">
          {language === "en" ? (
            <>
              <span className="font-black">Duration :</span> {course.duration.english}
            </>
          ) : (
            <>
              <span className="font-black">সময়কাল :</span> {course.duration.bangla}
            </>
          )}
        </p>
        <a
          href={course.link}
          className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white bg-green-500 rounded-md mr-1 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {language === "en" ? "More Details" : "আরও বিস্তারিত"}
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <a
          className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300"
          target="_blank"
          href="https://forms.gle/axmVRr88k5hnSJmd8"
          rel="noopener noreferrer"
        >
          {language === "en" ? "Get Admitted" : "ভর্তি হোন"}
        </a>
      </div>
    </div>
  );
}
export default CourseCard;
