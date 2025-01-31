import { StaticImageData } from "next/image";
import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  LegacyRef,
  ReactNode,
  RefAttributes,
} from "react";

// types for basic components
export interface ButtonPropsType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: "search";
  text?: string;
  children?: ReactNode;
}

export interface H2PropsType {
  text: string;
  className?: string;
}

export interface ContaienrType extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export interface CourseCardType {
  className?: string;
  title: string;
  price: string;
  description: string;
  bgImg: StaticImageData;
}

export interface InstagramCarouselCardType {
  img: StaticImageData;
  content: string;
}

export interface BlogCardType {
  coverImg: StaticImageData;
  title: string;
  subtitle: string;
  desc: string;
  poster?: {
    name: string;
    date: string;
  };
  readable?: boolean;
}

export interface ReviewCardType {
  text: string;
  reviewer: {
    name: string;
    img: StaticImageData;
  };
  rate: number;
}

export interface FaqCardType {
  title: string;
  content: string;
}

export interface ControlBoxType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export interface ControlButtonPropsType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  ref?: LegacyRef<HTMLButtonElement>;
}

export interface CourseInfoMarkPropsType {
  type: string;
  img?: StaticImageData;
}

export interface BenifitCardPropsType {
  icon: StaticImageData;
  title: string;
  desc: string;
}
export interface PaymentCardPropsType {
  icon: StaticImageData;
  title: string;
}

export interface HelpBoxPropsType {
  title: string;
  contentList: string[];
}
