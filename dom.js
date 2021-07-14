//document.getElementById("bio").innerHTML="Derin Demirog : 2014"

//let intro1 = document.getElementById("intro1");
//let mesaj = document.getElementById("mesaj");

//mesaj.innerHTML=intro1.innerHTML;

//let tumListeler = document.getElementsByTagName("ul");
//let sehirler = tumListeler[0]

//tumElemanlar = sehirler.getElementsByTagName("li");

//for (i=0; i<tumElemanlar.length;i++){
//    alert(tumElemanlar[i].innerHTML);
//}

//let classElemanlari = document.getElementsByClassName("intro1");
//alert(classElemanlari[1].innerHTML);
//alert(classElemanlari.length);

//let queryElemanlari = document.querySelectorAll("p.intro1");
//alert(queryElemanlari.length);

//let isimElemanlari = document.getElementsByName("musteriAdi");
//alert(isimElemanlari[0].value);

//bir şeye tıklama olayı, bir değerin üzerine gelme olayına event deniyor

//let salih = document.getElementById("salih").addEventListener("mouseover",rengiDegistir);

//function rengiDegistir(){
//    document.getElementById("div1").style.color="red";
//    let isimElemanlari = document.getElementsByName("musteriAdi");
//    isimElemanlari[0].value="Derin"
//}

//let node = document.getElementById("agac");
//alert(node.childNodes[0].nodeValue);

let baslik = document.createElement("h2");
let node = document.createTextNode("Merhaba JavaScript")
baslik.appendChild(node)

let div1 = document.getElementById("div1")
let p2 = document.getElementById("p2")
div1.insertBefore(baslik,p2)

alert("P2 siliniyor")
div1.removeChild(p2);

alert("Degistiriliyor");
var pi = document.getElementById("p1")
div1.removeChild(baslik,p1);