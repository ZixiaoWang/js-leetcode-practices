/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let possibleResultsNum = 0;
    let countAsterisksArr = s.match(/\*/g);
    let countAsterisks = countAsterisksArr ? countAsterisksArr.length : 0;
    possibleResultsNum = Math.pow(9, countAsterisks);

    function analysis(str){
        if(/^1\*$/.test(str)){
            return 9;
        }else if(/^2\*$/.test(str)){
            return 6;
        }else if(/^\*[1-6]$/.test(str)){
            return 2;
        }else if(/^\*[7-9]$/.test(str)){
            return 1;
        }else{
            return 0;
        }
    }

    for(let i=0; i<s.length-1; i++){
        possibleResultsNum = possibleResultsNum + analysis(s.substring(i, i+2));
    }

    if(s.match(/\*\*(\**)/g)){
        let count = s.match(/\*\*(\*+)/g);
        count.forEach(str => {
            possibleResultsNum = possibleResultsNum + 15 * Math.pow(9, str.length-2);
        })
    }

    return possibleResultsNum % (Math.pow(10, 9) + 7);
};

console.log(
    numDecodings('1*')
)