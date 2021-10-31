import React, { FC, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { CardManager, PomodoroManager } from "../../Context";
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
  const { secondToDraw, minutesToGo, secondToGo } = useContext(PomodoroManager);
  let number = 0;
  let timeToEnd =
    minutesToGo === 0 && secondToDraw === 0
      ? "0"
      : `${minutesToGo}:${secondToGo}`;
  return (
    <>
      {scoreObject.map((item) => {
        if (item.id === scoreObjectId.clickerCounter) {
          number = clickerCounter;
        } else if (item.id === scoreObjectId.foundPairs) {
          number = numberOfFoundPairs;
        } else if (item.id === scoreObjectId.timeToTheNextDraw) {
          number = secondToDraw;
        } else if (item.id === scoreObjectId.timeToEnd) {
          number = -1;
        } else {
          number = item.number;
        }

        return (
          <View key={item.id} style={[constColumn, box, boxInRow]}>
            <View style={[constCenter, score]}>
              <Text style={[textColor, points]}>
                {number === -1 ? timeToEnd : number}
              </Text>
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
