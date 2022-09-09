// Codility Score: 84% (Correctness: 100%)

'use strict' 

const solution = (A) => {

    const n = A.length
    let maxSum = A[0]
    for(let p = 0; p < n; p++) {
        let sum = A[p]
        for(let q = p; q < n; q++) {
            if (q > p) {
                sum += A[q]                
            }

            if (maxSum < sum) {
                maxSum = sum
            }
        }
    }

    return maxSum
}

console.log(solution([3, 2, -6, 4, 0]));
