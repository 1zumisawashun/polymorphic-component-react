import React, { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "./styles.css";

export const ReactSwiper: React.FC = () => {
  const changeSlide = (index: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const swiperRef = useRef<SwiperRef>(null);

  const slideList = [
    {
      index: 0,
      title: "スライド1",
      imgSrc: "https://picsum.photos/300/200",
      imgAlt: "サンプル画像1",
    },
    {
      index: 1,
      title: "スライド2",
      imgSrc: "https://picsum.photos/300/200/?blur=2",
      imgAlt: "サンプル画像1",
    },
    {
      index: 2,
      title: "スライド3",
      imgSrc: "https://picsum.photos/seed/picsum/300/200",
      imgAlt: "サンプル画像3",
    },
  ];

  return (
    <>
      <Swiper
        ref={swiperRef}
        initialSlide={slideList[0].index}
        slidesPerView={1}
        simulateTouch={false}
      >
        {slideList.map((slideItem) => (
          <SwiperSlide key={slideItem.index}>
            <div>{slideItem.title}</div>
            <img src={slideItem.imgSrc} alt={slideItem.imgAlt} />
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
