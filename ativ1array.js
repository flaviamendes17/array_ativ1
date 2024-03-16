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

