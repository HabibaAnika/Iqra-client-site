import { Link } from "react-router-dom";
import { useLanguage } from "../providers/LanguageProvider";
import ThemeSwitcher from "./ThemeSwitcher";
import { useState, useEffect } from "react";

function ContactNav() {
  const { language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to toggle `isScrolled`
  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerWidth < 640 ? 10 : 50; // Lower threshold for smaller screens
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    
  }; }, []);

  return (
    <div
      className={`transition-all duration-300 overflow:hidden ${
        isScrolled
          ? "fixed top-0 left-0 xl:w-full w-screen z-50 bg-[#232324fd] text-white shadow-lg"
          : "relative bg-[#104c50e3] text-white"
      }`}
    >
      <div className="mx-1 py-2">
        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col">
            {/* Phone Link */}
            <Link
              to={"tel:+8801919465871"}
              className="flex items-center btn btn-ghost btn-xs"
            >
              <img
                className="xl:w-4 w-3"
                src="https://i.postimg.cc/dtRvr4Hk/phone.gif"
                alt="phone"
              />
              <p className="xl:text-[10px] text-[8px]">+8801919465871</p>
            </Link>

            {/* Email Link */}
            <Link
              to={"mailto:iqraqawmiinstitute@gmail.com"}
              className="flex items-center gap-1 -mt-3 btn btn-ghost btn-xs"
            >
              <img
                className="xl:w-4 w-3"
                src="https://i.postimg.cc/65ZxwYJb/email.gif"
                alt="email"
              />
              <p className="xl:text-[10px] text-[8px]">iqraqawmiinstitute@gmail.com</p>
            </Link>
          </div>

          {/* Navigation Links */}
          <div>
            <ul className="flex xl:gap-2 gap-1">
              <li>
                <a
                  className="btn btn-outline btn-error btn-xs xl:text-[10px] text-[7px]"
                  href={"/contact"}
                >
                  {language === "bn" ? "যোগাযোগ করুন" : "Contact us"}
                </a>
              </li>

              <li>
                <a
                  className="text-white btn btn-xs btn-outline btn-warning xl:text-[10px] text-[7px]"
                  target="_blank"
                  href="https://forms.gle/axmVRr88k5hnSJmd8"
                >
                  {language === "en" ? "Get admitted" : "ভর্তি হন"}
                </a>
              </li>

              {/* Theme Switcher */}
              <div>
                <ThemeSwitcher />
              </div>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ContactNav;
