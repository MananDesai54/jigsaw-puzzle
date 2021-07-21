import "./style.css";
import { getImageParts } from "./helpers/getImageParts";
import { moveImage } from "./helpers/moveImage";
import { checkWin } from "./helpers/checkWin";

/**
 * DOM element queries
 */
const imagePartsDiv = document.querySelector(".image-parts");
const originalImage = document.querySelector(".created-image");
const backdrop = document.querySelector(".backdrop");
const movesPlaceholder = document.getElementById("moves");
const replayButton = document.getElementById("replay");

/**
 * global variables
 */
const imageParts = getImageParts();
let dragStartIndex,
  sectionImageDiv,
  dragStartType,
  imagePlaceholders,
  moves = 0;

/**
 * Drag Events
 */
function dragStart() {
  dragStartIndex = +this.getAttribute("data-current-position");
  dragStartType = this.getAttribute("data-type");
}
function dragOver(event) {
  event.preventDefault();
}
function dragDrop() {
  this.classList.remove("enter");
  const dragDropIndex = +this.getAttribute("data-drop-index");
  moveImage({
    fromIndex: dragStartIndex,
    toIndex: dragDropIndex,
    dragStartType,
    imagePlaceholders,
    sectionImageDiv,
  });
  moves++;
  const isWIn = checkWin(imagePlaceholders);
  if (isWIn) {
    backdrop.classList.remove("hidden");
    movesPlaceholder.textContent = moves;
    moves = 0;
  }
}
function dragEnter() {
  this.classList.add("enter");
}
function dragLeave() {
  this.classList.remove("enter");
}

/**
 * function to add event listener to all the required elements
 */
function addEventListeners() {
  imageParts.forEach((image) => {
    imagePartsDiv.appendChild(image);
    image.addEventListener("dragstart", dragStart);
  });
  sectionImageDiv = imagePartsDiv.querySelectorAll("div");

  imagePlaceholders.forEach((placeholder) => {
    placeholder.addEventListener("dragover", dragOver);
    placeholder.addEventListener("drop", dragDrop);
    placeholder.addEventListener("dragenter", dragEnter);
    placeholder.addEventListener("dragleave", dragLeave);
    placeholder.addEventListener("dragstart", dragStart);
  });

  replayButton.addEventListener("click", () => location.reload());
  backdrop.addEventListener("click", () => backdrop.classList.add("hidden"));
}

(function main() {
  for (let i = 0; i < imageParts.length; i++) {
    const placeholder = document.createElement("div");
    placeholder.classList.add("placeholder");
    placeholder.dataset.dropIndex = i;
    placeholder.dataset.type = "originalImage";
    originalImage.appendChild(placeholder);
  }
  imagePlaceholders = document.querySelectorAll(".placeholder");
  addEventListeners();
})();
