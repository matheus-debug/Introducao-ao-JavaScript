
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
/*console.log(lista.length); // .length exibe a quantidade de itens na variavel
console.log(lista.reverse()) // .reverse() retorna os valores do array do ultimo para o primeiro
console.log(lista.toString()) // Transforma os valores do array em strings
console.log(lista.join(' || ')) // Tranforma os valores do array em string, porem vc pode selecionar a formatação da separação dos itens

var fruta = {nome: 'Maça', cor:'Vermelho'}
console.log(fruta);*/


//// AULA3 - CONDICIONAIS, LAÇOS DE REPE~TIÇÃO E DATE

/*var idade = prompt('Qual sua idade?'); //comando prompt coleta informações do usuário
if (idade >= 18) {
	alert('Maior de idade');
}else{
	alert('Menor de idade');*/

/*var count = 0;

while(count < 5){
	alert(count);
	count++;
};*/

/*var count = 0;
for (count; count <= 5; count++){
	console.log(count);
}*/
/*
var d = new Date(); //função que exibe a atual data
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getMonth());*/

//AULA 4 FUNÇÕES

/*var idade = prompt('Qual é Sua idade? ');
function ValidaIdade(idade){
	if (idade >= 18) {
		console.log('Parabéns, pode tirar CNH!')
	}else{
		console.log('Infelizmente não pode tirar CNH!')
	}
}

console.log(ValidaIdade(idade));*/
/*
//AULA 5 - Funções incrementadas no html
function botao(){
	//alert('Obrigado por clicar');
	document.getElementById('teste').innerHTML = 'Obrigado por clicar' //comando inner join modifica o texto do elemento em html
}

function redicerionar(){
	window.open('http://google.com'); //abre um link em outra janela
	window.location.href = 'http://google.com'; //abre um link na mesma janela	
}

function trocar(elemento){
	//elemento.innerHTML = prompt('Digite o novo texto'); //é possivel fazer a troca do texto com o elemnto da função
}

function change(escolher){
	console.log(escolher.value); //.value pega o valor do select
}*/



//TESTE #1
var A = 11;
var B = 7;

var total = (A + B);
console.log("X = " + total);


//TESTE #2
var A = -11;
var B = 6;

var total = (A + B);
console.log("X = " + total);

//TESTE #3
var A = 11;
var B = -2;

var total = (A + B);
console.log("X = " + total);

//TESTE #4
var A = 10;
var B = 7;

var total = (A + B);
console.log("X = " + total);