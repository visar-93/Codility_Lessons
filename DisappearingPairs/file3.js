'use strict'

const solution = (A) => {

    const aArray = [...A];
    let resString = [];

    for(let ch of aArray) {
        if(resString.length > 0 && resString[resString.length - 1] === ch) {
            resString.pop();
        }
        else resString.push(ch);
    }
    let result = '';
    for(let ch of resString) {
        result +=ch;
    }

return result;

}

console.log(solution('ACCAABBC'));
console.log(solution('ABCBBCBA'));
console.log(solution('BABABA'));
