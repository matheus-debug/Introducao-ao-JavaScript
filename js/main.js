
// AULA 1: VARIAVEIS, CONCATENAÇÃO E MÉTODOS

// Em javascript não precisa declarar o tipo de variavel
/*var nome = 'Matheus Santana'
var n1 = 11;
var n2 = 10;
var frase = 'Japão é o melhor time do mundo';

//alert(nome + ' Tem ' + idade + ' anos'); //O simbolo de + é usado para concatenar variaveis

//o console.log é um metodo utilizado para exibir mensagens e valores no console do navegador
console.log(n1 + n2, 'É o resultado da soma'); //Para fazer operações aritiméticas não podemos colocar apostrofe ou aspas nos valores das variaveis
console.log(frase.replace('Japão', 'Brasil')); //.replace realiza a substituição do valor de uma string por outra*/

// *************AULA 2: ARRAY E DICIONÁRIO*****************

var lista = ['Maça', 'Pêra', 'Morango']
//lista.push('Uva'); // .push é utilizado para adicionar valores para um array existente
//lista.pop(); //remove o ultimo valor do array
console.log(lista.length); // .length exibe a quantidade de itens na variavel
console.log(lista.reverse()) // .reverse() retorna os valores do array do ultimo para o primeiro
console.log(lista.toString()) // Transforma os valores do array em strings
console.log(lista.join(' || ')) // Tranforma os valores do array em string, porem vc pode selecionar a formatação da separação dos itens

var fruta = {nome: 'Maça', cor:'Vermelho'}
console.log(fruta);
