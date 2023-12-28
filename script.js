// 1.Print odd numbers in an array

// anonymous function :  

(function(array) {
    for(let i = 0 ; i<= array.length ; i++){
          if(array[i]%2!=0){
             console.log(array[i]);
          } 
     }
  })

// IIFE :      

(function(array){
for(let i = 0 ; i<= array.length ; i++){
          if(array[i]%2!=0){
             console.log(array[i])
          } 
     }
})([10,20,30,40])

// Arrow Function :

let odd = (array) => {
    for(let i = 0 ; i<= array.length ; i++){
         if(array[i]%2!=0){
            console.log(array[i])
         } 
    }
         }

// 2.Convert all the strings to title caps in a string array

// anonymous function:  

(function (string) {
    let str=0;
    let string1= string.split(' ');
    for (let i = 0; i <= string1.length; i++) {
      str= string1[i].toUpperCase();
    } 
    return str.join(' ');
  })

// IIFE : 

(function (string) {
    let str=0;
    let string1 = string.split(' ');
    for (let i = 0; i <= string1.length; i++) {
      str= string1[i].toUpperCase();
    } 
    return str.join(' ');
  })("GUVI");

// Arrow Function : 

let title= (string) => {
    let str=0;
    let string1 = string.split(' ');
    for (let i = 0; i <= string1.length; i++) {
      str= string1[i].toUpperCase();
    } 
    return str.join(' ');
  }            

//   3.Sum of all numbers in an array

// anonymous function:  

(function(array){
    let sum = 0;
    for(let i = 0 ; i<= array.length ; i++){
       sum = sum + array[i];
     }
     console.log(sum);
  })

// IIFE :       

(function(array){
let sum = 0;
    for(let i = 0 ; i<= array.length ; i++){
       sum = sum + array[i];
     }
     console.log(sum);
})([10,20,30,40])

// Arrow function:       

var sum = (array)=>{
let sum = 0;
    for(let i = 0 ; i<= array.length ; i++){
       sum = sum + array[i];
     }
     console.log(sum);
     }

// 4.Return all the prime numbers in an array  

// Anonymous Function:

(function(Array){
    let arr = Array((num) => {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) 
        return false;
    }
    return true;
    });
    console.log(arr);
    })

// IIFE 
                    
(function(Array){
  let arr = Array((num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) 
      return false;
    }
    return true;
    });
    console.log(arr);
    })([10,20,30,40])

// Arrow Function :
    
let primeNumber = (Array) => {
  let arr = Array((num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) 
      return false;
    }
    return true;
    });
    console.log(arr);
    }

// 5.Return all the palindromes in an array

// Anonymous Function :  

(function(arr, n){
  for (let i = 0; i <= n; i++){
    let num = isPalindrome(arr[i]);
      if (num == false)
      return false;
    }
    return true;
    })
    
// IIFE : 

(function(arr, n){
  for (let i = 0; i <= n; i++){
    let num = isPalindrome(arr[i]);
      if (num == false)
      return false;
    }
    return true;
    })([10,20,30] , 3)

// Arrow function : 

let isPalindrome = (arr, n) =>{
  for (let i = 0; i <= n; i++){
    let num = isPalindrome(arr[i]);
      if (num == false)
      return false;
    }
    return true;
    }

// 6.Return median of two sorted arrays of the same size.

// Anonymous Function : 

(function(arr1,arr2,size) { 
    let i = 0;
    let j = 0;
    let m1 = -1; m2 = -1 ;
    while(count=0){
       if (i == size) {
          m1 = m2;
          m2 = num2[0];
          break;
       } 
       else if (j == size) {
          m1 = m2;
          m2 = num1[0];
          break;
       } 
       if (num1[i] < num2[j]) { 
          m1 = m2;
          m2 = num1[i];
          i = i + 1;
       } else { 
          m1 = m2;
          m2 = num2[j];
          j = j + 1;
       }
    }
    return (m1 + m2)/2;
 })

 // IIFE :

 let sort=function(arr1,arr2,size) { 
    let i = 0;
    let j = 0;
    let m1 = -1; m2 = -1 ;
    while(count=0){
       if (i == size) {
          m1 = m2;
          m2 = num2[0];
          break;
       } 
       else if (j == size) {
          m1 = m2;
          m2 = num1[0];
          break;
       } 
       if (num1[i] < num2[j]) { 
          m1 = m2;
          m2 = num1[i];
          i = i + 1;
       } else { 
          m1 = m2;
          m2 = num2[j];
          j = j + 1;
       }
    }
    return (m1 + m2)/2;
 }

// 7.Remove duplicates from an array

// Anonymous Function : 

(function(array){
    let dup = [(array)];
    console.log(dup);
  })

// IIFE :                

(function(array){
    let dup = [(array)];
    console.log(dup);
   })([10,10,20,30])
   
// 8.Rotate an array by k times

// Anonymous function : 

(function(array , k){
    k = k % a.length;
      if(k < 0){
        k += a.length;
      }
      reverse(a, 0, a.length - k - 1);
      reverse(a, a.length - k, a.length - 1);
      reverse(a, 0, a.length - 1);
    })
    
// IIFE :  

(function(array , k){
    k = k % a.length;
      if(k < 0){
        k += a.length;
      }
      reverse(a, 0, a.length - k - 1);
      reverse(a, a.length - k, a.length - 1);
      reverse(a, 0, a.length - 1);
    })([10,20,30,40] , 2)




         