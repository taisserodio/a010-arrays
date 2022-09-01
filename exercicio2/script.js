//Exercício 2
//Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:
const arraynumber = [1,5,9,7]
const arrayString= ["arroz" , "feijao" , "carne"]
const arraymisto = ["boa tarde" , 1300 , false]
console.log (arraynumber)
console.log (arrayString)
console.log (arraymisto)

//- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log(arrayString.length)
console.log(arraynumber.length)
console.log(arraymisto.length)

//- Imprima o primeiro item do primeiro array
console.log(arraynumber)
// o segundo item do segundo array
console.log(arrayString)
// e o terceiro item do terceiro array;
console.log(arraymisto)


/* Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, 
e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, 
um `includes()` verdadeiro, e outro falso.*/

console.log(arraynumber.includes(1))
console.log(arraymisto.includes("doce")) 




