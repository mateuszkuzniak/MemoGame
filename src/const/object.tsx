import React from "react";
import { Colors } from "./style";
import { ButtonBasicProp, ScoreObject } from "./type";

//#region ICO
//https://icons.expo.fyi/
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
//#endregion

export const scoreObjectId = {
  clickerCounter: "clickerCounter",
  timeToEnd: "timeToEnd",
  timeToTheNextDraw: "timeToTheNExtDraw",
  foundPairs: "foundPairs",
};

export const scoreObject = [
  {
    id: scoreObjectId.clickerCounter,
    number: 0,
    description: "Liczba kliknięć",
  },
  { id: scoreObjectId.foundPairs, number: 0, description: "Znalezione pary" },
  { id: scoreObjectId.timeToTheNextDraw, number: 30, description: "Losowanie" },
  { id: scoreObjectId.timeToEnd, number: 3, description: "Czas do końca" },
] as ScoreObject[];

export const buttonId = {
  findMe: "btn_1",
  resetDraw: "btn_2",
  addTime: "btn_3",
};

export const buttons = [
  {
    id: buttonId.findMe,
    text: "Znajdź mnie!",
    action: () => {},
    ico: <AntDesign name="find" size={24} color={Colors.Text} />,
  },
  {
    id: buttonId.resetDraw,
    text: "Resetuj losowanie",
    action: () => {},
    ico: (
      <MaterialCommunityIcons
        name="watch-vibrate-off"
        size={24}
        color={Colors.Text}
      />
    ),
  },
  {
    id: buttonId.addTime,
    text: "Dodaj czas",
    action: () => {},
    ico: <AntDesign name="pluscircleo" size={24} color={Colors.Text} />,
  },
] as ButtonBasicProp[];
