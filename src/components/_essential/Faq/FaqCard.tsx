"use client";

import { PlusIcon } from "@/components/_basic/icon";
import { FaqCardType } from "@/utils/types";
import { FC, useState } from "react";

const FaqCard: FC<FaqCardType> = ({ title, content }) => {
  const [detailView, setDetailView] = useState<boolean>(false);
  const toggleHandler = () => {
    setDetailView(!detailView);
  };

  return (
    <div className="bg-blog-poster-bg border border-blog-border w-full rounded-lg">
      <div
        className="flex justify-between items-center w-full py-6 px-9 hover:cursor-pointer max-[425px]:px-6 max-[425px]:py-4"
        onClick={toggleHandler}
      >
        <p className="text-xl max-[425px]:text-[18px]">{title}</p>
        <span
          className={`${detailView ? "rotate-45" : ""} transition ease-in-out`}
        >
          <PlusIcon />
        </span>
      </div>
      <div className={`${!detailView ? "" : "px-9 max-[425px]:px-6"}`}>
        <p
          dangerouslySetInnerHTML={{ __html: detailView ? content : "" }}
          className={`custom-transition ${
            !detailView ? "opacity-0" : "opacity-100 pb-6 max-[425px]:py-4"
          }`}
        />
      </div>
    </div>
  );
};

export default FaqCard;
