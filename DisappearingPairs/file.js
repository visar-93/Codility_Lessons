'use strict'

const solution = (S) => {

    const A = [...S];
    let retString = '';
    // console.log(A)
    
    let i= 0;
    while(i < A.length )  {

        for(let i = 0; i < A.length; i++) {
            if(A[i] === 'A' && A[i+1] === A[i]) {
                A.splice(i, 2);
                // console.log(A)
                break;
            }
        }
        for(let i = 0; i < A.length; i++) {
            if(A[i] === 'B' && A[i+1] === A[i]) {
                A.splice(i, 2);
                // console.log(A)
                break;
            }
        }
        for(let i = 0; i < A.length; i++) {
            if(A[i] === 'C' && A[i+1] === A[i]) {
                A.splice(i, 2);
                // console.log(A)
                break;
            }
        }
        i++;
    }
    // console.log(A)
    if(A.length === 0) {
        retString  = '';
    } 
    else if(A.length === 2 && A[0] === A[1]) {
       
        retString  = '';
    }
    else {
        for(let letter of A) {
            retString += letter;
        }
    }
    // console.log(retString)
    return retString;
};


console.log(solution('ACCAABBC'));
console.log(solution('ABCBBCBA'));
console.log(solution('BABABA'));
