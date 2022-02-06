let kasutajaNimi = ''
while (kasutajaNimi == ''){
    kasutajaNimi = prompt("Sisesta nimi")
}

let tervitus = "Tere " + "<strong>" + kasutajaNimi + "</strong>" + " , küll sul on  suurepärane pikk nimi"
let tervitusElement = document.getElementById("tervitus")

if (kasutajaNimi.length <= 5) {
  
    tervitus = "Tere " + "<strong>" + kasutajaNimi + "</strong>" + " ,  küll sul on ilus lühike nimi"
}




tervitusElement.innerHTML = tervitus
console.log(tervitus)
