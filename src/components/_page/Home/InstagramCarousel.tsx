"use client";
import { H2 } from "@/components/_basic";
import { Container, Section } from "@/components/_container";
import { InstagramCarouselCard } from "@/components/_essential";
import {
  certification_instagram,
  certifications_instagram,
  course_instagram,
  training_instagram,
} from "@/utils/images";
import { FC } from "react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const InstagramCaerousel: FC = () => {
  const instagramCarouselCardData = [
    {
      index: "certifications",
      img: certifications_instagram,
      content: "12 months ago",
    },
    {
      index: "training",
      img: training_instagram,
      content: "12 months ago",
    },
    {
      index: "certification",
      img: certification_instagram,
      content: "12 months ago",
    },
    {
      index: "course",
      img: course_instagram,
      content: "12 months ago",
    },
    {
      index: "course1",
      img: course_instagram,
      content: "12 months ago",
    },
    {
      index: "course2",
      img: course_instagram,
      content: "12 months ago",
    },
  ];
  return (
    <Section className="bg-main-dark">
      <Container className="flex-col space-y-14">
        <H2 className="text-white" text="Instagram Carousel here" />

        <Swiper
          breakpoints={{
            1400: {
              slidesPerView: 4,
            },
            1000: {
              slidesPerView: 3,
            },
            630: {
              slidesPerView: 2,
            },
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          slidesPerGroup={1}
          // navigation
          // pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          className="w-full"
        >
          {instagramCarouselCardData.map((item) => (
            <SwiperSlide
              key={item.index}
              className="flex justify-center items-center"
            >
              <InstagramCarouselCard img={item.img} content={item.content} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
};

export default InstagramCaerousel;
