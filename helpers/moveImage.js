export function moveImage({
  fromIndex,
  toIndex,
  dragStartType,
  sectionImageDiv,
  imagePlaceholders,
}) {
  let fromItem =
    dragStartType === "subImage"
      ? sectionImageDiv[fromIndex].querySelector("img")
      : imagePlaceholders[fromIndex].querySelector("img");

  const toItem = imagePlaceholders[toIndex].querySelector("img");

  appendChildEle(imagePlaceholders[toIndex], fromItem, toIndex);

  if (!toItem) {
    if (dragStartType === "subImage") {
      sectionImageDiv[
        fromIndex
      ].innerHTML = `<div class="empty-sub">${fromIndex}</div>`;
    } else {
      imagePlaceholders[fromIndex].innerHTML = "";
      imagePlaceholders[fromIndex].style.border = "1px solid gray";
    }
    imagePlaceholders[toIndex].style.border = "none";
  } else {
    if (dragStartType === "subImage") {
      sectionImageDiv[fromIndex].innerHTML = "";
      sectionImageDiv[fromIndex].appendChild(toItem);
    } else {
      appendChildEle(imagePlaceholders[fromIndex], toItem, fromIndex);
    }
  }
}

function appendChildEle(parent, child, index) {
  parent.innerHTML = "";
  parent.appendChild(child);
  parent.dataset.currentPosition = index;
  parent.dataset.actualPosition = child.dataset.actualPosition;
}
