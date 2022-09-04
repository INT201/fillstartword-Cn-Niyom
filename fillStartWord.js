const {template} = require('@babel/core')

function fillStartWord(startWord, word) {
    if (word === null || word === undefined) {
        return undefined;
    }
    if (!word.includes(startWord)) {
        return startWord + word;
    }
    return word;
}
module.exports = fillStartWord
