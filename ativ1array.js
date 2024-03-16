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

