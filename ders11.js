const dizi = [1,2,3,4];

const kareDizisi = []

dizi.forEach(sayi =>{
    kareDizisi.push(sayi**2);
})

console.log(kareDizisi);

//map fonksiyonu bizim yeni bir dizi oluşturmamızı sağlar

const mapDizi = dizi.map(sayi=> sayi * 3)
console.log(mapDizi);

//filter fonksiyonu diziyi filtelememize yarıyor

const filtreliDizi = dizi.filter(sayi=>sayi>2)
console.log(filtreliDizi);

//reduce ile kümülatif toplama işlemini gerçekleştiriyoruz

const toplam = dizi.reduce((acc,sayi)=>{
  return acc+sayi;
},10)

console.log(toplam);