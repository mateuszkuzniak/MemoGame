import React from "react";
import { FC } from "react";
import { View, Text } from "react-native";
import { Cards, constRow, Score, ScoreObject, titleText } from "../..";
import {
  container,
  phoneBar,
  titleBar,
  board,
  adsBar,
  scoreBar,
  bottomBar,
} from "./style";

const obj1 = [
  { number: 0, description: "Liczba kliknięć" },
  { number: 30, description: "Losowanie" },
  { number: 30, description: "Czas do końca" },
] as ScoreObject[];

type Props = {
  text: string;
};

export const MainView: FC<Props> = ({ text }) => {
  return (
    <View style={container}>
      <View style={phoneBar} />
      <View style={titleBar}>
        <Text style={titleText}>{text}</Text>
      </View>
      <View style={board}>
        <Cards />
      </View>
      <View style={[constRow, scoreBar]}>
        <Score obj={obj1} />
      </View>
      <View style={[constRow, bottomBar]}></View>
      <View style={adsBar}></View>
    </View>
  );
};
