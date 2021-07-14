//Bir kod bloğunu uygulamamızın farklı yerlerinde tekrar tekrar kullanma durumumuz olduğunda fonksiyonlardan yararlanıyoruz
//daha öncesinde prompt,alert ve log fonksiyonları kullandık

function selamVer(){
    console.log("Merhaba")
}

selamVer()

// fonksiyonu parantez kullanmadan yazarsak fonksiyonun tanımını gönderir

var sonuc=selamVer();


//bize bir sonuç değerini gönderen fonksiyonlara return fonksiyonlar deniyor
//alttaki fonksiyon iki tane parametre aldığı için parametre yazmadan çalıştırırsak NaN sonuç verir.
//burada eğer parametrelerden birini number diğerini string olarak gönderirsek ikisini metinsel olarak birleştirir
function topla(a,b){
    return a+b;
}

console.log(topla(2,3))

var sonuc= topla(2,4)
console.log(sonuc)