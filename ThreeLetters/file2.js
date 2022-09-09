'use strict'

const solution = (A,B) => {
    let aArray = Array(A).fill('a');
    let bArray = Array(B).fill('b');
    let cArray = [];

    while(aArray.length > 0 && bArray.length > 0) {
        const big = aArray.length >= bArray.length ? aArray : bArray
        const small = aArray.length >= bArray.length ? bArray : aArray
        const inserts = big.length - small.length >= 2 ? 2 : 1
        
        for (let i = 0; i < inserts; i++) {
            cArray.push(big.pop())
        }

        cArray.push(small.pop())
    }

    while(aArray.length > 0) {
        cArray.push(aArray.pop());
    }

    while(bArray.length > 0) {
        cArray.push(bArray.pop());
    }

    return cArray.join('');
}

console.log(solution(5, 3));
console.log(solution(3, 3));
console.log(solution(1, 4));
console.log(solution(6, 6));
