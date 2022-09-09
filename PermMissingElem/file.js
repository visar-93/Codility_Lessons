// Score in Codility: 80%

"use strict";

const solution = (A) => {
  let missingElement;

  if(A.length === 0) {
    return 1;
  }

  if (A.length === 1) {
    if (A[A.length-1] < 1) return 1;
    else return A[A.length-1];
  }

  A.sort((a, b) => a < b ? -1 : 1);

  for (let i = 1; i < A.length; i++) {
    if (A[i] - A[i - 1] > 1) {
      missingElement = A[i - 1] + 1;
      break;
    }
  }
  if (!missingElement) {
    if(A[0] !== 1) {
      missingElement = A[0] - 1;
    }
    else if (A[0] === 1){
      missingElement = A[A.length - 1] + 1;
    }
  }
  return missingElement;
};

console.log(solution([2, 3, 1, 4, 5, 7, 9, 6, 8, 10, 12]));
console.log(solution([2]));
