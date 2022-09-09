//  https://danwritescode.com/brackets-codility-100-correct-solution-in-javascript/

"use strict";

const solution =(S) => {

let index = 0;
let stack = [];

while(index < S.length) {
    if(stack.length ===0) {
        if(S[index] === '}' || S[index] === ']' || S[index] === ')') {
            return 0;
        }
        else {
            stack.push(S[index]);
        }
    }
    else if(is_nested(stack[stack.length-1], S[index])) {
        stack.pop(stack[stack.length-1]);
    }
    else {
        if(S[index] === '}' || S[index] === ']' || S[index] === ')') {
            return 0;
        }
        else {
           stack.push(S[index]);
        }
    }
    index++;
}

if(stack.length === 0) return 1;
else return 0;
};

const is_nested = (a,b) => {
    if((a=== '{' && b === '}') || (a === '[' && b === ']') || (a === '(' && b === ')'))
        return true;
    else return false;
}

console.log(solution("{[()]}"));
