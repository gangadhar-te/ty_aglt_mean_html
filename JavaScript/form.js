function validate(){
var username = document.getElementById('username');
var password = document.getElementById('password');

if(username.value.trim() =="" ){
    alert('Please enter Username');
    username.style.border = "solid 1px red"
    document.getElementById('div').style.visibility = "visible"
    return false;
}
else if(password.value.trim() == ""){
    alert('Please enter Password');
    password.style.border = "solid 1px red"
    return false;
}
else if(password.value.trim().length < 5){
    alert('Password is too short')
    password.style.border = "solid 1px red"
    return false;
}else{
    return true;
}
   
}
