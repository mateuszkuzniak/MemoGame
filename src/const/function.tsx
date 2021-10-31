import { imageArray } from "../images/image";
import { Card } from "./type";

export const shuffleArray = (array: any[]) => {
  let temp = [...array];
  temp = temp.sort(() => Math.random() - 0.5);
  return temp;
};

export const CardStoreConstructor = () => {
  let card = [] as Card[];
  const tmpImg = shuffleArray(imageArray);
  tmpImg.map((img, i) => {
    card.push({
      boxId: "box_".concat(i.toString()),
      pictureId: img.id,
      pathToFile: img.path,
      flipped: false,
      paired: false,
    });
  });

  return card;
};
