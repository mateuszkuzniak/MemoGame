import React from "react";
import {
  CardManagerProvider,
  MainContaine,
  MainView,
  PomodoroProvider,
  TitleApp,
} from "./src";

export default function App() {
  return (
    <CardManagerProvider>
      <PomodoroProvider>
        <MainContaine>
          <MainView text={TitleApp}></MainView>
        </MainContaine>
      </PomodoroProvider>
    </CardManagerProvider>
  );
}
