import React, { FC, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { CardManager } from "../../Context";
import {
  constColumn,
  constCenter,
  textColor,
  boxInRow,
  scoreObject,
  scoreObjectId,
} from "../../const";

export const Score: FC = () => {
  const { clickerCounter, numberOfFoundPairs } = useContext(CardManager);
  let number = 0;
  return (
    <>
      {scoreObject.map((item) => {
        if (item.id === scoreObjectId.clickerCounter) {
          number = clickerCounter;
        } else if (item.id === scoreObjectId.foundPairs) {
          number = numberOfFoundPairs;
        } else {
          number = item.number;
        }

        return (
          <View key={item.id} style={[constColumn, box, boxInRow]}>
            <View style={[constCenter, score]}>
              <Text style={[textColor, points]}>{number}</Text>
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
