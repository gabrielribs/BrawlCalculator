// ABRIR E FECHAR

let verific = false;

document.getElementById('abrir').addEventListener('click', function(){ 
    if(verific == false){
        document.querySelector('.boxleft').style.transform = 'translateX(-200px)';
        document.querySelector('.nav').style.transform = 'translateX(-200px)';
        document.querySelector('.boxright').style.transform = 'translateX(200px)';
        document.querySelector('.abalateral').style.transform = 'translateX(200px)';
        verific = true;
    }else if(verific == true){
        document.querySelector('.boxleft').style.transform = 'translateX(0px)';
        document.querySelector('.nav').style.transform = 'translateX(0px)';
        document.querySelector('.boxright').style.transform = 'translateX(0px)';
        document.querySelector('.abalateral').style.transform = 'translateX(0px)';
        verific = false;
    }
    document.querySelector('.boxleft').style.transition = '1s ease';
    document.querySelector('.nav').style.transition = '1s ease';
    document.querySelector('.boxright').style.transition = '1s ease';
    document.querySelector('.abalateral').style.transition = '1s ease';
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
    let limit = parseInt(option.innerHTML);
    if(limit == max - 1){
        option.innerHTML = 'max';
    }else if(limit < max){
        option.innerHTML = limit + 1;
    }
    calcularMap();
}

function clicarmenos(option){
    let limit = parseInt(option.innerHTML);
    if(option.innerHTML == 'max'){
        option.innerHTML = max - 1;
    }else if(limit > min){
        option.innerHTML = limit - 1;
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
    pp.innerHTML = ppnum + valorAcessorios();
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
    })
})