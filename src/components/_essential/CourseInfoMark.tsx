import { ultimate_course_img } from "@/utils/images";
import { CourseInfoMarkPropsType } from "@/utils/types";
import Image from "next/image";
import { FC } from "react";

const CourseInfoMark: FC<CourseInfoMarkPropsType> = ({ type, img }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[910px]">
      <Image
        alt="course details image"
        src={ultimate_course_img.src}
        width={ultimate_course_img.width}
        height={ultimate_course_img.height}
        className="w-[380px] object-cover"
      />
      <span className="text-5xl font-semibold uppercase 4m:text-[64px]">
        COURSE INFO
      </span>
      <span className="text-xl uppercase 4m:text-2xl">{type}</span>
    </div>
  );
};

export default CourseInfoMark;
