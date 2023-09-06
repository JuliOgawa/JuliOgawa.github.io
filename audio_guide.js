'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let audio = document.createElement('audio');
let index = 0;
let count = 0;
let delayTime = 200;
audio.src = audioList[0];

document.getElementsByClassName("button").id="play";

// go関数：再生開始時に行う操作
function go(){
    if(count==0 && index==0){
        scrollTo(0,0)
    }
    if(count == 0){
        audio.play();
        recognition.abort();// なぜ止める？★
        document.getElementsByName(index)[1].innerHTML = "💬";
        document.getElementsByName(index)[0].setAttribute("id","emphasize");
        document.getElementsByName(index)[0].children[1].children[1].id="detailEmphasize";
        audio.playbackRate = document.getElementById('speed').innerText.replace("X","");
        count = 1;
        changePict();
        document.getElementById("play").id ="pause";
        setTimeout(function () {
            recognition.start();
        }, delayTime)

    }else{
        audio.pause();
        document.getElementsByName(index)[1].innerHTML = "";
        audio.currentTime = 0;
        count = 0;
        changePict();
        document.getElementById("pause").id ="play";
        setTimeout(function () {
                recognition.abort();
            }, delayTime)
    }
}
let goButton = document.getElementById("play");
goButton.addEventListener('click', go);

let targetRect;


