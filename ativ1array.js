//Inicializando a atividade 

//Metodo 1: push 
//push: adiciona na última posição do vetor 
let acessorios = ['pulseira, colar, brinco, anel'];
acessorios.push('tornozeleira');
acessorios.push('tiara');
acessorios.push('luva');
console.log(acessorios);

//Metodo 2: pop 
//pop: remove o ultimo elemento 
let timeFutebol = ['palmeiras', 'ponte preta', 'real madrid', 'corinthians'];
timeFutebol.pop();
console.log(timeFutebol);

//primeiro metodo não utilizando push/pop
//metodos fill(): preenche um array com um valor estático
let frutas = ['morango', 'uva', 'banana'];
frutas.fill('goiaba');
console.log(frutas);
//segundo exemplo com fill
let doces = ['brigadeiro', 'paçoca', 'beijinho'];
doces.fill('cocada');
console.log(doces);

//segundo metodo: includes() - verifica a presença de um elemento
let nome = ['flavia', 'fernanda', 'maitê'];

let x = nome.includes('flavia')
console.log(x); //true

//segundo exemplo: includes 
let cor = ['amarelo', 'rosa', 'laranja'];
let y = cor.includes('azul')
console.log(y); //false 

//terceiro metodo: sort
//sort: converte os elementos em strings e os ordena.
let salada = ['tomate', 'alface', 'pepino'];
salada.sort(); 
console.log(salada); //ficou: alface,pepino,tomate

//segundo exemplo: sort
let escola = ['caderno', 'mochila', 'estojo'];
escola.sort();
console.log(escola); //ordenou para: caderno,estojo,mochila

//quarto metodo: shift
//shift:remove o primeiro elemento 
let aparelhos = ['computador', 'celular', 'fone'];
aparelhos.shift();
console.log(aparelhos);

//segundo exemplo: shift 
let roupas = ['blusa', 'moletom', 'calça'];
roupas.shift();
console.log(roupas);

//quinto metodo: unshift
//unshift: adiciona ao inicio da array
let sapatos = ['salto', 'tenis', 'chinelo'];
sapatos.unshift();
let x = sapatos.unshift('sapatilha')
console.log(x);

//segundo exemplo: unshift
let casa = ['quarto', 'sala', 'cozinha'];

casa.unshift();
let y = casa.unshift('banheiro');
console.log(y);

//sexto metodo:splice
//splice: adiciona e apaga
let carro = ['uno', 'ferrari', 'sandero'];
carro.splice(1, 1, 'onix');
console.log(carro);

//segundo exemplo: splice
let cozinha = ['garfo', 'faca', 'comida'];
cozinha.splice(1, 1, 'copo');
console.log(cozinha);

//sétimo metodo: concat
//concat: une um ou mais arrays
let primeiro = [1, 2, 3];
let segundo = [4, 5, 6];
let concatenado = primeiro.concat(segundo);
console.log(concatenado);
console.log(primeiro);
console.log(segundo);

//segundo exemplo: concat
let verduras = ['brocolis', 'espinafre'];
let legumes = ['berinjela', 'abobora'];
let concat = verduras.concat(legumes);
console.log(concat);
console.log(verduras);
console.log(legumes);

//oitavo metodo: reverse
//inverte as posições 
let celular = ['iphone', 'samsung', 'motorola'];
celular.reverse();
console.log (celular);

//segundo exemplo: reverse
let redes = ['instagram', 'whatsapp', 'facebook'];
redes.reverse();
console.log(redes);

//nono metodo: every
//every: detecta todos os elementos do array
let escola = ['biologia','filosofia', 'historia'];
let materiaEscola = escola.every ((elemento, indice )=>{return elemento.materias});
console.log(materiaEscola);

//segundo exemplo: every
let trabalho = ['jornalista', 'médico','professor'];
let profissoes = trabalho.every ((elemento, indice)=> {return elemento.profissoes});
console.log(profissoes);

