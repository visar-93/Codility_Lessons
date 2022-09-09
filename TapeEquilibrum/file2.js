// Score for this exercise: 53% (Correctness 100%)

'use strict'

const solution = (A) => {

    let results_Array = [];
    if(A.length < 2) {
        return A[0];
    }
      const initialValue = 0;
      
      for(let P=1; P < A.length; P++) {
        let A1 = [];
        let A2 = [];
        let sumA1 = 0;
        let sumA2 = 0;
        let PSum = 0;

        A1 = A.slice(0,P);
        A2 = A.slice(P);
        
        sumA1 = A1.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          initialValue
        );
  
        sumA2 = A2.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          initialValue
        );
  
          PSum = Math.abs(sumA1 - sumA2);
          results_Array.push(PSum);
        }

    return Math.min(...results_Array);
}

console.log(solution([3,1,2,4,3]));
