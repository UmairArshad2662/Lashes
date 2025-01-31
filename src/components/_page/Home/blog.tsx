"use client";

import { H2 } from "@/components/_basic";
import { Container, Section } from "@/components/_container";
import { BlogCard } from "@/components/_essential";
import { blog_img1, blog_img2, blog_img3 } from "@/utils/images";
import { FC } from "react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Blog: FC = () => {
  const blogData = [
    {
      coverImg: blog_img1,
      subtitle: "Lorem Ipsum",
      title: "How to Get Thicker Eyelashes?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      poster: {
        name: "Emily Anna",
        date: "23/05/2023 - 5 mins",
      },
    },
    {
      coverImg: blog_img2,
      subtitle: "Lorem Ipsum",
      title: "How to Get Thicker Eyelashes?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      poster: {
        name: "Emily Anna",
        date: "23/05/2023 - 5 mins",
      },
    },
    {
      coverImg: blog_img3,
      subtitle: "Lorem Ipsum",
      title: "How to Get Thicker Eyelashes?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      poster: {
        name: "Emily Anna",
        date: "23/05/2023 - 5 mins",
      },
    },
    {
      coverImg: blog_img3,
      subtitle: "Lorem Ipsum",
      title: "How to Get Thicker Eyelashes?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      poster: {
        name: "Emily Anna",
        date: "23/05/2023 - 5 mins",
      },
    },
    {
      coverImg: blog_img3,
      subtitle: "Lorem Ipsum",
      title: "How to Get Thicker Eyelashes?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      poster: {
        name: "Emily Anna",
        date: "23/05/2023 - 5 mins",
      },
    },
  ];
  return (
    <Section>
      <Container className="flex-col space-y-14">
        <div className="flex flex-col justify-start items-center text-main-text">
          <H2 text="Our Blog" />
          <p className="text-center">
            Our blog is a Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text everyday.
          </p>
        </div>
        <Swiper
          breakpoints={{
            1280: {
              slidesPerView: 3,
            },
            840: {
              slidesPerView: 2,
            },
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          // navigation
          // pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          className="w-full"
        >
          {blogData.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <BlogCard
                coverImg={item.coverImg}
                title={item.title}
                subtitle={item.subtitle}
                desc={item.desc}
                poster={item.poster}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
};

export default Blog;
