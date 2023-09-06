'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// 原稿の表示
let content = document.getElementById('container'); //作業リストのコンテナタグ
let div     = document.createElement('div'); //作業リストのコンテナ divタグ
let divL    = document.createElement('div'); //作業リストの左部分（空白）用のdivタグ
let divR    = document.createElement('div'); //作業リストの右部分（作業記載）用のdivタグ
let pI      = document.createElement('p');   //作業リストのアイコン用 pタグ
let pA      = document.createElement('p');   //作業リストの大項目用 pタグ（abst）
let pD      = document.createElement('p');   //作業リストの詳細項目 pタグ（detail）

let n = 0;

for(let i in maintenance_list){
    for(let j of maintenance_list[i]){
        pI      = document.createElement('p');
        divL    = document.createElement('div');

        pI.innerHTML = "";//💬
        pI.setAttribute("id","icon");
        pI.setAttribute("name",n);
        divL.appendChild(pI)
        divL.setAttribute("id","container-left");

        div    = document.createElement('div');
        div.setAttribute("class","contents");
        div.setAttribute("name",n);

        divR   = document.createElement('div');
        divR.setAttribute("id","container-right");

        pA      = document.createElement('p');
        pA.innerHTML = i;
        pA.setAttribute("id","abst");

        pD      = document.createElement('p');
        pD.innerHTML = j[1];
        pD.setAttribute("id","detail");
        
        divR.appendChild(pA);
        divR.appendChild(pD);
        div.appendChild(divL);
        div.appendChild(divR);

        content.appendChild(div);

        n++;
    }
}
