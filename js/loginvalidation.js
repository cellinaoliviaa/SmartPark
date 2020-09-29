function validation()
{
    var username = document.getElementById('username').value;
    minimalcharun = 8;
    var password = document.forms["LoginForm"]["password"];
    var minimalcharpass = 10;

    //Username
    if (username == "")
    {
        window.alert("Username harus diisi");
        username.focus();
        return false;
    }

    if(username.length < minimalcharun)
    {
        window.alert("Panjang username harus minimal 8 karakter")
        LoginForm.username.focus();
        return false;
    }

    //password
    if(password.value == "")
    {
        window.alert("Password harus diisi");
        password.focus();
        return false;
    }

    if(LoginForm.password.value.length < minimalcharpass)
    {
        window.alert("Panjang password harus minimal 10 karakter")
        LoginForm.password.focus();
        return false;
    }

    window.location.href = "home.html";
    return true;

}
