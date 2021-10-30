import { StyleSheet } from "react-native";

export const Colors = {
  Text: "#FCFCFA",
  LightGay: "#C8D3D5",
  BrighterBackground: "#A4B8C4",
  DarkBackground: "#6E8387",
  DarkPastelGreen: "#0CCA4A",
};

export const {
  constRow,
  constColumn,
  constCenter,
  boxShadow,
  boxInRow,
  borderRadius,
  titleText,
  textColor,
} = StyleSheet.create({
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
  boxShadow: {
    elevation: 12,
  },
  boxInRow: {
    marginRight: 5,
    marginLeft: 5,
    flex: 1,
  },
  borderRadius: {
    borderRadius: 7,
  },
  titleText: {
    color: Colors.Text,
    fontSize: 25,
    fontWeight: "bold",
  },
  textColor: {
    color: Colors.Text,
    fontWeight: "bold",
  },
});
