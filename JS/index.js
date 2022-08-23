function fblink(){
    { 
        var link = document.querySelector("a");
        link.getAttribute("href");
        link.setAttribute("href",
            "https://www.facebook.com/");
        //link.textContent = "Go to Facebook Oroginal Login Page";
    }
}

function Facebook(){
    fblink()
    //https://www.facebook.com/
}

function auth(){
    un=document.getElementById("username").value;
    pass=document.getElementById("password").value;

    if((un=="sbcreations14378@gmail.com")&&(pass=="0987654321")){
        alert("Logined as \nSai Ajith Local using\n" +un)
    }
    else if((un=="sak121527@gmail.com")&&(pass=="0987654321")){
        alert("Logined as \nSai Ajith Kumar Dannana using\n" +un )
    }
    else{
        alert("Invalid Credentials \nTry again...")
    }
}
function login(){
    auth() 
    { 
        var link = document.querySelector("login");
        link.getAttribute("href");
        link.setAttribute("href",
            "https://www.facebook.com/");
        //link.textContent = "Go to Facebook Oroginal Login Page";
    } 
}
function create_account(){
    var a = document.createElement('a');
    var ca=document.getElementById("create-new-account")
    ca.appendChild(ca)
    a.href="https://www.facebook.com/";
    document.body.appendChild(a); 
    
}