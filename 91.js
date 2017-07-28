// A message containing letters from A-Z is being encoded to numbers using the following mapping:

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// Given an encoded message containing digits, determine the total number of ways to decode it.

// For example,
// Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).

// The number of ways decoding "12" is 2.

/**
 * @param {string} s
 * @return {number}
 */

function another(s){
    let str = s;

    str = str.replace(/1([1-9])|2([1-6])/g, 'B$1');
    str = s.replace(/10|2[0789]|[3-9][1-9]/g, 'A');
    str = str.replace(/[1-9]/g, 'A');

    if(/0/.test(str)){
        return 0;
    }else{
        let ifA = str.match(/A/g);
        let ifB = str.match(/B/g);

        if(ifA){ count = 1; }
        if(ifB){ count =  Math.pow(2, ifB.length)}
        return str;
    }
}

var str = '111';
console.log(
    another(str)
);