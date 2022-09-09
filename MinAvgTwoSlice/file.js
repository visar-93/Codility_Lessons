// Codility Score: 50% (Correctness 100%)

"use strict";

const solution = (A) => {
  const n = A.length;
  let sum;
  let avg;
  let minAvg = 100;
  const sliceMap = new Map();

  for (let p = 0; p < n; p++) {
    sum = A[p];
    for (let q = p + 1; q < n; q++) {
      if (q > p) {
        sum += A[q];
        avg = sum / (q - p + 1);
        if (avg < minAvg) {
          minAvg = avg;
        }
        sliceMap.set([p, q], avg);
      }
    }
  }

  for (const [key, value] of sliceMap.entries()) {
    if (value === minAvg) {
      return key[0];
    }
  }
};

console.log(solution([4, 2, 2, 5, 1, 5, 8]));
