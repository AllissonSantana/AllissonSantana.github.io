function maioNumero(){
    let numero1 = document.getElementById("1").innerHTML;
    console.log(numero1);
}
maioNumero();

var formu = document.getElementById("maiorNummero");
var campo1 = document.getElementById("1");
var campo2 = document.getElementById("2");
var resu = document.getElementById("Resultado");

formu.addEventListener("submit",function(e){
    resu.innerHTML = campo1.value>campo2.value ? `${campo1.value} é maior que ${campo2.value}`: `${campo2.value} é maior que ${campo1.value}.`;
    e.preventDefault();
});