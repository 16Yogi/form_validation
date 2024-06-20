// simple way
// function validation(){
//     let fullName = document.getElementById("full-name").value;
//     let mobile = document.getElementById("mobile").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     let rePassword = document.getElementById("repassword").value;
    
//     if(fullName=="" || mobile=="" || email=="" || password=="" || rePassword==""){
//         console.log("null value not allowed");
//         alert("Please fill all the fileds");
//         return false;
//     }else if(!isNoN(fullName)){
//         console.log("Plase enter the valid name")
//         alert("please enter the valid name");
//         return false;
//     }else if(mobile.length<10 ||mobile.length>10){
//         console.log("Number must be 10 digit")
//         alert("number must be 10 digit")
//         return false;
//     }else if (isNaN(mobile)) {
//         console.log("Only numbers are accepted");
//         alert("only numbers are accepted");
//         return false;
//     }else if(password != rePassword){
//         console.log("Password and confirm password must be same")
//         alert("password and confirm password must be same");
//         return false;
//     }else{
//         true;
//     }
// }


// 2nd way

function validation(){
    var fullName = document.getElementById("full-name").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var rePassword = document.getElementById("repassword").value;

    if(fullName === "" || mobile === "" || email === "" ||password === "" || rePassword == "" ){
        console.log("All filed are require");
        alert("All filed are require");
        return false;
    }else if(!isValidname(fullName)){
        console.log("Invalid name");
        alert("Please enter a valid name");
        return false;
    }else if(mobile.length !==10 || isNaN(mobile)){
        console.log("Number must be 10 digits");
        alert("Number must be 10 digits")
        return false;
    }else if(!isValidEmail(email)){
        console.log("Email not valid !plase enter a valid email")
        alert("Email not valid")
        return false;
    }else if(password !== rePassword){
        console.log("Password and confirm password must be same");
        alert("Password and confirm password must be same");
        return false;
    }
    else{
        true;
    }
}

function isValidname(name){
    return /^[a-zA-Z]+$/.test(name);
}
function isValidEmail(email){
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}
