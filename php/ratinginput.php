<?php  
    include 'connector.php';

    $alasan = $_POST['pesan'];
    
        if (!empty($alasan)){

    if (mysqli_connect_error()){
    die('Connect Error ('. mysqli_connect_errno() .') '. mysqli_connect_error());
    }
    else{
    $sql = "INSERT INTO rating (pesan)
    values ('$pesan')";
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
    echo "Pesan should not be empty";
    die();
    }
?>