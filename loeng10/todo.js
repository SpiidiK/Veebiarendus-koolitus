let ylesanded = []

function looYlesanneHTML(ylesanne) {
    return `
    <div class="col-12 card">
        <img class="card-img-top" src=""
        <div class="card-body">
        <div class="card-title"> <strong> Ülesanne:</strong>   ${ylesanne.nimi} </div>
        <div class="card-text"> 
        <p>
        <strong> Tähtsus(1 -10):</strong>  ${ylesanne.tahtsus}
    
        </p>
        
        <p>
      
        <strong> Tähtaeg:</strong> ${ylesanne.tahtaeg}
        </p>
        <p>
        <strong> Järgijäänud päevi:</strong> ${ylesanne.paevijaanud}
    </p>
    <p>
    <strong> Seis: <p id="text" style="display:none">Ülesanne on valmis</p></strong>
    <label for="valmis"></label> 
    <input type="checkbox" id="valmis" onclick="tseki()">
 

    

    </p>
        
    </div>
    </div>
    `
}


function tseki() {
    var checkBox = document.getElementById("valmis");
    var text = document.getElementById("text");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function lisaYlesanne() {
    let nimetusTekst = document.getElementById("nimetus").value
    let tahtsusNumber = document.getElementById("tahtsus").value
    let seis = document.getElementById("seis").value 
    let tahtaeg = document.getElementById("tahtaeg").value 

    let tana = new Date();
    let deadline = new Date(tahtaeg);
    let kuupaevadevaheajas = deadline.getTime() - tana.getTime();
    let kuupaevadevahepaevades = Math.ceil(kuupaevadevaheajas / (1000 * 3600 * 24)); 
    if (kuupaevadevahepaevades <5) {
    document.getElementById('tahtaeg').style.backgroundColor = "red";
} else if (kuupaevadevahepaevades <10) {
    document.getElementById('tahtaeg').style.backgroundColor = "orange";
} else {
    document.getElementById('tahtaeg').style.backgroundColor = "green";

}
    let ylesanne = {
        tahtsus: tahtsusNumber,
        nimi: nimetusTekst,
        tahtaeg: tahtaeg,
        seis: seis,
        paevijaanud: kuupaevadevahepaevades,
        
    }
   
    ylesanded.push(ylesanne)
    .value = ''
    naitaYlesannet() 
    
}

function naitaYlesannet() {

    let valjundElement = document.getElementById("valjund")
    let valjundHTML = ''
    valjundHTML += '<div class="row">'
    for (let i = 0; i < ylesanded.length; i++) {
        valjundHTML += looYlesanneHTML(ylesanded[i])
    }
    valjundHTML += '</div>'
    valjundElement.innerHTML = valjundHTML

 
}

naitaYlesannet()

