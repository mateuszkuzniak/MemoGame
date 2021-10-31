import { Animated, ImageProps } from "react-native";

export const TitleApp = "MobileMemo";
export const numberOfColumn = 4;
export const SecondToDrawConst = 30;
export const MinutesToGoConst = 2;

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
  pictureId: string;
  pathToFile: ImageProps | Readonly<ImageProps>;
  flipped: boolean;
};

export type CardStore = {
  card: Card[];
  clickerCounter: number;
  numberOfFoundPairs: number;
  setFlipped: (index: number) => void;
  findAPair: (cardId: string, pictureId: string) => void;
};

export type Round = {
  index: number;
  pictureId: string;
};

export type PomodoroStore = {
  secondToDraw: number;
  minutesToGo: number;
  secondToGo: number;
  gameOver: boolean;
};
