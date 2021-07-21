import { shuffleArray } from "./shuffleArray";

export const getImageParts = () => {
  const shuffledImageElements = [];
  const shuffledImagePathArray = shuffleArray([
    { name: "1.png", position: 0 },
    { name: "2.png", position: 1 },
    { name: "3.png", position: 2 },
    { name: "4.png", position: 3 },
    { name: "5.png", position: 4 },
    { name: "6.png", position: 5 },
    { name: "7.png", position: 6 },
    { name: "8.png", position: 7 },
    { name: "9.png", position: 8 },
  ]);
  shuffledImagePathArray.forEach((image, index) => {
    const divEle = document.createElement("div");
    const imageEle = document.createElement("img");
    imageEle.src = `../assets/images/${image.name}`;
    imageEle.draggable = true;
    imageEle.dataset.actualPosition = image.position;
    divEle.dataset.currentPosition = index;
    divEle.dataset.type = "subImage";
    divEle.appendChild(imageEle);
    shuffledImageElements.push(divEle);
  });
  return shuffledImageElements;
};
