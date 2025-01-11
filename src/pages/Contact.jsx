import { useState } from "react";
import { useLanguage } from "../providers/LanguageProvider";
import { Link } from "react-router-dom";
import '../../src/style.css'

function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(language === "bn" ? "ফর্মটি সফলভাবে জমা হয়েছে!" : "Form submitted successfully!");
  };

  return (
    <div className="text-justify">

      <header className="bg-[url('https://i.ibb.co.com/L0Jh7FS/31.jpg')] bg-no-repeat bg-cover bg-center text-green-500 text-center pt-48 pb-20">
        <h1 className="text-3xl font-bold">{language === "bn" ? "যোগাযোগ করুন" : "Contact Us"}</h1>
        <p className="text-lg">
          {language === "bn" ? "আমরা আপনার বার্তা শুনতে আগ্রহী!" : "We'd love to hear from you!"}
        </p>
      </header>

      <div className="container mx-auto pb-40 pt-10">
        <div className="flex flex-col lg:flex-row items-center w-full gap-10 justify-center">

          <div className="lg:w-[40%] w-full p-8 rounded-lg shadow-xl bg-[#56df9f25]">
            <h2 className="text-2xl font-bold text-center mb-5 text-black">
              {language === "bn" ? "ম্যাসেজ পাঠান" : "Send Message"}
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  {language === "bn" ? "নাম" : "Name"}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-green-300 focus:ring-0 focus:border-green-500 rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {language === "bn" ? "ইমেইল" : "Email"}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-green-300 focus:ring-0 focus:border-green-500 rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  {language === "bn" ? "বার্তা" : "Message"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-green-300 focus:ring-0 focus:border-green-500 rounded-md"
                  required
                ></textarea>
              </div>

              <button type="submit" className="w-full py-2 text-white bg-green-500 rounded-md hover:bg-green-600">
                {language === "bn" ? "জমা দিন" : "Submit"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {language === "bn" ? "অথবা আমাদেরকে মেইল করুন:" : "Or Send mail us:"}
              </p>
              <a href="mailto:iqraqawmiinstitute@gmail.com" className="text-green-500 hover:text-green-700">
                iqraqawmiinstitute@gmail.com
              </a>
            </div>
          </div>

          <div className="">
            <h2 className="text-2xl font-bold text-center mb-3 text-black">
              {language === "bn" ? "প্রয়োজনে ম্যাসেজ বা কল করুন" : "Send message Or call for emergency"}
            </h2>
            <div className="w-96 bg-[#56df9f25] rounded-lg shadow-xl text-center mb-4 py-5 transform transition-transform duration-300 hover:animate-infinity">
              <Link to={"https://wa.me/message/RCTHVDUIYROZB1"}>
                <img className="bg-transparent mx-auto" src="whatsapp.gif" alt="" />
                <p>Whatsapp</p>
              </Link>
            </div>
            <div className="w-96 bg-[#56df9f25] rounded-lg shadow-xl text-center mb-4 py-5 transform transition-transform duration-300 hover:animate-infinity">
              <Link to={"m.me/105080832514455"}>
                <img className="bg-transparent mx-auto" src="messenger.gif" alt="" />
                <p>Messenger</p>
              </Link>
            </div>
            <div className="w-96 bg-[#56df9f25] rounded-lg shadow-xl text-center mb-4 py-5 transform transition-transform duration-300 hover:animate-infinity">
              <Link to={"https://t.me/+VFF2fsr8g4I0YmNl"}>
                <img className="bg-transparent mx-auto" src="telegram.gif" alt="" />
                <p>Telegram</p>
              </Link>
            </div>
            <div className="w-96 bg-[#56df9f25] rounded-lg shadow-xl text-center py-5 transform transition-transform duration-300 hover:animate-infinity">
              <Link to={"tel:+8801919465871"}>
                <img className="bg-transparent mx-auto" src="phone.gif" alt="" />
                <p>Phone</p>
              </Link>
            </div>
          </div> 

        </div>

          <div className="flex lg:flex-row flex-col items-center gap-2 mt-4 justify-center">
            <a
              className="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300"
              target="_blank"
              href="https://forms.gle/axmVRr88k5hnSJmd8"
            >
              {language === "en" ? "Click Here for Admission Form" : "ভর্তি ফর্ম পেতে এখানে ক্লিক করুন"}
            </a>
            <a
              href="https://wa.me/message/RCTHVDUIYROZB1"
              target="_blank"
              className="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300"
            >
              {language === "bn"
                ? "ভর্তির বিষয়ে বা যে কোন তথ্য জানতে এখানে ক্লিক করুন"
                : "Click here for any information regarding admission"}
            </a>
          </div>

      </div>

    </div>
  );
}

export default Contact;
