function fonctionclicker() {
    var x = document.getElementById("coordonnées");
    if (x.style.display === 'none') {
        x.style.display = '';
        document.getElementById("button").innerHTML="-";
    } else {
        x.style.display = 'none';
        document.getElementById("button").innerHTML="+";
    }}

function fonctionclick() {
    var x = document.getElementById("experiences");
    if (x.style.display === 'none') {
        x.style.display = '';
        document.getElementById("button1").innerHTML="-";
    } else {
        x.style.display = 'none';
        document.getElementById("button1").innerHTML="+";
    }}

function fonctionclicke() {
    var x = document.getElementById("formations");
    if (x.style.display === 'none') {
        x.style.display = '';
        document.getElementById("button2").innerHTML="-";
    } else {
        x.style.display = 'none';
        document.getElementById("button2").innerHTML="+";
    }}

function fonctionclicks() {
    var x = document.getElementById("logiciel");
    if (x.style.display === 'none') {
        x.style.display = '';
        document.getElementById("button3").innerHTML="-";
    } else {
        x.style.display = 'none';
        document.getElementById("button3").innerHTML="+";
    }}


function message() {
    if document.name.value"Erreur champs";
    alert("Erreur champs");


}