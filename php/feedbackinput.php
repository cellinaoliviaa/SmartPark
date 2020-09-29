<?php  
    include 'connector.php';

    $nama = $_POST['nama'];
    $pesan = $_POST['pesan'];

        if (!empty($nama)){
        if (!empty($pesan)){

    if (mysqli_connect_error()){
    die('Connect Error ('. mysqli_connect_errno() .') '. mysqli_connect_error());
    }
    else{
    $sql = "INSERT INTO feedback (nama, pesan)
    values ('$nama','$pesan')";
    if ($conn->query($sql)){
    echo "New record is inserted sucessfully"; 
    }
    else{
    echo "Error: ". $sql ."
    ". $conn->error;
    }
    $conn->close();
    }
    }
    else{
    echo "Nama Lengkap should not be empty";
    die();
    }
    }
    else{
    echo "Pesan should not be empty";
    die();
    }
?>