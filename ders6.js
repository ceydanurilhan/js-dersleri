let sehirler = ["Ankara","İstanbul","İzmir","Adana"]

//dizinin son elemanını pop ile sileriz
sehirler.pop()
console.log(sehirler)

//dizinin ilk elemanını pop ile sileriz
sehirler.shift()
console.log(sehirler)

//diziye elemen eklemek için push komutunu kullanırız
sehirler.push("Bursa")
console.log(sehirler)

//iki diziyi birbiri ile toplamak için
console.log(sehirler.concat(["Van","Muş"]))
//concat ile iki diziyi birleştirip bize veriyor sehirler dizisi üzerinde bir değişiklik yapmıyor

//sort metodu ile dizideki elemanları baş harflerine göre alfabeye uygun şekilde sıralar
console.log(sehirler.sort())

//dizinin eleman sayısına ulaşmak için length metodunu kullanırız
//leght metodu parantezsiz bir şekilde kullanılır
console.log(sehirler.length)