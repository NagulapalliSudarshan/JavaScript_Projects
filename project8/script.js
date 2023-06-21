const arr1=["#B8514F","#E31714","#EB9190","#F07F4E","#F1E531","#BFBB83","#AFEA1D","#65A707","#36B67E","#18F0E9","#FFC300","#900C3F","#000000","#581845","#0D5626"]
const arr2=["#E533C4","#A64D79","#B019F2","#7C00FF","#0C00FF","#2D4A80","#27B1E9","#81D1F2","#676F72","#CD00FF","#FF1273","#9E9B69","#80CB58","#034D47","#12FFED"]

let p=Array.from(document.body.getElementsByClassName("color-box"))
let colors1=[]
let colors2=[]
function change(){
    for (i=0;i<4;i++){
        colors1[i]=arr1[Math.floor(Math.random()*arr1.length)]
        colors2[i]=arr2[Math.floor(Math.random()*arr2.length)]
    }
    p.forEach((val,index)=>{
        if (index<4){
            val.firstElementChild.style.background=`${colors1[index]}`
            val.children[1].innerHTML=`${colors1[index]}`
        }
        else{
            val.firstElementChild.style.background=`${colors2[index-4]}`
            val.children[1].innerHTML=`${colors2[index-4]}`
        }
    })
}

let c1=document.getElementById("c1")

p.forEach((val)=>{
    val.onclick = ()=>{
    try{
        let a=val.children[1].innerHTML
        navigator.clipboard.writeText(a)
        val.children[1].innerHTML="Copied";
        setTimeout(()=>{
            val.children[1].innerHTML=`${a}`
        } , 1000)   
    }
    catch(err){
        alert("no copy")
    }
}
})