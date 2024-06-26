// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



const DSlider = () => {
    return (
        <div className='bg-violet-300'>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log()}
                onSwiper={(swiper) => swiper}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default DSlider;