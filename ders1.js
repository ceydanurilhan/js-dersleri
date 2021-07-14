//javascriptte matematiksel ifadeleri ve kuralları kullanabiliriz
//console.log ile konsol üzerinde çıktı alırız

var sayi1=10;
var sayi2=5;
var sayi3=sayi1+sayi2;
console.log(sayi3)

//console.log ifadesinin içinde işlem yapabilir ve sonuçlarını görüntüleyebiliriz.
console.log(12-4)
console.log(25%2)
console.log(12/5)
console.log(3*4)
console.log(3+4*8)
console.log((3+6)*3)

//javascriptte stringleri hem çift tırnak hem de tek tırnak ile ifade edebiliriz
console.log("Engin")
console.log('Derin')
//yazacağımız metinde kesme işareti kullanmamız gerekiyorsa çift tırnak kullanmaya dikkat etmeliyiz eğer tek tırnak kullanırsak hata alabiliriz
console.log("Ceyda'nın")
//eğer tek tırnak kullanıyorsak escape karakterler ile kesme yapmamız da mümkündür
console.log('Ceyda\'nın')

// iki tane metinsel değeri + işaretiyle birleştirmemiz mümkündür
console.log("Ceyda "+"İlhan")

//metinsel ifadelerle bir sayıyı toplamak istediğimizde iki ifadeyi de string olarak algılar ve birleştirir
console.log(10+"21")

// - ifadesini metinlerde kullanamadığımız için alttaki ifadede 3'ü sayısal bir değer olarak alır ve çıkartma işlemi yapar
console.log(10-"3")

// string bir ifadeden string bir ifadeyi çıkartmak istediğimizde NaN çıktısın verir bu da not a number demektir
console.log("Ceyda"-"İlhan")

//javascriptte karşılaştırma ifadeleri ile değerleri karşılaştırıp boolean değerler elde edebiliriz
console.log(3>4)
console.log(3<4)
console.log(3>=4)
console.log(3==3)

//burada yapısal olarak durumlarına baktığı için yine true olarak değer döndürür
console.log(3=="3")

// === değerlerin tiplerine de bakarak karşılaştırma yapar
console.log(3===3)
console.log(3==="3") // false değer döndürür

console.log(3!=="3")
console.log(3!==3)
console.log(3!==4)