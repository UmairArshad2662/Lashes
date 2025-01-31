import { FC, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputPropsType extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: FC<InputPropsType> = ({ className, ...rest }) => {
  return (
    <input
      className={twMerge(
        `bg-ipt-bg border border-ipt-border rounded-md px-5 py-3`,
        className
      )}
      {...rest}
    />
  );
};

export default Input;
