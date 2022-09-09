// Codility Score: 77%

"use strict";

const solution = (N, A) => {

    let counters = Array(N).fill(0);
    let maxCounter;

    for(let i = 0; i < A.length; i++) {

        if(A[i] === (N + 1)) {
            maxCounter = Math.max(...counters);
            counters.fill(maxCounter);
        }

        if(A[i] >= 1 && A[i] <= N) {
            counters[A[i] -1 ] +=1;
        }
    }
    return counters;
};

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
