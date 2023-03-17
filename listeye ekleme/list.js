const urun =document.querySelector("#urun");
const ekle =document.querySelector("#ekle");
const liste =document.querySelector("#liste");

ekle.onclick=function(){
    let li=document.createElement("li");
    li.textContent=urun.value;

    liste.appendChild(li);

    urun.value="";
    urun.focus();
}