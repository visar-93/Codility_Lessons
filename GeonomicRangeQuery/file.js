// Codility Score: 100%

'use strict'

const solution = (S, P, Q) => {

    const nucleotidesMap = new Map();
    
    nucleotidesMap.set('A', 1);
    nucleotidesMap.set('C', 2);
    nucleotidesMap.set('G', 3);
    nucleotidesMap.set('T', 4);
   
    const M = P.length;
    let answers = [];
    let empty = [];

    for (let i = 0; i < M; i++ ) {
        for(let j = P[i]; j <= Q[i]; j++) {
            empty.push(nucleotidesMap.get(S.charAt(j)))
        }
            answers.push(Math.min(...empty));
            empty = [];
    }

    return answers;
};

console.log(solution('CAGCCTA', [2,5,0], [4,5,6]));
