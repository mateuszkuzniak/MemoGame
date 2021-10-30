import React from "react";
import { Colors } from "./style";
import { ButtonBasicProp, ScoreObject } from "./type";

//#region ICO
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
//#endregion

export const scoreObject = [
  { id: "clickNumber", number: 0, description: "Liczba kliknięć" },
  { id: "draw", number: 30, description: "Losowanie" },
  { id: "timeToEnd", number: 30, description: "Czas do końca" },
] as ScoreObject[];

export const buttons = [
  {
    id: "btn_1",
    text: "Znajdź mnie!",
    action: () => {},
    ico: <AntDesign name="find" size={24} color={Colors.Text} />,
  },
  {
    id: "btn_2",
    text: "Zatrzymaj losowanie",
    action: () => {},
    ico: <Entypo name="stopwatch" size={24} color={Colors.Text} />,
  },

  {
    id: "btn_3",
    text: "Dodaj czas",
    action: () => {},
    ico: <AntDesign name="pluscircleo" size={24} color={Colors.Text} />,
  },
] as ButtonBasicProp[];
