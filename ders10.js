var selamFonksiyonu = function selam(){
    console.log("Merhaba");
}

selamFonksiyonu();

/*
const selamFonksiyonu2 = () =>{
    console.log("Merhaba 2");
}
 */

const selamFonksiyonu2 = () => console.log("Merhaba 2");

selamFonksiyonu2();

const selamFonksiyonu3 = (mesaj) => {
    console.log(mesaj);
}

selamFonksiyonu3("Merhaba Dünya");

var topla = (sayii1,sayii2)=>{
    return sayii1+sayii2;
}

let toplam = topla(3,4);
console.log(toplam);