// Codility Score: 75%

"use strict";

const solution = (A) => {
  if (A.length < 2) return 0;

  const n = A.length;

  for (let p = 0; p < n; p++) {
    for (let q = p + 1; q < n; q++) {
      for (let r = q + 1; r < n; r++) {
        if (A[p] + A[q] > A[r] && A[q] + A[r] > A[p] && A[r] + A[p] > A[q]) {
          return 1;
        }
      }
    }
  }
  return 0;
};

console.log(solution([10, 2, 5, 1, 8, 20]));
console.log(solution([10, 50, 5, 1]));
