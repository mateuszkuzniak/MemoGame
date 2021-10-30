import React from "react";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

export const MainContaine: FC = ({ children }) => {
  const { container } = styles;

  return <View style={container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
