'use strict'

const solution = (A,B) => {
    let aArray = Array(A).fill('a');
    let bArray = Array(B).fill('b');
    let cArray = [];

    while(aArray.length >0 && bArray.length > 0) {

        if(aArray.length > bArray.length && bArray.length >= 1) {
            cArray.push(aArray.pop());
            cArray.push(aArray.pop());
        }
        else if(bArray.length > aArray.length && aArray.length >= 1) {
            cArray.push(bArray.pop());
            cArray.push(bArray.pop());
        }
        else if(aArray.length === bArray.length)
        {   
            if(cArray[cArray.length-1] === 'a') {
            cArray.push(bArray.pop());
            cArray.push(aArray.pop());
            } else {
                cArray.push(aArray.pop());
            cArray.push(bArray.pop());
            }
        }
    }
    while(aArray.length > 0) {
        cArray.push(aArray.pop());
    }
    while(bArray.length > 0) {
        cArray.push(bArray.pop());
    }
    return cArray.join('');
}

// console.log(solution(5,3));
// console.log(solution(3,3));
console.log(solution(1,4));
