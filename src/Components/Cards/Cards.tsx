import React, { createRef, useContext, useEffect, useRef } from "react";
import { FC } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Pressable,
  Image,
  Easing,
} from "react-native";
import {
  borderRadius,
  boxShadow,
  Colors,
  constCenter,
  constRow,
  numberOfColumn,
} from "../../const";
import { CardManager } from "../../Context";

type BoxProps = {
  index: number;
};
const Box: FC<BoxProps> = ({ index }) => {
  const { card, setFlipped } = useContext(CardManager);
  const { pathToFile, flipped } = card[index];

  let curentValue = !flipped ? 0 : 180;

  const animatedValue = new Animated.Value(flipped ? 180 : 0);

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

  const FlipCard = () => {
    if (curentValue <= 90 && !flipped) {
      Animated.spring(animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: false,
      } as Animated.SpringAnimationConfig).start(() => setFlipped(index));
    } else if (curentValue > 90) {
      Animated.spring(animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: false,
      } as Animated.SpringAnimationConfig).start(() => setFlipped(index));
    }
  };

  return (
    <Pressable style={[box]} onPress={() => FlipCard()}>
      <Animated.View
        style={[
          cardBox,
          frontCard,
          frontAnimatedStyle,
          boxShadow,
          borderRadius,
          constCenter,
        ]}
      />
      <Animated.View
        style={[
          backAnimatedStyle,
          cardBox,
          backCard,
          boxShadow,
          borderRadius,
          constCenter,
        ]}
      >
        <Image style={[cardBox, borderRadius]} source={pathToFile} />
      </Animated.View>
    </Pressable>
  );
};

const Row: FC = ({ children }) => {
  return <View style={[constRow, row]}>{children}</View>;
};

export const Cards: FC = () => {
  return (
    <>
      {Array.from({ length: numberOfColumn + 1 }, (_, rowID) => {
        return (
          <Row key={rowID}>
            {Array.from({ length: numberOfColumn }, (_, boxID) => {
              const index = numberOfColumn * rowID + boxID;
              return <Box key={index} index={index} />;
            })}
          </Row>
        );
      })}
    </>
  );
};

const { box, row, cardBox, frontCard, backCard } = StyleSheet.create({
  box: {
    margin: 10,
    flex: 1,
  },
  row: {
    flex: 1,
    margin: 0,
  },
  cardBox: {
    height: "100%",
    width: "100%",
  },
  frontCard: {
    position: "absolute",
    backgroundColor: Colors.LightGay,
  },
  backCard: {
    backfaceVisibility: "hidden",
    backgroundColor: Colors.DarkPastelGreen,
  },
});
