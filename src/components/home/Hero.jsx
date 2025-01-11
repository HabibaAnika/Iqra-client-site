// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Hero() {
  return (
    <div className="h-full w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full w-full"
      >
        <SwiperSlide><img src="https://i.postimg.cc/B6h4L6Mh/b-1.jpg" alt="banner-1" /></SwiperSlide>
        <SwiperSlide><img src="https://i.postimg.cc/x8cYK2Z9/b-2.jpg" alt="banner-2" /></SwiperSlide>
        <SwiperSlide><img src="https://i.postimg.cc/g2vpy4gL/b-3.jpg" alt="banner-3" /></SwiperSlide>
        <SwiperSlide><img src="https://i.postimg.cc/63QNXKtC/b-4.jpg" alt="banner-4" /></SwiperSlide>
        <SwiperSlide><img src="https://i.postimg.cc/mZJW0KqF/b-5.jpg" alt="banner-5" /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Hero;
