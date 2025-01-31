import { Button } from "@/components/_basic";
import Input from "@/components/_basic/Input";
import Textarea from "@/components/_basic/Textarea";
import { ContactSocialIcon } from "@/components/_basic/icon";
import { Container, Section } from "@/components/_container";
import { contact_map_img } from "@/utils/images";
import Image from "next/image";
import { FC } from "react";

interface SocialPropsType {
  icon: "facebook" | "twitter" | "linkedin";
}

const Social: FC<SocialPropsType> = ({ icon }) => {
  return (
    <div className="bg-ipt-bg border border-ipt-border rounded-md p-4 flex justify-center items-center">
      {ContactSocialIcon[icon]}
    </div>
  );
};

const ContactUs: FC = () => {
  return (
    <>
      <Section className="bg-contactusCover text-main-dark py-20 sm:py-36 overflow-x-hidden bg-cover">
        <Container className="flex-col justify-center items-start space-y-8 static">
          <h1 className="w-full text-center sm:text-left text-4xl sm:text-6xl font-bold sm:w-[60%]">
            Contact Us
          </h1>
          <div className="flex flex-col justify-start items-start space-y-2 w-full max-w-[640px] sm:w-[60%]">
            {/* course price */}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <Button
            text="Contact Now"
            className="w-full sm:w-[180px] font-semibold"
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="flex flex-col justify-start items-start space-y-4 bg-blog-bg border border-blog-border rounded-xl p-4 mx-auto lg:flex-row lg:space-y-0 lg:space-x-8 lg:p-8">
            <div className="w-full flex flex-col justify-start items-stretch space-y-2">
              <div className="flex flex-col 4m:flex-row justify-center items-center space-y-2 4m:space-y-0 4m:space-x-2">
                <div className="flex flex-col justify-start items-start space-y-2 w-full">
                  <span className="text-main-text">Full Name</span>
                  <Input placeholder="Enter your name" className="w-full" />
                </div>
                <div className="flex flex-col justify-start items-start space-y-2 w-full">
                  <span className="text-main-text">Email</span>
                  <Input placeholder="Enter your email" className="w-full" />
                </div>
              </div>
              <div className="flex flex-col justify-start items-start space-y-2 w-full">
                <span className="text-main-text">Phone Number</span>
                <Input placeholder="Enter your number" className="w-full" />
              </div>
              <div className="flex flex-col justify-start items-start space-y-2 w-full">
                <span className="text-main-text">Message</span>
                <Textarea placeholder="Enter your number" className="w-full" />
                <p className="w-full text-right">Max 250 Chars</p>
              </div>
              <Button text="Send Message" />
            </div>
            <div className="w-full flex flex-col justify-stretch items-stretch space-y-4">
              <Image
                alt="google map"
                src={contact_map_img.src}
                width={contact_map_img.width}
                height={contact_map_img.height}
                className="rounded-lg"
              />
              <div className="flex justify-end items-center space-x-3">
                <Social icon="facebook" />
                <Social icon="twitter" />
                <Social icon="linkedin" />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ContactUs;
