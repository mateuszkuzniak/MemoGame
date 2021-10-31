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
    <MainContaine>
      <CardManagerProvider>
        <PomodoroProvider>
          <MainView text={TitleApp}></MainView>
        </PomodoroProvider>
      </CardManagerProvider>
    </MainContaine>
  );
}
