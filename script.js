document.getElementById('login-submit').addEventListener('click', function(){
    const email =document.getElementById('email');
    const userEmail =email.value;
    // get user password
    const password =document.getElementById('password');
    const userPassword =password.value;
    if(userEmail=="hello"&& userPassword=="world"){
        //this is for going new page
        window.location.href='banking.html';
        //
    }

})

