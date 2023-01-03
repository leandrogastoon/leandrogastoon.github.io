const icono = document.querySelector(".icn");
const icono2 = document.querySelector(".icn2");
const icono3 = document.querySelector(".icn3");
const icono4 = document.querySelector(".icn4");
const icono5 = document.querySelector(".icn5");
const icono6 = document.querySelector(".icn6");

const nombre = document.querySelector(".nombre");
const correo = document.querySelector(".correo");
const nacimiento = document.querySelector(".nacimiento");
const ubicacion = document.querySelector(".ubicacion");
const telefono = document.querySelector(".telefono");
const password = document.querySelector(".password");

icono.addEventListener("mouseover", cambio);
icono2.addEventListener("mouseover", cambio2);
icono3.addEventListener("mouseover", cambio3);
icono4.addEventListener("mouseover", cambio4);
icono5.addEventListener("mouseover", cambio5);
icono6.addEventListener("mouseover", cambio6);

function cambio(){
    nombre.style.display = "block";
    correo.style.display = "none";
    nacimiento.style.display = "none";
    ubicacion.style.display = "none";
    telefono.style.display = "none";
    password.style.display = "none";
}
function cambio2(){
    nombre.style.display = "none";
    correo.style.display = "block";
    nacimiento.style.display = "none";
    ubicacion.style.display = "none";
    telefono.style.display = "none";
    password.style.display = "none";
}
function cambio3(){
    nombre.style.display = "none";
    correo.style.display = "none";
    nacimiento.style.display = "block";
    ubicacion.style.display = "none";
    telefono.style.display = "none";
    password.style.display = "none";
}
function cambio4(){
    nombre.style.display = "none";
    correo.style.display = "none";
    nacimiento.style.display = "none";
    ubicacion.style.display = "block";
    telefono.style.display = "none";
    password.style.display = "none";
}
function cambio5(){
    nombre.style.display = "none";
    correo.style.display = "none";
    nacimiento.style.display = "none";
    ubicacion.style.display = "none";
    telefono.style.display = "block";
    password.style.display = "none";
}
function cambio6(){
    nombre.style.display = "none";
    correo.style.display = "none";
    nacimiento.style.display = "none";
    ubicacion.style.display = "none";
    telefono.style.display = "none";
    password.style.display = "block";
}

