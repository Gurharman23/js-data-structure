"use strict";

const fs = require("fs");
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");
  main();
});

function readLine() {
  return inputString[currentLine++];
}
const magicMatrices = [
  [
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2],
  ],
  [
    [6, 1, 8],
    [7, 5, 3],
    [2, 9, 4],
  ],
  [
    [4, 3, 8],
    [9, 5, 1],
    [2, 7, 6],
  ],
  [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
  ],
  [
    [2, 9, 4],
    [7, 5, 3],
    [6, 1, 8],
  ],
  [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6],
  ],
  [
    [6, 7, 2],
    [1, 5, 9],
    [8, 3, 4],
  ],
  [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2],
  ],
];

function matricesDiff(mat1, mat2) {
  let diff = 0;
  diff += Math.abs(mat1[0][0] - mat2[0][0]);
  diff += Math.abs(mat1[0][1] - mat2[0][1]);
  diff += Math.abs(mat1[0][2] - mat2[0][2]);
  diff += Math.abs(mat1[1][0] - mat2[1][0]);
  diff += Math.abs(mat1[1][1] - mat2[1][1]);
  diff += Math.abs(mat1[1][2] - mat2[1][2]);
  diff += Math.abs(mat1[2][0] - mat2[2][0]);
  diff += Math.abs(mat1[2][1] - mat2[2][1]);
  diff += Math.abs(mat1[2][2] - mat2[2][2]);
  return diff;
}
/*
 * Complete the 'formingMagicSquare' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */
function formingMagicSquare(mat) {
  // Write your code here
  let minCost = Infinity;
  magicMatrices.forEach((magicMat) => {
    const diff = matricesDiff(magicMat, mat);
    if (diff < minCost) minCost = diff;
  });
  return minCost;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  console.log("==========input=======", inputString);
  let s = Array(3);

  for (let i = 0; i < 3; i++) {
    s[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((sTemp) => parseInt(sTemp, 10));
  }

  const result = formingMagicSquare(s);
  console.log("==========ouput=======", result);
  ws.write(result + "\n");

  ws.end();
}
