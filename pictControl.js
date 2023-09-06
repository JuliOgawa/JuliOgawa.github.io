'use strict'
// 1行目に記載している 'use strict' は削除しないでください


let picture = document.getElementById("pict");
let startFlag = 0;
//const path = "http://127.0.0.1:5500/imageFile/";
const path ="./imageFile/"

// ◎imageFile内を自動でリスト化できるとよい。できれば作業項目Noとひもづけで。
const photoList = [
    "sample.png",
    "sample.png",
    "sample.png",
    "sample.png",
    "noplate.png",
    "sample.png", 
    "sample.png", 
    "tech.png", 
    "tech_1.png", 
    "glass.png", 
    "tech_1.png", 
    "sample.png"];

function changePict(){
    if(count==0 && index==0 && startFlag==0){
        startFlag=1;
        picture.src = path + "sample.png"
    }else{
        picture.src = path + photoList[index]
    }
}


