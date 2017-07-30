// You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

// For example, given:
// s: "barfoothefoobarman"
// words: ["foo", "bar"]

// You should return the indices: [0,9].
// (order does not matter).

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let wordsNum = words.length;
    let wordLength = words[0].length ? words[0].length : 0;
    let outcome = [];
    let indexs = [];

    function main(){
        let originHashMap = buildHashMap(words);
        let concatenatedStringLength = wordsNum * wordLength;

        if(s.length < concatenatedStringLength){
            return outcome;
        }else{
            searchFragment(0);
            indexs.forEach(index => {
                let stringFragment = s.substring(index, index + concatenatedStringLength);
                let compare = equal(originHashMap, buildHashMap(splitStr(stringFragment)) );
                if(compare){
                    outcome.push(index);
                }
            })
            return outcome;
        }
    }

    function searchFragment(index){
        let reg = new RegExp('(' + words.join('|') + '){' + wordsNum + '}' );
        let result = s.substring(index).match(reg);

        if(result){
            let realIndex = result.index + index;
            indexs.push(realIndex);
            searchFragment(realIndex + 1);
        }else{
            return ;
        }
    }

    function splitStr(str){
        let reg = new RegExp('(' + words.join('|') + '){' + wordsNum + '}', 'g');
        return str.match(reg);
    }

    function equal(a, b){
        return Object.keys(a).every(key => {
            if(a[key] === b[key]){
                return true;
            }else{
                return false;
            }
        })
    }

    function buildHashMap(arr){
        let _hashMap = {};
        arr.forEach(item => {
            if(_hashMap[item]){
                _hashMap[item] ++;
            }else{
                _hashMap[item] = 1;
            }
        });
        return _hashMap;
    }

    return main();

};

var s = "hmtsvuabdjitpfehczyfliomwqkelhcstxmrsmuxxcrohxwjzuqkegwawigjskdliqeaeyzcasskqovpkmzosyqriwaaheoruutytscvlvhbldqyprojrfacdbekfsbbpwzkpefazpdmsvkjmzsgevkhwoudjxeyufijjplkeoxwlhhzgafmvpwtgqyppcpljxwvohftxcrimzisbphyhdtnvremvtyequzeefzdjtmvuwqvlxvucohzfnlagleyggfmnepwxbsrzionhjhjzrkeevelhljptobgvscuuwovgcinoqynjiungaapnkggajmxbrsxpitwmblatkqcumqcmsraczifixemowjfecbrgptbzlevxwykormttuadrephdznhdqalfwnghtefperfvdaqzaurhjykkntoeuzlsoszhwgyazgxegqejkvsvvcglvuprvclmwlvutuutcuzkkdtwalrypxjntaercqfzdatywqtymtjyweuxsnvhnguggbzitejyfdwdvqchjlfhrbgjodrbjnkpqlyjqhjxmgahyeqjpvqhyxspclqmzcbrobdgjmdxufhskxdbvukttdivobhpflhtmmzxyevtkenwbrxynksincfdfntlacemogkokhjwlxumqsldefltjqwrfrefvkulqeadljzwiukyoxbseonqhjhoblwyvqkoukrhvsfempccpgwtujjbtsswdowbegpasghoymsndupsaomxxxasqsqvgpwkvnkovtcufwjlqadtorqorqihlberqdclqobmifipbrasrenixfyovgxgjcazhenxsolcuvsvmupgaeqyjoohwopgspfztuyojksffmcuhuchyuhiiypgmgmewudrobfznygvklrtfvbfpkpzigfwnuajqdaehigwiotuzkogfrmwbdvmkdixxjinoktxsbwcqpxralyhcmefpbrbecydnisdtmbnpxqfopxoaxycjehafbcmdarqlkvgywtnvltmasacpaeaeoamrcawfrosdjybgtpdfkpheskvuqvbgxpxcrvjijbotzpbsggzswjwqttmlqnsqcrstnbeyeurflszszzmxilpdebqxrinvcfrrixpmrjtcbswcrjbbuqgauxxlhmijrzcbwupndiqebmjsxkwtdcuxztkjgsuzuxbqrsgubwacklwkwudbxzayvkjdeecybfruyxqbvqfhebrawxdvydvtnfwtjbumingikwjhooousiuqfzndcizrpxlayhohuupgsbnjrddjlazszmyexxvmuipvpdclatruwedoijxvlzomnmqklmzfuoamrextapowvrkfckbplrcydsjqgivbyynrcmlcbzbzsnexzhmkyojdjutpcrscpfttugyxfbwaodxokjalajqjfmyhfrlwyfpunpstqovhtsvgdxrdhjmmxn";
var words = ["xbqrsgubwacklwkwudbxzayvkjde","ltjqwrfrefvkulqeadljzwiukyox","ccpgwtujjbtsswdowbegpasghoym","tywqtymtjyweuxsnvhnguggbzite","vmkdixxjinoktxsbwcqpxralyhcm","gzswjwqttmlqnsqcrstnbeyeurfl","ycjehafbcmdarqlkvgywtnvltmas","fztuyojksffmcuhuchyuhiiypgmg","acpaeaeoamrcawfrosdjybgtpdfk","fdfntlacemogkokhjwlxumqsldef","mewudrobfznygvklrtfvbfpkpzig","fwtjbumingikwjhooousiuqfzndc","upndiqebmjsxkwtdcuxztkjgsuzu","pheskvuqvbgxpxcrvjijbotzpbsg","bmifipbrasrenixfyovgxgjcazhe","cufwjlqadtorqorqihlberqdclqo","bseonqhjhoblwyvqkoukrhvsfemp","sndupsaomxxxasqsqvgpwkvnkovt","yjqhjxmgahyeqjpvqhyxspclqmzc","fwnuajqdaehigwiotuzkogfrmwbd","nxsolcuvsvmupgaeqyjoohwopgsp","brobdgjmdxufhskxdbvukttdivob","szszzmxilpdebqxrinvcfrrixpmr","ecybfruyxqbvqfhebrawxdvydvtn","jyfdwdvqchjlfhrbgjodrbjnkpql","jtcbswcrjbbuqgauxxlhmijrzcbw","hpflhtmmzxyevtkenwbrxynksinc","efpbrbecydnisdtmbnpxqfopxoax"];
var s2 = "barfoofoobarthefoobarman";
var words2 = ["bar","foo","the"];
var s3 = "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababab"
var words3 = ["ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba","ab","ba"]
console.time('s')
console.log(
    findSubstring(s3, words3)
)
console.log(s3.length, words3.length)
console.timeEnd('s')