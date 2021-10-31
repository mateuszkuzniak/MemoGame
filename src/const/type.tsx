import { ImageProps } from "react-native";

export const TitleApp = "MobileMemo";
export const numberOfColumn = 4;
export type ScoreObject = {
  id: string;
  number: number;
  description: string;
};

export type ButtonBasicProp = {
  id: string;
  text: string;
  color?: string;
  ico?: any;
  action: () => void;
};

export type Card = {
  boxId: string;
  pictureId: string;
  pathToFile: ImageProps | Readonly<ImageProps>;
  flipped: boolean;
  paired: boolean;
};

export type CardStore = {
  card: Card[];
  clickerCounter: number;
  flippedCardCounterCounter: number;
  setFlipped: (index: number) => void;
  setPaired: (cardId: string, pictureId: string) => void;
  changeCardState: (cardId: string) => void;
  addAClick: () => void;
  findAPair: (cardId: string, pictureId: string) => void;
};
