function bmi_calculation(weight,height) {

    var sqr_height = sqrheight(height)
    var bmi = weight /sqr_height;
return Math.round(bmi);
    
}

function sqrheight(height) {
    var sqr_height = Math.pow(height,2);
    return sqr_height;
    
}

    var weight = prompt("enter the weight ");
    var height = prompt("enter the height ");

var bmi = bmi_calculation(weight,height);
    console.log("bmi is " + bmi);
    alert("bmi is "+ bmi);