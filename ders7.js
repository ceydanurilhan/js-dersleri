//Javascriptte nesnelerin çok önemli bir yeri vardır bu durumda biz nesne tanımı yaparken bu nesneleri özellikleri ile beraber barındırırız

var kisi = {
    ad:"Engin",
    soyad:"Demirog",
    yas:33,
    email:"engindemirog@gmail.com",
    arkadaslar:["Ahmet","Mehmet","Ali"],
    selamVerr: function(){
        console.log("Merhaba")
    }
} //object notation

console.log(kisi.yas)
console.log(kisi.ad)
console.log(kisi.soyad)
console.log(kisi)

//objelerin içerisinde sadece primitif veri tiplerini değil bir nesnenin içinde başka bir nesne de kullanabiliriz

console.log(kisi.arkadaslar)

//bir nesnenin içerisinde fonksiyon da tutabiliriz
console.log(kisi.selamVerr())