import { reviewer } from "@/utils/images";
import { BlogCardType } from "@/utils/types";
import Image from "next/image";
import { FC } from "react";
import ControlBox from "./ControlBox";
import { EmptyBookmark, EmptyHeart } from "../_basic/icon";

const PopularBlogCard: FC<BlogCardType> = ({
  coverImg,
  subtitle,
  desc,
  title,
}) => {
  return (
    <div className="bg-blog-bg rounded-xl p-[10px] border border-blog-border flex justify-start items-stretch space-x-4 w-full">
      <Image
        alt="blog cover image"
        src={coverImg.src}
        width={coverImg.width}
        height={coverImg.height}
        className="w-full max-w-[120px] object-cover rounded-lg"
      />
      <div className="flex flex-col justify-start items-start space-y-1">
        <span className="text-[#333] text-xs">{subtitle}</span>
        <h3 className="text-main-text text-primary font-semibold">{title}</h3>
        <p className="text-[#59595A] text-xs">{desc}</p>
        <p className="text-[#FF92E7] w-full text-right italic text-xs cursor-pointer hover:opacity-60 transition duration-150">
          Read More...
        </p>
      </div>
    </div>
  );
};

export default PopularBlogCard;
