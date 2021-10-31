import React, { createContext, FC, useState } from "react";
import { Card, CardStore } from "../const";
import { CardStoreConstructor } from "../const/function";

export const CardManager = createContext({} as CardStore);

export const CardManagerProvider: FC = ({ children }) => {
  const [card, setCard] = useState(CardStoreConstructor());

  const setFlipped = (boxId: string, pictureId: string) => {
    console.log("Flipped");
    const index = card.findIndex((card) => card.boxId === boxId);
    setCard((card) => [
      ...card.slice(0, index),
      { ...card[index], flipped: !card[index].flipped },
      ...card.slice(index + 1),
    ]);
  };

  return (
    <CardManager.Provider
      value={{
        card,
        clickerCounter: 0,
        flippedCardCounterCounter: 0,
        setFlipped,
        setPaired: (cardId: string, pictureId: string) => {},
        changeCardState: (cardId: string) => {},
        addAClick: () => {},
        findAPair: (cardId: string, pictureId: string) => {},
      }}
    >
      {children}
    </CardManager.Provider>
  );
};
