import React from "react";
import { CardManagerProvider, MainContaine, MainView, TitleApp } from "./src";

export default function App() {
  return (
    <MainContaine>
      <CardManagerProvider>
        <MainView text={TitleApp}></MainView>
      </CardManagerProvider>
    </MainContaine>
  );
}
