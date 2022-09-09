// Codility Score: 100%

'use strict'

const solution = (X, Y, D) => {

    let jumps;

    jumps = Math.ceil((Y-X)/D);

    return jumps;
};


console.log(solution(10, 85, 30));
console.log(solution(10, 105, 30));
console.log(solution(20, 245, 50));
