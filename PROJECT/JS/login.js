let username1=document.querySelector("#username");
let password=document.querySelector("#password");
let loginBtn=document.querySelector("#sign_in");

let getUser=localStorage.getItem("username");
let getPassword=localStorage.getItem("password");

loginBtn.addEventListener('click',login);

function login(e){
    
   e.preventDefault();
    if(username1.value==="" || password.value===""){
    alert("please fill data");
        
    }else
    {
        if(
            getUser && 
            getUser.trim()===username1.value.trim() && 
            getPassword &&
            getPassword.trim()===password.value.trim()
          ) {
            
            setTimeout(() => {window.location="index.html";},1500);
        }else
        {
            alert("Username or password is wrong");
    
        }
    }
    }

