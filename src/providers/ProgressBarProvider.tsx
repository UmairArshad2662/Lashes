"use client";

import { FC, ReactNode } from "react";

interface ProviderPropsType {
  children: ReactNode;
}

const Provider: FC<ProviderPropsType> = ({ children }) => {
  return <>{children}</>;
};

export default Provider;
