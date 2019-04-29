'use strict'
function validar(){
    var name,email,password,telefono;
    name= document.getElementById("name").value;
    email= document.getElementById("email").value;
    password= document.getElementById("password").value;
    telefono= document.getElementById("telefono").value;

if (name ==="") {
    alert("*El campo Nombre es obligatorio*");
    return false;
}
else if (name.length>30) {
    alert("El Nombre esta muy largo");
    return false;
}
else if (name.length<10) {
    alert("El Nombre esta muy corto");
    return false;
}
else if (email ==="") {
    alert("*El campo email es obligatorio*");
    return false;

}
else if (email.length>50) {
    alert("El email es muy largo");
    return false;
}
else if (email.length>15) {
    alert("El email es muy corto");
    return false;
}
else if(password===""){
    alert("*El campo contraseña es obligatorio*");
    return false;
}
else if (password.length>15) {
    alert("La contrasena es muy laga");
    return false;
}
else if (password.length<4) {
    alert("La contrasena es muy corta");
    return false;
}
else if(telefono===""){
    alert("*El campo telefono es obligatorio *");
    return false;
}
else if (telefono.length>11) {
    alert("El Telefono es muy largo");
    return false;
}
else if (telefono.length<10) {
    alert("El Telefono es muy corto");
    return false;
}

var elemento= document.forms["contact_form"]["micheckbox"].checked;
if (elemento == true) {
  document.getElementById('infoPreferencias').innerHTML= "el elemento  ha sido seleccionado";
  return false;
}
else{
   document.getElementById('infoPreferencias').innerHTML= "el elemento  ha sido seleccionado";
   return false;
   
}
}