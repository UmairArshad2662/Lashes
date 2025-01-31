"use client";

import { HelpBoxPropsType } from "@/utils/types";
import { FC, useState } from "react";
import { ArrowDownDarkIcon } from "../_basic/icon";

const HelpBox: FC<HelpBoxPropsType> = ({ title, contentList }) => {
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
        <span className={`custom-transition ${detailView ? "" : "-rotate-90"}`}>
          <ArrowDownDarkIcon />
        </span>
      </div>

      {detailView && (
        <ul className="list-disc ml-6 pb-6 pt-0 px-9 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
          {contentList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HelpBox;
