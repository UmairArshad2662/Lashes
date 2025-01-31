"use client";

import { H2 } from "@/components/_basic";
import { ControlButton } from "@/components/_basic/Button";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/_basic/icon";
import { Container, Section } from "@/components/_container";
import { CourseCard, ReviewCard } from "@/components/_essential";
import { courseCoverData } from "@/utils/data";
import { reviewer } from "@/utils/images";
import { FC, useRef } from "react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Reviews: FC = () => {
  const reviewSwiperNavigationPrevRef = useRef(null);
  const reviewSwiperNavigationNextRef = useRef(null);

  const reviewData = [
    {
      text: "Best teacher ever!!! <br />I did the lash extension course and lash lift course with her and her training skills are amazing. There was no rush and I was learning in a quiet and great environment. It was my dream to become a lash artist and Jessica helped me to achieve that. Thanks Jessica for teaching me the best skill and helping me when I needed you xx",
      reviewer: {
        name: "Jennifer Anderson",
        img: reviewer,
      },
      rate: 5,
    },
    {
      text: "Best teacher ever!!! <br />I did the lash extension course and lash lift course with her and her training skills are amazing. There was no rush and I was learning in a quiet and great environment. It was my dream to become a lash artist and Jessica helped me to achieve that. Thanks Jessica for teaching me the best skill and helping me when I needed you xx",
      reviewer: {
        name: "Jennifer Anderson",
        img: reviewer,
      },
      rate: 4,
    },
    {
      text: "Best teacher ever!!! <br />I did the lash extension course and lash lift course with her and her training skills are amazing. There was no rush and I was learning in a quiet and great environment. It was my dream to become a lash artist and Jessica helped me to achieve that. Thanks Jessica for teaching me the best skill and helping me when I needed you xx",
      reviewer: {
        name: "Jennifer Anderson",
        img: reviewer,
      },
      rate: 3,
    },
    {
      text: "Best teacher ever!!! <br />I did the lash extension course and lash lift course with her and her training skills are amazing. There was no rush and I was learning in a quiet and great environment. It was my dream to become a lash artist and Jessica helped me to achieve that. Thanks Jessica for teaching me the best skill and helping me when I needed you xx",
      reviewer: {
        name: "Jennifer Anderson",
        img: reviewer,
      },
      rate: 5,
    },
    {
      text: "Best teacher ever!!! <br />I did the lash extension course and lash lift course with her and her training skills are amazing. There was no rush and I was learning in a quiet and great environment. It was my dream to become a lash artist and Jessica helped me to achieve that. Thanks Jessica for teaching me the best skill and helping me when I needed you xx",
      reviewer: {
        name: "Jennifer Anderson",
        img: reviewer,
      },
      rate: 5,
    },
  ];
  return (
    <Section className="bg-main-dark">
      <Container className="flex-col justify-start items-center space-y-14">
        <div className="flex flex-col justify-start items-center text-main-light">
          <H2 text="Student Testimonials" />
          <p className="text-center opacity-80">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            everyday.
          </p>
        </div>
        {/* review area */}
        <Swiper
          breakpoints={{
            1050: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          navigation={{
            prevEl: reviewSwiperNavigationPrevRef.current,
            nextEl: reviewSwiperNavigationNextRef.current,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          className="w-full review-swiper"
        >
          {reviewData.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <ReviewCard
                text={item.text}
                reviewer={item.reviewer}
                rate={item.rate}
              />
            </SwiperSlide>
          ))}
          <div className="flex justify-center items-center w-full mt-8 space-x-16 relative z-10">
            <ControlButton ref={reviewSwiperNavigationPrevRef}>
              <ArrowLeftIcon />
            </ControlButton>
            <ControlButton ref={reviewSwiperNavigationNextRef}>
              <ArrowRightIcon />
            </ControlButton>
          </div>
        </Swiper>
        <H2 className="text-main-light" text="Enrol Your Course" />

        <Container className="justify-center gap-8 flex-wrap max-[1260px]:max-w-[600px]">
          {courseCoverData.map((course, index) => (
            <CourseCard
              key={index}
              bgImg={course.background}
              title={course.title}
              price={course.price}
              description={course.description}
            />
          ))}
        </Container>
      </Container>
    </Section>
  );
};

export default Reviews;
