import React from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const VideoSlider = ({ id, title, videos }) => {
    return (
        <section id={id}>
            <h2>{title}</h2>
            <div className='video__slider'>
                <Swiper
                    spaceBetween={15}
                    slidesPerView={4}
                    navigation={true}
                    modules={[Navigation]}
                    className={`mySwiper-${id}`}
                    breakpoints={{
                        600: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        960: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1600: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        }
                    }}
                >
                    {videos.map((video, key) => (
                        <SwiperSlide key={key}>
                            <div className='video'><div className='video__thumb play__icon'>
                                <Link to={`/video/${video.videoId}`}>
                                    <img src={video.img} alt={video.title} /> </Link>
                            </div>
                                <div className='video__text'>
                                    <Link to={`/video/${video.videoId}`}>{video.title}</Link>
                                </div>



                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section >
    )
}

export default VideoSlider