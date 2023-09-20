var range = document.querySelectorAll(".drum").length;
for (var i=0; i<range; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",popup);

function popup(){
var btninnerhtml = this.innerHTML;

animationbutton(btninnerhtml);

    switch (btninnerhtml) {
            case "w":
                var ton1 = new Audio("sound/tone1.wav");
                ton1.play();
                break;
            case "a":
                var ton2 = new Audio("sound/tone2.wav");
                ton2.play();
                break;
        
            case "s":
                var ton3 = new Audio("sound/tone3.wav");
                ton3.play();
                break;
            case "d":
                var ton4 = new Audio("sound/tone4.wav");
                ton4.play();
                break;
            case "j":
                var ton5 = new Audio('sound/tone5.wav');
                ton5.play();
                break;
            case "k":
                var ton6 = new Audio('sound/tone5.wav');
                ton6.play();
                    break;   
            case "l":
                var ton7 = new Audio("sound/tone4.wav");
                ton7.play();
                break;             
        default:
            console.log("click the right path....");
            break;
    }
  }
}
document.addEventListener("keypress",function(event){
    keyboard(event.key);
    animationbutton(eventkey);

});
function keyboard(key){

    switch (key) {
        case "w":
            var ton1 = new Audio("sound/tone1.wav");
            ton1.play();
            break;
        case "a":
            var ton2 = new Audio("sound/tone2.wav");
            ton2.play();
            break;
    
        case "s":
            var ton3 = new Audio("sound/tone3.wav");
            ton3.play();
            break;
        case "d":
            var ton4 = new Audio("sound/tone4.wav");
            ton4.play();
            break;
        case "j":
            var ton5 = new Audio('sound/tone5.wav');
            ton5.play();
            break;
        case "k":
            var ton6 = new Audio('sound/tone5.wav');
            ton6.play();
                break;   
        case "l":
            var ton7 = new Audio("sound/tone4.wav");
            ton7.play();
            break;             
    default:
        console.log("click the right Key....");
        break;
  } 

 }

 function animationbutton(currentkey){

    var active = document.querySelector("." + currentkey);
    active.classList.add("pressed");

    setTimeout(function(){
        active.classList.remove("pressed"); 
    },100
);

}