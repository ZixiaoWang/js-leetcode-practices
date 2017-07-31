// Given an unsorted integer array, find the first missing positive integer.

// For example,
// Given [1,2,0] return 3,
// and [3,4,-1,1] return 2.

// Your algorithm should run in O(n) time and uses constant space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let obj = {};
    let outcome = 1;

    nums.forEach(num => {
        if(num > 0){
            obj[num] = num;
        }
    });

    let sortedArr = Object.keys(obj);
    if (sortedArr.length === 0) {
        return 1;
    }else{
        for (let index=0; index<sortedArr.length; index++) {
            let num = parseInt(sortedArr[index]);
            if(num !== index + 1){
                return index + 1;
            }
        }
        return sortedArr.length + 1;
    }
    
};

var arr = [2, 1];
var arr2 = [1];
var result = firstMissingPositive(arr2);
console.log( result );