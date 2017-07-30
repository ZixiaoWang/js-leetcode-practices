// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

// For "(()", the longest valid parentheses substring is "()", which has length = 2.

// Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let count = 0;
    
    function digest(s){
        let filteredS = s.replace(/\((_*)\)/, '_$1_');
        return filteredS === s ? filteredS : digest(filteredS);
    }

    digest(s).split(/\(|\)/).forEach(substring => {
        count = substring.length > count ? substring.length : count;
    });

    return count;
};

var str = "()(())"
console.log(
    longestValidParentheses(str)
)