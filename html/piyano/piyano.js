function nota_cal(yer) {
    if (yer.style.color == "black") { yer.style.color = "red"; }
    else { yer.style.color = "black"; }
    ses_adi = yer.id;
    var calinacak_ses = ses_adi + '_ses';

    document.getElementById(calinacak_ses).play();
}