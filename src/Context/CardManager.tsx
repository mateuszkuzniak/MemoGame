import React, { createContext, FC, useState } from "react";
import { Card, CardStore } from "../const";
import { CardStoreConstructor } from "../const/function";

export const CardManager = createContext({} as CardStore);

export const CardManagerProvider: FC = ({ children }) => {
  const [card, setCard] = useState(CardStoreConstructor());

  const setFlipped = (cardId: string, pictureId: string) => {
    const tempCard = [] as Card[];
    card.forEach((item) => {
      if (item.boxId == cardId && item.pictureId == pictureId) {
        tempCard.push({
          ...item,
          flipped: !item.flipped,
        });
      } else {
        tempCard.push(item);
      }
      console.log("jestem");
    });
    setCard(tempCard);
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
