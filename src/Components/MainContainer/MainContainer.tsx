import React from "react";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { constCenter } from "../../const";

export const MainContaine: FC = ({ children }) => {
  const { container } = styles;

  return <View style={[container, constCenter]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
