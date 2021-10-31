import React, { useContext, useEffect, useState } from "react";
import { FC } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Pressable,
  Image,
  ImageProps,
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
  pathToFile: ImageProps | Readonly<ImageProps>;
  id: string;
  pictureId: string;
  index: number;
};
const Box: FC<BoxProps> = ({ pathToFile, id, pictureId }) => {
  const { card, setFlipped } = useContext(CardManager);

  let curentValue = 0;
  const animatedValue = new Animated.Value(0);

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
    console.log(curentValue);
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
  const { card } = useContext(CardManager);

  return (
    <>
      {Array.from({ length: numberOfColumn + 1 }, (_, rowID) => {
        return (
          <Row key={rowID}>
            {Array.from({ length: numberOfColumn }, (_, boxID) => {
              const index = numberOfColumn * rowID + boxID;
              return (
                <Box
                  key={boxID}
                  pathToFile={card![index].pathToFile}
                  id={card![index].boxId}
                  pictureId={card![index].pictureId}
                  index={index}
                />
              );
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
