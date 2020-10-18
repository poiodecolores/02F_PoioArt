var boton = document.getElementById("button");
var obra1 = document.getElementById("name1");
var obra2 = document.getElementById("name2");
var obra3 = document.getElementById("name3");
var obra4 = document.getElementById("name4");
var obra5 = document.getElementById("name5");
var obra6 = document.getElementById("name6");

function ingresarDatos() {
    var nombre1 = prompt("Ingresa el nombre de la primera obra :3");
    localStorage.setItem('name1' ,nombre1);
    obra1.innerHTML = "Obra 1: " + nombre1;

    var nombre2 = prompt("Ingresa el nombre de la segunda obra :3");
    localStorage.setItem('name2' ,nombre2);
    obra2.innerHTML = "Obra 2: " + nombre2;

    var nombre3 = prompt("Ingresa el nombre de la tercera obra :3");
    localStorage.setItem('name3' ,nombre3);
    obra3.innerHTML = "Obra 3: " + nombre3;

    var nombre4 = prompt("Ingresa el nombre de la cuarta obra :3");
    localStorage.setItem('name4' ,nombre4);
    obra4.innerHTML = "Obra 4: " + nombre4;

    var nombre5 = prompt("Ingresa el nombre de la quita obra :3");
    localStorage.setItem('name5' ,nombre5);
    obra5.innerHTML = "Obra 5: " + nombre5;

    var nombre6 = prompt("Ingresa el nombre de la sexta obra :3");
    localStorage.setItem('name6' ,nombre6);
    obra6.innerHTML = "Obra 6:  " + nombre6;
}


if (localStorage.getItem('name1') && localStorage.getItem('name2') && localStorage.getItem('name3') && localStorage.getItem('name4') && localStorage.getItem('name5') && localStorage.getItem('name6')){

    var obra1Temp = localStorage.getItem ('name1');
    obra1.innerHTML = "Obra 1: " + obra1Temp;

    var obra2Temp = localStorage.getItem ('name2');
    obra2.innerHTML = "Obra 2: " + obra2Temp;

    var obra3Temp = localStorage.getItem ('name3');
    obra3.innerHTML = "Obra 3: " + obra3Temp;

    var obra4Temp = localStorage.getItem ('name4');
    obra4.innerHTML = "Obra 4: " + obra4Temp;

    var obra5Temp = localStorage.getItem ('name5');
    obra5.innerHTML = "Obra 5: " + obra5Temp;

    var obra6Temp = localStorage.getItem ('name6');
    obra6.innerHTML = "Obra 6: " + obra6Temp;
}

// else{
// ingresarDatos();
// }

boton.onclick= function () {
    ingresarDatos();
}