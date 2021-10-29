import React from "react";
import { FC } from "react";
import { View, Text } from "react-native";
import { titleText } from "../..";
import { container, phoneBar, titleBar, board, bottomBar } from "./style";

type Props = {
  text: string;
};

export const MainView: FC<Props> = ({ text }) => {
  return (
    <View style={container}>
      <View style={phoneBar}></View>
      <View style={titleBar}>
        <Text style={titleText}>{text}</Text>
      </View>
      <View style={board}></View>
      <View style={bottomBar}></View>
    </View>
  );
};
