import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  constColumn,
  constCenter,
  textColor,
  ScoreObject,
  boxInRow,
} from "../../const";

type Props = {
  scoreObject: ScoreObject[];
};

export const Score: FC<Props> = ({ scoreObject }) => {
  return (
    <>
      {scoreObject.map((item) => {
        return (
          <View key={item.id} style={[constColumn, box, boxInRow]}>
            <View style={[constCenter, score]}>
              <Text style={[textColor, points]}>{item.number}</Text>
            </View>
            <View style={[constCenter, adnotation]}>
              <Text style={textColor}>{item.description}</Text>
            </View>
          </View>
        );
      })}
    </>
  );
};

const { box, score, adnotation, points } = StyleSheet.create({
  box: {
    height: "100%",
  },
  score: {
    flex: 3,
    padding: 0,
  },
  adnotation: {
    flex: 2,
  },
  points: {
    fontSize: 50,
  },
});
