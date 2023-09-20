var list = ["ali", "obaid", "ajal"];
var checkname = prompt("what's your name ");
var result  = list.includes(checkname);

if (result=="1"){
    alert("name is exist in the list");
}

else {
    alert("name is not exist in the list");
}