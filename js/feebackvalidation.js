function validation()
{
    var nama = document.getElementById('nama').value;
    var pesan = document.getElementById('pesan').value;

    if (nama == "")
    {
        window.alert("Nama Lengkap harus diisi");
        nama.focus();
        return false;
    }

    if (pesan == "")
    {
        window.alert("Pesan harus diisi");
        pesan.focus();
        return false;
    }

    return true;
}