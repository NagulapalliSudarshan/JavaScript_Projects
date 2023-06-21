const action=document.getElementById("action")
const place=document.body.getElementsByClassName("place")
const inside=document.body.getElementsByClassName("inside")


function CircleListener(){
    for(let i=0;i<place.length;i++){
        place[i].addEventListener("click",()=>{
            inside[i].innerHTML="O"
            action.innerHTML="it is the turn of player X"
            CrossListener()
        })
    }
}
function CrossListener(){
    for(let i=0;i<place.length;i++){
        place[i].addEventListener("click",()=>{
            inside[i].innerHTML="X"
            action.innerHTML="it is the turn of player O"
            CircleListener()
        })
    }
}

CrossListener()
Cross()
function Circle(){
    if (CircleCheck()){
        return true
    }
    Cross()
}
function Cross(){
    if (CrossCheck()){
        return true
    }
    Circle()
}

function Check(){

}

function CircleCheck(){
        if (inside[0].innerHTML=="O" && inside[1].innerHTML=="O" && inside[2].innerHTML=="O"){
            action.innerHTML="O Wins!!!!"
            return true
        }
        else if(inside[0].innerHTML=="O" && inside[3].innerHTML=="O" && inside[6].innerHTML=="O"){
            action.innerHTML="O Wins!!!!"
            return true
        }
        else if(inside[0].innerHTML=="O" && inside[4].innerHTML=="O" && inside[8].innerHTML=="O"){
            action.innerHTML="O Wins!!!!"
            return true
        }
        else if(inside[1].innerHTML=="O" && inside[4].innerHTML=="O" && inside[7].innerHTML=="O"){
            action.innerHTML="O Wins!!!!"
            return true
        }
        else if(inside[2].innerHTML=="O" && inside[5].innerHTML=="O" && inside[8].innerHTML=="O"){
            action.innerHTML="O Wins!!!!"
            return true
        }
        else if(inside[2].innerHTML=="O" && inside[4].innerHTML=="O" && inside[6].innerHTML=="O"){
            action.innerHTML="O Wins!!!!"
            return true
        }
        else if(inside[3].innerHTML=="O" && inside[4].innerHTML=="O" && inside[5].innerHTML=="O"){
            action.innerHTML="O Wins!!!!"
            return true
        }
        else if(inside[6].innerHTML=="O" && inside[7].innerHTML=="O" && inside[8].innerHTML=="O"){
            action.innerHTML="O Wins!!!!"
            return true
        }
        return false
}
function CrossCheck(){
        if (inside[0].innerHTML=="X" && inside[1].innerHTML=="X" && inside[2].innerHTML=="X"){
            action.innerHTML="X Wins!!!!"
            return true
        }
        else if(inside[0].innerHTML=="X" && inside[3].innerHTML=="X" && inside[6].innerHTML=="X"){
            action.innerHTML="X Wins!!!!"
            return true
        }
        else if(inside[0].innerHTML=="X" && inside[4].innerHTML=="X" && inside[8].innerHTML=="X"){
            action.innerHTML="X Wins!!!!"
            return true
        }
        else if(inside[1].innerHTML=="X" && inside[4].innerHTML=="X" && inside[7].innerHTML=="X"){
            action.innerHTML="X Wins!!!!"
            return true
        }
        else if(inside[2].innerHTML=="X" && inside[5].innerHTML=="X" && inside[8].innerHTML=="X"){
            action.innerHTML="X Wins!!!!"
            return true
        }
        else if(inside[2].innerHTML=="X" && inside[4].innerHTML=="X" && inside[6].innerHTML=="X"){
            action.innerHTML="X Wins!!!!"
            return true
        }
        else if(inside[3].innerHTML=="X" && inside[4].innerHTML=="X" && inside[5].innerHTML=="X"){
            action.innerHTML="X Wins!!!!"
            return true
        }
        else if(inside[6].innerHTML=="O" && inside[7].innerHTML=="O" && inside[8].innerHTML=="O"){
            action.innerHTML="O Wins!!!!"
            return true
        }
        return false
}