// In English, we have a concept called root, which can be followed by some other words to form another longer word - let's call this word successor. For example, the root an, followed by other, which can form another word another.
// Now, given a dictionary consisting of many roots and a sentence. You need to replace all the successor in the sentence with the root forming it. If a successor has many roots can form it, replace it with the root with the shortest length.
// You need to output the sentence after the replacement.

/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
    let dictObj = {};
    let dictRegArr = [];
    let outcome = [];
    let hashIndex;
    let wordsInSentence = sentence.split(' ');

    dict.forEach(root => {
        assembyDictObj(root);
    });

    hashIndex = Object.keys(dictObj);
    hashIndex.forEach(index => {
        dictObj[index].forEach(reg => {
            dictRegArr.push(reg);
        })
    });

    wordsInSentence.forEach(word => {
        outcome.push( ifContainsRoot(word) );
    })
    

    function assembyDictObj(word){
        if(typeof word !== 'string' || word.length === 0){
            return;
        }else{
            let wordLength = word.length;
            if(dictObj[wordLength] === undefined){
                dictObj[wordLength] = [];
            }
            dictObj[wordLength].push(word);            
        }
    }

    function ifContainsRoot(word){
        let result = word;
        for(let i=0; i<dictRegArr.length; i++){
            let reg = dictRegArr[i];
            if ( word.indexOf(reg) === 0 ){
                result = reg;
                break;
            }
        }
        return result;
    }

    console.log(wordsInSentence);
    console.log(dictRegArr);
    return outcome.join(' ');

};

var dict = ["a","b","c"];
var sentence = "aadsfasf absbs bbab cadsfafs";
console.log(
    replaceWords(dict, sentence)
)