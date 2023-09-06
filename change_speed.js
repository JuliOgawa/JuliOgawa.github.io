'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const speedy = [0.4,0.6,0.8,1,1.2,1.4,1.6,1.8,2.0];
let speedMenu = document.getElementById('speed');
let k = speedy.indexOf(Number(speedMenu.innerText.replace("X","")));

function changeSpeed(){
    if(k + 1 < speedy.length){
        k++;
        speedMenu.innerHTML=speedy[k] + "X";
    }else{
        k=0;
        speedMenu.innerHTML=speedy[k] + "X";
    }   
}

speedMenu.addEventListener('click', changeSpeed);
