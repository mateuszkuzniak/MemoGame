import React, { createContext, FC, useEffect, useState } from "react";
import {
  MinutesToGoConst,
  PomodoroStore,
  SecondToDrawConst,
} from "../const/type";

export const PomodoroManager = createContext({} as PomodoroStore);

export const PomodoroProvider: FC = ({ children }) => {
  const [secondToDraw, setSecondToDraw] = useState(SecondToDrawConst);
  const [minutesToGo, setMinutesToGo] = useState(MinutesToGoConst);
  const [secondToGo, setSecondToGo] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);
      if (secondToDraw !== 0) {
        setSecondToDraw((s) => s - 1);
      } else {
        if (minutesToGo * 60 + secondToGo >= 30) {
          setSecondToDraw(30);
        }
      }
    }, 1000);
  }, [secondToDraw]);

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (secondToGo === 0) {
        if (minutesToGo !== 0) {
          setSecondToGo(59);
          setMinutesToGo((m) => m - 1);
        } else {
          setGameOver(true);
        }
      } else {
        setSecondToGo((s) => s - 1);
      }
    }, 1000);
  }, [secondToGo]);

  return (
    <PomodoroManager.Provider
      value={{
        secondToDraw,
        minutesToGo,
        secondToGo,
        gameOver,
      }}
    >
      {children}
    </PomodoroManager.Provider>
  );
};
