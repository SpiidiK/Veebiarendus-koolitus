let varvid = ["roheline", "sinine", "punane"]

function valjastaTekst(sisendTekst) {
        let valjundElement = document.getElementById("valjund")
        valjundElement.innerHTML += "<div>" + sisendTekst + "</div>"
        console.log(sisendTekst)
}

function varviArvamine() {
    let sisendTekst = document.getElementById("sisend").value

    if (varvid.includes(sisendTekst)) {
        valjastaTekst("Palju õnne arvasid ära minu lemmikvärvi. Kõik minu lemmik värvid on:")
        for (let index = 0; index < varvid.length; index++) {
            valjastaTekst( (index + 1) + '. ' + varvid[index] )
        }

    } else {
    valjastaTekst("Värv " + sisendTekst + " ei ole minu lemmikvärv")
    }
}   
