import React, { FC } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import {
  borderRadius,
  boxInRow,
  boxShadow,
  ButtonBasicProp,
  Colors,
  constCenter,
  constRow,
  textColor,
} from "../../const";

export const ButtonBasic: FC<ButtonBasicProp> = (btn) => {
  const { text, color, ico, action } = btn;

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
      <Pressable onPress={action} style={constRow}>
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
