//döngü birbirine benzeyen işlemleri arka arkaya belirli bir şart sağlanana kadar devam ettirmektir.

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

for (let i=1;i<=10;i++){
    console.log(i);
}
console.log("Bitti");

let sehirler =["Ankara","Istanbul","Izmir","Adana"];

for(i=0;i<sehirler.length;i++){
    console.log(sehirler[i]);
}

let x=1;
while (x<10){
    console.log(x);
    x++
}

let a=1;
do{
   console.log("a :"+ a);
   a++
}while (a<10);

//en fazla for ve foreach döngüsünü kullanacağız
//foreach elimizde dizi temelli olan yapıları tek tek dolaşmamıza yarıyor

sehirler.forEach(function (sehir){
    console.log(sehir);
})

