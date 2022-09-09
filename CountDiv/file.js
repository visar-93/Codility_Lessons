'use strict'

const solution = (A,B,K) => {
    
    let counDiv = 0;

    for(let i = A; i <= B; i++ ) {

        if(i % K === 0) {
            counDiv +=1;
        }
    }

    return counDiv;
}

console.log(solution(6, 11, 2));
console.log(solution(2,12, 2));
