var teste = false;

document.getElementById('abrir').addEventListener('click', function(){ 
    if(teste == false){
        document.querySelector('.boxleft').style.transform = 'translateX(-200px)';
        document.querySelector('.nav').style.transform = 'translateX(-200px)';
        document.querySelector('.boxright').style.transform = 'translateX(200px)';
        document.querySelector('.abalateral').style.transform = 'translateX(200px)';
        teste = true;
    }else if(teste == true){
        document.querySelector('.boxleft').style.transform = 'translateX(0px)';
        document.querySelector('.nav').style.transform = 'translateX(0px)';
        document.querySelector('.boxright').style.transform = 'translateX(0px)';
        document.querySelector('.abalateral').style.transform = 'translateX(0px)';
        teste = false;
    }
    document.querySelector('.boxleft').style.transition = '1s ease';
    document.querySelector('.nav').style.transition = '1s ease';
    document.querySelector('.boxright').style.transition = '1s ease';
    document.querySelector('.abalateral').style.transition = '1s ease';
})