let sisendid = []; //selle muutsin

function valjastaTekst(sisendTekst) {
    let valjundElement = document.getElementById("valjund")
    valjundElement.innerHTML += "<div>" + sisendTekst + "</div>"
    console.log(sisendTekst)
}

function lisa() {
    let sisendTekst = document.getElementById("sisend").value
    sisendid.push(sisendTekst);  // selle lisasin
    valjastaTekst( sisendid.length + ' ' + sisendTekst ) // seda muutsin
    document.getElementById("sisend").value = ""
}