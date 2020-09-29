function validation()
{
    // var rating = document.getElementById('rating').value;
    var alasan = document.getElementById('alasan').value;

    //Alasan

    if (alasan == "")
    {
        window.alert("Alasan harus diisi");
        alasan.focus();
        return false;
    }

    return true;
}