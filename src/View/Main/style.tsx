import { StyleSheet } from "react-native";
import { Color } from "../..";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.CadetBlueCrayola,
    flexDirection: "column",
    color: Color.Text,
  },
  phoneBar: {
    flex: 0.5,
  },
  titleBar: {
    flex: 1.5,
    alignItems: "center",
    justifyContent: "center",
    color: Color.Text,
  },
  board: {
    flex: 11,
    borderWidth: 10,
    borderColor: Color.SteelTeal,
  },
  bottomBar: {
    flex: 5,
  },
});

export const { container, phoneBar, titleBar, board, bottomBar } = styles;
