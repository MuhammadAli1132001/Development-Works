//entering limited characters
var ch,left_ch;
var total = "10";
ch  = prompt("enter msg upto 10 characters ");
ch_length = ch.length;

left_ch = total - ch_length;
alert("You have enter " + ch_length + " characters and " + left_ch + " characters left" );

//slicing upto 50 ch

slice_ch = ch.slice(0,10);
console.log(" characters upto 10 are: "+ slice_ch);
