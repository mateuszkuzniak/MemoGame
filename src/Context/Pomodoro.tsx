import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { CardManager } from "./CardManager";
import {
  MaximumGameTime,
  MinutesToGoConst,
  PomodoroStore,
  SecondToDrawConst,
} from "../const/type";

export const PomodoroManager = createContext({} as PomodoroStore);

export const PomodoroProvider: FC = ({ children }) => {
  const { resetBoard, gameOver, quitGame } = useContext(CardManager);
  const [secondToDraw, setSecondToDraw] = useState(SecondToDrawConst);
  const [minutesToGo, setMinutesToGo] = useState(MinutesToGoConst);
  const [secondToGo, setSecondToGo] = useState(0);

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
    if (!gameOver) {
      const time = minutesToGo * 60 + secondToGo + SecondToDrawConst;
      const maxTime = MaximumGameTime * 60;
      if (time < maxTime) {
        const sec = 60 - secondToGo;
        if (sec > SecondToDrawConst) {
          setSecondToGo((s) => s + SecondToDrawConst);
        } else {
          setMinutesToGo((m) => m + 1);
          const time = 60 - secondToGo;
          const sec = SecondToDrawConst - time;
          console.log(sec);
          setSecondToGo(sec);
        }
      }
    }
  };

  // useEffect(() =>{

  // })

  useEffect(() => {
    let interval = setInterval(() => {
      //Czas do końca
      if (secondToGo === 0) {
        if (minutesToGo !== 0) {
          setSecondToGo(59);
          setMinutesToGo((m) => m - 1);
        } else {
          quitGame();
        }
      } else {
        setSecondToGo((s) => s - 1);
      }

      //Czas do losowania
      if (secondToDraw > 0) {
        setSecondToDraw((s) => s - 1);
      } else {
        if (timeToEnd()) {
          setSecondToDraw(SecondToDrawConst - 1);
          resetBoard();
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [secondToGo, secondToDraw]);

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
