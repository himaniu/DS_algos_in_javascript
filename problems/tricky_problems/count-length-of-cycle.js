/**
 * countLengthOfCycle(array, startIndex)
 * You are given an integer array
 * Starting from array startIndex follow each element to the index it points to.
 * Follow it until you finds a cycle
 * examples: countLengthOfCycle([1,0], 0) == 2
 *  countLengthOfCycle([1,0,2], 0) == 2
 */



 const countLengthOfCycle = (array, startIndex) =>{
    let visited = {};
    let index = startIndex;
    let count = 1;
    while(!(index in visited)){
          let currentItem = array[index];
          if(currentItem >= array.length)
          return -1;
          visited[index] = count;
          count++;
          index = currentItem;
    };
    return count-visited[index];
 }

 console.log(countLengthOfCycle([1,0,2], 0));