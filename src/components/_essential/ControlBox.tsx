import { ControlBoxType } from "@/utils/types";
import { FC } from "react";

const ControlBox: FC<ControlBoxType> = ({ children, ...props }) => {
  return (
    <button
      className="bg-blog-bg border border-blog-border w-12 h-12 flex justify-center items-center rounded-md hover:bg-blog-border transition duration-150"
      {...props}
    >
      {children}
    </button>
  );
};

export default ControlBox;
