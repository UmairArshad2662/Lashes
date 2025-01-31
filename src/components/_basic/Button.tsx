import { ButtonPropsType, ControlButtonPropsType } from "@/utils/types";
import { FC, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { BtnIcons } from "./icon";

const Button: FC<ButtonPropsType> = ({
  children,
  text,
  icon,
  className,
  ...rest
}) => {
  return (
    <button
      className={twMerge(
        `bg-btn-primary px-6 py-3 text-main-text rounded-md font-semibold hover:cursor-pointer flex justify-center items-center space-x-1 hover:bg-btn-hover transition duration-150`,
        className
      )}
      {...rest}
    >
      {children ? children : icon ? BtnIcons[icon] : <span>{text}</span>}
    </button>
  );
};

export const ControlButton = forwardRef<
  HTMLButtonElement,
  ControlButtonPropsType
>(({ children, className, ...rest }, ref) => (
  <button
    ref={ref}
    className={twMerge(
      `w-12 h-12 border border-[#A4949E] flex justify-center items-center rounded-md hover:cursor-pointer bg-ctrl-btn hover:bg-ctrl-btn-hover duration-150 transition`,
      className
    )}
    {...rest}
  >
    {children}
  </button>
));

export default Button;
