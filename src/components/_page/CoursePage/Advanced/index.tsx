import { Button } from "@/components/_basic";
import { Container, Section } from "@/components/_container";
import { PaymentOption } from "@/components/_essential";
import CourseInfoMark from "@/components/_essential/CourseInfoMark";
import { ultimate_course_img } from "@/utils/images";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const AdvancedCourse: FC = () => {
  return (
    <>
      <Section className="bg-main-dark text-main-light py-20 sm:py-36 overflow-x-hidden">
        <Container className="flex-col justify-center items-start space-y-8 static">
          <h1 className="w-full text-center sm:text-left text-4xl sm:text-6xl font-bold sm:w-[60%] uppercase">
            ADVANCED LASH STYLING COURSE
          </h1>
          <div className="flex flex-col justify-start items-start space-y-2 w-full max-w-[640px] sm:w-[60%]">
            {/* course price */}
            {/* <div className="flex flex-col justify-start items-start space-y-2">               */}
            <p>
              <b className="text-[18px]">Course price::</b>{" "}
              <b className="text-xl">$1499</b> all inclusive
            </p>
            <p>
              <b className="text-[18px]">Location:</b> 14 David St Richmond,
              Melbourne 3121
            </p>
            <p>
              <b className="text-[18px]">Duration:</b> 1 Day Course from 10am -
              5.30pm
            </p>
            <div className="flex flex-col justify-start items-start space-y-2">
              <span className="font-semibold text-[18px]">Prerequisites:</span>
              <ul className="list-disc ml-6">
                <li>
                  This course requires you to have successfully finished a
                  previous lash course either with us or with another lash
                  training provider.
                </li>
                <li>
                  You must have proficient existing knowledge and experienced in
                  doing eyelash extensions.
                </li>
                <li>
                  If you are not sure if you are experienced enough, please
                  contact us to discuss further.
                </li>
              </ul>
            </div>
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
          <CourseInfoMark type="ADVANCED LASH STYLING COURSE" />
          <div className="flex flex-col justify-center items-stretch space-y-3 text-sm lg:text-primary">
            <div className="flex flex-col justify-start items-start space-y-2">
              <span className="font-semibold text-[18px]">You will learn</span>
              <ul className="list-disc ml-6">
                <li>Wispy Sets</li>
                <li>Wet Sets</li>
                <li>Advanced mapping techniques</li>
                <li>The pinching method</li>
                <li>The flower bouquet method</li>
                <li>Layering</li>
                <li>Mixing curls</li>
              </ul>
            </div>
            <div className="flex flex-col justify-start items-start space-y-2">
              <span className="font-semibold text-[18px]">You will learn</span>
              <ul className="list-disc ml-6">
                <li>Advanced styling kit</li>
                <li>Certificate upon completion</li>
                <li>Life long support</li>
              </ul>
            </div>
            <div>
              <p>
                For those who wish to learn in a more intimate setting with just
                yourself and your trainer - we offer 1 on 1 private courses.
              </p>
              <p>
                Both our 1:1 private course and small group course are
                identical.
              </p>
              <p>
                The only difference being with our 1:1 course you can choose
                from flexible dates. Additional fees apply, please contact us
                directly to discuss further.
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <PaymentOption />
    </>
  );
};

export default AdvancedCourse;
