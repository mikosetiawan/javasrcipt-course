function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  function login(){
    var txtEmail = document.getElementById('email').value;
    var txtPassword = document.getElementById('password').value;

    if(txtEmail == "admin@gmail.com" && txtPassword == "123"){
        alert("Anda berhasil login!");
        window.location = "beranda.html";
    }
    else {
        alert("Email dan password salah! silahkan coba lagi!");
        window.location = "index.html";
   }
  }