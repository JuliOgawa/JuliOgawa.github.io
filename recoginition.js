'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let recognition = new webkitSpeechRecognition();

recognition.lang = 'ja-JP';
recognition.interimResults = true;

// 認識しっぱなしに設定　但し1分沈黙すると止まる（デフォルトでは発言が終わると認識が止まる）
recognition.continuous = true;

// 認識開始ボタンを押したらスタートする
function OnButtonClick() {
  recognition.start();
}

//recognition.start();

// 音声が認識されると発火
recognition.onresult = (event) => {
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    switch (true) {
      case (event.results[i][0].transcript.includes("はじめ")):
        go();
        break;
      case (event.results[i][0].transcript.includes("OK") ||
        event.results[i][0].transcript.includes("オッケー")):
        recognition.abort();
        next();
        audio.play();
        break;
      case (event.results[i][0].transcript.includes("戻る")):
        recognition.abort();
        back();
        audio.play();
        break;

      case (event.results[i][0].transcript.includes("もう1回") ||
        event.results[i][0].transcript.includes("もっかい") ||
        event.results[i][0].transcript.includes("もう一回")):
        recognition.abort();
        repeat();
        audio.play();
        break;
    }
    console.log(event.results[i][0].transcript);
  }
}

/* recognition.onresult = (event) => {
    for (var i = event.resultIndex; i < event.results.length; ++i) 
    {
        if( event.results[i][0].transcript.includes("OK")||
            event.results[i][0].transcript.includes("オッケー"))
            {
            recognition.abort();
            next();
            audio.play();
            break;
            }
        else if(event.results[i][0].transcript.includes("戻る"))
            {
            recognition.abort();
            back();
            audio.play();
            break;
            }
        else if(event.results[i][0].transcript.includes("もう"))
            {
            recognition.abort();
            repeat();
            audio.play();
            break;
            }
    // 認識した都度、スクリプトをコンソールに書き出す
    console.log(event.results[i][0].transcript);
    }
} */

// 認識状態を出力
recognition.onsoundstart = function () {
  document.getElementById('status').innerHTML = "認識中";
};
recognition.onnomatch = function () {
  document.getElementById('status').innerHTML = "もう一度試してください";
};
recognition.onerror = function () {
  document.getElementById('status').innerHTML = "再生中";
};
recognition.onsoundend = function () {
  document.getElementById('status').innerHTML = "停止中";
};


/* recognition.onerror = (e) => {
try { recognition.stop(); } catch (e) {}
try { recognition.start(); } catch (e) {}
}
 */
/* recognition.onsoundend = (e) => {
try { recognition.stop(); } catch (e) {}
try { recognition.start(); } catch (e) {}
} */

recognition.onend = (e) => {
  // ◎音声再生「認識を一時停止します」をいれる
  try { recognition.stop(); } catch (e) { }
  try { recognition.start(); } catch (e) { }
}

/* recognition.onspeechend = (e) => {
setTimeout(() => {
try { recognition.start(); } catch (e) {}
}, 500);
} */

