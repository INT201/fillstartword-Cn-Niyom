const {template} = require('@babel/core')

function fillStartWord(startWord, word) {
    if (word === null || word === undefined) {
        return undefined;
    }
    if (startWord !== word.substring(0, startWord.length)) {
        return startWord + word;
    }
    return word;
}
module.exports = fillStartWord
