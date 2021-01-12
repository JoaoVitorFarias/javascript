//---------------------------------MODULO 1-------------------------------------
class List{
  constructor(){
    this.data = [];
  }

  add(data){
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List{ //herança
  constructor() {
    super(); //chama o método construtor do pai
    this.usuario = "João";
  }
}
// para definir métodos estáticos basta adicionar 'static' antes do nome do método 

var  MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
  MinhaLista.addTodo();
}

// é possivél fazer mutação em objeto const 
const pesssoa = {nome: "Joao"};

pesssoa.nome = "Vitor";

// o let é mais usado como variável de escopo
// Array
const arr = [1,3,4,5,8,9];

const newArr = arr.map(function(item,index){
  return item + index;
});

const sum = arr.reduce(function(total,next){
  return total + next;
});

const filter = arr.filter(function(item){
  return item %2 === 0;
});

const find = arr.find(function(item){
  return item === 4;
});

// Arrow Function
// o melhor local para usar arrow function é em funções anônimas
// quando a função possue apenas um parâmetro não é necessário os parênteses
// além disso, quando o retorno é algo pequeno, pode colocar a instrução depois da arrow
const novoArr = arr.map(item => item + 2);

const teste = () => ({ nome: "Joao"}); // para poder retorna objetos 

const teste2 = () => { 
  return {nome: "Joao"};
};

// definir valor padrão para os parâmetros 
const soma = (a =3 , b=5) => a + b;

// Desestrturação de objeto
const usuario ={
  nome: "Joao",
  idade: 20,
  endereco:{
    cidade: "Gama",
    estado: "DF",
  },
};

const {nome, idade, endereco:{cidade}} = usuario;

function mostraNome ({nome, idade}){
  console.log(nome, idade);
}

mostraNome(usuario);

// Operadores Rest/Spread
// Rest serve para pegar os restos das propriedades
const usuario1 = {
  nome:"Joao",
  idade: 25,
  empresa: "EU Mesmo",
};

const {nome, ...resto} = usuario1;
console.log(nome, resto);
//------------------------------------
const arr1 = [1,2,3,4,5];
const [a, b, ...c] = arr1;
//------------------------------------
function soma(...params){// os parâmetros estaram em um arrray
  return params.reduce((total,next) => total+next);
}

// Spread serve para propagar/repassar as informações  de algum objeto ou array para outra estrutura de dados
const arr2 = [1,2,3];
const arr3 = [4,5,6];

const arr4 = [...arr2, ...arr3];
//------------------------------------
const  usuario2 = {
  nome: "Joao",
  idade: 23,
  empresa: "Olha Lá",
};

const usuario3 = {...usuario2, nome: "Pedro"};

//Template Literals
nome1 = "Joao";
idade2= 25;

console.log(`Meu nome é ${nome1} e tenho ${idade2} anos`);

// Object Short Syntax
// Quando o atributo tem o mesmo nome da variável não é necessário fazer a atribuição

nome = "Joao";
idade= 25;

const pessoa1 ={
  nome,
  idade,
  empresa: "Jao da TI",
};
//---------------------------------MODULO 2-------------------------------------
// Export/Import
export function soma(a,b){
  return a+b;
}

import {soma as somaFunction} from './arquivo';// não é preciso especificar '.js'

const resultado = somaFunction(1,2);

//----------------------//
export  default function soma(a,b){
  return a+b;
}

import soma from './arquivo';

const resultado = soma(1,2);
//----------------------//
import * as funcoes from './arquivo'; // importando todas as funções do arquivo e armazenando em um obj

const resultado = funcoes.soma(1,2);
//---------------------------------MODULO 3-------------------------------------
const minhaPromise = () => new Promise ((resolve,reject) =>{
  setTimeout(() => {resolve('OK')}, 2000);
});

minhaPromise()
  .then(response => {
    console.log(response);
  })
    .catch(err =>{

    })
// Aaync/await
// nessa estrutura um linha de comando só é executada quando a execução da linha 
// anterior terminou.
async function executaPromise(){
 const response = await minhaPromise();
 console.log(response);
 console.log(await minhaPromise());
}
executaPromise();

const executaPromise2 = async() => {
 console.log(await minhaPromise());
};

executaPromise2();

//-----------------------------------------------------
import axios from 'axios';

class Api {
  static async getUserInfo(username){
    try{
      const response = await axios.get(`https://api.github.com/users/${username}`);
      console.log(response);
    } catch(err){
      console.log("Errro na API");
    }
    console.log(response);
  }
}

Api.getUserInfo('JoaoVitorFarias');