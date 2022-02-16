let apelsin = {
    liik: "puuvili",
    nimi: "apelsin",
    varv: "orange",
    hinnang: 8,
    pilt: "./assets/apelsin.jpg",
    kirjeldus: "dasdfasdfasdf"
}

let porgand = {
    liik: "juurvili",
    nimi: "porgand",
    varv: "orange",
    hinnang: 10,
    pilt: "./assets/porgand.jpg",
    kirjeldus: "dasdfasdfasdf"
}

let banaan = {
    liik: "rohttaim",
    nimi: "banaan",
    varv: "yellow",
    hinnang: 7,
    pilt: "./assets/banaan.png",
    kirjeldus: "dasdfasdfasdf"
}

let mandariin = {
    liik: "puuvili",
    nimi: "mandariin",
    varv: "orange",
    hinnang: 8,
    pilt: "./assets/apelsin.jpg",
    kirjeldus: "dasdfasdfasdf"
}

let saadused = [ apelsin, porgand, banaan, mandariin ]

function looPuuviljaHTML(puuvili) {
    return `
    <div class="col-6 card">
        <img class="card-img-top" src="${puuvili.pilt}"
        <div class="card-body">
            <div class="card-title">${puuvili.nimi}</div>
            <div class="card-text">
                <p>
                Liik: ${puuvili.liik}, Hinnang: ${puuvili.hinnang}
                </p>
                <div>
                    ${puuvili.kirjeldus}
                </div>
            </div>
        </div>
    `
}

function lisaPuuvili() {
    let nimetusTekst = document.getElementById("nimetus").value
    let liikTekst = document.getElementById("liik").value
    let hinnang = document.getElementById("hinnang").value
    let puuvili = {
        liik: liikTekst,
        nimi: nimetusTekst,
        varv: "orange",
        hinnang: hinnang,
        pilt: "./assets/apelsin.jpg",
        kirjeldus: "kasutaja sisestatud puuvili"
    }
    saadused.push(puuvili)
    naitaPuuvilju()
}

function naitaPuuvilju() {
    let valjundElement = document.getElementById("valjund")
    let valjundHTML = ''
    valjundHTML += '<div class="row">'
    for (let i = 0; i < saadused.length; i++) {
        valjundHTML += looPuuviljaHTML(saadused[i])
    }
    valjundHTML += '</div>'
    valjundElement.innerHTML = valjundHTML
}

naitaPuuvilju()