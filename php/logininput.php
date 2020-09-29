<?php  
    include 'connector.php';

    $username = $_POST['username'];
    $password = $_POST['password'];

        if (!empty($username)){
        if (!empty($password)){

    if (mysqli_connect_error()){
    die('Connect Error ('. mysqli_connect_errno() .') '. mysqli_connect_error());
    }
    else{
    $SELECT = "SELECT username, password From register Where username, password = ? Limit 1";
    $sql = "INSERT INTO login (username, password)
    values ('$username','$pesan')";
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
    echo "Username should not be empty";
    die();
    }
    }
    else{
    echo "Password should not be empty";
    die();
    }
?>