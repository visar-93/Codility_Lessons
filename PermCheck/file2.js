'use strict'

const solution = (A)=> {
    A.sort((a,b) => a<b ?-1 : 1);
    console.log(A)
    for(let i = 1; i < A.length; i++) {
        if(A[i] - A[i-1] > 1) {
            return 0
        }
    }

    return 1;
}



console.log(solution([4,1,3,2]));
