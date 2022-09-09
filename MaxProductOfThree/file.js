'use strict'

const solution = (A) => {

    let maxProduct = -Infinity;
    let prod;
    const N = A.length;

    for(let p = 0; p < N; p ++) {
        for(let q = p + 1; q < N; q++ ) {
            for(let r = q + 1; r < N; r++) {
                prod = A[p] * A[q] * A[r];
                if(prod > maxProduct) {
                    maxProduct = prod;
                }
            }
        }
    }

    return maxProduct;
};

console.log(solution([-3, 1, 2, -2, 5, 6]));

