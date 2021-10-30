import { StyleSheet } from "react-native";
import { Colors } from ".";

export const { constRow, constColumn, constCenter } = StyleSheet.create({
  constRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  constColumn: {
    flexDirection: "column",
  },
  constCenter: {
    justifyContent: "center",
    alignItems: "center",
    color: Colors.Text,
  },
});
