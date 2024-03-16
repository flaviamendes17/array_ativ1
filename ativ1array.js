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

