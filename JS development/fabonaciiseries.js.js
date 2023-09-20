
var output = [];
var next;
var terms = 0;
function fabonaciiseries(n) {
    if (n===1){
        output =[0];
    }
    else if(n===2){
        output =[0,1];
    }
    else{
        output = [0,1];
    for (var i=0; terms!==n; i++){
        next = output[i] + output[i+1];
        output.push(next);
        terms = output.length;
    }
}     
 return output;
}

var output = fabonaciiseries(7);
console.log(output);