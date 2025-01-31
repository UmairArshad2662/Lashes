"use client";

import { FC, useEffect, useState } from "react";
import { EmptyStar, FilledStar, ReviewIcon } from "../_basic/icon";
import { ReviewCardType } from "@/utils/types";
import Image from "next/image";

const ReviewCard: FC<ReviewCardType> = ({ text, reviewer, rate }) => {
  const generateStar = () => {
    let reviewStar = [];
    for (let i = 0; i < rate; i++) reviewStar.push(<FilledStar key={i} />);
    for (let i = rate; i < 5; i++) reviewStar.push(<EmptyStar key={i} />);
    return reviewStar;
  };
  return (
    <div className="bg-review-bg border border-review-border rounded-2xl w-full max-w-[420px]">
      <div className="flex flex-col space-y-6 p-[30px]">
        <ReviewIcon />
        <p
          dangerouslySetInnerHTML={{ __html: text }}
          className="text-[#ffffffc2] text-[14px]"
        />
      </div>
      <div className="flex justify-between items-center py-[20px] px-[30px] bg-[#1D1D22] border-t border-review-border rounded-b-2xl">
        <div className="flex justify-start items-center space-x-4">
          <Image
            alt="reviewer image"
            src={reviewer.img.src}
            width={reviewer.img.width}
            height={reviewer.img.height}
          />
          <span className="text-white text-[16px]">{reviewer.name}</span>
        </div>
        <div className="flex justify-start items-center space-x-[2px]">
          {generateStar()}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
