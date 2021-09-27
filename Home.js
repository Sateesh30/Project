let fnameNode=document.getElementById("fname");
let spanNode1=document.getElementById("error1");

function validate1(){
    spanNode1.innerHTML="";
    let fname=fnameNode.value;
    if(fname==''){
        spanNode1.innerHTML="This field is required";
        fnameNode.style.border="3px solid red";
    }
    else if(fname.includes(' ')){
        spanNode1.innerHTML="Space is not allowed";
        fnameNode.style.border="3px solid red";
    }
    else{
        fnameNode.style.border="3px solid green";
    }
}
//Last name
let lnameNode=document.getElementById("lname");
let spanNode2=document.getElementById("error2");

function validate2(){
    spanNode2.innerHTML="";
    let lname=lnameNode.value;
    if(lname==''){
        spanNode2.innerHTML="This field is required";
        lnameNode.style.border="3px solid red";
    }
    else if(lname.includes(' ')){
        spanNode2.innerHTML="Space is not allowed";
        lnameNode.style.border="3px solid red";
    }
    else{
        lnameNode.style.border="3px solid green";
    }
}
//Password
let passNode=document.getElementById("pass");
let spanNode3=document.getElementById("error3");

function validate3(){
    spanNode3.innerHTML="";
    let password=passNode.value;

    var regExp=new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    console.log(password);
    console.log(regExp.test(password));
    if(password==''){
        spanNode3.innerHTML="This field is required";
        passNode.style.border="3px solid red";
    }
    else if(password.length<4 || password.length>8){
        spanNode3.innerHTML="Password should be 4 to 8 characters long";
        passNode.style.border="3px solid red";
    }
    else if(regExp.test(password)==false){
            spanNode3.innerHTML="Password should be alphanumeric with special symbols";
            passNode.style.border="3px solid red";
    }
    else{
        passNode.style.border="3px solid green";
    }
}
//Confirm passowrd
let c_passNode=document.getElementById("c_pass");
let spanNode4=document.getElementById("error4");

function validate4(){
    spanNode4.innerHTML="";
    let password=passNode.value;
    let c_password=c_passNode.value;

    
    if(c_password==''){
        spanNode4.innerHTML="This field is required";
        c_passNode.style.border="3px solid red";
    }
    else if(c_password!=password){
        spanNode4.innerHTML="Password should be match";
        c_passNode.style.border="3px solid red";
    }
    else{
        c_passNode.style.border="3px solid green";
    }
}
//Email
let emailNode=document.getElementById("emailId");
let spanNode5=document.getElementById("error5");

function validate5(){
    spanNode5.innerHTML="";
    let emailId=emailNode.value;
    let subs=emailId.substring(emailId.indexOf('@')+1);

    
    if(emailId==''){
        spanNode5.innerHTML="This field is required";
        emailNode.style.border="3px solid red";
    }
    else if(!emailId.includes('@')||subs==''){
        spanNode5.innerHTML="Inavlid Email-Id";
        emailNode.style.border="3px solid red";
    }
    else{
        emailNode.style.border="3px solid green";
    }
}

//Age
let ageNode=document.getElementById("age");
let spanNode6=document.getElementById("error6");

function validate6(){
    spanNode6.innerHTML="";
    let age=ageNode.value;
    
    if(age==''){
        spanNode6.innerHTML="This field is required";
        ageNode.style.border="3px solid red";
    }
    else if(age<=0){
        spanNode6.innerHTML="Inavlid age limit";
        ageNode.style.border="3px solid red";
    }
    else{
        ageNode.style.border="3px solid green";
    }
}

//Mobile Number
let mobileNode=document.getElementById("mobileno");
let spanNode7=document.getElementById("error7");

function validate7(){
    spanNode7.innerHTML="";
    let mobId=mobileNode.value;
    var regExp1=new RegExp("^(?=.*[0-9])");
   let var1=parseInt(mobId);
    
    if(mobId==''){
        spanNode7.innerHTML="This field is required";
        mobileNode.style.border="3px solid red";
        return false;
    }
    else if(isNaN(var1)){
        spanNode7.innerHTML="Mobile Number should be Numeric";
        mobileNode.style.border="3px solid red";
        return false;
    } 
    else if(mobId.length<10 || mobId.length>14){
        spanNode7.innerHTML="Invalid Mobile Number";
        mobileNode.style.border="3px solid red";
        return false;
    }
    else{
        mobileNode.style.border="3px solid green";
        return true;
    }
}



