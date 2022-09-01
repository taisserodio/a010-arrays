//# Exercício 3
//Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays,
// chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;
const arrayum=[1,2,3,4]
const arraydois=[1,"boa noite",1820]
const arraytres=["suco" ,"batata" ,"bolo"]

const arrayumCopia =arrayum.slice()
const arraydoisCopia =arraydois.slice()
const arraytresCopia =arraytres.slice()

//- Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;)

arrayumCopia.push(7)
console.log(arrayum,arrayumCopia)

//- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
arraydoisCopia.pop()
console.log(arraydois , arraydoisCopia)

//- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
arraytresCopia.slice(1,0)
console.log(arraytres,arraytresCopia)


