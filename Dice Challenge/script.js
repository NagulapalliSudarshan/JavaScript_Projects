getRandomNumber=()=>{
    var max=6,min=1
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

window.onload=()=>{
    let random1 = getRandomNumber();
    let random2 = getRandomNumber();

    img1=document.body.getElementsByClassName('img1')[0]
    img2=document.body.getElementsByClassName('img2')[0]
    img1.setAttribute("src",`./images/dice${random1}.png`)
    img2.setAttribute("src",`./images/dice${random2}.png`)

    if (random1>random2){
        document.querySelector(".container h1").innerHTML=" &#x1F6A9; Player 1 wins!"
    }
    else if (random2>random1){
        document.querySelector(".container h1").innerHTML="Player 2 wins! &#x1F6A9; "
    }
    else{
        document.querySelector(".container h1").innerHTML="Draw!"
    }
}