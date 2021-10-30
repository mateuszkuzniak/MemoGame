import { StyleSheet } from "react-native";
import { Colors } from "../../const";

export const {
  container,
  phoneBar,
  titleBar,
  board,
  bottomBar,
  adsBar,
  scoreBar,
} = StyleSheet.create({
  container: {
    flex: 2,
    width: "100%",
    backgroundColor: Colors.BrighterBackground,
    flexDirection: "column",
    color: Colors.Text,
  },
  phoneBar: {
    flex: 1,
  },
  titleBar: {
    flex: 3,
    color: Colors.Text,
  },
  board: {
    flex: 22,
    borderWidth: 10,
    borderColor: Colors.DarkBackground,
    padding: 5,
  },
  scoreBar: {
    flex: 5,
  },
  bottomBar: {
    flex: 3,
  },
  adsBar: {
    backgroundColor: "red",
    flex: 2,
  },
});
