function mess() {
    var a = document.getElementById("name")
    var b = document.getElementById("head1").innerHTML = "Hello" + ' ' + a.value;
}

var first_name

function namevalidation() {
    var letter = /^[a-zA-Z\s]*$/;
    var name = document.getElementById("fname").value
    var checkfname = document.getElementById("temp");
    if (name == "") {
        checkfname.innerHTML = "Feild is requried";
        first_name = false;
        
    } else if (name.match(letter)) {
        checkfname.innerHTML = ""
        first_name = true;
        
    } else {
        checkfname.innerHTML = " use only character";
        first_name = false;
        
    }
}
 var email_id
function emailvalidation() {
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var email = document.getElementById("Email").value
    var checkemail = document.getElementById("tempemail")
    if (email == "") {
        checkemail.innerHTML = "Feild is requried";
      
        email_id= false;
    } else if (email.match(mailformat)) {
        checkemail.innerHTML = ""
        email_id = true
       
    } else {
        checkemail.innerHTML = "Check your email id";
        email_id = false
       

    }
}
 var phone_num
function phonevalidation() {
    var phonenumberformate = /^\d{10}$/;
    var phonenum = document.getElementById("Phone").value
    var checkphone = document.getElementById("tempphone")
    if (phonenum == "") {
        checkphone.innerHTMLe = "Feild is requried";
        phone_num= false
      
    } else if (phonenum.match(phonenumberformate)) {
        checkphone.innerHTML = " "
        phone_num = true
        
    } else {
        checkphone.innerHTML = "Check your number";
        phone_num= false
        
    }
}




function MessageValid(){
    var mess=document.getElementById("messageText").value 
    var messageSpan=document.getElementById("tempmessage");
    
    if(mess==""){
        messageSpan.innerHTML="Filed is required"
        valid.mess=false
        
    }
    else if(mess.length<=10){
        messageSpan.innerHTML="Enter minimum 10 character";
        valid.mess=false
       
    }
    else{
        messageSpan.innerHTML="";
        valid.mess=true
        
    }
 
}