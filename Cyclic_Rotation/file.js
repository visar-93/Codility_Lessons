// The score on codility is 87%

'use strict'

const solution = (A, K) => {

  let i=1;

  if(A.length === 0) {
    return 1;
  }

  while ( i <= K) {
    // last_element = A.pop();
    A.unshift(A.pop());
    i++;
  }

  return A;
}

console.log(solution([3,8,9,7,6], 4));
