'use strict' 

const solution = (A) => {
    let missingElement;
    A.sort((a, b) => a < b ? -1 : 1);
    A = A.filter(element => element > 0)
    if (A.length === 0) {
        return 1
    }
    if (A.length === 1) {
        if (A[0] < 1) {
            return 1
        }
        return A[0] + 1
    }
    
    for(let i=1; i < A.length; i++) {
        if(A[i] - A[i-1] > 1) {
            missingElement = A[i-1] +1;
            break;
        }
    }

    if(!missingElement) {
        missingElement = A[A.length-1] + 1;
    }

    return missingElement;

};

console.log(solution([1, 3, 6, 4, 1, 2]))
console.log(solution([1, 2, 3]))
console.log(solution([-1, -3]))
console.log(solution([-1, -2, -3]))
console.log(solution([-1, -2, -3, 0]))
