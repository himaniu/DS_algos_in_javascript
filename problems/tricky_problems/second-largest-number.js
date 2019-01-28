    export  default class SecondNumber {
   
        static findSecondLargest(arr){
             var arr_size = arr.length;
            var i, first, second; 
            //There should be atleast two elements
            if (arr_size < 2) 
            { 
            console.log(" Invalid Input "); 
                return; 
            }       
            first = second = Number.MIN_VALUE; 
            for (i = 0; i < arr_size ; i++) 
            { 
                // If current element is greater than first then update both first and second
                if (arr[i] > first) 
                { 
                    second = first; 
                    first = arr[i]; 
                }       
                // If arr[i] is in between first and second then update second
                else if (arr[i] > second && arr[i] != first) 
                    second = arr[i]; 
            }
            Console.log(`Second largest number in the array ${arr} is : ${second}`);
      return second;
    
        }

        static findSecondSmallest(arr){
            var arr_size = arr.length;
            var i, smallest, secondSmallest; 
            //There should be atleast two elements
            if (arr_size < 2) 
            { 
            console.log(" Invalid Input "); 
                return; 
            }       
            smallest = secondSmallest = Number.POSITIVE_INFINITY; 
            for (i = 0; i < arr_size ; i++) 
            { 
               let currentItem = arr[i];
                // If current element is smaller than first then update both first and second
                if (currentItem < smallest) 
                { 
                    secondSmallest = smallest; 
                    smallest = currentItem; 
                }
                else if (currentItem < secondSmallest) {
                 secondSmallest = currentItem; 
            }
            }
 
            console.log(`Second smallest number in the array ${arr} is : ${secondSmallest}`);
             return secondSmallest;
       }
    
    }
    