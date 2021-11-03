import { AdMobBanner, PublisherBanner } from "expo-ads-admob";
import React from "react";
import { FC } from "react";
import { View, Text } from "react-native";
import { ButtonBasic, Cards, Score } from "../../Components";
import { buttons, constCenter, constRow, titleText } from "../../const";
import {
  container,
  phoneBar,
  titleBar,
  board,
  adsBar,
  scoreBar,
  bottomBar,
} from "./style";

type Props = {
  text: string;
};

export const MainView: FC<Props> = ({ text }) => {
  return (
    <View style={container}>
      <View style={phoneBar} />
      <View style={[titleBar, constCenter]}>
        <Text style={titleText}>{text}</Text>
      </View>
      <View style={board}>
        <Cards />
      </View>
      <View style={[constRow, scoreBar]}>
        <Score />
      </View>
      <View style={[constRow, bottomBar]}>
        {buttons.map((btn) => {
          return <ButtonBasic {...btn} key={btn.id} />;
        })}
      </View>
      <PublisherBanner
        bannerSize="banner"
        adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds={false} // true or false
        style={[adsBar, constCenter]}
      />
    </View>
  );
};
