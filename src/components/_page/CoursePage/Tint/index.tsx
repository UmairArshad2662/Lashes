import { Button, H2 } from "@/components/_basic";
import { Container, Section } from "@/components/_container";
import { HelpBox } from "@/components/_essential";
import PaymentCard from "@/components/_essential/Course/PaymentCard";
import CourseInfoMark from "@/components/_essential/CourseInfoMark";
import { payment_img, ultimate_course_img } from "@/utils/images";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const TintCourse: FC = () => {
  const paymentData = [
    {
      icon: payment_img,
      title: "Enrol and Pay in Full",
    },
    {
      icon: payment_img,
      title:
        "Lock in your enrolment with a $300 deposit with the tuition balance due 1 week before you start",
    },
    {
      icon: payment_img,
      title:
        "Lock in your enrolment and pay with Afterpay, Zippy, Humm or Klarna",
    },
  ];
  const helpContentData = [
    {
      title: "Course Units?",
      contentList: [
        "Introduction to Lash Lifts",
        "Lash Health / Lash Growth Cycles",
        "Set Up",
        "Tools and equipment",
        "Lash Lift & Tint products explained",
        "Lash Lift & Tint step by step",
        "Live Lash lift & tint demonstration",
        "Live model practice",
        "Consultation",
        "Patch Testing",
        "Padding and taping",
        "Safety & hygiene",
        "Contraindications",
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
        "Lash Lift & Tint Manual",
        "Perm Solution",
        "Nourishing Solution",
        "Lash Lift Glue",
        "Lash Cleanser",
        "Silicon Rods",
        "Mascara wands",
        "Lipstick Wands",
        "Y Brush",
        "Under eye pads",
      ],
    },
  ];
  return (
    <>
      <Section className="bg-main-dark text-main-light py-20 sm:py-36 overflow-x-hidden">
        <Container className="flex-col justify-center items-start space-y-8 static">
          <h1 className="w-full text-center sm:text-left text-4xl sm:text-6xl font-bold sm:w-[60%]">
            LASH LIFT & TINT COURSE
          </h1>
          <div className="flex flex-col justify-start items-start space-y-2 w-full max-w-[640px] sm:w-[60%]">
            {/* course price */}
            <p>
              <b className="text-[18px]">Course price::</b>{" "}
              <b className="text-xl">$1499</b> all inclusive
            </p>
            <p>
              <b className="text-[18px]">Location:</b> 14 David St Richmond,
              Melbourne 3121
            </p>
            <p>
              <b className="text-[18px]">Duration:</b> 1 Day Course from 10.30am
              - 3.30pm or 12.30pm - 5.30pm
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
          <CourseInfoMark type="LASH LIFT & TINT COURSE" />
          <div className="flex flex-col justify-center items-stretch space-y-3 text-sm lg:text-primary">
            <p>
              Lash lifts & tints are an extremely sought after beauty service
              and are super easy to learn!
            </p>
            <p>
              Whether you want to be a lash lift specialist or are looking to
              add on to your existing beauty / lashbiz - lash lifts are a
              fantastic service to offer.
            </p>
            <p>
              Our comprehensive course will teach you the most up to date and
              modern lash lift & tinting methods.
            </p>
          </div>
        </Container>
      </Section>
      <Section className="bg-main-dark space-y-14">
        <Container className="flex-col space-y-14">
          <div className="flex flex-col justify-start items-center text-main-light">
            <H2 text="Payment Options" />
            <p className="text-center opacity-80">
              Please note if using a buy now/pay later option or our in house
              payment plan option additional fees may apply, contact us for
              further info
            </p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-5 lg:space-y-0 lg:flex-row lg:space-x-5 lg:items-stretch">
            {paymentData.map((item, index) => (
              <PaymentCard key={index} icon={item.icon} title={item.title} />
            ))}
          </div>
        </Container>
      </Section>
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
      <Section className="bg-main-dark space-y-14">
        <Container className="flex-col space-y-14 text-main-light">
          <H2 text="How To Enrol" />
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-14 sm:space-x-14 sm:space-y-0">
            <div className="flex flex-col justify-start items-start space-y-2">
              <p className="text-center sm:text-left">
                Please check our socials or contact us directly to check our
                upcoming course dates & availability.
              </p>
              <p className="text-center sm:text-left">
                Then click “enrol now” via the link on our website and select
                your desired payment option ($300 deposit / Pay Full Amount /
                Pay Balance)
              </p>
              <p className="text-center sm:text-left">
                We will then contact you directly via text with the info you
                need for your course dates.
              </p>
            </div>
            <Button text="Enrol Now" className="w-full sm:w-[180px]" />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default TintCourse;
