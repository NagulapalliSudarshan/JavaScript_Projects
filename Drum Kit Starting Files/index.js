w=()=>{
    var audio = new Audio("./sounds/tom-1.mp3");
    audio.play();
}
a=()=>{
    var audio = new Audio("./sounds/tom-2.mp3");
    audio.play();
}
s=()=>{
    var audio = new Audio("./sounds/tom-3.mp3");
    audio.play();
}
d=()=>{
    var audio = new Audio("./sounds/tom-4.mp3");
    audio.play();
}
j=()=>{
    var audio = new Audio("./sounds/snare.mp3");
    audio.play();
}
k=()=>{
    var audio = new Audio("./sounds/crash.mp3");
    audio.play();
}
l=()=>{
    var audio = new Audio("./sounds/kick-bass.mp3");
    audio.play();
}

function makeSound(temp){
    switch(temp){
        case "w" : w();break;
        case "a" : a();break;
        case "s" : s();break;
        case "d" : d();break;
        case "j" : j();break;
        case "k" : k();break;
        case "l" : l();break;
    }
}

function buttonAnimation(temp){
    document.body.querySelector("."+temp).classList.add("pressButton")
    setTimeout(()=>{
        document.body.querySelector("."+temp).classList.remove("pressButton")
    },100)
}
window.onload=()=>{
    for(let i=0;i<document.querySelectorAll(".drum").length;i++){
        document.querySelectorAll(".drum")[i].addEventListener('click',()=>{
            buttonInnerHTML = document.querySelectorAll(".drum")[i].innerHTML
            makeSound(buttonInnerHTML)
            buttonAnimation(buttonInnerHTML)
        })
    } // end of for
    window.addEventListener('keydown',(event)=>{
        makeSound(event.key)
        buttonAnimation(event.key)
    })
}