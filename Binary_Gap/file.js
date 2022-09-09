// The score on codility is 53%

'use strict'

const solution = (N) => {
    const binary = []
    while (N > 0) {
        binary.push(N % 2);
        N = Math.floor(N / 2);
    }
    binary.reverse();

    let foundStart = false;
    let count = 0;
    let result = 0;

    for(let i = 0; i < binary.length; i++) {
        const element = binary[i];
        if (element === 1) {
            if (!foundStart) { 
                foundStart = true
            } else {
                // found end
                if(count > result) result = count
                // reset
                foundStart = false
                count = 0
                continue
            }
        } else {
            if (foundStart) count++
        }
    }

    return result;
};

console.log(solution(529))


