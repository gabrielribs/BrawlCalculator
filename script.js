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
    gold.innerHTML = goldnum;
    pp.innerHTML = ppnum;
}