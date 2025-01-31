"use client";

import { Button } from "@/components/_basic";
import Container from "@/components/_container/Container";
import Section from "@/components/_container/Section";
import { CourseCard } from "@/components/_essential";
import FAQ from "@/components/_essential/Faq";
import CEOIntroSection from "@/components/_page/Home/CeoIntro";
import InstagramCaerousel from "@/components/_page/Home/InstagramCarousel";
import Reviews from "@/components/_page/Home/Review";
import Blog from "@/components/_page/Home/blog";
import { courseCoverData } from "@/utils/data";
import { trainerImg } from "@/utils/images";
import Image from "next/image";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Section className=" bg-main-dark text-white overflow-x-hidden">
        <Container className="flex-col items-start space-y-11 max-sm:items-center">
          <Image
            alt="trainer image"
            src={trainerImg.src}
            width={trainerImg.width}
            height={trainerImg.height}
            className="absolute bottom-0 right-0 max-lg:w-[400px] z-30 max-md:w-[320px] max-[640px]:hidden"
          />
          <div className="flex flex-col justify-start items-center">
            <h2 className="text-[108px] font-bold uppercase leading-[110px] max-md:text-[98px] max-[530px]:text-[64px] max-[530px]:leading-[80px] max-3m:text-[50px] max-3m:leading-[60px] max-sm:text-center -mt-4 font-abhaya-libre">
              Change
              <br />{" "}
              <span className="font-bebas-neue text-[128px] leading-[76%] tracking-[0.04em]">
                Your Life
              </span>
            </h2>
            <span className="text-[34px] font-semibold max-md:text-2xl max-4m:font-normal max-4m:text-center max-4m:text-xl font-abhaya-libre">
              Your dream career starts today.
            </span>
            <Button className="py-2 px-6">
              <span className="font-bebas-neue text-2xl uppercase">
                Enrol now
              </span>
            </Button>
          </div>

          <Swiper
            breakpoints={{
              1492: {
                slidesPerView: 4,
              },
              1124: {
                slidesPerView: 3,
              },
              762: {
                slidesPerView: 2,
              },
            }}
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              Autoplay,
              Autoplay,
            ]}
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop
            // navigation
            // pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="w-[80%] main-course-carousel flex max-sm:w-full max-sm:justify-center"
          >
            {courseCoverData.map((course, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center"
              >
                <CourseCard
                  bgImg={course.background}
                  title={course.title}
                  price={course.price}
                  description={course.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Section>
      <CEOIntroSection />
      <InstagramCaerousel />
      <Blog />
      <Reviews />
    </main>
  );
}
