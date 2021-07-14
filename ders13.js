class Personel { //classların isimlerinin ilk harfi büyük yazılır

    constructor(ad,soyad) {
        this.ad= ad;
        this.soyad=soyad;
    }
    kaydet(){
        console.log("Personel kaydedildi."+this.ad);
    }
}

const personel = new Personel("Engin","Demirog");
personel.kaydet();
