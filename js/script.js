

const logingBtn = ()=>{
    const usernamevalue = document.getElementById("username").value;
    const passwordValue = document.getElementById("password").value;
    
    if(usernamevalue == "admin" && passwordValue == "admin123"){
        alert("LogIn successful");
        window.location.assign("./home.html") ;
        // window.location.href = "home.html";
    }else{
        alert("LogIn error.")
    }
}