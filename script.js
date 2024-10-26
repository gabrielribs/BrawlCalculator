// CARREGAR CONTEÚDOS DE CADA DROP

const conteudos = {
    raro: '<p>Teste 1</p>',
    superraro: '<p>Teste 2</p>',
    epico: '<p>Teste 3</p>',
    mitico: '<p>Teste 4</p>',
    lendario: '<p>Teste 5</p>'
}

document.querySelectorAll('.abalateralDrop').forEach( aba => {
    aba.addEventListener('click', function(){
        const escolha = aba.getAttribute('id')
        const boxDrop = document.getElementById('boxLeftDrop')
        boxDrop.innerHTML = conteudos[escolha];
    });
});

// MUDAR ABA PÁGINA

const boxDrop = document.querySelector('.boxDrop');
const boxCalc = document.querySelector('.boxCalc');
const nav = document.querySelectorAll('.nav div');

document.querySelectorAll('.page').forEach( page => {
    page.addEventListener('click', function(){
        const escolha = page.getAttribute('data-id')
        if(escolha == '1'){
            boxDrop.style.display = 'none';
            boxCalc.style.display = 'flex';
            nav[0].style.backgroundColor = 'rgb(110, 110, 110)';
            nav[1].style.backgroundColor = 'rgb(77, 77, 77)';
        }else if(escolha == '2'){
            boxDrop.style.display = 'flex';
            boxCalc.style.display = 'none';
            nav[0].style.backgroundColor = 'rgb(77, 77, 77)';
            nav[1].style.backgroundColor = 'rgb(110, 110, 110)';
        }
    });
});

// ABRIR E FECHAR

let verific = true;
document.querySelectorAll('.abalateralCalc').forEach(aba =>{
    aba.addEventListener('click', function(){ 
        const abrirDir = verific ? 'translateX(-200px)' : 'translateX(0px)';
        const abrirEsq = verific ? 'translateX(200px)' : 'translateX(0px)';
        document.querySelectorAll('.boxLeft, .nav').forEach(item =>{
            item.style.transform = abrirDir;
            item.style.transition = '0.3s ease-out';
        });
        document.querySelectorAll('.boxRight, .abalateralCalc').forEach(item =>{
            item.style.transform = abrirEsq;
            item.style.transition = '0.3s ease-out';
        });
        verific = !verific;
    });
});

// CALCULADORA

var gold = document.getElementById('goldtxt');
var pp = document.getElementById('pptxt');
var atual = document.getElementById('atualtxt');
var upgrade = document.getElementById('upgradetxt');

const max = 11;
const min = 1;

// MAP DOS ELEMENTOS

const goldmap = new Map([
    [1, 0],
    [2, 20],
    [3, 55],
    [4, 130],
    [5, 270],
    [6, 560],
    [7, 1040],
    [8, 1840],
    [9, 3090],
    [10, 4965],
    [11, 7765]
]);

const ppmap = new Map([
    [1, 0],
    [2, 20],
    [3, 50],
    [4, 100],
    [5, 180],
    [6, 310],
    [7, 520],
    [8, 860],
    [9, 1410],
    [10, 2300],
    [11, 3740]
]);

gold.innerHTML = 0;
pp.innerHTML = 0;
atual.innerHTML = 1;
upgrade.innerHTML = 1;

// FUNÇÕES PARA CLICAR

function clicarmais(option){
    let limite = parseInt(option.innerHTML);
    if(limite == max - 1){
        option.innerHTML = 'max';
    }else if(limite < max){
        option.innerHTML = limite + 1;
    }
    calcularMap();
}

function clicarmenos(option){
    let limite = parseInt(option.innerHTML);
    if(option.innerHTML == 'max'){
        option.innerHTML = max - 1;
    }else if(limite > min){
        option.innerHTML = limite - 1;
    }
    calcularMap();
}

// FUNÇÃO PARA CALCULAR O VALOR COM BASE NO ATUAL E NO UPGRADE

function calcularMap(){
    let atualint = atual.innerHTML;
    if(atualint == 'max'){
        atualint = 11;
    }else{
        atualint = parseInt(atual.innerHTML);
    }
    let upgradeint = upgrade.innerHTML;
    if(upgradeint == 'max'){
        upgradeint = 11;
    }else{
        upgradeint = parseInt(upgrade.innerHTML);
    }
    let goldnum = 0;
    let ppnum = 0;
    if(upgradeint > atualint){
        goldnum = goldmap.get(upgradeint) - goldmap.get(atualint);
        ppnum = ppmap.get(upgradeint) - ppmap.get(atualint);
    }
    gold.innerHTML = goldnum + valorAcessorios();
    pp.innerHTML = ppnum;
}

function valorAcessorios(){
    let valor = 0;
    const botoes = document.querySelectorAll(".botao.active")
    botoes.forEach( botao => {
        const id = botao.getAttribute('data-id')
        valor += botoesmap.get(id);
    });
    console.log(valor)
    return valor;
}

// ATIVAR E DESATIVAR ACESSÓRIOS

const botoesmap = new Map([
    ['1', 5000],
    ['2', 1500],
    ['3', 2000],
    ['4', 1000],
    ['5', 1000],
    ['6', 1000],
    ['7', 1000],
    ['8', 1000],
    ['9', 1000],
    ['10', 2000],
    ['11', 2000],
    ['12', 1000],
    ['13', 1000]
]);

const botoes = document.querySelectorAll('.botao');
botoes.forEach(options => {
    options.addEventListener('click', function(){
        const ativo = options.classList.toggle('active');
        const id = options.getAttribute('data-id');
        let goldnum = 0;
        if(ativo){
            goldnum = botoesmap.get(id);
            gold.innerHTML  = parseInt(gold.innerHTML) + goldnum;
            options.classList.add('.active');
        }else{
            goldnum = botoesmap.get(id);
            gold.innerHTML = parseInt(gold.innerHTML) - goldnum;
        }
    });
});