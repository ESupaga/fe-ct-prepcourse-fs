/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
   resultado = 0;

   if (x >= y) {
      resultado = x;
   } else {
      resultado = y;
   }

   return resultado;

}

function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
   resultado = '';

   if (edad >= 18) {
      resultado = 'Allowed';
   } else {
      resultado = 'Not allowed';
   }

   return resultado;
}

function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
   resultado = '';

   if (status === 1) {
      resultado = 'Online';
   } else if (status === 2) {
      resultado = 'Away';
   } else {
      resultado = 'Offline';
   }

   return resultado;
}

function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
   resultado = '';

   switch (idioma) {
      case 'aleman':
         resultado = 'Guten Tag!';
         break;
      case 'mandarin':
         resultado = 'Ni Hao!';
         break;
      case 'ingles':
         resultado = 'Hello!';
         break;
      default:
         resultado = 'Hola!';
         break;
   }

   return resultado;
}

function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
   resultado = '';

   switch (color) {
      case 'blue':
         resultado = 'This is blue';
         break;
      case 'red':
         resultado = 'This is red';
         break;
      case 'green':
         resultado = 'This is green';
         break;
      case 'orange':
         resultado = 'This is orange';
         break;
      default:
         resultado = 'Color not found';
         break;
   }

   return resultado;
}

function esDiezOCinco(num) {
   // Retornar true si "num" es 10 o 5.
   // De lo contrario, retornar false.
   // Tu código:
   resultado = false;

   if ((num === 10) || (num === 5)) {
      resultado = true;
   }

   return resultado;
}

function estaEnRango(num) {
   // Retornar true si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar false.
   // Tu código:
   resultado = false;

   if ((num < 50) && (num > 20)) {
      resultado = true;
   }

   return resultado;
}

function esEntero(num) {
   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna false.
   // Tu código:
   resultado = false;

   if (Number.isInteger(num)) {
      resultado = true;
   }

   return resultado;
}

function fizzBuzz(num) {
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   // Tu código:
   resultado = false;

   if ((num % 3) === 0) {
      resultado = 'fizz';
   }
   if ((num % 5) === 0) {
      resultado = 'buzz';
   }
   if (((num % 3) === 0) && ((num % 5) === 0)) {
      resultado = 'fizzbuzz';
   }

   return resultado;
}

function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
   resultado = false;

   if ((num1 > num2) && (num1 > num3) && (num1 > 0)) {
      resultado = 'Numero 1 es mayor y positivo';
   } else if ((num1 < 0) || (num2 < 0) || (num3 < 0)) {
      resultado = 'Hay negativos';
   } else if ((num3 > num1) && (num3 > num1)) {
      resultado = (num3 + 1);
   } else if ((num1 === 0) && (num2 === 0) && (num3 === 0)) {
      resultado = 'Error';
   }

   return resultado;
}

function esPrimo(num) {
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
   resultado = false;
   contador = 0;

   for (i = 1; i <= num; i++) {
      if (((num % i) === 0) && (num > 0)) {
         contador = contador + 1;
      }

      if (contador === 2) {
         resultado = true;
      }

      return resultado;
   }
}

function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
   resultado = 'Soy falso';

   if (valor == true) {
      resultado = 'Soy verdadero';
   }


   return resultado;
}

function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar true.
   // Caso contrario, retornar false.
   // Tu código:
   num1 = num;
   contador = 0;

   while (num1 >= 1) {
      contador = contador + 1;
      num1 = num1 / 10;
   }

   if (contador === 3) {
      resultado = true;
   } else {
      resultado = false;
   }

   return resultado;
}

function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
   resultado = num;
   i = 0;

   do {
      i = i + 1;
      resultado = resultado + 5;
   } while (i < 8);

   return resultado;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
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
   tieneTresDigitos,
   doWhile,
};
