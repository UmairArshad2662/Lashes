import { Button } from "@/components/_basic";
import { Container, Section } from "@/components/_container";
import CourseInfoMark from "@/components/_essential/CourseInfoMark";
import { ultimate_course_img } from "@/utils/images";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Benifit from "./Benifit";
import { HelpBox, PaymentOption } from "@/components/_essential";

const UltimateCourse: FC = () => {
  const helpContentData = [
    {
      title: "Course Units?",
      contentList: [
        "Intro to eyelash extensions",
        "Classic, Hybrid & Volume application",
        "Live model practice",
        "Lash growth cycles",
        "Lash health",
        "Lash volumes explained",
        "Curls and thicknesses",
        "Start up and general costs",
        "Set up",
        "Tools and equipment",
        "Eye shapes",
        "Consultation",
        "Tweezers",
        "Mapping & styling",
        "Cleansing",
        "Padding",
        " Taping tricks",
        "Everything to know about lash adhesive",
        "Everything to know about application",
        "Patch testing",
        "Refills",
        "Safety and contraindications",
        "Retention",
        "Trouble shooting",
        "After care",
        "Pricing",
        "Photography",
        "Growing your clientele",
        "How to build your social media",
        "Secrets to the lash industry",
        "Taxes & GST",
        "Business set up",
      ],
    },
    {
      title: "What’s included in your starter pack?",
      contentList: [
        "100 page Modern Lash Training manual",
        "Classic lashes",
        "Volume lashes",
        "Professional eyelash extension tweezers",
        "Modern Lash Glue",
        "Modern Lash Primer",
        "Modern Lash Bonder",
        "Modern Lash Remover",
        "Lash Tile",
        "Jade stone",
        "Under eye pads",
        "Mascara wands",
        "Lip wands",
        "Air puffer",
        "Adhesive stickers",
        "Tape",
      ],
    },
  ];
  return (
    <>
      <Section className="bg-main-dark text-main-light py-20 sm:py-36 overflow-x-hidden">
        <Container className="flex-col justify-center items-start space-y-8 static">
          <h1 className="w-full text-center sm:text-left text-4xl sm:text-6xl font-bold sm:w-[60%]">
            ULTIMATE LASH COURSE
          </h1>
          <div className="flex flex-col justify-start items-start space-y-2 w-full max-w-[640px] sm:w-[60%]">
            {/* course price */}
            <div className="flex flex-col justify-start items-start space-y-2">
              <span className="font-semibold text-[18px]">Course price:</span>
              <ul className="list-disc ml-6">
                <li>
                  Small Group <b className="text-xl">$1499</b> all inclusive
                </li>
                <li>
                  Private 1 on 1 <b className="text-xl">$1999</b> all inclusive
                </li>
              </ul>
            </div>
            <p>
              <b className="text-[18px]">Location:</b> 14 David St Richmond,
              Melbourne
            </p>
            <p>
              <b className="text-[18px]">Prerequisites:</b> No prerequisite
              required. Parental consent needed if under 18.
            </p>
            <p>
              <b className="text-[18px]">Dates:</b> Courses run frequently every
              month. Check our{" "}
              <Link href={""} className="text-link underline italic">
                social media
              </Link>{" "}
              or{" "}
              <Link href={""} className="text-link underline italic">
                contact us
              </Link>{" "}
              directly for our upcoming course dates.
            </p>
          </div>
          <Button
            text="Enrol Now"
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
        <Container className="justify-center items-center flex-col space-y-4 lg:flex-row lg:space-x-12">
          <CourseInfoMark type="ULTIMATE LASH COURSE" />
          <div className="flex flex-col justify-center items-stretch space-y-3 text-sm lg:text-primary">
            <p>
              Learn Classic, Hybrid & Volume lash application along with all the
              in’s and out’s of everything you need to know about eyelash
              extensions.
            </p>
            <p>
              Taking it a step further, we teach you how to start and scale your
              business from business set up, marketing tips, social media
              strategy and so much more.
            </p>
            <p>
              We pride ourselves on delivering the most up to date and modern
              lash techniques, ensuring you leave us feeling 100% confident to
              kick start your own thriving business.
            </p>
            <p>
              Class sizes are kept small to ensure you get more then enough 1 on
              1 time with your lash trainer.
            </p>
            <p>
              For those who wish to learn in a more intimate setting with just
              yourself and your trainer - we offer 1 on 1 private courses.
              <br /> Both our 1:1 private course and small group course are
              identical. <br /> The only difference being with our 1:1 course
              you can choose from flexible dates. Additional fees apply, please
              contact us directly to discuss further.
            </p>
            <p>
              As a student of Modern Lash Training, it is our #1 priority to
              make sure you succeed.
            </p>
            <div>
              <p>
                That’s why we have these amazing inclusions all within the
                course price:
              </p>
              <ul className="list-disc ml-6">
                <li>Receive a full starter kit included</li>
                <li>
                  Life long support. Message us anytime if you ever need help or
                  have any questions throughout the entirety of your lashing
                  career!
                </li>
                <li>
                  Further in person training FREE of charge *Terms & Conditions
                  Apply*
                </li>
                <li>Receive your certificate upon completion</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
      <Benifit />
      <Section>
        <Container className="flex-col space-y-9">
          {helpContentData.map((item, index) => (
            <HelpBox
              key={index}
              title={item.title}
              contentList={item.contentList}
            />
          ))}
        </Container>
      </Section>
      <PaymentOption />
    </>
  );
};

export default UltimateCourse;
