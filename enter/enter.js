btn.onclick=function(){
    sonuc.innerHTML+=mesaj.value+"<br>"
    mesaj.value=""
}

mesaj.onkeyup=function(e){
    if(e.code=="Enter")
    {
       document.querySelector("#btn").onclick()

    }
}