/*
Writeafunctionnamed
firstPalindrome
whichtakesaparameter: words. Given an 
array of strings words, 
return the first palindromic string in the array. 
If there is no such string, return an empty string "".
A string is palindromic if it reads the same forward and backward.
*/

function firstPalindrome(words) {
  for (let i = 0; i < words.length; i++) {
    if (isPalindrome(words[i])) {
      return words[i];
    }
  }
  return "";
}

function isPalindrome(word) {
  const len = word.length;
  for (let i = 0; i < len / 2; i++) {
    if (word[i] !== word[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
