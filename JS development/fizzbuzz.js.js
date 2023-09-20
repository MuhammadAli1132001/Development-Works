var arry = [];
//var entry = prompt("enter a starting number of array ");
var count = 1;
function fizzbuzz() {
    
   if(count%3===0 && count%5===0){
        arry.push("fizzbuzz");
        console.log(arry);
    }

    else if (count%3===0){
        arry.push("fizz");
        console.log(arry);
    }
    else if (count%5===0){
        arry.push("buzz");
        console.log(arry);
    }
        
    else{
    arry.push(count);
    console.log(arry);
    }
    count++;    
}
