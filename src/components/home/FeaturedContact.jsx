import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function FeaturedContact() {
  return (
    <div className="relative bg-[url('contact.jpg')] bg-no-repeat bg-cover bg-center py-28">
      

      <div className="max-w-[80%] mx-auto relative z-10">
        <div className="flex xl:flex-row items-center justify-center gap-10 flex-col-reverse">
          <motion.div
            className=""
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
            viewport={{ once: false }}
          >
            <div className="w-72 xl:w-96 md:w-96 mx-auto bg-[#d3dbe2d0] rounded-lg shadow-xl text-center mb-4 py-5 transform transition-transform duration-300 hover:animate-infinity">
              <Link to={"https://wa.me/message/RCTHVDUIYROZB1"}>
                <img
                  className="bg-transparent mx-auto"
                  src="https://i.postimg.cc/RCQbTymB/whatsapp.gif"
                  alt=""
                />
                <p>Whatsapp</p>
              </Link>
            </div>
            <div className="w-72 xl:w-96 md:w-96 mx-auto bg-[#d3dbe2d0] rounded-lg shadow-xl text-center mb-4 py-5 transform transition-transform duration-300 hover:animate-infinity">
              <Link to={"m.me/105080832514455"}>
                <img
                  className="bg-transparent mx-auto"
                  src="https://i.postimg.cc/1XN2m5TV/messenger.gif"
                  alt=""
                />
                <p>Messenger</p>
              </Link>
            </div>
            <div className="w-72 xl:w-96 md:w-96 mx-auto bg-[#d3dbe2d0] rounded-lg shadow-xl text-center mb-4 py-5 transform transition-transform duration-300 hover:animate-infinity">
              <Link to={"https://t.me/+VFF2fsr8g4I0YmNl"}>
                <img
                  className="bg-transparent mx-auto"
                  src="https://i.postimg.cc/ZqBMFqb7/telegram.gif"
                  alt=""
                />
                <p>Telegram</p>
              </Link>
            </div>
            <div className="w-72 xl:w-96 md:w-96 mx-auto bg-[#d3dbe2d0] rounded-lg shadow-xl text-center py-5 transform transition-transform duration-300 hover:animate-infinity">
              <Link to={"tel:+8801919465871"}>
                <img
                  className="bg-transparent mx-auto"
                  src="https://i.postimg.cc/dtRvr4Hk/phone.gif"
                  alt=""
                />
                <p>Phone</p>
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="lg:w-[35%] md:w-[60%]"
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
            viewport={{ once: false }}
          >
            <img
              className="rounded-lg w-full"
              src="https://i.postimg.cc/NMDkBdSW/contact-us.png"
              alt="Contact"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedContact;
