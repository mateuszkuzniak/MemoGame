import React, { FC, useContext, useEffect, useState } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { CardManager, PomodoroManager } from "../../Context";
import {
  borderRadius,
  boxInRow,
  boxShadow,
  ButtonBasicProp,
  buttonId,
  Colors,
  constCenter,
  constRow,
  textColor,
} from "../../const";
import { AdMobInterstitial, AdMobRewarded } from "expo-ads-admob";

AdMobRewarded.setAdUnitID("ca-app-pub-3940256099942544/5224354917");

export const ButtonBasic: FC<ButtonBasicProp> = (btn) => {
  const { id, text, color, ico, action } = btn;
  const { addTime, resetTimeToDraw } = useContext(PomodoroManager);
  const { findMe, gameOver, currentRound } = useContext(CardManager);
  const [activeBtn, setActiveBtn] = useState(false);

  let btnAction: () => void;
  if (id === buttonId.findMe) {
    btnAction = findMe;
  } else if (id === buttonId.resetDraw) {
    btnAction = resetTimeToDraw;
  } else if (id === buttonId.addTime) {
    btnAction = addTime;
  } else {
    btnAction = action;
  }

  useEffect(() => {
    AdMobRewarded.addEventListener("rewardedVideoUserDidEarnReward", () => {
      setTimeout(() => {
        console.log("jestem1");
        btnAction();
      }, 1000);
    });

    return () => {
      AdMobRewarded.removeAllListeners();
    };
  }, []);

  useEffect(() => {
    const initRewardAds = async () => {
      try {
        await AdMobRewarded.setAdUnitID(
          "ca-app-pub-3940256099942544/5224354917"
        );
        AdMobRewarded.addEventListener("rewardedVideoUserDidEarnReward", () => {
          btnAction();
        });
        AdMobRewarded.addEventListener("rewardedVideoDidDismiss", () => {});
      } catch {
        (e: any) => console.log(e.message);
      }
      setActiveBtn(false);
    };

    initRewardAds();
    return () => {
      AdMobRewarded.removeAllListeners();
    };
  }, [activeBtn]);

  const pressToGetReward = async () => {
    try {
      await AdMobRewarded.requestAdAsync();
      await AdMobRewarded.showAdAsync();
    } catch {
      (e: any) => console.log(e.message);
    }
  };

  const ButtonAction = () => {
    if (
      (currentRound.length === 1 && id === buttonId.findMe) ||
      id === buttonId.resetDraw ||
      id === buttonId.addTime
    ) {
      setActiveBtn(true);
      pressToGetReward();
    }
  };

  return (
    <View
      style={[
        container,
        { backgroundColor: color ? color : Colors.DarkBackground },
        boxShadow,
        boxInRow,
        borderRadius,
        constCenter,
      ]}
    >
      <Pressable
        onPress={() => (gameOver ? {} : ButtonAction())}
        style={constRow}
      >
        <View style={[ico, constCenter]}>{ico && ico}</View>
        <View style={[textBox, constCenter]}>
          <Text style={[textColor]}>{text}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const { container, ico, textBox } = StyleSheet.create({
  container: {
    height: "80%",
  },
  ico: {
    width: "20%",
    height: "100%",
  },
  textBox: {
    width: "70%",
    height: "100%",
  },
});
