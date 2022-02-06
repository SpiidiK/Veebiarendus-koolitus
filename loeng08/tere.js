let kasutajaNimi = ''
while (kasutajaNimi == ''){
    kasutajaNimi = prompt("Sisesta oma nimi ")
}

let tervitus = "Tere astronaut " + "<strong>" + kasutajaNimi + "</strong>" + " , pika nimega astronaudid saavad ekstra suure lennumasina" + "<p><img src=\"pikk.png\"></p>"
let tervitusElement = document.getElementById("tervitus")


if (kasutajaNimi.length <= 5) {
  
    tervitus = "Tere astronaut " + "<strong>" + kasutajaNimi + "</strong>" + ", sinu jaoks on järgi ainult pisikesed masinad. " + "<p><img src=\"lyhike.png\"></p>"
}




tervitusElement.innerHTML = tervitus
console.log(tervitus)


