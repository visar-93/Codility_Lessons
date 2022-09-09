// Codility Score: 60%

'use strict'

const solution = (A) => {

    const n = A.length;
    let cars = 0;

    for(let p = 0; p < n; p++) {
        for(let q = p+1; q < n; q++) {
            if(A[p] === 0 && A[q] !== A[p]) {
                cars++
            }
            if(cars > 1000000000) return -1;
        }
    }

return cars;
};

console.log(solution([0, 1, 0, 1, 1]))
