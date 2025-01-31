import { H2PropsType } from "@/utils/types";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

export const H2: FC<H2PropsType> = ({ text, className }) => {
  return (
    <h2
      className={twMerge(
        `font-semibold text-[32px] max-[768px]:text-[24px]`,
        className
      )}
    >
      {text}
    </h2>
  );
};
