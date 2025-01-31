"use client";

import { InstagramCarouselCardType } from "@/utils/types";
import Image from "next/image";
import { FC, useState } from "react";
import { InstagramIcon } from "../_basic/icon";
import { twMerge } from "tailwind-merge";

const InstagramCarouselCard: FC<InstagramCarouselCardType> = ({
  img,
  content,
}) => {
  const [hoverd, setHovered] = useState<boolean>(false);
  const mouseEnterHandler = () => {
    setHovered(true);
  };
  const mouseLeaveHandler = () => {
    setHovered(false);
  };
  return (
    <div
      className="relative w-full max-w-[320px] h-[410px] rounded-xl hover:cursor-pointer transition after:duration-300 hover:after:content-[''] hover:after:absolute hover:after:top-0 hover:after:left-0 hover:after:bg-[#0007] hover:after:w-full hover:after:h-full"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <Image
        alt="instagram carousel"
        src={img.src}
        width={img.width}
        height={img.height}
        className="absolute left-0 top-0 rounded-xl w-full h-full"
      />
      {hoverd && (
        <>
          {/* content */}
          <span className="absolute bottom-3 left-3 text-white z-10">
            {content}
          </span>
          <span className="absolute bottom-3 right-3 z-10">
            <InstagramIcon />
          </span>
        </>
      )}
    </div>
  );
};

export default InstagramCarouselCard;
