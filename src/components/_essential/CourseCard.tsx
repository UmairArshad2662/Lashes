import { CourseCardType } from "@/utils/types";
import Image from "next/image";
import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { getImageProps } from "next/image";
import { Button } from "../_basic";

const CourseCard: FC<CourseCardType> = ({
  className,
  bgImg,
  title,
  price,
  description,
}) => {
  return (
    <div
      className={twMerge(
        `rounded-xl w-[280px] h-[250px] flex flex-col justify-between items-center bg-black relative bg-cover bg-no-repeat border border-solid border-[#B4B9C9] text-white p-8 group`,
        className
      )}
      style={{ background: `url('${bgImg.src}') no-repeat center` }}
    >
      {/* <div
      className={twMerge(
        `rounded-xl w-[280px] h-[250px] flex flex-col justify-end items-center bg-black relative bg-cover bg-no-repeat border border-solid border-[#B4B9C9] text-white p-8 hover:cursor-pointer course-card-btn`,
        className
      )}
      style={{ background: `url('${bgImg.src}') no-repeat center` }}
    > */}
      <Button
        className="opacity-0 w-48 group-hover:opacity-100 transition duration-200"
        text="Enrol Now"
      />
      <div className="flex flex-col justify-end items-center">
        <span className="text-[21px] text-center whitespace-nowrap">
          {title}
        </span>
        <span className="text-2xl text-center font-bold">{price}</span>
        <span
          dangerouslySetInnerHTML={{ __html: description }}
          className="text-1xl text-center leading-[120%]"
        />
      </div>
    </div>
  );
};

export default CourseCard;
