function solution(X, A) {

  let seconds = 0;
  let positions = Array(X).fill(false);

  for(let i=0; i< A.length; i++) {
    if(A[i] <= X) {
      positions[A[i]-1] = true;
      if(positions.every(element => element === true)) {
        return seconds;
      } 
    }
    seconds++;
  }
  return -1;

};

console.log(solution(5, [1,3,1,4,2,3,5,4]));
