var aranan=["elma","şişe","bilgisayar","kitap","fare","duvar","kalem","kağıt","masa"];
var sonuc=["elma","şişe","bilgisayar","kitap","fare","duvar","kalem","kağıt","masa"];
 function ara(){
 var siraNo;
 siraNo=aranan.indexOf(document.getElementById("arananKelime").value);
 if(siraNo>=0){
 document.getElementById("sonuc").innerText=sonuc[siraNo] + ' bulundu';
 }
}