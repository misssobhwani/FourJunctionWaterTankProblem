
// This code creates a grid based on the input array and colors the cells based on the height of blocks and water levels.
function visualizeBlocksFromInput(){
  const inputField = document.getElementById("userInput");
  const input = inputField.value.split(",").map(Number).filter(n => !isNaN(n));
// const input = [0, 4, 0, 0, 0,6,0,6,4,0];
const rows = Math.max(...input);
const cols = input.length;

const table = document.getElementById("grid");

let waterCellCount = 0; // Counter for blue (water) cells

// Create an empty grid
for (let r = 0; r < rows; r++) {
  const tr = document.createElement("tr");

  for (let c = 0; c < cols; c++) {
    const td = document.createElement("td");

    const blockHeight = input[c];
    const rowFromBottom = rows - r;

    if (blockHeight > 0) {
      // It's a block: paint yellow
      if (rowFromBottom <= blockHeight) {
        td.className = "block";
      }
    } else {
      // It's 0: Check for water between blocks
      let leftBlock = 0;
      let rightBlock = 0;

      // Look left
      for (let i = c - 1; i >= 0; i--) {
        if (input[i] > 0) {
          leftBlock = input[i];
          break;
        }
      }

      // Look right
      for (let i = c + 1; i < cols; i++) {
        if (input[i] > 0) {
          rightBlock = input[i];
          break;
        }
      }

      // Fill water if there are blocks on both sides
      const waterLevel = Math.min(leftBlock, rightBlock);
      if (rowFromBottom <= waterLevel && waterLevel > 0) {
        td.className = "water";
        waterCellCount++; // Count this water cell
      }
    }

    tr.appendChild(td);
  }

  table.appendChild(tr);
}

// Show the total number of blue cells
const waterInfo = document.createElement("p");
waterInfo.textContent = `Total water (blue) cells: ${waterCellCount}`;
document.body.appendChild(waterInfo);
}


  