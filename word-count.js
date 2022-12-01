//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (words) => {
  // 1. Underscore all + Tokenize string based on spec
  // 1a. Use regex: /\b\w+'?\w*\b/g
  // \b are the anchors for each word boundary.
  // \w+ means any 'word' character (a-Z,0-9) 1 or multiple times
  // '? means 1 or 0 '
  // '\w* means 0 or multiple 'word' character again
  // 2. Populate res obj with mapping <word: cnt>
  let res = {}
  words.toLowerCase().match(/\b\w+'?\w*\b/g).filter(Boolean).forEach((word) => {
    if (res[word]) {
      res[word]+=1
    } else {
      res[word] = 1
    }
  })
  return res
};
