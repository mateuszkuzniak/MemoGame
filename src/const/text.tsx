import { StyleSheet } from "react-native";
import { Color } from ".";

const textStyles = StyleSheet.create({
  titleText: {
    color: Color.Text,
    fontSize: 25,
  },
});

export const TitleApp = "MobileMemo";

export const { titleText } = textStyles;
