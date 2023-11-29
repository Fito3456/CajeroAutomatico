// Inicio de los usuarios
const usuario1 = {
    nombre: "Renato",
    password: "3456fito",
    capital: 100
}
const usuario2 = {
    nombre: "Fito3456",
    password: "pedroyjuan",
    capital: 200
}
const usuario3 = {
    nombre: "Majuan",
    password: "poloño",
    capital: 200
}
let usuarioSelecionado;
// Termino de los usuarios

function validador(nombre, password) {
    const form = document.getElementById('form');
    if (nombre === usuario1.nombre && password === usuario1.password) {
        alert('Login exitoso!');
        usuarioSelecionado = usuario1;
        form.style.display = "none"; 
    } else if (nombre === usuario2.nombre || password === usuario2.password) {
        alert('Login exitoso');
        usuarioSelecionado = usuario2;
        form.style.display = "none"; 
    } else if (nombre === usuario3.nombre || password === usuario3.password) {
        alert('Login exitoso');
        usuarioSelecionado = usuario3;
        form.style.display = "none"; 
    }else if (nombre === '' || password === '') {alert('Los los campos son obligatorios');
        return false}   
    else {alert ('Datos errados por favor revisar');
        return false}
     
    
    
};

document.getElementById("btn").addEventListener("click", function(){
    let nombre = document.getElementById("cuenta").value
    let password = document.getElementById("password").value
    validador(nombre,password)
    loginSuccess()
    datos(nombre)

})
 
function loginSuccess() {
        document.getElementById("login-success").style.display = 'block';
        document.getElementById("form").style.display = 'none';
        document.getElementById("general").style.display= "block";
        document.getElementById("boton").style.display= "block";
}


function datos(nombre){
    let nombres = document.getElementById("usur")
    nombres.innerHTML = "Usuario: " + nombre
}
const mostrarmonto = document.getElementById("consultarCapital");
function mostrarCapital(){
    montoCapital.innerHTML = `Capital: ${usuarioSelecionado.capital}` ;
}
const montoInput = document.getElementById('montoInput');
const ingresarButton = document.getElementById('ingresarButton');
const montoCapital = document.getElementById('montoCapital');

function AgregarMontoCapital() {
 const monto = Number(montoInput.value);
 usuarioSelecionado.capital = usuarioSelecionado.capital + monto
    
 montoCapital.textContent = `Capital :${usuarioSelecionado.capital}` ;
 alert("Has agregado: " + monto )
}
const retirarCapital = document.getElementById("retirarButton")
const retirarInput = document.getElementById("retirarInput")
const saldoRetiro = document.getElementById("montoCapital");
function retirarMonto(){
    const retiro = Number(retirarInput.value);
    usuarioSelecionado.capital = usuarioSelecionado.capital - retiro
    montoCapital.innerHTML = `Capital: ${usuarioSelecionado.capital}`
    alert("Has retirado: " + retiro )
}

mostrarmonto.addEventListener("click", mostrarCapital)
ingresarButton.addEventListener('click', AgregarMontoCapital);
retirarCapital.addEventListener("click", retirarMonto);