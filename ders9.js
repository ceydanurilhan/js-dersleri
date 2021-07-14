
var sayi=10;
var sehir="Ankara";

sayi=11;
sehir="İstanbul";

var sehir="Adana";

//var keywordü ile biz bir değişkeni tanımladıktan sonra o değişkeni unutup aynı isimle bir değişken tanımladığımızda bu değişkenler karışabiliyor bu yüzden let keywordü ile tanımlama yapıyoruz.

let il="Ankara";
il="Bursa";
//let il="Bursa";

//let ile tanımladığımız bir değişkenin içeriğini daha sonra yeniden değiştirebiliriz ama aynı isimde bir değişkeni let keywordü ile yeniden tanımlayamayız

function mesajVer(){
    var isim="Engin";
    console.log(sehir);
    console.log(isim);

}

console.log(sayi);
console.log(sehir);
console.log(il);
mesajVer();
// console.log(isim); //burada isim değişkenini yazdıramayız çünkü tanımlı olduğu scope aralığında değiliz.Fonksiyonun içinden yazdırdığımızda erişebiliriz.

for(let i=1;i<10;i++){

}
//console.log(i); //burada erişemeyiz

const soyad="Demirog"; //değişmeyecek veriler için const kullanılır
console.log(soyad)

const sehirler = ["Ankara","Istanbul"]
sehirler.push("Izmir");
console.log(sehirler)