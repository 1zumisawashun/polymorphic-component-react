import React, { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import { slideList } from "../../functions/constants/swiperItem";

export const ReactSwiper: React.FC = () => {
  const changeSlide = (index: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const swiperRef = useRef<SwiperRef>(null);

  return (
    <>
      <Swiper
        ref={swiperRef}
        initialSlide={slideList[0].index}
        slidesPerView={3}
        simulateTouch={false}
      >
        {slideList.map((slideItem) => (
          <SwiperSlide key={slideItem.index}>
            <img src={slideItem.imgSrc} alt={slideItem.imgAlt} height={300} />
          </SwiperSlide>
        ))}
      </Swiper>
      {slideList.map((slideItem) => (
        <div key={slideItem.index}>
          <button onClick={() => changeSlide(slideItem.index)}>
            {slideItem.title}へ移動
          </button>
        </div>
      ))}
    </>
  );
};
