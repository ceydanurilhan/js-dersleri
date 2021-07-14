//let egitmenn = "Engin Demirog"

// if bloğu ile eğer şart doğru ise if'in hemen sonsarında gelen ifade çalışacaktır
/*
if(egitmenn==="Engin Demirog"){
    alert("Egitmen "+egitmenn)
}
*/

let egitmenn = "Derin Demirog"

if(egitmenn==="Engin Demirog"){
    alert("Egitmen "+egitmenn)
}else{
    alert("Eğitmeni tanımıyorum!")
}

let name="Mert";
if(name==="Engin"){
    alert("Name = "+ name);
}
else if(name== "Derin"){
    alert("Name = "+ name);
}
else{
    alert("Tanımıyorum");
}

let isim="Mert";
if(name=="Mert" || name=="Derin"){
    alert("Name = "+ name);
}
else{
    alert("Tanımıyorum");
}

var ad="Engin";
var soyad="Demirog";
if(ad=="Engin" && soyad=="Demirog"){
    alert(ad+" "+soyad);
}