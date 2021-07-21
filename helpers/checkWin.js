export function checkWin(imagePlaceholders) {
  for (let index = 0; index < imagePlaceholders.length; index++) {
    if (
      +imagePlaceholders[index].dataset.currentPosition !==
      +imagePlaceholders[index].dataset.actualPosition
    ) {
      return false;
    }
  }
  return true;
}
