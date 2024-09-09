var fruitsDb=["apple","banana","orange","pineapple","grapes","avacado","strawberry"];
let mixFriutArr=["grapes","cabbage","tomato","banana"];
function filterFruits(fruit) {
    let arr=[];
    for(let i of fruit){ // for loop for mixFruitArr
        // console.log(i); 
        for(let db of fruitsDb){
            if(i==db){
                arr.push(i);
                // console.log(arr);
                }

        }
        
    }console.log(arr);
}
filterFruits(mixFriutArr);//pass a mixFruitArr

