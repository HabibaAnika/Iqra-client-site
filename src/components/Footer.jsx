import { useLanguage } from "../providers/LanguageProvider";

function Footer() {
  const { language } = useLanguage();

  return (
    <div className="shadow-black shadow-2xl py-6 bg-[url('https://i.postimg.cc/d1QJVdmk/b.jpg')] bg-cover bg-center">
      <footer className="footer max-w-[80%] mx-auto flex flex-col xl:flex-row md:flex-row items-center justify-between">
        <aside className="text-center xl:text-left md:text-left">
          <img
            className="w-20 mx-auto md:mx-0"
            src="https://i.ibb.co.com/YbLDnmN/Artboard-4-4x.png"
            alt=""
          />
          <p className="-mt-2">
            {language === "en"
              ? "IQRA QAWMI INSTITUTE"
              : "ইক্বরা কওমি ইনস্টিটিউট"}
            <br />
            {language === "en"
              ? "Providing reliable teacher since 2023"
              : "2023 সাল থেকে নির্ভরযোগ্য শিক্ষা প্রদান করা হচ্ছে"}
          </p>
          <nav className="flex flex-col xl:flex-row md:flex-row items-center xl:mx-0 md:mx-0 mx-auto gap-5">
            <div>
              <h6 className="footer-title">
                {language === "en" ? "Follow us" : "ফলো করুন"}
              </h6>
              <div className="grid grid-flow-col gap-4">
                <a
                  target="_blank"
                  href={"https://www.facebook.com/iqraqawmiinstitute/"}
                >
                  <img
                    className="w-7"
                    src="https://i.ibb.co.com/z7rndMm/facebook.png"
                    alt=""
                  />
                </a>
                <a target="_blank" href="https://www.instagram.com/iqraqawmi">
                  <img
                    className="w-7"
                    src="https://i.ibb.co.com/wQd363D/instagram.png"
                    alt=""
                  />
                </a>
                <a
                  target="_blank"
                  href="https://whatsapp.com/channel/0029VazsvgPDuMRXQgMd8j0e"
                >
                  <img
                    className="w-9 -mt-1"
                    src="https://i.ibb.co.com/F3rrrkv/icons8-whatsapp-48.png"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div>
              <h6 className="footer-title mb-0">
                {language === "en" ? "Please Subscribe" : "সাবস্ক্রাইব করুন"}
              </h6>
              <div className="grid grid-flow-col">
                <a
                  target="_blank"
                  href={
                    "https://www.youtube.com/channel/UC9zJ98THY5Y4n80kcXZDwsg"
                  }
                >
                  <img
                    className="w-10"
                    src="https://i.ibb.co.com/5L4pbvn/youtube.png"
                    alt=""
                  />
                </a>
                <a target="_blank" href="https://t.me/+VFF2fsr8g4I0YmNl">
                  <img
                    className="w-[35px] mt-1"
                    src="https://i.ibb.co.com/zf1DJV3/icons8-telegram-94.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </nav>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
