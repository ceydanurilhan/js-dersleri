//elimizde birbirine benzeyen veriler varsa onları dizi bazlı ortamlarda tutarız

let ogrenci1 = "Engin";
let ogrenci2 = "Derin";

console.log(ogrenci1)
console.log(ogrenci2)

let numbers = [1,3,5,7,9,11]
console.log(numbers[0])
console.log(numbers[1])

//olmayan bir indekse ulaşmaya çalıştığımızda undefined bir sonuç verir
console.log(numbers[6])

var sehir = ["Ankara","İstanbul","İzmir"]
console.log(sehir[1]);

var dizi = ["Ankara",1,false]
console.log(dizi[0])

//daha sonra doldurmak üzere boş bir dizi tanımlamamız da mümkündür daha sonra bunu doldurabiliriz
var fonksiyonDizisi = []

var fonksiyonDizisi = [function selamVer(){
    console.log("Birinci fonksiyon calisti")
},function selamVer2(){
    console.log("İkinci fonksiyon calisti")
}]

console.log(fonksiyonDizisi[1])
console.log(fonksiyonDizisi[1]())