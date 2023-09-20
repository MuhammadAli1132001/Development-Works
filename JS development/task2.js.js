//task:enter name and capatalised its first letter
var name = prompt("whats your name ");
var size_name = name.length;
first_letter_name = name.slice(0,1);
first_letter_upper_case = first_letter_name.toUpperCase();
Restof_name = name.slice(1,size_name);
var capatalised = first_letter_upper_case + Restof_name;
alert("SALAM, " +capatalised );