import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { CardManager } from "./CardManager";
import {
  MinutesToGoConst,
  PomodoroStore,
  SecondToDrawConst,
} from "../const/type";

export const PomodoroManager = createContext({} as PomodoroStore);

export const PomodoroProvider: FC = ({ children }) => {
  const { resetBoard } = useContext(CardManager);
  const [secondToDraw, setSecondToDraw] = useState(SecondToDrawConst);
  const [minutesToGo, setMinutesToGo] = useState(MinutesToGoConst);
  const [secondToGo, setSecondToGo] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const timeToEnd = () => {
    if (minutesToGo * 60 + secondToGo >= SecondToDrawConst) {
      return true;
    }
    return false;
  };

  const resetTimeToDraw = () => {
    if (timeToEnd()) {
      setSecondToDraw(SecondToDrawConst);
    }
  };

  const addTime = () => {
    if (secondToGo < SecondToDrawConst) {
      setSecondToGo((s) => s + SecondToDrawConst);
    } else {
      setMinutesToGo((m) => m + 1);
      const time = 60 - secondToGo;
      setSecondToGo((s) => SecondToDrawConst - time);
    }
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (secondToDraw !== 0) {
        setSecondToDraw((s) => s - 1);
      } else {
        if (timeToEnd()) {
          setSecondToDraw(SecondToDrawConst);
          resetBoard();
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [secondToDraw]);

  useEffect(() => {
    let interval = setInterval(() => {
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
    return () => clearInterval(interval);
  }, [secondToGo]);

  return (
    <PomodoroManager.Provider
      value={{
        secondToDraw,
        minutesToGo,
        secondToGo,
        gameOver,
        resetTimeToDraw,
        addTime,
      }}
    >
      {children}
    </PomodoroManager.Provider>
  );
};
