// Codility Score: 100%
// https://danwritescode.com/passing-cars-codility-100-correct-javascript-solution/

'use strict'

const solution = (A) => {

    let sum = 0
    let result = 0
    for (let i = A.length-1; i >= 0; i--){
        if (A[i] === 1) {
            sum++
        } else {
            result += sum
        }
        if (result > 1000000000) {
            result = -1
            break
        }
    }
    return(result)
};

console.log(solution([0, 1, 0, 1, 1]))
