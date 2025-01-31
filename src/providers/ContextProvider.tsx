import TermsAndConditionsContextProvider from "@/contexts/terms-and-conditions";
import { FC, ReactNode } from "react";

interface ContextProviderPropsType {
  children: ReactNode;
}

const ContextProvider: FC<ContextProviderPropsType> = ({ children }) => {
  return (
    <TermsAndConditionsContextProvider>
      {children}
    </TermsAndConditionsContextProvider>
  );
};

export default ContextProvider;
