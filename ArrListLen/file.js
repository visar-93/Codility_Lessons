'use strict'

const solution = (A) => {

    let element = 0;
    let counter = 0;

    if(A.length === 0) {
        return 0;
    }

    while(element !== -1) {
        element = A[element];
        counter +=1;
    }

    return counter;
};

console.log(solution([1, 4, -1, 3, 2]));
