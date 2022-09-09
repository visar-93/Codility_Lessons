// Codility Score: 50%

'use strict'

const solution = (A)=> {
    
    let pairs = [];
    for(let i = 0; i < A.length; i++ ) {
        for(let j = i + 1; j < A.length; j++) {
            if(A[i]===0 && A[i] !== A[j] ) {
                pairs.push([i,j]);
            }
        }
    }

    return pairs.length;
};

console.log(solution([0, 1, 0, 1, 1]))
