import { AdMobInterstitial, AdMobRewarded } from "expo-ads-admob";
import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { CardStore, Round } from "../const";
import { CardStoreConstructor } from "../const/function";

const androidInterId = "ca-app-pub-3940256099942544/1033173712";

export const CardManager = createContext({} as CardStore);

export const CardManagerProvider: FC = ({ children }) => {
  const [card, setCard] = useState(CardStoreConstructor());
  const [clickerCounter, setClickerCounter] = useState(0);
  const [currentRound, setCurrentRound] = useState([] as Round[]);
  const [currentPair, setCurentPair] = useState(0);
  const [numberOfFoundPairs, setNumberOfFoundPairs] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  //#region increment value
  const incrementFoundPairs = () => {
    setCurentPair((n) => n + 1);
    setNumberOfFoundPairs((n) => n + 1);
  };

  const incrementClicker = () => {
    setClickerCounter((c) => c + 1);
  };
  //#endregion

  const updateCard = (index: number) => {
    setCard((card) => [
      ...card.slice(0, index),
      { ...card[index], flipped: !card[index].flipped },
      ...card.slice(index + 1),
    ]);
  };

  const update = (index: number) => {
    setCurrentRound((r) => [
      ...r,
      { index: index, pictureId: card[index].pictureId },
    ]);
  };

  const setFlipped = (index: number) => {
    if (!gameOver) {
      //Jeżeli: karta jest zakryta i jest mniej odkrytych niż 2
      if (!card[index].flipped && currentRound.length < 2) {
        updateCard(index);
        incrementClicker();
        update(index);
      }
      //Jeżeli karta jest zakryta, ale są już dwie odkryte
      else if (!card[index].flipped && currentRound.length == 2) {
        //Dwie odkryte karty są różne
        if (currentRound[0].pictureId !== currentRound[1].pictureId) {
          currentRound.forEach((item) => {
            updateCard(item.index);
          });
          setCurrentRound([]);
          updateCard(index);
          incrementClicker();
          update(index);
        }
        //Jeżeli została kliknięta któraś z klikniętych
      } else if (card[index].flipped && currentRound.length == 2) {
        const indexToSave = currentRound.findIndex((i) => i.index === index);
        let indexToRemove;
        if (indexToSave === 0) {
          indexToRemove = 1;
        } else {
          indexToRemove = 0;
        }
        updateCard(currentRound[indexToRemove].index);
        setCurrentRound([{ ...currentRound[indexToSave] }]);
        incrementClicker();
      }
    }
  };

  const resetBoard = () => {
    setCard(CardStoreConstructor());
    setCurrentRound([]);
    setCurentPair(0);
  };

  const findMe = () => {
    if (currentRound.length === 1) {
      const find = () => {
        const findIndex = card.findIndex(
          (card, i) =>
            card.pictureId === currentRound[0].pictureId &&
            currentRound[0].index !== i
        );
        updateCard(findIndex);
        incrementFoundPairs();
        incrementClicker();
        setCurrentRound([]);
      };

      getRewardForAds(find);
    }
  };

  const quitGame = () => {
    setGameOver(true);
  };

  //#region

  const getRewardForAds = (btnAction: () => void) => {
    if (!gameOver) {
      const showInterstitialAds = async () => {
        try {
          await AdMobRewarded.setAdUnitID(
            "ca-app-pub-3940256099942544/5224354917"
          ); // Test ID, Replace with your-admob-unit-id
          await AdMobRewarded.requestAdAsync();
          await AdMobRewarded.showAdAsync();
        } catch {
          (e: any) => console.log(e);
        }
      };
      showInterstitialAds();
      btnAction();
    }
  };

  //#endregion

  useEffect(() => {
    if (currentRound.length === 2) {
      //Dwie karty są takie same
      if (currentRound[0].pictureId === currentRound[1].pictureId) {
        setCurrentRound([]);
        incrementFoundPairs();
      }
    }
  }, [currentRound]);

  useEffect(() => {
    if (currentPair % 10 === 0) {
      setCard(CardStoreConstructor());
    }
  }, [currentPair]);

  //#region ADS
  useEffect(() => {
    if (gameOver) {
      const showInterstitialAds = async () => {
        try {
          AdMobInterstitial.setAdUnitID(androidInterId);
          await AdMobInterstitial.requestAdAsync({
            servePersonalizedAds: false,
          });
          await AdMobInterstitial.showAdAsync();
        } catch {
          (e: any) => console.log(e);
        }
      };

      showInterstitialAds();
    }
  }, [gameOver]);

  //#endregion

  return (
    <CardManager.Provider
      value={{
        card,
        clickerCounter,
        numberOfFoundPairs,
        gameOver,
        setFlipped,
        resetBoard,
        findMe,
        quitGame,
        getRewardForAds,
      }}
    >
      {children}
    </CardManager.Provider>
  );
};
