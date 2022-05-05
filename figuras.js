// Còdigo del cuadrado
console.group("Cuadrado"); //Agrupar mensajes en consola :)
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
// Función
function perimetroCuadrado(ladoCuadrado) {
  return ladoCuadrado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(ladoCuadrado) {
  return ladoCuadrado * ladoCuadrado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm2");
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
// function calcularPerimetroTriangulo() {
//   const inputL1 = document.getElementById("inputTrianguloLado1");
//   const inputL2 = document.getElementById("inputTrianguloLado2");
//   const inputB = document.getElementById("inputTrianguloBase");
//   const valueL1 = inputL1.value;
//   const valueL2 = inputL2.value;
//   const valueB = inputB.value;
//   console.log(valueL1, valueL2, valueB);

//   if (valueL1 == valueL2) {
//     if (valueL1 != valueL2 && valueL1 != valueL3) {
//       const baseTriangulo = valueL1;
//       console.log("El lado 1 es la base " + baseTriangulo);
//       const alturaTriangulo = Math.sqrt(valueL2 ** 2 - valueL1 ** 2 / 4);
//       console.log("La altura del triangulo " + alturaTriangulo);
//       const perimetro = perimetroTriangulo(valueL2, valueL3, valueL1);
//       alert("El perimetro es " + perimetro);
//     }
//     if (valueL2 != valueL1 && valueL2 != valueL3) {
//       const baseTriangulo = valueL2;
//       console.log("El lado 2 es la base " + baseTriangulo);
//       const alturaTriangulo = Math.sqrt(valueL1 ** 2 - valueL2 ** 2 / 4);
//       console.log("La altura del triangulo " + alturaTriangulo);
//     }
//     if (valueL3 != valueL2 && valueL3 != valueL1) {
//       const baseTriangulo = valueL3;
//       console.log("El lado 3 es la base " + baseTriangulo);
//       const alturaTriangulo = Math.sqrt(valueL2 ** 2 - valueL3 ** 2 / 4);
//       console.log("La altura del triangulo " + alturaTriangulo);
//     }
//     console.log("Es un triangulo isósceles");
//   } else {
//     alert(
//       "Los datos que ingresaste no corresponden a un triángulo isósceles. vuelve a intentarlo :)"
//     );
//   }
// }

function perimetroTriangulo(lado1, lado2, baseTriangulo) {
  const perimetro = lado1 + lado2 + baseTriangulo;
  return perimetro;
}
//funcion Área Triángulo
function areaTriangulo(baseTriangulo, alturaTriangulo) {
  const area = (baseTriangulo * alturaTriangulo) / 2;
  return area;
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

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd(); //Termína grupo de mensajes

//Aquí interectuamos con el HTML
//Funciones para calcular el perimetro y area de un cuadrado

function calcularPerimetroCuadrado() {
  const inputC = document.getElementById("inputCuadrado");
  const value = inputC.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const inputC = document.getElementById("inputCuadrado");
  const value = inputC.value;
  const area = areaCuadrado(value);
  alert(area);
}

//Funciones para calcular el perimetro y area de un triángulo isósceles

function calcularPerimetroTriangulo() {
  const inputL1 = document.getElementById("inputTrianguloLado1");
  const inputL2 = document.getElementById("inputTrianguloLado2");
  const inputB = document.getElementById("inputTrianguloBase");
  const valueL1 = inputL1.value;
  const valueL2 = inputL2.value;
  const valueB = inputB.value;
  console.log(
    "Los lados del triángulo son lado 1 " +
      valueL1 +
      "lado 2 " +
      valueL2 +
      "y base " +
      valueB
  );
  const altura = alturaTriangulo(valueL1, valueL2, valueB);
  const perimetro = perimetroTriangulo(valueL1, valueL2, valueB);
}

function calcularAreaTriangulo() {
  const inputL1 = document.getElementById("inputTrianguloLado1");
  const inputL2 = document.getElementById("inputTrianguloLado2");
  const inputL3 = document.getElementById("inputTrianguloLado3");
  const valueL1 = inputL1.value;
  const valueL2 = inputL2.value;
  const valueL3 = inputL3.value;
  console.log(valueL1, valueL2, valueL3);
  const altura = alturaTriangulo(valueL1, valueL2, valueB);
  const perimetro = areaTriangulo(valueL1, valueL2, valueB);
}
function alturaTriangulo(lado1, lado2, base) {
  if (lado1 == lado2 && lado1 != base) {
    const alturaTriangulo = Math.sqrt(lado2 ** 2 - lado1 ** 2 / 4);
    console.log("La altura del triangulo " + alturaTriangulo);
    alert("La altura es " + alturaTriangulo);
  } else {
    alert(
      "Los datos que ingresaste no corresponden a un triángulo isósceles. vuelve a intentarlo :)"
    );
  }
}
