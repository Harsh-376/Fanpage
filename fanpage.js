// RAY
var boxray = document.getElementById("boxray");
var btnray = document.getElementById("ray");
var rspan = document.getElementsByClassName("rclose")[0];
btnray.onclick = function () {
    boxray.style.display = "block";
}
rspan.onclick = function () {
    boxray.style.display = "none";
}

// EMMA
var boxemma = document.getElementById("boxemma");
var btnemma = document.getElementById("emma");
var espan = document.getElementsByClassName("eclose")[0];
btnemma.onclick = function () {
    boxemma.style.display = "block";
}
espan.onclick = function () {
    boxemma.style.display = "none";
}

// NORMAN
var boxnorman = document.getElementById("boxnorman");
var btnnorman = document.getElementById("norman");
var nspan = document.getElementsByClassName("nclose")[0];
btnnorman.onclick = function () {
    boxnorman.style.display = "block";
}
nspan.onclick = function () {
    boxnorman.style.display = "none";
}

//Isabella
var boxisabella = document.getElementById("boxisabella");
var btnisabella = document.getElementById("isabella");
var ispan = document.getElementsByClassName("iclose")[0];
btnisabella.onclick = function () {
    boxisabella.style.display = "block";
}
ispan.onclick = function () {
    boxisabella.style.display = "none";
}

//Krone
var boxkrone = document.getElementById("boxkrone");
var btnkrone = document.getElementById("krone");
var kspan = document.getElementsByClassName("kclose")[0];
btnkrone.onclick = function () {
    boxkrone.style.display = "block";
}
kspan.onclick = function () {
    boxkrone.style.display = "none";
}

//Don
var boxdon = document.getElementById("boxdon");
var btndon = document.getElementById("don");
var dspan = document.getElementsByClassName("dclose")[0];
btndon.onclick = function () {
    boxdon.style.display = "block";
}
dspan.onclick = function () {
    boxdon.style.display = "none";
}

//Gilda
var boxgilda = document.getElementById("boxgilda");
var btngilda = document.getElementById("gilda");
var gspan = document.getElementsByClassName("gclose")[0];
btngilda.onclick = function () {
    boxgilda.style.display = "block";
}
gspan.onclick = function () {
    boxgilda.style.display = "none";
}

//Conny
var boxconny = document.getElementById("boxconny");
var btnconny = document.getElementById("conny");
var cspan = document.getElementsByClassName("cclose")[0];
btnconny.onclick = function () {
    boxconny.style.display = "block";
}
cspan.onclick = function () {
    boxconny.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == boxray) {
        boxray.style.display = "none";
    }
    else if (event.target == boxemma) {
        boxemma.style.display = "none";
    }
    else if (event.target == boxnorman) {
        boxnorman.style.display = "none";
    }
    else if (event.target == boxisabella) {
        boxisabella.style.display = "none";
    }
    else if (event.target == boxkrone) {
        boxkrone.style.display = "none";
    }
    else if (event.target == boxdon) {
        boxdon.style.display = "none";
    }
    else if (event.target == boxgilda) {
        boxgilda.style.display = "none";
    }
    else if (event.target == boxconny) {
        boxconny.style.display = "none";
    }
}
