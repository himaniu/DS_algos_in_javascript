
/*
Given n size unsorted array, find its mean and median.
*/
//single array 
const findMinMedian = (list1, list2) => {
    const combinedList = list1.concat(list2);
    const length  = combinedList.length;
    let mean = combinedList.reduce((a, c) => a + c) / length;
    list = combinedList.sort((a,b) => a-b);
    let median = 0;
    if (length % 2 !== 0) {
        median = combinedList[(length-1)/2];
    } else {
        median = (combinedList[(length - 2)/2] +  combinedList[length/2]) / 2;
    }
    return [mean, median];
}

//solution for two sortedArray median





