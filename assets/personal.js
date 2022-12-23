function validate(){
    var user1name = document.getElementById("name").value
    var username =user1name.trim()
    var email = document.getElementById("Email").value
    var subject = document.getElementById("subject").value
    var message = document.getElementById("message").value
    var nametest = /^[a-zA-Z ]+$/;
    var mailtest =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(username==""||username==null){
        alert("name cannot be blank ")
       
        return false;
    }
    if(username.match(nametest)){
       
    } else{
        alert("name cannot include numbers or symbols")
        return false;
    }
   
   
    if(email==""){
        alert("must have email id")
       
        return false;
    }
    if(email.match(mailtest)){

    }else{
        alert("Enter a proper mail id")
        return false;
    }

    if(subject==""){
        alert("subject cannot be blank")
       
        return false;
    }
    if(message.length>=30){

    }else{
        alert("min 30 characters required")
        document.googleform.message.focus();
        return false;
    }
    if(message==""){
        alert("Message cannot be blank")
      
        return false;
    }
    return true;
   
}
