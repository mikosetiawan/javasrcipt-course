// Ternary : memiliki dua block iya atau tidak
/*
var pertanyaan = prompt("Apakah komputer alat elektronik? ");
var jawaban = (pertanyaan.toUpperCase() == "IYA") ? "Benar" : "Salah";
document.write("Jawaban aku adalah : <strong>"+ jawaban +"</strong>");
*/

//Nester If /statment 
var username = prompt("Masukan username :");
var password = prompt("Masukan password :");

if(username == "admin"){
    if(password == "admin123"){
        document.write("<h3>Anda berhasil Login!</h3>");
    }
    else {
        document.write("<h3>Password anda salah, silahkan coba lagi!</h3>");
    }
}
else {
    document.write("Anda ilegal bro!");
}