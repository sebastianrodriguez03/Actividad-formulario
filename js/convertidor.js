'use strict'
function validar(){
    var email,password; 
    email= document.getElementById("email").value;
    password= document.getElementById("password").value;
   
 if (email ==="") {
    alert("*El campo email es obligatorio*");
    return false;

}
else if(password===""){
    alert("*El campo contraseña es obligatorio*");
    return false;
}

}