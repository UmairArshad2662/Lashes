"use client";

import { FC, ReactNode, createContext, useState } from "react";

export const TermsAndConditionsContext = createContext({
  modalVisible: false,
  setModalVisible: (_arg: boolean) => {},
});

const TermsAndConditionsContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return (
    <TermsAndConditionsContext.Provider
      value={{
        modalVisible: modalVisible,
        setModalVisible: (_visible: boolean) => setModalVisible(_visible),
      }}
    >
      {children}
    </TermsAndConditionsContext.Provider>
  );
};

export default TermsAndConditionsContextProvider;
