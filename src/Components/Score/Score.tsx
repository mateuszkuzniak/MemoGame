import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import { constColumn, constCenter, textColor, ScoreObject } from "../../const";

type Prop = {
  obj: ScoreObject[];
};

export const Score: FC<Prop> = ({ obj }) => {
  return (
    <>
      {obj.map((item, index) => {
        return (
          <View key={index} style={[constColumn, box]}>
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
    marginLeft: "4%",
    width: "28%",
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
