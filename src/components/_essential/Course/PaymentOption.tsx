import { Button, H2 } from "@/components/_basic";
import { Container, Section } from "@/components/_container";
import { FC } from "react";
import PaymentCard from "./PaymentCard";
import { payment_img } from "@/utils/images";

const PaymentOption: FC = () => {
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

  return (
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
      <Container className="flex-col space-y-14 text-main-light">
        <H2 text="How To Enrol" />
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-14 sm:space-x-14 sm:space-y-0">
          <div className="flex flex-col justify-start items-start space-y-2">
            <p className="text-center sm:text-left">
              Please check our socials or contact us directly to check our
              upcoming course dates & availability.
            </p>
            <p className="text-center sm:text-left">
              Then click “enrol now” via the link on our website and select your
              desired payment option ($300 deposit / Pay Full Amount / Pay
              Balance)
            </p>
            <p className="text-center sm:text-left">
              We will then contact you directly via text with the info you need
              for your course dates.
            </p>
          </div>
          <Button text="Enrol Now" className="w-full sm:w-[180px]" />
        </div>
      </Container>
    </Section>
  );
};

export default PaymentOption;
