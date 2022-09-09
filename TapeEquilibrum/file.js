// Score for this exercise: 100%
// https://codereview.stackexchange.com/questions/239609/tapeequilibrium-codility-javascript

const solution = (A) => {
  let sum = A.reduce((total, value) => total + value, 0);
  let min = Number.POSITIVE_INFINITY;
  let cumulativeSum = 0;
  for (let i = 0; i < A.length - 1; ++i) {
    cumulativeSum = cumulativeSum + A[i];
    sum = sum - A[i];
    diff = Math.abs(sum - cumulativeSum);
    if (diff < min) {
      min = diff;
    }
  }
  return min;
};

console.log(solution([3, 1, 2, 4, 3]));
