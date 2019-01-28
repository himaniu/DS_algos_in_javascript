/**
 * Who is elected as monitor between student 
 * ..when teacher eliminate a student after k length of song   
 * e.g students = [1,2,3,4] // n =4 , k 2
 * then electedMonitor = 1
 */
const _ = require('lodash')

 const whoIsElected = (n, k) => {
    let l = _.range(1, n+1); // [1,2,3,4]
    let i = -1;
    while(l.length > 1){
        l.splice((i+k)% l.length, 1)
        i = ((i+k) % (l.length +1) -1)
    }
    return l[0];
 }

 whoIsElected(4,2);