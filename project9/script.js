const c1=document.getElementById("color1")
const c2=document.getElementById("color2")
const direction = document.getElementById("direction")
const box=document.getElementById("box-color")
const code=document.getElementById("code")
const btn=document.body.querySelector("button")

direction.onchange=()=>{
    change()
}
c1.onchange=()=>{
    change()
}
c2.onchange=()=>{
    change()
}

function change(){
    const grad=`linear-gradient(${direction.value}, ${c1.value} , ${c2.value})`
    box.style.background=`${grad}`
    code.innerHTML="background : "+`${grad}`   
}

const save=()=>{
    navigator.clipboard.writeText(`${code.innerHTML}`)
    btn.innerHTML="Copied"
    setTimeout(()=>{
        btn.innerHTML="Copy Code"
    },1000)
}