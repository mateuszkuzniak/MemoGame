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
import { AdMobRewarded } from "expo-ads-admob";

export const ButtonBasic: FC<ButtonBasicProp> = (btn) => {
  const { id, text, color, ico, action } = btn;
  const { addTime, resetTimeToDraw } = useContext(PomodoroManager);
  const { findMe, gameOver } = useContext(CardManager);
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
    if (activeBtn) {
      console.log("jestem");
      const initRewardAds = async () => {
        try {
          await AdMobRewarded.setAdUnitID(
            "ca-app-pub-3940256099942544/5224354917"
          );

          AdMobRewarded.addEventListener("rewardedVideoDidLoad", () => {
            console.log("Loaded");
          });
          AdMobRewarded.addEventListener("rewardedVideoDidFailToLoad", () =>
            console.log("FailedToLoad")
          );
          AdMobRewarded.addEventListener(
            "rewardedVideoUserDidEarnReward",
            () => {
              console.log("Rewarded");
            }
          );
          AdMobRewarded.addEventListener("rewardedVideoDidPresent", () => {
            console.log("Presented");
          });
          AdMobRewarded.addEventListener("rewardedVideoDidFailToPresent", () =>
            console.log("FailedToPresent")
          );
          AdMobRewarded.addEventListener("rewardedVideoDidDismiss", () => {
            console.log("Dismissed");
            btnAction();
          });
        } catch {
          (e: any) => console.log(e.message);
        }
      };
      initRewardAds();
      btnAction();
      setActiveBtn(false);
      return () => {
        AdMobRewarded.removeAllListeners();
      };
    }
  }, [activeBtn]);

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
        onPress={() => {
          gameOver ? {} : setActiveBtn(true);
        }}
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
