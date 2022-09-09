"use strict";

const solution = (A, B, C) => {
    const n = A.length;
    const m = C.length;
    let all_planks = Array(n).fill(false);

    for (let i = 0; i < m; i++) {
        for (let k = 0; k < n; k++) {
            if (A[k] <= C[i] && C[i] <= B[k]) {
                if (all_planks[k] === false) {
                    all_planks[k] = true;
                }
            }
            if (all_planks.every(element => element === true)) {
                return i + 1;
            }
        }
    }
    return -1;
};

console.log(solution([1, 4, 5, 8], [4, 5, 9, 10], [4, 6, 7, 10, 2]));
