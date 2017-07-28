// Given an array of words and a length L, format the text such that each line has exactly L characters and is fully (left and right) justified.

// You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly L characters.

// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

// For the last line of text, it should be left justified and no extra space is inserted between words.

// For example,
// words: ["This", "is", "an", "example", "of", "text", "justification."]
// L: 16.

// Return the formatted lines as:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let egg = '';
    let originArr = [];

    function spider(index){
        let i = index;
        if(i === words.length){
            if(egg.length !== 0){
                originArr.push( egg.substring(1) );
            }
            return;  
        }else if(egg.length + words[i].length > maxWidth){
            originArr.push( egg.substring(1) );
            egg = '';
            spider(i);
        }else{
            egg += ' ' + words[i];
            spider(i + 1);
        }
    }

    function alignStr(str, strIndex){
        let spaceNum = str.match(/\s/g) ? str.match(/\s/g).length : 0;
        let strLength = str.length - spaceNum;
        let strWord = str.split(' ');

        if(spaceNum === 0){
            return str + produceSpace(maxWidth - strLength);
        }else if(strIndex === originArr.length - 1){
            return str + produceSpace(maxWidth - str.length);
        }else{
            let smallSpace = Math.floor( (maxWidth - strLength) / spaceNum );
            let bigSpaceNum = (maxWidth - strLength) % spaceNum;
            return strWord.map((w, index) => {
                let outcome = w;
                if( index < spaceNum ) outcome += produceSpace(smallSpace);
                if( index < bigSpaceNum ) outcome += ' ';
                return outcome;
            }).join('');
        }

        function produceSpace(num){
            return new Array(num).fill(' ').join('');
        }
    }

    spider(0);
    return originArr.map(alignStr);
};

var words = ["This", "is", "an", "example", "of", "text", "justification."];
var words2 = ["What","must","be","shall","be."];
var out = fullJustify(words2, 12);
console.log(  out  );