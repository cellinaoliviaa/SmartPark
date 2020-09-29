function validation()
{
    var nama = document.getElementById('nama').value;
    var forum = document.getElementById('forum').value;
    

    //Nama
    if(nama == "")
    {
        window.alert("Nama Lengkap harus diisi");
        nama.focus();
        return false;
    }

    //Pesan
    if(forum == "")
    {
        window.alert("Forum harus diisi");
        nama.focus();
        return false;
    }
    
    
    document.getElementById('thread').style.display = "block";

    return true;
}

function addReply()
{
    document.getElementById('reply').style.display = "block";
}
