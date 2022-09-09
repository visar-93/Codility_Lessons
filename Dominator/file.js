// Codility Score: 100%

'use strict'

const solution = (A)=> {

    const countMap = new Map();
    for(let element of A) {
        if(countMap.has(element)) {
            let count = countMap.get(element) + 1;
            countMap.set(element, count);
        } else {
            countMap.set(element, 1);
        }
    }
    let temp = 0;
    let key;
    for(let pair of countMap) {
        if(pair[1] > temp) {
            temp = pair[1];
            key = pair[0];
        }
    }
    if(temp > A.length / 2) {
        return A.indexOf(key);
    }
    else return -1;
};

console.log(solution([3, 4, 3, 2, 3, -1, 3, 3]));
