import React, { FC, useContext } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { CardManager, PomodoroManager } from "../../Context";
import {
  borderRadius,
  boxInRow,
  boxShadow,
  ButtonBasicProp,
  buttonId,
  Colors,
  constCenter,
  constRow,
  textColor,
} from "../../const";

export const ButtonBasic: FC<ButtonBasicProp> = (btn) => {
  const { id, text, color, ico, action } = btn;
  const { addTime, resetTimeToDraw } = useContext(PomodoroManager);
  const { findMe, gameOver } = useContext(CardManager);

  let btnAction: () => void;
  if (id === buttonId.findMe) {
    btnAction = findMe;
  } else if (id === buttonId.resetDraw) {
    btnAction = resetTimeToDraw;
  } else if (id === buttonId.addTime) {
    btnAction = addTime;
  } else {
    btnAction = action;
  }

  return (
    <View
      style={[
        container,
        { backgroundColor: color ? color : Colors.DarkBackground },
        boxShadow,
        boxInRow,
        borderRadius,
        constCenter,
      ]}
    >
      <Pressable
        onPress={() => {
          gameOver ? {} : btnAction();
        }}
        style={constRow}
      >
        <View style={[ico, constCenter]}>{ico && ico}</View>
        <View style={[textBox, constCenter]}>
          <Text style={[textColor]}>{text}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const { container, ico, textBox } = StyleSheet.create({
  container: {
    height: "80%",
  },
  ico: {
    width: "20%",
    height: "100%",
  },
  textBox: {
    width: "70%",
    height: "100%",
  },
});
