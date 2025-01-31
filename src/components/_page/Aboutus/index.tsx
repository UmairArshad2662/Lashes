import { Button, H2 } from "@/components/_basic";
import { Container, Section } from "@/components/_container";
import StoryCard from "@/components/_essential/StoryCard";
import { story_img, ultimate_course_img } from "@/utils/images";
import Image from "next/image";
import { FC } from "react";

const AboutUs: FC = () => {
  const storyData = [
    {
      img: story_img,
      title: "Lorem Ipsum is simply dummy text",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      date: "July 1, 2024",
    },
    {
      img: story_img,
      title: "Lorem Ipsum is simply dummy text",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      date: "March 10, 2023",
    },
    {
      img: story_img,
      title: "Lorem Ipsum is simply dummy text",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      date: "November 2, 2021",
    },
    {
      img: story_img,
      title: "Lorem Ipsum is simply dummy text",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      date: "July 15, 2019",
    },
    {
      img: story_img,
      title: "Lorem Ipsum is simply dummy text",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      date: "April 1, 2018",
    },
    {
      img: story_img,
      title: "Lorem Ipsum is simply dummy text",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      date: "January 20, 2017",
    },
    {
      img: story_img,
      title: "Lorem Ipsum is simply dummy text",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      date: "September 5, 2015",
    },
    {
      img: story_img,
      title: "Lorem Ipsum is simply dummy text",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      date: "June 10, 2014",
    },
  ];
  return (
    <>
      <Section className="bg-main-dark text-main-light py-20 sm:py-36 overflow-x-hidden">
        <Container className="flex-col justify-center items-start space-y-8 static">
          <h1 className="w-full text-center sm:text-left text-4xl sm:text-6xl font-bold sm:w-[60%]">
            About Us
          </h1>
          <div className="flex flex-col justify-start items-start space-y-2 w-full max-w-[640px] sm:w-[60%]">
            {/* course price */}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <Button
            text="Book Your Training"
            className="w-full sm:w-[180px] font-semibold"
          />
          <div className="hidden rounded-bl-3xl sm:inline bg-course-square-board w-[40%] h-[670px] fixed top-0 right-0"></div>
          <Image
            alt="course cover"
            src={ultimate_course_img.src}
            width={ultimate_course_img.width}
            height={ultimate_course_img.height}
            className="hidden sm:inline absolute 2xl:right-24 bottom-0 sm:w-[560px] sm:right-0 xl:w-[640px] 2xl:w-[720px]"
          />
        </Container>
      </Section>
      <Section>
        <Container className="flex-col space-y-14">
          <div className="flex flex-col justify-start items-center text-main-dark">
            <H2 text="Our Story" />
            <p className="text-center opacity-80">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </p>
          </div>

          {/* story area */}
          <div className="bg-story-bg flex flex-col justify-center items-center space-y-0">
            {storyData.map((item, index) => (
              <StoryCard
                type={`${Number(index) % 2 ? "even" : "odd"}`}
                img={item.img}
                title={item.title}
                date={item.date}
                content={item.content}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default AboutUs;
