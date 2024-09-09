var array1=[1,3,6,2,4];
var array2=[2,0,4,1,2];
var array3=[];
for(let i=0;i<array1.length;i++){ // use for loop to access each element 
    array3[i]=array1[i]+array2[i]; // add element and assign each values in array3
}
console.log(array3); // for display the value after sum 
// let newset=new Set(array3)  // it eliminate the redundancy but return the value in a {} curly braces

// use set to eliminate  the redundancy
let newset=[... new Set(array3)] //  use spread or rst operator to convert it into an  array
console.log(newset);

