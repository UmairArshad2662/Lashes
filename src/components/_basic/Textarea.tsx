import { FC, TextareaHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface TextareaPropsType
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Textarea: FC<TextareaPropsType> = ({ className, ...rest }) => {
  return (
    <textarea
      className={twMerge(
        `bg-ipt-bg border border-ipt-border rounded-md p-5`,
        className
      )}
      {...rest}
    />
  );
};

export default Textarea;
