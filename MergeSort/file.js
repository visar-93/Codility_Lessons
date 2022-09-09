// This exercise is learned from:
// https://www.doabledanny.com/merge-sort-javascript

'use strict'

const mergeSort = (A) => {
    
    if( A.length <= 1) {
        return A;
    }

    let middleElement = Math.floor(A.length / 2);

    let leftArray = mergeSort(A.slice(0, middleElement));
    let rightArray = mergeSort(A.slice(middleElement));

    return merge(leftArray, rightArray);
};

const merge = (leftArray, rightArray) => {

    let sortedArray = [];

    while(leftArray.length && rightArray.length) {

        if (leftArray[0] < rightArray[0]) {
            sortedArray.push(leftArray.shift());
        }
        else {
            sortedArray.push(rightArray.shift());
        }
    }

    return [...sortedArray, ...leftArray, ...rightArray];
};

console.log(mergeSort([15, 5, 24, 8, 1, 3, 16, 10, 20]));
// console.log(merge([1, 4], [2, 6, 9]));
