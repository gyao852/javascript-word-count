//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (words) => {
  // 1. Underscore all + Tokenize string by splitting based on spec
  // 1a. Specifically, use regex: [\w+'\w?]* means match any a-zA-Z0-9 character, with potentially
  // an apostrophe followed immediately by a word char again; * for any number of times this group matches
  // 2. Populate res obj with mapping <word: cnt>
  let res = {}
  words.toLowerCase().match(/[\w('\w{1)?]*/g).filter(Boolean).forEach((word) => {
    if (res[word]) {
      res[word]+=1
    } else {
      res[word] = 1
    }
  })
  return res
};
