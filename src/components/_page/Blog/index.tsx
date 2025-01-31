import { Container, Section } from "@/components/_container";
import { FC } from "react";
import BlogSearch from "./_components/BlogSearch";
import { blog_img1, blog_img2, blog_img3 } from "@/utils/images";
import { BlogCard } from "@/components/_essential";
import { FireIcon } from "@/components/_basic/icon";
import PopularBlogCard from "@/components/_essential/PopularBlogCard";

const Blog: FC = () => {
  const blogData = [
    {
      coverImg: blog_img1,
      subtitle: "Lorem Ipsum",
      title: "How to Get Thicker Eyelashes?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      poster: {
        name: "Emily Anna",
        date: "23 Day 2023 - 5 mins",
      },
    },
    {
      coverImg: blog_img2,
      subtitle: "Lorem Ipsum",
      title: "How to Get Thicker Eyelashes?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      poster: {
        name: "Emily Anna",
        date: "23 Day 2023 - 5 mins",
      },
    },
    {
      coverImg: blog_img3,
      subtitle: "Lorem Ipsum",
      title: "How to Get Thicker Eyelashes?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      poster: {
        name: "Emily Anna",
        date: "23 Day 2023 - 5 mins",
      },
    },
    {
      coverImg: blog_img3,
      subtitle: "Lorem Ipsum",
      title: "How to Get Thicker Eyelashes?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      poster: {
        name: "Emily Anna",
        date: "23 Day 2023 - 5 mins",
      },
    },
    {
      coverImg: blog_img3,
      subtitle: "Lorem Ipsum",
      title: "How to Get Thicker Eyelashes?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      poster: {
        name: "Emily Anna",
        date: "23 Day 2023 - 5 mins",
      },
    },
  ];

  return (
    <>
      <Section className="bg-blog-page-bg bg-no-repeat bg-cover h-[80vh] bg-center before:bg-[#00000079] before:w-full before:h-full before:absolute before:top-0 before:left-0">
        <Container className="justify-start">
          <div className="w-full sm:w-[524px] text-white flex flex-col space-y-9">
            <h1 className="text-center sm:text-left text-4xl sm:text-6xl font-bold">
              Our Blogs
            </h1>
            <p className="text-center sm:text-left text-mobile-primary sm:text-primary opacity-80">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </Container>
        <BlogSearch />
      </Section>
      <Section>
        <Container className="relative flex-col-reverse lg:flex-row justify-between items-start lg:space-x-4">
          {/* main blog */}
          <div className="w-full max-w-[920px] flex flex-col justify-start items-start space-y-2 lg:pr-4 lg:border-r border-blog-border mt-4 lg:mt-0">
            <h2 className="text-center sm:text-left w-full text-2xl">
              Read Our Blogs
            </h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              {blogData.map((item, index) => (
                <BlogCard
                  key={index}
                  coverImg={item.coverImg}
                  title={item.title}
                  subtitle={item.subtitle}
                  desc={item.desc}
                  poster={item.poster}
                  readable
                />
              ))}
            </div>
          </div>
          {/* popular and newest blogs */}
          <div className="sticky top-28 left-0 flex flex-col w-full sm:w-auto sm:flex-row lg:flex-col justify-start items-start  space-y-4 sm:space-x-4 sm:space-y-0 lg:space-x-0 lg:space-y-4">
            <div className="w-full flex flex-col justify-start items-start space-y-2">
              <p className="text-primary font-semibold flex justify-start items-center">
                <FireIcon /> Newest Blogs
              </p>
              <div className="w-full flex flex-col justify-start items-start space-y-2">
                {blogData.map((item, index) => (
                  <PopularBlogCard
                    key={index}
                    coverImg={item.coverImg}
                    title={item.title}
                    subtitle={item.subtitle}
                    desc={item.desc}
                  />
                ))}
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start space-y-2">
              <p className="text-primary font-semibold flex justify-start items-center">
                <FireIcon /> Popular Blogs
              </p>
              <div className="w-full flex flex-col justify-start items-start space-y-2">
                {blogData.map((item, index) => (
                  <PopularBlogCard
                    key={index}
                    coverImg={item.coverImg}
                    title={item.title}
                    subtitle={item.subtitle}
                    desc={item.desc}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Blog;
