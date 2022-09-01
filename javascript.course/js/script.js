// alert('Hellow world!');


// PEMANGGILAN ID HTML di Javacript
/*
document.getElementById('nama').innerHTML = "My name Miko setiawan";
document.getElementById('alamat').innerHTML = "Cilegon, Banten";
document.getElementById('telepon').innerHTML = "0857-7917-8942";
*/

// TIPE DATA VARIABEL

/*
// String
var myName = "Miko setiawan";
var address = 'Cilegon, Banten';
var my_name = "joko";
var MY_NAME = "JOKO";

// Integer
var firsNumber = 1;
var secondNumber = 3;

// Decimal
var someDecimal = 1.5;

// Boolean
var isHandSome = true;
var isHandSome2 = false;

// Array
var friuts = ['Bannana','Aple','Mellow'];
var haouse = ["teh kotak","Teh pucuk","susu"];


// Object
var mahasiswa = {
    name: "Miko setiawan",
    kelas: "MI20A",
    semester: "4",
    alamat: 'Cilegon'
}


console.log(myName)
console.log(address)
console.log(my_name)
console.log(MY_NAME)
console.log(firsNumber)
console.log(secondNumber)
console.log(someDecimal)
console.log(isHandSome)
console.log(isHandSome2)
console.log(friuts)
console.log(haouse)
console.log(mahasiswa)
console.log(mahasiswa.name)
console.log(mahasiswa.kelas)
console.log(mahasiswa.semester)
console.log(mahasiswa.alamat)
*/


// Latihan Tipe data String
//String
/*
var namaDepan = "MIko";
var namaBelakang = "setiawan"; 
console.log(namaDepan, namaBelakang)
*/

/* PERCADANGAN IF (SATU KONDISI)

var totalBelanja = prompt("Total belanja?",0);
if (totalBelanja > 100000){
    document.write("<h2>Selamat anda medapatkan hadiah!</h2>");
}

document.write("<p>Terimakasih telah berbelanja!</p>");
*/

// PERCADANGAN IF ELSE (DUA KONDISI)
/*
var password = prompt("Masukan Password :");
var name = "Miko";

if (password == "admin"){
    document.write("<h3>Selamat datang</h3>");
} else {
    document.write("<p>Password salah, coba lagi!</p>");
}

document.write("<p>Terimakasih telah berkunjung!</p>");
*/

// PERCADANGAN IF ELSE IF (LEBIH DARI DUA KONDISI)
/* 
var nilai = prompt("Inpitkan Nilai akhir :");
 var grade = "";

 if(nilai >= 90) grade="A"
    else if(nilai >= 80) grade="B+"
    else if(nilai >=70) grade="B"
    else if(nilai >=60) grade="C+"
    else if(nilai >=50) grade="C"
    else if(nilai >=40) grade="D"
    else if(nilai >=30) grade="E"
    else grade="F";

    document.write(`<p>Grade anda : ${grade}</p>`);
*/

// pakaii kurung kurawal 
/*
var nilai = prompt("Inputkan nilai akhir:");
    var grade = "";

    if (nilai >= 90){
        grade = "A"
    } else if(nilai >= 80) {
        grade = "B+"
    } else if(nilai >= 70) {
        grade = "B"
    } else if(nilai >= 60) {
        grade = "C+"
    } else if(nilai >= 50) {
        grade = "C"
    } else if(nilai >= 40) {
        grade = "D"
    } else if(nilai >= 30) {
         grade = "E"
    } else { 
        grade = "F";
    }
    document.write(`<p>Grade anda: ${grade}</p>`);

    */


// STUDY KASUS Sendiri IF ELSE IF
/*
var jumlahLogo = prompt("Masukan jumlah order :");
var logo = "";

if(jumlahLogo >=5) logo="Potongan 50rb"
    else if(jumlahLogo >= 4) logo="harga normal"
    else if(jumlahLogo >= 3) logo="harga normal"
    else if(jumlahLogo >= 2) logo="harga normal"
    else logo="harga normal";
if(jumlahLogo >= 5){
document.write(`<p>selamat anda mendapatkan : ${logo}</p>`);
} else{
    document.write(`<p>Terimakasih harga anda : ${logo}</p>`);
}
*/

/*
// SWITCH CASE
var jawab = prompt("Kamu beruntung! Silahkan pilih hadiah dari 1-5");
var hadiah = "";

switch(jawab){
    case "1" :
        hadiah = "Susu kaleng";
        break;

    case "2" :
        hadiah = "Teh Botol";
        break;
    case "3" :
        hadiah = "Ciki Taro";
        break;
    case "4" :
        hadiah ="Rp. 100.000";
        break;
    case "5" :
        hadiah = "kuaci";
        break;
    default :
        document.write("<p>Opps! anda salah pilih</p>");

}
if (hadiah == ""){
    document.write("<p>Kamu gagal mendapatkan hadiah!</p>");
} else {
    document.write(`<h2>Selamat kamu mendapatkan ${hadiah} </h2>`);
}
*/


// PERULANGAN TERNARY/Ternary
/*
var jwb = prompt("Apakah Jakarta ibu kota indonesia? Iya/Tidak");

var jawaban = (jwb.toUpperCase() == "IYA") ? "Benar": "Salah";

document.write(`Jawaban anda: <b>${jawaban}</b>`);

*/


// function setName(){
//     var txtName = document.getElementById('txtNameFast');
//     var txtName = document.getElementById('txtNameLast');
//     document.getElementById('nameFast').innerHTML = txtNameFast.value;
//     document.getElementById('nameLast').innerHTML = txtNameLast.value;
// }

