let apelsin = {
    liik: "puuvili",
    nimi: "apelsin",
    varv: "orange"
}

let porgand = {
    liik: "juurvili",
    nimi: "porgand",
    varv: "orange"
}

let banaan = {
    liik: "rohttaim",
    nimi: "banaan",
    varv: "yellow"
}

let saadused = [ apelsin, porgand, banaan ]

let valjundElement = document.getElementById("valjund")
for (let i = 0; i < saadused.length; i++) {
    valjundElement.innerHTML += "<div>" + saadused[i].nimi + "</div>"
}