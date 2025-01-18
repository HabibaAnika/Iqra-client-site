import { useLanguage } from "../../providers/LanguageProvider";

function Rules() {
  const { language } = useLanguage();
  return (
    <div className="mb-20">
      <header className="bg-[url('https://i.postimg.cc/mZXghdnb/8.jpg')] bg-no-repeat bg-cover bg-center pt-56 pb-28 mb-20"></header>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container mx-auto">
          <div className="grid gap-6 sm:grid-cols-12">
            {/* heading */}
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-600">
                <h3 className="text-3xl font-semibold">{language === "bn" ? "আমাদের নীতিমালা" : "Our Rules"}</h3>
                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">
                  {language === "bn" ? "শিক্ষা হোক নৈতিকতার সাথে" : "Education should be with ethics"}
                </span>
              </div>
            </div>
            {/* end heading */}

            <div className="relative col-span-12 space-y-6 sm:col-span-9 border-l-2 pt-[-12px] border-l-green-300">
              {/*  */}
              {/* I&C&S&C */}
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                {/*  */}
                {/* Institutional rules */}
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                  <h3 className="text-xl font-semibold tracking-wide">
                    {language === "bn" ? "প্রাতিষ্ঠানিক নিয়মাবলী" : "Institutional rules"}
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-600 divider divider-warning">
                    {language === "bn" ? "সারাংশ" : "Summary"}
                  </time>
                  <li className="">
                    {language === "bn"
                      ? "প্রতিটি ক্লাসের জন্য নির্দিষ্ট সময় নির্ধারণ করা এবং তা নিয়মিতভাবে পালন করা।"
                      : "Fixing specific time for each class and observing it regularly."}
                  </li>
                  <li>
                    {language === "bn"
                      ? "ক্লাসের সময় ৩০ থেকে ৬০ মিনিটের মধ্যে রাখা, যাতে শিক্ষার্থীরা মনোযোগ ধরে রাখতে পারে।"
                      : "Keep the class time between 30 and 60 minutes so that the students can stay focused."}
                  </li>
                  <li>
                    {language === "bn"
                      ? " শিক্ষার্থীদের উপস্থিতি নেওয়ার জন্য প্রতিটি ক্লাসের শুরুতে উপায় রাখা (যেমন: নাম ডাকা বা গুগল ফর্ম ব্যবহার)।"
                      : "Have a way at the beginning of each class to take student attendance (ie: roll call or use Google Forms)."}
                  </li>
                  <li>
                    {language === "bn"
                      ? "জুম, গুগল মিট বা অন্যান্য প্ল্যাটফর্ম ব্যবহার করে ক্লাস পরিচালনা এবং নিশ্চিত করা যে শিক্ষার্থীদের পাসওয়ার্ড-প্রোটেক্টেড অ্যাক্সেস রয়েছে।"
                      : "Conducting classes using Zoom, Google Meet or other platforms and ensuring that students have password-protected access."}
                  </li>

                  <p className="mt-3">
                    {language === "bn"
                      ? "যেকোনো সমস্যা হোয়াটসঅ্যাপ গ্রুপে জানানো বাধ্যতামূলক। সাপোর্ট টিম দ্রুত সমস্যা সমাধানে কাজ করবে।"
                      : "Our Rules"}
                  </p>
                </div>
                {/* end Institutional rules */}
                {/*  */}

                {/*  */}
                {/* community */}
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                  <h3 className="text-xl font-semibold tracking-wide">
                    {language === "bn" ? "যোগাযোগ ব্যবস্থাপনা" : "Communication Management"}
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-600 divider divider-warning">
                    {language === "bn" ? "হোয়াটসঅ্যাপ গ্রুপ তৈরি" : "Create WhatsApp group"}
                  </time>
                  <li className="">
                    {language === "bn" ? "শিক্ষকদের জন্য একটি আলাদা গ্রুপ" : "A separate group for teachers"}
                  </li>
                  <li>
                    {language === "bn"
                      ? "শিক্ষার্থী ও অভিভাবকদের জন্য পৃথক গ্রুপ"
                      : "Separate groups for students and parents"}
                  </li>
                  <li>{language === "bn" ? "সাপোর্ট টিমের জন্য আলাদা গ্রুপ" : "Separate group for support team"}</li>

                  <p className="mt-3">
                    {language === "bn"
                      ? "যেকোনো সমস্যা হোয়াটসঅ্যাপ গ্রুপে জানানো বাধ্যতামূলক। সাপোর্ট টিম দ্রুত সমস্যা সমাধানে কাজ করবে।"
                      : "Our Rules"}
                  </p>
                </div>
                {/* end community */}
                {/*  */}

                {/*  */}
                {/* sheet */}
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                  <h3 className="text-xl font-semibold tracking-wide">
                    {language === "bn" ? "হাজিরা ব্যবস্থাপনা" : "Attendance Management"}
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-600 divider divider-warning">
                    {language === "bn" ? "গুগল শীট ব্যবহারের নিয়ম" : "Rules for using Google Sheets"}
                  </time>
                  <li>
                    {language === "bn"
                      ? "শিক্ষকদের জন্য একটি গুগল শীট প্রদান করা হবে"
                      : "A google sheet will be provided for teachers"}
                  </li>
                  <li>
                    {language === "bn"
                      ? "প্রতিদিনের উপস্থিতি নির্ভুলভাবে শীটে লিপিবদ্ধ করতে হবে"
                      : "Daily attendance should be accurately recorded in the sheet"}
                  </li>
                  <li>
                    {language === "bn"
                      ? "শীট সক্রিয় এবং হালনাগাদ রাখা শিক্ষকের দায়িত্ব"
                      : "It is the teacher's responsibility to keep the sheet active and up to date"}
                  </li>
                </div>
                {/* end sheet */}
                {/*  */}

                {/*  */}
                {/* class */}
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                  <h3 className="text-xl font-semibold tracking-wide capitalize">
                    {language === "bn" ? "ক্লাস মিসিং এবং রিকভারি পদ্ধতি" : "Class missing and recovery procedures"}
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-600 divider divider-warning">
                    {language === "bn" ? "মিসিং ক্লাস রিকভারি" : "Missing class recovery"}
                  </time>
                  <p className="mt-3">
                    <li>
                      {language === "bn"
                        ? "প্রাইভেট শিক্ষার্থীদের জন্য মিসিং ক্লাস সঠিক সময়ে পুনরায় সম্পন্ন করতে হবে।"
                        : "Missing classes must be made up on time for private students."}
                    </li>
                    <li>
                      {language === "bn"
                        ? "ব্যাচ শিক্ষার্থীদের জন্য মিসিং ক্লাসের রেকর্ডেড ভিডিও সাপোর্ট টিমের মাধ্যমে প্রদান করা হবে (যদি সম্ভব হয়)।"
                        : "Recorded videos of missing classes for batch students will be provided by support team (if possible)."}
                    </li>
                    {language === "bn"
                      ? "মিসিং ক্লাস জানানো আবশ্যক, শিক্ষার্থী বা অভিভাবক সাপোর্ট টিমকে ক্লাস মিসের তথ্য জানাবে"
                      : "Missing classes must be reported, the student or parent will report the missed class to the support team"}
                  </p>
                </div>
                {/* end class */}
                {/*  */}
              </div>
              {/* end I&C&S&C */}
              {/*  */}

              <div className="divider divider-accent " />

              {/* t&s&S */}
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                {/*  */}
                {/* teacher area  */}
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                  <h3 className="text-xl font-semibold tracking-wide">
                    {language === "bn" ? "শিক্ষকদের জন্য বিশেষ নির্দেশিকা" : "Special guidelines for teachers"}
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-600 divider divider-warning">
                    {language === "bn" ? "শিক্ষকগন ফলো করবেন" : "Teachers will follow"}
                  </time>
                  <li className="">
                    {language === "bn"
                      ? "শিক্ষাদানের মান বজায় রাখা,শিক্ষার্থীদের পাঠদানের সময় সঠিক উচ্চারণ ও তাফসির নিশ্চিত করা।"
                      : "To maintain the quality of teaching, ensure correct pronunciation and tafseer while teaching the students."}
                  </li>
                  <li>
                    {language === "bn"
                      ? "প্রতিটি ক্লাসের আগে সিলেবাস অনুসারে প্রস্তুতি নেওয়া এবং প্রয়োজনীয় উপকরণ প্রস্তুত রাখা।"
                      : "Prepare as per syllabus and keep necessary materials ready before each class."}
                  </li>
                  <li>
                    {language === "bn"
                      ? "স্থিতিশীল ইন্টারনেট সংযোগ নিশ্চিত করা।"
                      : "Ensure stable internet connection."}
                  </li>
                  <li>
                    {language === "bn"
                      ? "শিক্ষার্থীদের মনোযোগ ধরে রাখার জন্য প্রশ্নোত্তর সেশন বা অন্যান্য ইন্টারেকটিভ পদ্ধতি ব্যবহার করা।"
                      : "Using question and answer sessions or other interactive methods to hold students' attention."}
                  </li>
                  <li>
                    {language === "bn"
                      ? "শিক্ষার্থীদের ভুল সংশোধন করা এবং ভালো কাজের জন্য প্রশংসা করা।"
                      : "Correcting students' mistakes and praising them for good work."}
                  </li>
                  <li>
                    {language === "bn"
                      ? "গুগল শিট পরিচালনা,নিয়মিত হাজিরা লিপিবদ্ধ করা এবং এটি আপডেট রাখা।"
                      : "Managing Google Sheets, recording regular attendance and keeping it updated."}
                  </li>

                  <p className="mt-3">
                    {language === "bn"
                      ? "যেকোনো সমস্যা হোয়াটসঅ্যাপ গ্রুপে জানানো বাধ্যতামূলক। সাপোর্ট টিম দ্রুত সমস্যা সমাধানে কাজ করবে।"
                      : "Any Issue must be reported to the WhatsApp group. The support team will work to resolve the issue quickly."}
                  </p>
                </div>
                {/* end teacher area */}
                {/*  */}

                {/*  */}
                {/* student area */}
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                  <h3 className="text-xl font-semibold tracking-wide">
                    {language === "bn" ? "শিক্ষার্থীদের জন্য বিশেষ নির্দেশিকা" : "Special Guidance for Students"}
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-600 divider divider-warning">
                    {language === "bn" ? "স্টুডেন্টদের জন্য" : "For Students"}
                  </time>
                  <ul className="list-disc pl-5">
                    <li>
                      {language === "bn"
                        ? "ক্লাসে উপস্থিতি জরুরী, প্রতিদিন নির্ধারিত সময়ে ক্লাসে অংশগ্রহণ নিশ্চিত করা।"
                        : "Attendance is mandatory; students must join the class at the scheduled time every day."}
                    </li>
                    <li>
                      {language === "bn"
                        ? "ক্লাসে অংশগ্রহণের সময় ইসলামিক পোশাক পরিধান বাধ্যতামূলক।"
                        : "Wearing Islamic attire is mandatory during class participation."}
                    </li>
                    <li>
                      {language === "bn"
                        ? "ক্যামেরা চালু রাখতে হবে এবং মাইক্রোফোন বন্ধ রাখা উচিত, যাতে ব্যাঘাত এড়ানো যায়।"
                        : "Students should keep their cameras on and microphones muted to avoid distractions."}
                    </li>
                    <li>
                      {language === "bn"
                        ? "ক্লাস চলাকালীন সম্পূর্ণ মনোযোগ দেয়া এবং শিক্ষকের নির্দেশ মেনে চলা।"
                        : "Pay full attention during the class and follow the teacher's instructions."}
                    </li>
                    <li>
                      {language === "bn"
                        ? "ক্লাস রেকর্ড করে রাখা এবং পরে পড়ার জন্য সেই রেকর্ডিং ব্যবহার করা (যদি সম্ভব হয়)।"
                        : "Record the class and use the recording for revision (if possible)."}
                    </li>
                    <li>
                      {language === "bn"
                        ? "ক্লাস মিস হলে দ্রুত সাপোর্ট টিমকে জানানো এবং যথাযথ ব্যবস্থার মাধ্যমে ক্লাস পুনরায় করা।"
                        : "Inform the support team immediately if a class is missed and arrange for a makeup class."}
                    </li>
                    <li>
                      {language === "bn"
                        ? "ব্যাচ ক্লাসের ক্ষেত্রে রেকর্ড ক্লাস দেখে বুঝে নেয়া।"
                        : "For batch classes, review the recorded class to catch up on missed lessons."}
                    </li>
                    <li>
                      {language === "bn"
                        ? "শিক্ষকের অনুমতি ছাড়া ক্লাস চলাকালীন চ্যাট ব্যবহার করা থেকে বিরত থাকা।"
                        : "Avoid using chat during class without the teacher's permission."}
                    </li>
                    <li>
                      {language === "bn"
                        ? "প্রশ্ন থাকলে ক্লাস শেষে বা নির্ধারিত সময়ে তা জিজ্ঞাসা করা।"
                        : "Ask questions after the class or at the designated time."}
                    </li>
                  </ul>
                </div>

                {/* end student area */}
                {/*  */}

                {/*  */}
                {/* gerdian area */}
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                  <h3 className="text-xl font-semibold tracking-wide">
                    {language === "bn" ? "অভিভাবকদের জন্য বিশেষ নির্দেশিকা" : "Special Guidelines for Parents"}
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-600 divider divider-warning">
                    {language === "bn" ? "অভিভাবকদের বিশেষ লক্ষণীয় বিষয়" : "Important Notes for Parents"}
                  </time>
                  <ul className="list-disc pl-5 mt-3">
                    <li>
                      {language === "bn"
                        ? "উপস্থিতি নিশ্চিত করা, শিক্ষার্থীরা যেন সময়মতো ক্লাসে যোগ দেয় তা নিশ্চিত করা।"
                        : "Ensure attendance: Make sure students join the class on time."}
                    </li>
                    <li>
                      {language === "bn"
                        ? "শিক্ষার্থীর যেকোনো সমস্যা সাপোর্ট টিমে জানানো।"
                        : "Inform the support team about any issues faced by the student."}
                    </li>
                    <li>
                      {language === "bn"
                        ? "অগ্রগতির পর্যবেক্ষণ, ক্লাস ও পাঠ্যক্রম সম্পর্কে নিয়মিত শিক্ষকদের সাথে যোগাযোগ রাখা।"
                        : "Monitor progress: Stay in regular contact with teachers about classes and the curriculum."}
                    </li>
                    <li>
                      {language === "bn"
                        ? "শিক্ষার্থীদের জন্য পড়াশোনার জন্য একটি নির্ধারিত স্থান এবং সময় নির্ধারণ করা।"
                        : "Designate a specific time and space for students to study effectively."}
                    </li>
                    <li>
                      {language === "bn"
                        ? "ক্লাস চলাকালীন অনাকাঙ্ক্ষিত ব্যাঘাত এড়ানোর জন্য পরিবেশ নিশ্চিত করা।"
                        : "Ensure a distraction-free environment during classes."}
                    </li>
                    <li>
                      {language === "bn"
                        ? "শিক্ষার্থীদের রেকর্ডিং ক্লাস দেখতে এবং প্রশ্ন করতে উৎসাহিত করা।"
                        : "Encourage students to watch recorded classes and ask questions."}
                    </li>
                  </ul>
                </div>

                {/* end gerdian area  */}
                {/*  */}

                {/*  */}
                {/* Support area */}
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                  <h3 className="text-xl font-semibold tracking-wide">
                    {language === "bn" ? "সাপোর্ট টিমের জন্য নির্দেশিকা" : "Guidelines for the Support Team"}
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-600 divider divider-warning">
                    {language === "bn" ? "সাপোর্ট টিম ফলো করবেন:" : "To be followed by the support team:"}
                  </time>
                  <ul className="list-disc pl-5 mt-3">
                    <li>
                      {language === "bn"
                        ? "প্রযুক্তিগত সহায়তা, ক্লাস সংক্রান্ত যেকোনো প্রযুক্তিগত সমস্যার সমাধানে তৎপর থাকা।"
                        : "Provide technical support and promptly resolve any class-related technical issues."}
                    </li>
                    <li>
                      {language === "bn"
                        ? "যোগাযোগ ব্যবস্থাপনা, হোয়াটসঅ্যাপ গ্রুপ সক্রিয় রাখা এবং সমস্যার সমাধান দ্রুত নিশ্চিত করা।"
                        : "Manage communication: Keep the WhatsApp group active and address issues promptly."}
                    </li>
                    <li>
                      {language === "bn"
                        ? "রেকর্ড ক্লাস প্রদান, মিসিং ক্লাসের রেকর্ডেড ভিডিও (যদি সম্ভব হয়) সরবরাহ করা।"
                        : "Provide recorded classes: Share recordings of missed classes when available."}
                    </li>
                    <li>
                      {language === "bn"
                        ? "হাজিরা পর্যবেক্ষণ করা, শিক্ষকদের গুগল শিট নিয়মিত পর্যবেক্ষণ করা।"
                        : "Monitor attendance: Regularly review Google Sheets maintained by teachers."}
                    </li>
                  </ul>
                  <p className="mt-3">
                    {language === "bn"
                      ? "যেকোনো সমস্যার সমাধান হোয়াটসঅ্যাপ গ্রুপে জানানো বাধ্যতামূলক। সাপোর্ট টিম দ্রুত সমস্যা সমাধানে কাজ করবে। সমস্যা আওতার বাইরে চলে গেলে পরিচালক প্যানেলে জানাতে হবে।"
                      : "It is mandatory to address any issues in the WhatsApp group. The support team will work swiftly to resolve Issue. If an issue goes beyond their scope, it must be escalated to the management panel."}
                  </p>
                </div>

                {/* end support area */}
                {/*  */}
              </div>
              {/* End T&S&S */}
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Rules;
