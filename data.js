console.log('data');
function camondata(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;    
localStorage.setItem("user",username);
localStorage.setItem("pass",password);
}
