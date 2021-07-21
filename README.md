# Jigsaw Puzzle

- A image based puzzle in which we will be given unsorted parts of an image and we need to make a proper image from it

# Requirement

- Nodejs
- npm/yarn
- Vite CLI
- A Modern Browser
- A good IDE

# How to Run The Project

- `npm install` or `yarn`
- `npm run dev` or `yarn dev`
- Development server will start on `localhost:3000`

# Approach

- First of all I used `Vite` to create the vanilla JavaScript Project.
- `main.js` is the entry point for JavaScript.
- First I created an array of subparts of an image, then I shuffled the array and created image elements for all of them and return the shuffled array (refer `getImageParts.js` and `shuffleArray.js`).
- Then I used HTML5 `Drag N Drop API` for choosing the sub part to create the original image.
- You can `Drag N Drop` part from the shuffled grid to original image creation grid and you can also swap part in original creation grid. (refer `moveImage.js)`
- And while moving the images I created one moves counter to count number of moved we took to solve the puzzle.
- After we create the image from parts the `checkWin.js` verifies the image.
- And when we won the game one notification will be shown, which will consist number of moves and Button to restart the game.
