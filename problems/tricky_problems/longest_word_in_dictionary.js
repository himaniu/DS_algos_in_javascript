// find lonest word in given dictionary
 //  example : dictionary is : {"to","toe","toes","doe","dog","god","dogs","book","banana"} and input String is "dsetog"
 //           output : toes, dogs

 // filter the array by checking if the given word can be formed by given set of strings;
// Broute fource method

//solution 1 for fetching multiple long words.
function isSubSequenceExist(str, word) {
    let ret = true;
    for (let i = 0; i < word.length; i++) {
        if(str.indexOf(word[i]) === -1)
          return false;
    }
    return ret;
 }

function findLongestWord(dictionary, inputStr) {
    let ret = dictionary.filter((entry) => isSubSequenceExist(inputStr, entry));
    if(ret.length === 0){
      console.log('no subsequence found');
       return '';
    } else if (ret.length === 1) {
        return ret;
    } else {
        ret = ret.sort((a,b) => b.length - a.length);
        let max = ret[0].length;
        ret = ret.filter((entry) => entry.length === max);
    }
     return ret;
 }










 /**
  * Below solution is for getting single longest word and sequence remains same of characters.
  */


 function isSubSequence(currentWord, inputString) 
 { 
     let m = currentWord.length;
     let n = inputString.length;    
     let j = 0; 
     for (let i=0; i<n && j<m; i++){ 
         if (currentWord[j] === inputString[i])
             j++; 
     }  
     // If all characters of currentWord were found in inputString 
     return ( j === m); 
 } 
   
 // Returns the longest string in dictionary which is a 
 // subsequence of str. 
 function findLongestString(dict, inputString) 
 { 
     let result = ""; 
     let maxlength = 0; 
   
     // Traverse through all words of dictionary 
     for (word of dict) 
     { 
         // If current word is subsequence of str and is largest 
         // such word so far. 
         if (maxlength < word.length && isSubSequence(word, inputString)) 
         { 
             result = word; 
             maxlength = word.length; 
         } 
     } 
   
     // Return longest string 
     return result; 
 } 


var dictionary = ["able", "ale", "apple", "bale", "kangaroo"];

var dictionary1 = ["to", "toe", "toes"];


findLongestWord(dictionary, 'abpcplea')