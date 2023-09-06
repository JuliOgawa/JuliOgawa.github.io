'use strict'
// 1行目に記載している 'use strict' は削除しないでください


let NEXT = document.getElementById("next");
let BACK = document.getElementById("back");
// 再生中のコンテナを追跡するための変数を導入
let currentPlayingIndex = -1;

// next() 関数を変更
function next() {
    if (currentPlayingIndex !== -1) {
        stopContainer(currentPlayingIndex);
    }
    if (index + 1 < audioList.length) {
        //audio.pause();
        document.getElementsByName(index)[0].id = "";
        document.getElementsByName(index)[0].children[1].children[1].id = "detail"
        document.getElementsByName(index)[1].innerHTML = "";

        index++;
        changePict();

        if (count == 1) {
            document.getElementsByName(index)[1].innerHTML = "💬";
        }
        document.getElementsByName(index)[0].setAttribute("id", "emphasize");
        document.getElementsByName(index)[0].children[1].children[1].id = "detailEmphasize";

        targetRect = document.getElementsByName(index)[0].getBoundingClientRect();
        if (targetRect.top > (screen.availHeight / 2)) {
            scrollBy(0, targetRect.top - (screen.availHeight / 2));
        }


        audio.src = audioList[index];
        audio.volume = document.getElementById("volume").value / 10;
        audio.playbackRate = document.getElementById('speed').innerText.replace("X", "");

        setTimeout(function () {
            if (count == 1) {
                audio.play()
                recognition.start();
            } else {
                recognition.start();
            }
        }, delayTime)
        playContainer(index);
    }
    event.stopPropagation();
}
NEXT.addEventListener('click', next);
//加藤追記↓
function repeat() {
    if (index > 0) {
        //audio.pause();
        document.getElementsByName(index)[0].id = "";
        document.getElementsByName(index)[0].children[1].children[1].id = "detail"
        document.getElementsByName(index)[1].innerHTML = "";

        changePict();

        if (count == 1) {
            document.getElementsByName(index)[1].innerHTML = "💬";
        }
        document.getElementsByName(index)[0].setAttribute("id", "emphasize");
        console.log("c");
        document.getElementsByName(index)[0].children[1].children[1].id = "detailEmphasize";

        targetRect = document.getElementsByName(index)[0].getBoundingClientRect();
        if (targetRect.bottom < (screen.availHeight / 2)) {
            scrollBy(0, targetRect.bottom - (screen.availHeight / 2));
        }

        audio.src = audioList[index];
        audio.volume = document.getElementById("volume").value / 10;
        audio.playbackRate = document.getElementById('speed').innerText.replace("X", "");

        /*         setTimeout(function () {
                    if(count==1){
                        audio.play();
                        recognition.start();
                    }else{
                        audio.pause()
                        recognition.start();
                    }
                  }, delayTime)
            }else{
                setTimeout(function () {
                    if(count==1){
                        audio.play();
                        recognition.start();
                    }else{
                        audio.pause()
                        recognition.start();
                    }
                  }, delayTime) */
        event.stopPropagation();
    }

}
//加藤追記↑
function back() {
    if (currentPlayingIndex !== -1) {
        stopContainer(currentPlayingIndex);
    }
    if (index > 0) {
        audio.pause();
        document.getElementsByName(index)[0].id = "";
        document.getElementsByName(index)[0].children[1].children[1].id = "detail"
        document.getElementsByName(index)[1].innerHTML = "";

        index--;

        changePict();

        if (count == 1) {
            document.getElementsByName(index)[1].innerHTML = "💬";
        }
        document.getElementsByName(index)[0].setAttribute("id", "emphasize");
        document.getElementsByName(index)[0].children[1].children[1].id = "detailEmphasize";

        targetRect = document.getElementsByName(index)[0].getBoundingClientRect();
        if (targetRect.bottom < (screen.availHeight / 2)) {
            scrollBy(0, targetRect.bottom - (screen.availHeight / 2));
        }

        audio.src = audioList[index];
        audio.volume = document.getElementById("volume").value / 10;
        audio.playbackRate = document.getElementById('speed').innerText.replace("X", "");

        setTimeout(function () {
            if (count == 1) {
                audio.play();
                recognition.start();
            } else {
                audio.pause()
                recognition.start();
            }
        }, delayTime)
        playContainer(index);
    } else {
        setTimeout(function () {
            if (count == 1) {
                audio.play();
                recognition.start();
            } else {
                audio.pause()
                recognition.start();
            }
        }, delayTime)
    }
    event.stopPropagation();
}
BACK.addEventListener('click', back);

audio.addEventListener("ended", function () {
    if (index + 1 == audioList.length) {
        document.getElementsByName(index)[0].id = "";
        document.getElementsByName(index)[0].children[1].children[1].id = "detail"
        document.getElementsByName(index)[1].innerHTML = "";

        index = 0;
        count = 0;
        document.getElementById("pause").id = "play";
        audio.src = audioList[index];
        recognition.start();
    }
})
const containers = document.querySelectorAll('.contents');

let prevClickedContainer;
let prevAudio;
//小川追記
containers.forEach((container, clickedIndex) => {
    container.addEventListener('click', () => {

        //大田追記
        if (prevClickedContainer) {
            prevClickedContainer.setAttribute("id", "");
        }

        if (prevAudio) {
            prevAudio.pause();
        }
        //ここまで
        // 前にクリックされていたコンテナの強調表示を解除
        if (prevClickedContainer) {
           // document.getElementsByName(index)[0].id = "";
            //document.getElementsByName(index)[0].children[1].children[1].id = "detail"
            //document.getElementsByName(index)[1].innerHTML = "";

            prevClickedContainer.classList.remove('emphasize');
            const detailEmphasize = prevClickedContainer.querySelector('.detail-emphasize');
            if (detailEmphasize) {
                detailEmphasize.removeAttribute("id");
                detailEmphasize.style.color = ''; // colorスタイルをリセット
            } // クラス名に合わせて変更
        }
        
        if (count == 1) {
            document.getElementsByName(index)[1].innerHTML = ""; // 内容を空にする
        }
        document.getElementsByName(index)[0].removeAttribute("id"); // "emphasize" 属性を削除する
        console.log("c");
        document.getElementsByName(index)[0].children[1].children[1].removeAttribute("id"); // "detailEmphasize" 属性を削除する
        document.getElementsByName(index)[0].children[1].children[1].id = "detail"
        // コンテナクリック時に再生中のコンテナがある場合、停止させる
        if (currentPlayingIndex !== -1) {
            stopContainer(currentPlayingIndex);
        }
        // クリックされたコンテナを再生
        playContainer(clickedIndex);
        //クリックしたコンテナにクラスを追加
        document.getElementsByName(clickedIndex)[1].innerHTML = "💬";
        document.getElementsByName(clickedIndex)[0].setAttribute("id", "emphasize");
        document.getElementsByName(clickedIndex)[0].children[1].children[1].id = "detailEmphasize";

        //container.setAttribute("id", "emphasize");
        //container.children[1].children[1].setAttribute("id", "detailEmphasize");

        // クリック時に音声を再生（例：maintenance_listから該当の音声を取得）
        const audioSrc = audioList[index]; // ここで適切な音声ソースを選択する
        const audio = new Audio(audioSrc);

        // 選択した速度に応じて再生速度を設定（例：1.2倍、1.4倍など）
        const selectedSpeed = speedy[k];
        audio.playbackRate = selectedSpeed;

        //audio.play();
        index = currentPlayingIndex;

        //大田追記
        prevClickedContainer = container;
        prevAudio = audio;
        //ここまで
    });
});


// 変更5: コンテナを再生する関数を定義
function playContainer(containerIndex) {
    audio.src = audioList[containerIndex];
    audio.volume = document.getElementById("volume").value / 10;
    audio.playbackRate = parseFloat(document.getElementById('speed').innerText);

    audio.play();

    currentPlayingIndex = containerIndex; // 現在再生中のコンテナを更新
}

// 変更6: コンテナを停止する関数を定義
function stopContainer(containerIndex) {
    audio.pause();
    // 他の停止操作を追加する場合、ここで行う
    currentPlayingIndex = -1; // 再生中のコンテナをリセット
}

