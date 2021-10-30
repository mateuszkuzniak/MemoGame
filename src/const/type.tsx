import { Icon } from "@expo/vector-icons/build/createIconSet";

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
  id: string;
  pictureId: string;
  flipped: boolean;
  paired: boolean;
  setFlipped: () => void;
  setPaired: () => void;
  changeCardState: (cardId: string) => void;
};

export type CardStore = {
  card: Card[];
  clickerCounter: number;
  flippedCardCounterCounter: number;
  addAClick: () => void;
  findAPair: (cardId: string, pictureId: string) => void;
};

export const CardStoreConstructor = () => {
  let card = [] as Card[];
};
