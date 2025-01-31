import { ContaienrType } from "@/utils/types";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

const Section: FC<ContaienrType> = ({ children, className, ...props }) => {
  return (
    <div
      className={twMerge(
        `relative flex flex-col justify-center items-center w-full bg-white py-20 sm:px-8 px-2`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Section;
