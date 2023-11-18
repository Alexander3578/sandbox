//DESCRIPTION:
//Coding in function tailAndHead. function accept 1 parameter arr(a number array).
//
// We use an example to explain this task:
//
// You got an array [123,456,789,12,34,56,78].
//
// First, from left to right, the tail of an element and the head of the next element are added together. The results are put into an array. like this:
//
// [123,456,789,1 2,3 4,5 6,78]
//    3+4 6+7 9+1 2+3 4+5 6+7
//     |   |   |   |   |   |
//    [7 ,13 ,10 , 5 , 9 ,13]
// And then, Calculate their product and return it(7x13x10x5x9x13=532350)
//
// So, tailAndHead([123,456,789,12,34,56,78]) should return 532350
//
// All elements of arr are positive integer. If a number is less than 10, its head and tail are the same. Please try to use reduce() solve this kata.

//SOLUTION:
// var arr1=[1,2,3,4,5];
// var arr2=[6,7,8,9,10];
// var result=arr1.map(x=>x*x).reduce((a,b,i,ar)=>a.concat(b,arr2[i]),[])
// console.log(result); //output: [ 1, 6, 4, 7, 9, 8, 16, 9, 25, 10 ]

function tailAndHead(arr){
   let prod = 1;
   arr.reduce((prev, curr)=>{
      let s1 = Number(prev.toString()[prev.toString().length - 1]);
      let s2 = Number(curr.toString()[0]);
      prod 	*= s1 + s2;
      return curr
   });
   return prod;
}

const result = tailAndHead([123, 456, 789, 12, 34, 56, 78]);
console.log(result); // Выведет 532350


