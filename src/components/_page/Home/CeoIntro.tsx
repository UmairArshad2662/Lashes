import { Container, Section } from "@/components/_container";
import { trainerImg } from "@/utils/images";
import Image from "next/image";
import { FC } from "react";

const CEOIntroSection: FC = () => {
  return (
    <Section className="md:pb-36">
      <Image
        alt="trainer image"
        src={trainerImg.src}
        width={trainerImg.width}
        height={trainerImg.height}
        className="md:absolute bottom-0 left-0 lg:w-[400px] w-[300px] object-cover"
      />
      <Container className="flex-col items-end space-y-4 max-md:items-center">
        <h2 className="lg:text-6xl md:text-right uppercase text-4xl text-center max-4m:text-2xl font-abhaya-libre tracking-[0.08em] leading-[88%]">
          Hi, I'm Jess. <br /> CEO of Modern Lash Training.
        </h2>
        <p className="md:text-xl italic md:text-right uppercase text-[16px] text-center w-full md:w-[calc(100%-400px)] max-w-[560px] leading-[88%] tracking-[0.08em]">
          My passion is helping women like you create the career of their
          dreams.
        </p>
        <p className="lg:text-3xl md:text-right text-xl text-center max-4m:text-[16px] w-full md:w-[calc(100%-400px)] italic font-urbanist leading-[123%] tracking-[0.08em]">
          When I started out as a solo lash artist, I face challenges growing my
          lash business. While I mastered the art of applying lashes, I also had
          to figure out the business side all on my own. Through trial and
          error, I turned my business into a thriving, money-making career.
        </p>
      </Container>
    </Section>
  );
};

export default CEOIntroSection;
