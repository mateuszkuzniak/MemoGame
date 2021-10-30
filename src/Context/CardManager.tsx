import React, { createContext, FC } from "react";
import { CardStore } from "../const";

export const CardManager = createContext({} as CardStore);

export const CardManagerProvider: FC = ({ children }) => {
  return (
    <CardManager.Provider
      value={{
        card: [],
        clickerCounter: 0,
        flippedCardCounterCounter: 0,
        addAClick: () => {},
        findAPair: (cardId: string, pictureId: string) => {},
      }}
    >
      {children}
    </CardManager.Provider>
  );
};
