// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  vector = array;
  elemento = vector[0];
  return elemento
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  vector = array;
  elemento = vector.pop();
  return elemento
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  vector = array;
  largo = vector.length;
  return largo
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  vec = array;
  l = vec.length;
  for(let i = 0; i< l; i++){
    vec[i] +=1
  };
  return vec

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  a = array;
  e = elemento;
  a.push(e)
  return a
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  a = array;
  e = elemento;
  a.unshift(e)
  return a
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  f = palabras.join(" ");
  return f
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  a = array;
  e = elemento;
  var ban
  for (var i = 0; i < a.length; i++){
    if (a[i] === e){
      ban = true
      return ban
    }
  }
  ban = false
  return ban;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0
  for (var i = 0; i < numeros.length; i++){
    suma += numeros[i]
  }
  return suma
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0
  for (var i = 0; i < resultadosTest.length; i++){
    suma += resultadosTest[i]
  }
  var prom = suma / resultadosTest.length
  return prom
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var mayor = numeros[0]
  for (var i = 0; i< numeros.length; i++){
    if (mayor < numeros[i]){
      mayor = numeros[i]
    }
  }
  return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let producto = 1
  if (arguments.length < 1){return 0};
  if (arguments.length === 1){return arguments[0]};
  if (arguments.length > 1){
    for (let i = 0; i < arguments.length; i++){
      producto = producto * arguments[i]
    }
    return producto;
  }

}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  acount = 0
  for (let i = 0; i< arreglo.length; i++){
    if (arreglo[i] > 18){
      acount +=1
    }
  }
  return acount;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7){
    return "Es fin de semana";
  }else {
    return "Es dia Laboral";
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  numero = n.toString();
  let arr = numero.split("")
    if (arr[0] === '9'){
      return true;
    }else{
      return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let ban = false
  for (let i = 0; i < arreglo.length-1; i++){
    if (arreglo[i] === arreglo[i+1]){
      ban = true
    }else{return false}
  }
  return ban
}


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  ar = array;
  meses = [];
  var cant = 0;
  for (let i = 0; i < ar.length; i++){
    if(ar[i] === 'Enero' || ar[i] === 'Marzo' || ar[i] === 'Noviembre'){
      meses.push(ar[i]);
      cant += 1;
    }
  }
  if (cant === 3){
    return meses;
  }else {return 'No se encontraron los meses pedidos'}
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  vec = [];
  for(let i = 0; i < array.length; i++){
    if (array[i] > 100){
      vec.push(array[i])
    }
  }
  return vec
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  array = [];
  var total = numero
  for (var i = 0; i < 10; i++){
    total += 2;
    if (total !== i){
      array.push(total);
    } else{
      break
    }
  }
  if (i < 10){
    return "Se interrumpió la ejecución";
  }else {return array}
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  array = [];
  var total = numero
  for (var i = 0; i < 10; i++){
    if (i !== 5){
      total += 2;
      array.push(total);
    } else{
      continue
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
