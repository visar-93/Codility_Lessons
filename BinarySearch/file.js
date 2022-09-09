'use strict'

const solution = (A,K) => {

    A = A.sort((a, b) => a < b ? -1 : 1);
    let index = -1;
    let begin = 0;
    let end = A.length - 1;
    let middle = begin + Math.round((end - begin)/2);

    while(begin <= end && index === -1) {
        if(K === A[middle]) {
            index = middle;
        }
        else if(K < A[middle]) {
            end = middle - 1;
        }
        else if(K > A[middle] ) {
            
            begin = middle + 1;
        }
        middle = begin + Math.round((end - begin)/2);
    };
    return index;
}

console.log(solution([26,31, 33, 38, 47, 49, 49, 67, 73, 74, 82, 89, 90, 91, 95], 47));
console.log(solution([26,31, 33, 38, 47, 49, 49, 67, 73, 74, 82, 89, 90, 91, 95], 74));
console.log(solution([26,31, 33, 38, 47, 49, 49, 67, 73, 74, 82, 89, 90, 91, 95], 33));
console.log(solution([26,31, 33, 38, 47, 49, 49, 67, 73, 74, 82, 89, 90, 91, 95], 94));
