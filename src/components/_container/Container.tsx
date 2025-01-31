import { ContaienrType } from "@/utils/types";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

const Container: FC<ContaienrType> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        `relative flex justify-between items-center w-full max-w-1440`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
