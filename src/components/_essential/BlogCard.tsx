"use client";

import { reviewer } from "@/utils/images";
import { BlogCardType } from "@/utils/types";
import Image from "next/image";
import { FC, useState } from "react";
import ControlBox from "./ControlBox";
import { EmptyBookmark, EmptyHeart } from "../_basic/icon";
import { Button } from "../_basic";

type IconType = boolean;

const BlogCard: FC<BlogCardType> = ({
  coverImg,
  subtitle,
  desc,
  poster,
  title,
  readable,
}) => {
  const [heartType, setHeartType] = useState<IconType>(false);
  const [bookmarkType, setBookmarkType] = useState<IconType>(false);
  return (
    <div className="bg-blog-bg rounded-xl p-[10px] border border-blog-border flex flex-col justify-start items-start space-y-2 w-full max-w-[480px] mx-auto">
      <Image
        alt="blog cover image"
        src={coverImg.src}
        width={coverImg.width}
        height={coverImg.height}
        className="w-full"
      />
      <div className="flex flex-col justify-start items-start space-y-1 lg:space-y-2">
        <span className="text-[#333] text-mobile-primary lg:text-primary">
          {subtitle}
        </span>
        <h3 className="text-main-text text-primary lg:text-[22px] font-semibold">
          {title}
        </h3>
        <p className="text-[#59595A] text-mobile-primary 4m:text-primary">
          {desc}
        </p>

        {/* poster */}
        <div className="flex justify-between items-center border border-blog-border px-4 py-2 rounded-[10px] bg-blog-poster-bg w-full">
          <div className="flex justify-start items-center space-x-4">
            {/* poster photo */}
            <Image
              alt="poster avatar"
              src={reviewer.src}
              height={reviewer.height}
              width={reviewer.width}
              className="w-[50px] h-[50px]"
            />
            <div className="flex flex-col justify-start items-start text-mobile-primary lg:text-primary">
              <span>{poster?.name}</span>
              <span>{poster?.date}</span>
              <span>read</span>
            </div>
          </div>
          <div className="flex justify-start items-center space-x-2">
            <ControlBox onClick={() => setHeartType(!heartType)}>
              <EmptyHeart filled={heartType} />
            </ControlBox>
            <ControlBox onClick={() => setBookmarkType(!bookmarkType)}>
              <EmptyBookmark filled={bookmarkType} />
            </ControlBox>
          </div>
        </div>
      </div>
      {readable && <Button text="Read More" className="w-full" />}
    </div>
  );
};

export default BlogCard;
