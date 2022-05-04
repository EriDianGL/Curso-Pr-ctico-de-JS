// Còdigo del cuadrado
console.group("Cuadrado"); //Agrupar mensajes en consola :)
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
// Función 
function perimetroCuadrado (ladoCuadrado) {
    return ladoCuadrado * 4;
}
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado (ladoCuadrado) {
    return ladoCuadrado * ladoCuadrado;
}
console.log("El área del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd(); //Termina grupo de mensajes

//Código del triángulo
console.group("Triángulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//   "Los lados del triángulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm, " +
//     baseTriangulo +
//     "cm."
//);
// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perímetro del triangulo es: " + perimetroTriangulo + "cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El área del triángulo es: " + areaTriangulo + "cm2");

//funcion Perimetro Triángulo
function perimetroTriangulo (ladoTriangulo1, ladoTriangulo2,  baseTriangulo){
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}
//funcion Área Triángulo
function areaTriangulo (baseTriangulo, alturaTriangulo){
    return (baseTriangulo*alturaTriangulo)/2;
}
console.groupEnd();
// Código del Círculo
console.group("Círculo"); //Agrupar mensajes en consola :)

// const radio = 4;
// console.log("El radio del círculo mide: " + radio + "cm");

// const diametro = radio * 2;
// console.log("El diametro del círculo es: " + diametro + "cm");

const PI = Math.PI;
console.log("PI es: " + PI);

// const perimetroCirculo = diametro * PI;
// console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

// const areaCirculo = radio * radio * PI;
// console.log("El área del Circulo es: " + areaCirculo + "cm2");

function perimetroCirculo (radio){
    const diametro = diametroCirculo (radio);
    return diametro*PI;
}
function areaCirculo (radio){
    return radio * radio * PI;;
}

console.groupEnd(); //Termína grupo de mensajes

//Aquí interectuamos con el HTML

function calcularPerimetroCuadrado (){
    const input = document.getElementById ("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado (value);
    alert (perimetro); 
}
console.log (perimetroCuadrado);


function calcularAreaCuadrado (){
    const input = document.getElementById ("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado (value);
    alert (area);
}