// Codility Score: 100%

'use strict'

const solution = (A) => {

    // find unique element
    // const counter = new Map();

    // for(const element of A ) {
    //     if(counter.has(element)) {
    //         const value = counter.get(element) + 1;
    //         counter.set(element, value);
    //     }
    //     else {
    //         const value = 1;
    //         counter.set(element, value);
    //     }
    // }
    // for(const key of counter) {
    //     if(key[1] === 1)
    //     return key[0];
    // }

    // find unique element
    // const counter = {}
    // for (let i = 0; i < A.length; i++) {
    //     const element = A[i];
    //     if (counter[element]) {
    //         counter[element] += 1
    //     } else {
    //         counter[element] = 1
    //     }
    // }
    // console.log(counter)
    // for (const key in counter) {
    //     if (counter[key] === 1) {
    //         return key;
    //     }
    // }

    // find number of unique elements
    // const counter = new Set(A);
    // console.log(counter.size)
    // return counter.size;

    // const counter = {}
    // for (const element of A) {
    //     if (!counter[element]) {
    //         counter[element] = 1
    //     }
    // }
    // console.log(counter)
    // return Object.keys(counter).length

    
    const table = {}
    let uniqueCount = 0
    for (const element of A) {
        if (!table[element]) {
            table[element] = 1
            uniqueCount++
        }
    }
    return uniqueCount
};
console.log(solution([2,1,1,2,3,1]));
