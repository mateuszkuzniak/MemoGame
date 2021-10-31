import React from "react";
import { FC } from "react";
import { View, Text } from "react-native";
import { ButtonBasic, Cards, Score } from "../../Components";
import { buttons, Colors, constCenter, constRow, titleText } from "../../const";
import {
  container,
  phoneBar,
  titleBar,
  board,
  adsBar,
  scoreBar,
  bottomBar,
} from "./style";

type Props = {
  text: string;
};

export const MainView: FC<Props> = ({ text }) => {
  return (
    <View style={container}>
      <View style={phoneBar} />
      <View style={[titleBar, constCenter]}>
        <Text style={titleText}>{text}</Text>
      </View>
      <View style={board}>
        <Cards />
      </View>
      <View style={[constRow, scoreBar]}>
        <Score />
      </View>
      <View style={[constRow, bottomBar]}>
        {buttons.map((btn) => {
          return <ButtonBasic {...btn} key={btn.id} />;
        })}
      </View>
      <View style={adsBar}></View>
    </View>
  );
};
