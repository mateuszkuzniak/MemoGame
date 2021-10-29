import React from "react";

import { StyleSheet, Text, View } from "react-native";

export const Board = () => {
  const { container } = styles;

  return (
    <View style={container}>
      <Text>JADĄCA WIARA</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2a",
    width: "90%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    textDecorationColor: "#fff",
  },
});
