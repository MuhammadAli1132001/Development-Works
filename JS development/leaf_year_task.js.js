function leafyear(year) {

    if (year%4===0){
        
        if (year%400===0){
            
            if (year%100===0){
            alert(year+" is a leaf year");  
            }
            else {
            alert(year+" is not a leaf year");  
            }
    }
        else {
         alert(year+" is a leaf year");  
    }      
}   
        
    else {
         alert(year+" is not a leaf year ");
}
    
    return year;
}

var year = prompt("enter a year ");
var calyear = leafyear(year);
console.log("enter year is "+calyear);