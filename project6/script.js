// Curitiba,California,Ny,Sweden,Paris,Denmark,Japan,India,South Africa,Canada,Argentina,Brazil
// Hong Kong,Nepal,China,Beijing,Las Vegas,Ireland,Moscow,Monaco,Italy,San Andreas

function StartProcedure(){
    let City=document.getElementById("place").value
    let temp=fetch(`https://goweather.herokuapp.com/weather/${City}`)
    temp.then((response)=>{
        return response.json()
    }).then((data)=>{
        weatherPrinter(data)
    }).catch((err)=>{
        errorPrinter(err);
    })
}


const weatherPrinter=(data)=>{
    const display=document.getElementById("changer")
    const con=document.body.getElementsByClassName("container")[0]
    display.classList.toggle("hidden")
    con.classList.toggle("expand")
    const c=document.getElementById("c")
    const w=document.getElementById("w")
    const d=document.getElementById("d")
    c.innerHTML='<img src="temp.png">'
    c.innerHTML+=`<div><p>Tempature</p> ${data.temperature}</div>`
    w.innerHTML='<img src="wind.png">'
    w.innerHTML+=`<div><p>Wind</p> ${data.wind}</div>`
    d.innerHTML='<img src="clouds.png">'
    d.innerHTML+=`<div><p>Description</p> ${data.description}</div>`
}
