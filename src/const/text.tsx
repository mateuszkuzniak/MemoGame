import { StyleSheet } from "react-native";
import { Colors } from ".";

export const { titleText, textColor } = StyleSheet.create({
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

export const TitleApp = "MobileMemo";
