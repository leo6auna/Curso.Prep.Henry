// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  var a = x;
  var b = y;
  if (a > b){
    return a
  }else if (a < b){
    return b
  }else if (a === b){
    c = a || b
    return c
  }
};

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  num = edad;
  si = "Allowed";
  no = 'Not allowed'
  if (num >= 18){
    return si
  }else {
    return no
  }
};
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  var statusOne = 'Online';
  var statusTwo = 'Away';
  var statusThree = 'Offline';
  var actual = status;
  if (actual === 1){
    return statusOne
  } else if(actual === 2){
    return statusTwo
  } else{
    return statusThree
  }
};

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  var lang = idioma;
  if (lang === 'aleman'){
    return 'Guten Tag!'
  } else if (lang === 'mandarin'){
    return 'Ni Hao!'
  } else if (lang === 'ingles'){
    return 'Hello!'
  } else {
    return 'Hola!'
  }
};

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  const colour = color;
  switch(colour){
    case "blue":
      return "This is blue";
    case "red":
      return "This is red";
    case "green":
      return "This is green";
    case "orange":
      return "This is orange";
    default:
      return "Color not found"; 
  }
};

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  var num = numero;
  if (num === 10 || num === 5){
    return true
  } else {
    return false
  }
};

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  var number = numero;
  if (number < 50 && 20 < number){
    return true
  } else {
    return false
  }
};

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  var a = numero;
  var b = Math.floor(a);

  if (a === b){
    return true
  }else {
    return false
  }
};

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  var n = numero;
  var tres = n % 3;
  var cinco = n % 5;
  if (tres === 0 && cinco === 0){
    return 'fizzbuzz'
  } else if (tres === 0){
    return 'fizz'
  }else if (cinco === 0){
    return 'buzz'
  } else {
    return n
  }
};

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  var a = num1;
  var b = num2;
  var c = num3;
  if (a === 0 || b === 0 || c === 0){
    return 'Error'
  }else if (!(a >= 0 && b >= 0 && c >= 0)){
    return 'Hay negativos'
  }else if(a > b && a > c && a > 0){
    return 'Número 1 es mayor y positivo'
  }
  else if (a < c && b < c){
    c += 1;
    return c
  }else {
    return false
  }
};

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  var num = numero
  bandera = true
  if (num === 0 || num === 1 || num === -1){return false} 
  else if (num === 2){return true} 
  else if (num % 2 === 0){return false} 
  else{
      var k = Math.floor(Math.sqrt(num));
      for (i = k; i >= 3; i-=2)
      {
        if (num % i === 0){return false}
      }
      return true
    
  }
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  vale = valor
  if(vale){return 'Soy verdadero'}
  else{return 'Soy falso'}
};

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí 
  var a = new Array(); 
  for (i = 0; i<=10; i++){
    var num = 6 * i;
    a.push(num)
  }
  return a
};

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  var n = numero
  var n2 = n.toString();
  var l = n2.length;
  if (l === 3){
    return true
  }else{return false}
};

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var num = numero
  var i = 0;
  do{
    i = i + 1;
    num = num + 5;
  }while(i < 8);
  return num
};


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
