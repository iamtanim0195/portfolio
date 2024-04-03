'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Keyboard, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function Slider({ data }) {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Keyboard, Pagination, Navigation]}
                className="mySwiper"
                breakpoints={
                    {
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 5,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 5,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 5,
                        },
                    }
                }
            >
                {data.map((service, index) => (
                    <SwiperSlide key={index}>
                        <Image src={service.image.url} alt={service.name} width={200} height={200} />
                        <p className='text-sm text-red-600'>Name: {service.name}</p>
                        <p className='text-sm text-red-600'>Charge:{service.charge}</p>
                        <p className='text-sm text-red-600'> {service.desc}</p>                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
