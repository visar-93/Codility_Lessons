// Codility Score 100%

"use strict";

const solution = (A) => {
  const map = new Map();

  for (let i = 0; i < A.length; i++) {
    const element = A[i];
    if (!map.has(element)) {
      map.set(element, 1);
    } else {
      map.set(element, map.get(element) + 1);
    }
  }

  for (const [key, value] of map.entries()) {
    if (value % 2 !== 0) return key;
  }
};

console.log(solution([9, 3, 9, 3, 9, 7, 7, 7, 9, 8, 8, 10, 10]));
