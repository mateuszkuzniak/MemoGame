import { Icon } from "@expo/vector-icons/build/createIconSet";

export const TitleApp = "MobileMemo";

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

export type Card = {};
