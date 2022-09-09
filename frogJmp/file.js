// Codility Score 44% (Correctness 100%)

'use strict'

const solution = (X, Y, D) => {
  let i=1;
  if(X >= Y) {
    return 0;
  }
  while((X+D )< Y) {
    X+=D;
    i++;
  }
  return i;

};


console.log(solution(10, 85, 30));
