function validation()
{

    var nama = document.getElementById('nama').value;
    var letters = /^[A-Za-z]+$/;
    var tglLahir = document.getElementById('tglLahir').value;
    var format = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
    var gender = document.getElementsByName('gender');
    var genderValue = false;
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var minimalcharun = 8;
    var password = document.getElementById('password');
    var minimalcharpass = 10;
    

    //Nama
    if (nama == "")
    {
        window.alert("Nama harus diisi");
        nama.focus();
        return false;
    }

    else if (!nama.match(letters))
    {   
        window.alert("Nama harus huruf saja")
        return false;
    }
    

    //tglLahir
    if (tglLahir == "")
    {
        window.alert("Tanggal Lahir harus diisi");
        tglLahir.focus();
        return false;
    }

    else if(!tglLahir.match(format))
    {
        window.alert("Tanggal lahir harus dengan format dd/mm/yyyy");
        return false;
    }

    //gender
    for (var i=0; i<gender.length;i++)
    {
        if(gender[i].checked == true)
        {
            genderValue = true;
        }
    }

    if(!genderValue)
    {
        window.alert("Gender must be chosen");
        return false;
    }

    //email
    else if (email == "")
    {
        window.alert("Email harus diisi");
        email.focus();
        return false;
    }

    else if(!email.includes('@') || !email.includes('.'))
    {
        window.alert("Email harus mengandung @ and .")
        email.focus();
        return false;
    }

    if(email.includes('@.'))
    {
        window.alert("Email tidak dapat mengadndung @.")
        email.focus();
        return false;
    }

    //username
    if (username == "")
    {
        window.alert("Username harus diisi");
        username.focus();
        return false;
    }

    else if(username.length < minimalcharun)
    {
        window.alert("Panjang username harus minimal 8 karakter")
        RegForm.username.focus();
        return false;
    }

    //password
    if(password == "")
    {
        window.alert("Password harus diisi");
        password.focus();
        return false;
    }

    else if(password.length < minimalcharpass)
    {
        window.alert("Panjang password harus minimal 10 karakter")
        RegForm.password.focus();
        return false;
    }

    window.confirm("CONFIRMATION BOX\nNama : "+nama+"\nTanggal Lahir : "+tglLahir
                    +"\nEmail : "+email+"\nUsername : "+username)

    window.location.href = "login.html";
    
    return true;

    

    

}
