import { useLanguage } from "../providers/LanguageProvider";

const Routine = () => {
  const { language } = useLanguage();

  const data = [
    {
      time: {
        en: "After Maghrib 6:00 PM Salah",
        bn: "মাগরিবের পর ৬:০০ পিএম সালাহ",
      },
      saturday: { en: "", bn: "" },
      sunday: { en: "", bn: "" },
      monday: { en: "", bn: "" },
      tuesday: { en: "", bn: "" },
      wednesday: { en: "", bn: "" },
      thursday: { en: "", bn: "" },
      friday: { en: "", bn: "" },
    },
    {
      time: {
        en: "8:30 PM - 9:30 PM",
        bn: "৮:৩০ পিএম - ৯:৩০ পিএম",
      },
      saturday: {
        en: "Batch: 2513\nTAJ101\nMawl. Zunayed Hosen",
        bn: "ব্যাচ: ২৫১৩\nতাজবিদ TAJ101\nমাওলানা জুনাইদ হোসেন",
      },
      sunday: { en: "", bn: "" },
      monday: { en: "", bn: "" },
      tuesday: {
        en: "Batch: 2513\nFQH101\nMufti Abdul Wahid",
        bn: "ব্যাচ: ২৫১৩\nফিকহ FQH101\nমুফতি আব্দুল ওয়াহিদ",
      },
      wednesday: { en: "", bn: "" },
      thursday: { en: "", bn: "" },
      friday: {
        en: "Talim Class",
        bn: "তালিম ক্লাস",
      },
    },
    {
      time: {
        en: "9:30 PM - 10:30 PM",
        bn: "৯:৩০ পিএম - ১০:৩০ পিএম",
      },
      saturday: {
        en: "Batch: 2513\nAQD101\nMufti Abdul Wahid",
        bn: "ব্যাচ: ২৫১৩\nআকিদা AQD101\nমুফতি আব্দুল ওয়াহিদ",
      },
      sunday: { en: "", bn: "" },
      monday: { en: "", bn: "" },
      tuesday: { en: "", bn: "" },
      wednesday: { en: "", bn: "" },
      thursday: { en: "", bn: "" },
      friday: { en: "", bn: "" },
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-28">
      <h1 className="text-2xl font-bold text-center mb-6">
        {language === "en"
          ? "Iqra Qawmi Institute Class Routine"
          : "ইকরা কওমি ইনস্টিটিউট ক্লাস রুটিন"}
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border">
                {language === "en" ? "Time" : "সময়"}
              </th>
              <th className="px-4 py-2 border">
                {language === "en" ? "Saturday" : "শনিবার"}
              </th>
              <th className="px-4 py-2 border">
                {language === "en" ? "Sunday" : "রবিবার"}
              </th>
              <th className="px-4 py-2 border">
                {language === "en" ? "Monday" : "সোমবার"}
              </th>
              <th className="px-4 py-2 border">
                {language === "en" ? "Tuesday" : "মঙ্গলবার"}
              </th>
              <th className="px-4 py-2 border">
                {language === "en" ? "Wednesday" : "বুধবার"}
              </th>
              <th className="px-4 py-2 border">
                {language === "en" ? "Thursday" : "বৃহস্পতিবার"}
              </th>
              <th className="px-4 py-2 border">
                {language === "en" ? "Friday" : "শুক্রবার"}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-gray-50`}
              >
                <td className="px-4 py-2 border font-medium whitespace-pre-line">
                  {row.time[language]}
                </td>
                <td className="px-4 py-2 border whitespace-pre-line">
                  {row.saturday[language]}
                </td>
                <td className="px-4 py-2 border whitespace-pre-line">
                  {row.sunday[language]}
                </td>
                <td className="px-4 py-2 border whitespace-pre-line">
                  {row.monday[language]}
                </td>
                <td className="px-4 py-2 border whitespace-pre-line">
                  {row.tuesday[language]}
                </td>
                <td className="px-4 py-2 border whitespace-pre-line">
                  {row.wednesday[language]}
                </td>
                <td className="px-4 py-2 border whitespace-pre-line">
                  {row.thursday[language]}
                </td>
                <td className="px-4 py-2 border whitespace-pre-line">
                  {row.friday[language]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Routine;
