import React, { createContext, FC, useEffect, useState } from "react";
import { Card, CardStore, Round } from "../const";
import { CardStoreConstructor } from "../const/function";

export const CardManager = createContext({} as CardStore);

export const CardManagerProvider: FC = ({ children }) => {
  const [card, setCard] = useState(CardStoreConstructor());
  const [clickerCounter, setClickerCounter] = useState(0);
  const [currentRound, setCurrentRound] = useState([] as Round[]);
  const [numberOfFoundPairs, setNumberOfFoundPairs] = useState(0);

  const updateCard = (index: number) => {
    setCard((card) => [
      ...card.slice(0, index),
      { ...card[index], flipped: !card[index].flipped },
      ...card.slice(index + 1),
    ]);
  };

  const update = (index: number) => {
    setClickerCounter((c) => c + 1);
    setCurrentRound((r) => [
      ...r,
      { index: index, pictureId: card[index].pictureId },
    ]);
  };

  const updateStructures = (index: number) => {
    updateCard(index);
    update(index);
  };

  const setFlipped = (index: number) => {
    console.log(card[index]);
    //Jeżeli: karta jest zakryta i jest mniej odkrytych niż 2
    if (!card[index].flipped && currentRound.length < 2) {
      updateStructures(index);
    }
    //Jeżeli karta jest zakryta, ale są już dwie odkryte
    else if (!card[index].flipped && currentRound.length == 2) {
      //Dwie odkryte karty są różne
      if (currentRound[0].pictureId !== currentRound[1].pictureId) {
        currentRound.forEach((item) => {
          updateCard(item.index);
        });
        setCurrentRound([]);
        updateStructures(index);
      }
      //Dwie karty są takie same
      else {
        setCurrentRound([]);
        updateStructures(index);
      }
    }
  };

  return (
    <CardManager.Provider
      value={{
        card,
        clickerCounter,
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
