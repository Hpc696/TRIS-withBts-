let x=[], o=[];
let giocatore=0; //determina quando tocca al giocatore con la X e quando a quell con O
let clicks=0; //cont totale dei click fatti(che portano a X o O)
let primoclick=false; //per non contare il primo click
if (Math.round(Math.random()) == 1) { //chi inizia? a caso
    console.log('sei x');
    giocatore='x';
    tocca_a_x();
} else {
    console.log('sei o');
    giocatore='o';
    tocca_a_o();
}
for(let i=0; i<9; i++){ //iniz l'array
    x[i]=false;
    o[i]=false;
}

function tocca_a_x() { //tocca a X e lo dice, conta i click
    if (primoclick == false)
        primoclick = true;
    else {
        clicks++;
        console.log(clicks);
    }
    document.getElementById("tocca a").innerHTML = "Turno di X";
}

function tocca_a_o() { //tocca a o e lo dice, conta i click
    if (primoclick == false)
        primoclick = true;
    else {
        clicks++;
        console.log(clicks);
    }
    document.getElementById("tocca a").innerHTML = "Turno di O";
}
//controllo if casella se è stata e da chi premuta
function cliccato(posizione){
    if(x[posizione-1]==false && o[posizione-1]==false){
        if(giocatore=='o'){
            o[posizione-1] = true;
            document.getElementById("casella"+posizione).src= "images/TickO.png";
            document.getElementById("casella"+posizione).style.opacity = "1";
            giocatore = 'x';
            tocca_a_x();
        } else if (giocatore == 'x') {
            x[posizione-1] = true;
            document.getElementById("casella"+posizione).src= "images/TickX.png";
            document.getElementById("casella"+posizione).style.opacity = "1";
            giocatore = 'o';
            tocca_a_o();
        }
        controllo();
    }
}
//controllo vittoria
function controllo() {
    if (x[0] == true && x[1] == true && x[2] == true || x[0] == true && x[4] == true && x[8] == true || x[0] == true && x[3] == true && x[6] == true || x[1] == true && x[4] == true && x[7] == true || x[2] == true && x[5] == true && x[8] == true || x[2] == true && x[4] == true && x[6] == true || x[6] == true && x[7] == true && x[8] == true || x[3] == true && x[4] == true && x[5] == true) {
        alert('Giocatore X ha vinto!!!');
        console.log('vittoria per x');
        reset();
    } else if (o[0] == true && o[1] == true && o[2] == true || o[0] == true && o[4] == true && o[8] == true || o[0] == true && o[3] == true && o[6] == true || o[1] == true && o[4] == true && o[7] == true || o[2] == true && o[5] == true && o[8] == true || o[2] == true && o[4] == true && o[6] == true || o[6] == true && o[7] == true && o[8] == true || o[3] == true && o[4] == true && o[5] == true) {
        alert('Giocatore O ha vinto!!!');
        console.log('vittoria per o');
        reset();
    }
    if (clicks == 9) {
        alert('Pareggio sfigati');
        console.log('patta');
        reset();
    }
}
//reset quando finisce un gioco
function reset() {
    for (let i = 1; i < 10; i++) {
        let nome = "casella" + i;
        document.getElementById(nome).innerHTML = "";
        x[i-1]=false;
        o[i-1]=false;
    }
    clicks = 0;
}
//hover caselle
function hox(posizione) {
    if (x[posizione-1] == false && o[posizione-1] == false) {
        let img=document.createElement("img");
        img.className="myimg";
        if (giocatore == 'x') {
            img.src = "images/TickX.png"; 
        } else if (giocatore == 'o') {
            img.src = "images/TickO.png"; 
           
        }
        let src = document.getElementById("casella"+posizione);
        src.appendChild(img); 
    } else
        nhox(posizione);
}
function nhox(posizione) {
    if (x[posizione-1] == false && o[posizione-1] == false)
        document.getElementById("casella"+posizione).innerHTML = "";
}