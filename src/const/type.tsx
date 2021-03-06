import { ImageProps } from "react-native";

export const TitleApp = "MobileMemo";
export const numberOfColumn = 4;
export const SecondToDrawConst = 60;
export const MinutesToGoConst = 2;
export const MaximumGameTime = 5;

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
  gameOver: boolean;
  currentRound: Round[];
  setFlipped: (index: number) => void;
  resetBoard: () => void;
  findMe: () => void;
  quitGame: () => void;
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
  resetTimeToDraw: () => void;
  addTime: () => void;
};
