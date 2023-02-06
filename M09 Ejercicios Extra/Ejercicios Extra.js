/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var padre = [];
   for (var i in objeto) {
      var hijo = [i, objeto[i]];
      padre.push(hijo);
   }

   return padre;

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var frase = [];

   var i = 0;
   var letra = string[0];
   var obj = {};
   obj[letra] = 0;

   //Ordena alfabeticamente
   frase = string.split('');
   frase = frase.sort();

   // Se encarga de vr que letraas tiene el string y el numero de veces que aparecen
   while (i < frase.length) {
      letra = frase[i];

      if (obj.hasOwnProperty(letra)) {
         obj[letra] = (obj[letra] + 1);
      } else {
         obj[letra] = 1;
      }

      i = i + 1;
   }

   return obj;
}


function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayuscula = '';
   var minuscula = '';
   var resultado = '';

   for (var i = 0; i < string.length; i++) {
      if (string[i] === string[i].toUpperCase()) {
         mayuscula = mayuscula + string[i];
      } else {
         minuscula = minuscula + string[i];
      }
   }
   resultado = mayuscula + minuscula;
   return resultado;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var auxArray = [];
   var auxString = '';
   var aux = '';
   var palabra = '';

   //string a array
   auxArray = frase.split(' ');

   //Ordena las palabras al reves
   for (var i = 0; i < auxArray.length; i++) {
      palabra = auxArray[i];
      aux = '';
      for (var j = (palabra.length - 1); j >= 0; j--) {
         aux = aux + palabra[j];
      }
      auxArray[i] = aux;
   }

   // array a string
   auxString = auxArray.join(' ');

   return auxString;
}


function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var resultado = 'Es capicua';
   var auxArray = [];
   var largo = 0;

   auxArray = String(numero).split('');
   largo = auxArray.length;

   for (var i = 0; i < (largo / 2); i++) {
      //console.log('auxArray[i] ' + auxArray[i] + '-auxArray[largo - i]' + auxArray[(largo-1) - i]);
      if (auxArray[i] != auxArray[(largo - 1) - i]) {
         resultado = 'No es capicua';
      }
   }
   ///
   return resultado;

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var resultado = '';

   for (var i = 0; i < (string.length); i++) {
      if (string[i] != 'a' && string[i] != 'b' && string[i] != 'c') {
         resultado = resultado + string[i];
      }
   }

   ///
   return resultado;

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var resultado = [];
   var auxArray = [];
   var esta = false;

   auxArray.push(arrayOfStrings[0].length);

   for (var i = 0; i < arrayOfStrings.length; i++) {
      esta = false;
      for (var j = 0; j < auxArray.length; j++) {
         if (arrayOfStrings[i].length === auxArray[j]) {
            esta = true;
         }
      }
      if (esta === false) {
         auxArray.push(arrayOfStrings[i].length);
      }
   }

   auxArray = auxArray.sort();

   for (var i = 0; i < auxArray.length; i++) {

      for (var j = 0; j < arrayOfStrings.length; j++) {
         if (arrayOfStrings[j].length === auxArray[i]) {
            resultado.push(arrayOfStrings[j]);
         }
      }
   }
   ///
   return resultado;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var resultado = [];
   var esta = false;

   for (var i = 0; i < array1.length; i++) {
      for (var j = 0; j < array2.length; j++) {
         if (array1[i] === array2[j]) {
            esta = false;
            for (var h = 0; h < resultado.length; h++) {
               if (array1[i] === resultado[h]) {
                  esta = true;
               }
            }
            if (esta === false) {
               resultado.push(array1[i]);
            }
         }
      }
   }

   ///
   return resultado;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
