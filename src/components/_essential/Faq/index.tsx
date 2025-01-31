import { Container, Section } from "@/components/_container";
import { FC } from "react";
import FaqCard from "./FaqCard";
import { H2 } from "@/components/_basic";

const FAQ: FC = () => {
  const faqData = [
    {
      title: "Do I need experience?",
      content:
        "Ultimate Lash Extension <br /> Course Lash Lift & Tint Course<br /> There is no experience needed to complete either of these courses.<br /> We will teach you everything you need to know from A -Z!<br /><br />Advanced Lash Styling Course<br />This course requires you to have successfully finished a previous lash course either with us or with another lash training provider. You must have proficient exisiting knowledge and experience in doing eyelash extensions. If you are not sure if you are experienced enough, please contact us to discuss further.",
    },
    {
      title: "What if I can’t arrange my own models?",
      content:
        "If you can bring a friend or family member to be your lash models that would be great! If you can’t bring anyone please let us know and we will endeavour to arrange models for you.",
    },
    {
      title: "When do I receive my certificate?",
      content:
        "You receive your certificate on the last day of your lash course.",
    },
    {
      title: "Will I need to bring anything to class?",
      content:
        "We provide pretty much everything you need for your course. Please bring a water bottle and money to buy lunch.",
    },
    {
      title: "Do you offer payment plans?",
      content:
        "Now/Pay Later options: after pay, zippy, Humm & Klarna. *needs edits and integration of payment platforms*.<br /><br />We offer an In House payment plan direct debit option. You can choose a flexible amount to pay off weekly, fortnightly or monthly. Please note with our In House payment plan your total tuition must be paid off in full before commencing your course. Contact us directly to arrange your In House payment plan.<br /><br />*Please note if using a buy now/pay later option or our in house payment plan option additional fees may apply, contact us for further info*",
    },
    {
      title: "How do I access ongoing support?",
      content:
        "You will be given your lash trainers personal mobile number to contact whenever you need it. Or you can contact us via email or our socials.",
    },
    {
      title: "Are there age restrictions?",
      content:
        "There are no age restrictions.<br />If the student is under 18 parental consent is required.",
    },
  ];
  return (
    <Section id="faq">
      <Container className="flex-col space-y-14">
        <H2 text="Frequently Asked Question" />
        <div className="flex flex-col space-y-4 w-full">
          {faqData.map((item, index) => (
            <FaqCard key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
