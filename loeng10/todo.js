const sisuElement = document.getElementById("sisu")

function vahetaTehtudMaarang(ylesandeIndeks) {
    console.log("Valiti ülesanne: " + ylesandeIndeks)
    let ylesanne = ylesanded[ylesandeIndeks]
    console.log(ylesanne)
    ylesanne.kasTehtud = !ylesanne.kasTehtud

    valjastaKoikYlesanded()
}



function valjastaYlesanne(ylesanne, ylesandeIndeks) {
    let kasTehtud = ""
    let valitud = ""
    if (ylesanne.kasTehtud) {
        kasTehtud = 'valmis!'
        valitud = "checked"
    }

    sisuElement.innerHTML += `

    <div class="col-12   card">
    <img class="card-img-top" src=""
    <div >

    <div class="row">

         <div class="col-11">
             <h5>Ülessanne ${kasTehtud}</h5>
        </div>
 
         <div class="col-1">
             <label class="switch">
                <input type="checkbox" onchange="console.log(this.value);" ${valitud} onclick="vahetaTehtudMaarang(${ylesandeIndeks})"> 
                <span class="slider round"></span>
             </label>
         </div>


         </div>
              <div class="card-text">
            <p class="tekstikujundus"> ${ylesanne.kirjeldus}</p>
            <h6>Olulisus</h6> <p class="tekstikujundus">${ylesanne.olulisus}</p>
            <h6> Tähtaeg</h6> <p class="tekstikujundus">${ylesanne.tahtaeg}</p>
            <h6> Järgijäänud päevi</h6> <p class="tekstikujundusj" style="background-color: ${ylesanne.staatusVarv}">${ylesanne.paevijaanud}</p>
         

   </div>
        </div>
    </div>
    
    
    `
}

const ylesanded = []



function lisaYlesanne() {
    let kirjeldus = document.getElementById("kirjeldus").value
    let tahtaeg = document.getElementById("tahtaeg").value
    let olulisus = document.getElementById("olulisus").value

    let tana = new Date();
    let deadline = new Date(tahtaeg);
    let kuupaevadevaheajas = deadline.getTime() - tana.getTime();
    let kuupaevadevahepaevades = Math.ceil(kuupaevadevaheajas / (1000 * 3600 * 24));
    
    let staatusVarv = ''

    if(kuupaevadevahepaevades  >10){
        staatusVarv = '#adf7b6'
    }else if(kuupaevadevahepaevades > 5 && kuupaevadevahepaevades  < 11){
        staatusVarv = '#ffee93'
    }else{
        staatusVarv = '#ffc09f'
    }

    let ylesanne = {
        kirjeldus: kirjeldus,
        tahtaeg: tahtaeg,
        olulisus: olulisus,
        paevijaanud: kuupaevadevahepaevades,
        staatusVarv: staatusVarv,
       
    }

    if(document.getElementById("kirjeldus").value.length == 0)
    {
        alert("Palun sisesta ülesanne");
        return false; 
    }
    if(document.getElementById("tahtaeg").value.length == 0)
    {
        alert("Palun vali tähtaeg");
        return false; 
    }
    if(document.getElementById("olulisus").value.length == 0)
    {
        alert("Palun sisesta olulisus ");
        return false; 
    }

    ylesanded.push(ylesanne)
    valjastaKoikYlesanded()
}


function valjastaKoikYlesanded() {
    sisuElement.innerHTML = ""
    for (i = 0; i < ylesanded.length; i++) {
        const ylesanne = ylesanded[i]
        valjastaYlesanne(ylesanne, i)
    }
    
}


valjastaKoikYlesanded()

