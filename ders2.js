//programın akışı içerisinde değerler tutup o değerlere daha sonra bir isimle ulaşmak için değişkenlerden yararlanıyoruz
//var keywordü ile değişkenler oluşturabiliriz ama tek başına bir anlamı yoktur

let egitmen = "Engin Demirog ";
egitmen = egitmen + "bir egitmendir."
console.log(egitmen)

//prompt komutu ile javasctriptte kullanıcıdan bilgi girişi alabiliriz
let egitmen1 = prompt("Egitmen kim?")
console.log(egitmen1)

let dogruMu = true;
console.log(dogruMu)

let x= prompt("Sayı 1?");
let y= prompt("Sayı 2?");
console.log(x)
console.log(y)

let toplam = x+y;
console.log(toplam) //burada girdiğimiz sayıları metinsel olarak algılar ve ona göre bir toplam çıktısı verir

//tip dönüşümü yaparak toplama işlemini matematiksel bir şekilde yapabiliriz
// Number fonksiyonunu kullanarak bu işlemi yapabiliriz
let gercekToplam = Number(x) + Number(y);
console.log(gercekToplam)
