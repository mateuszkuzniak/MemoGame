import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MainContaine, MainView, TitleApp } from "./src";

export default function App() {
  return (
    <MainContaine>
      <MainView text={TitleApp}></MainView>
    </MainContaine>
  );
}
