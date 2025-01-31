import { H2 } from "@/components/_basic";
import { Container, Section } from "@/components/_container";
import BenifitCard from "@/components/_essential/BenifitCard";
import {
  benifit_business_img,
  benifit_course_img,
  benifit_tech_img,
} from "@/utils/images";
import { FC } from "react";

const Benifit: FC = () => {
  const benifitData = [
    {
      icon: benifit_course_img,
      title: "Amazing Courses",
      desc: "Learn Classic, Hybrid & Volume lash application along with all the in’s and out’s of everything you need to know about eyelash extensions.",
    },
    {
      icon: benifit_business_img,
      title: "Business Help",
      desc: "Taking it a step further, we teach you how to start and scale your business from business set up, marketing tips, social media strategy and so much more.",
    },
    {
      icon: benifit_tech_img,
      title: "Modern Lash Techniques",
      desc: "We pride ourselves on delivering the most up to date and modern lash techniques, ensuring you leave us feeling 100% confident to kick start your own thriving business.",
    },
  ];
  return (
    <Section className="bg-main-dark">
      <Container className="flex-col justify-center items-center space-y-14">
        <div className="flex flex-col justify-start items-center text-main-light">
          <H2 text="Our Benifit" />
          <p className="text-center opacity-80">
            Learn Classic, Hybrid & Volume lash application along with all the
            in’s and out’s of everything you need to know about eyelash
            extensions.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-5 lg:space-y-0 lg:flex-row lg:space-x-5 lg:items-stretch">
          {benifitData.map((item, index) => (
            <BenifitCard icon={item.icon} title={item.title} desc={item.desc} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Benifit;
