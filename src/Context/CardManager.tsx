import React, { createContext, FC } from "react";
import { Card } from "../const";

export const CardManager = createContext([] as Card);

export const CardManagerProvider: FC = ({ children }) => {
  return <CardManager.Provider value={[]}>{children}</CardManager.Provider>;
};
