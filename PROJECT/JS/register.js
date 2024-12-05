let username=document.querySelector("#username");
let Email=document.querySelector("#Email");
let password=document.querySelector("#password");
let register_btn=document.querySelector("#sign_up");

register_btn.addEventListener('click',register);

function register(e){
    
        e.preventDefault();
    if(username2.value==="" || Email.value==="" || password.value===""){
    alert("please fill data");
        
    }else
    {
        localStorage.setItem('username',username2.value);
        localStorage.setItem('Email',Email.value);
        localStorage.setItem('password',password.value);
        setTimeout(() => {window.location="index.html";},1500);
    }}
