function olustur() {
    var buyuk_div = document.createElement("DIV");

    buyuk_div.id = "buyuk_div_style";
    renk_sayaci = 0;
    for (let satir = 1; satir < 9; satir++) {
        for (let sutun = 1; sutun < 9; sutun++) {
            var kareler = document.createElement("DIV");
            kareler.className = "kucuk_div_style";
            kareler.id = "kare" + satir + "" + sutun;
            var yazi = document.createTextNode(satir + "/" + sutun);
            renk_sayaci++;
            if (renk_sayaci % 2 == 0) { kareler.className += " kirmizi_zemin"; }

            kareler.appendChild(yazi);
            buyuk_div.appendChild(kareler);
        }
        renk_sayaci++;
    }
    document.body.appendChild(buyuk_div);
}
