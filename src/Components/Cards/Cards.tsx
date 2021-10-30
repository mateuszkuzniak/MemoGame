import React from "react";
import { FC } from "react";
import { View, StyleSheet, Animated, Pressable, Text } from "react-native";
import {
  borderRadius,
  boxShadow,
  Colors,
  constCenter,
  constRow,
} from "../../const";

const Box: FC = ({}) => {
  const animatedValue = new Animated.Value(0);

  let curentValue = 0;
  animatedValue.addListener(({ value }) => (curentValue = value));

  //#region style
  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };
  //#endregion

  const flipCard = () => {
    if (curentValue >= 90) {
      Animated.spring(animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: false,
      } as Animated.SpringAnimationConfig).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: false,
      } as Animated.SpringAnimationConfig).start();
    }
  };

  return (
    <Pressable style={[box]} onPress={() => flipCard()}>
      <Animated.View
        style={[
          card,
          frontCard,
          frontAnimatedStyle,
          boxShadow,
          borderRadius,
          constCenter,
        ]}
      >
        <Text>Text_1</Text>
      </Animated.View>
      <Animated.View
        style={[
          backAnimatedStyle,
          card,
          backCard,
          boxShadow,
          borderRadius,
          constCenter,
        ]}
      >
        <Text>Text_2</Text>
      </Animated.View>
    </Pressable>
  );
};

const Row: FC = ({ children }) => {
  return <View style={[constRow, row]}>{children}</View>;
};

export const Cards: FC = () => {
  const length = 4;

  return (
    <>
      {Array.from({ length: length + 1 }, (_, rowID) => {
        return (
          <Row key={rowID}>
            {Array.from({ length }, (_, boxID) => {
              return <Box key={boxID} />;
            })}
          </Row>
        );
      })}
    </>
  );
};

const { box, row, card, frontCard, backCard } = StyleSheet.create({
  box: {
    margin: 10,
    flex: 1,
  },
  row: {
    flex: 1,
    margin: 0,
  },
  // box: {
  //   width: "20%",
  //   height: "100%",
  //   marginLeft: "4%",
  // },
  // row: {
  //   marginTop: "5.5%",
  //   width: "100%",
  //   height: "15%",
  // },
  card: {
    height: "100%",
    width: "100%",
  },
  frontCard: {
    position: "absolute",
    backgroundColor: Colors.DarkPastelGreen,
  },
  backCard: {
    backfaceVisibility: "hidden",
    backgroundColor: Colors.LightGay,
  },
});
