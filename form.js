function validate(){
    var mail=document.getElementById("text1").value;
    var text=document.getElementById("emailErr").value
    var pattern=/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if(mail.match(pattern)){
        text.innerHtML="your email is valid"
    }
    else{
        text.innerHtML="please enter valid email"
    }
}