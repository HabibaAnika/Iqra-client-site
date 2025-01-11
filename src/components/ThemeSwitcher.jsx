import { useState, useEffect } from "react";
import { useLanguage } from "../providers/LanguageProvider";

const ThemeSwitcher = () => {
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  //

  const themeTranslations = {
    light: "লাইট",
    dark: "ডার্ক",
    cupcake: "কাপকেক",
    bumblebee: "বাম্বলবি",
    emerald: "পান্না",
    corporate: "কর্পোরেট",
    synthwave: "সিন্থওয়েভ",
    retro: "রেট্রো",
    cyberpunk: "সাইবারপাংক",
    valentine: "ভ্যালেন্টাইন",
    halloween: "হ্যালোইন",
    garden: "বাগান",
    forest: "বন",
    aqua: "জল",
    lofi: "লোফাই",
    pastel: "প্যাস্টেল",
    fantasy: "ফ্যান্টাসি",
    wireframe: "ওয়্যারফ্রেম",
    black: "কালো",
    luxury: "লাক্সারি",
    dracula: "ড্রাকুলা",
    cmyk: "সিএমওয়াইকে",
    autumn: "শরৎ",
    business: "ব্যবসা",
    acid: "অ্যাসিড",
    lemonade: "লেমোনেড",
    night: "রাত",
    coffee: "কফি",
    winter: "শীত",
    dim: "ম্লান",
    nord: "নর্ড",
    sunset: "সানসেট",
  };

  const [currentTheme, setCurrentTheme] = useState("light");
  const { language } = useLanguage();

  // Load the saved theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
      setCurrentTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  // Handle theme change
  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("selectedTheme", theme);
  };

  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-outline btn-success btn-xs xl:text-[10px] text-[7px]">
        {language === "en"
          ? `${currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1)}`
          : themeTranslations[currentTheme]}
      </label>
      <ul className="absolute dropdown-content z-50 menu shadow bg-base-100 rounded-box max-h-[280px] w-[250px] right-0 top-32 text-[10px]">
        {themes.map((theme, index) => (
          <li key={index}>
            <button
              className={`capitalize w-20 px-2 py-1 btn-xs rounded ${
                currentTheme === theme ? "bg-[#000] text-white" : ""
              }`}
              onClick={() => handleThemeChange(theme)}
            >
              {language === "en" ? theme.charAt(0).toUpperCase() + theme.slice(1) : themeTranslations[theme]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSwitcher;
