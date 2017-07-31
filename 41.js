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
    let arr = new Array();
    let outcome;
    
    nums.forEach(num => {
        if(num > 0){
            arr[num] = num;
        }
    });

    console.log(arr)
    
    for(let i=1; i<arr.length; i++){
        if(arr[i] === undefined){
            outcome = i + 1;
            break;
        }
    }
    
    return outcome ? outcome : 1;
};

var arr = [2, 1];
var arr2 = [1];
var result = firstMissingPositive(arr2);
console.log( result );