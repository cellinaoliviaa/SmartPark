<?php  
    include 'connector.php';

    $nama = $_POST['email'];
    $forum = $_POST['password'];

        if (!empty($nama)){
        if (!empty($forum)){

    if (mysqli_connect_error()){
    die('Connect Error ('. mysqli_connect_errno() .') '. mysqli_connect_error());
    }
    else{
    $sql = "INSERT INTO forum (nama, forum)
    values ('$nama','$forum')";
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
    echo "Nama should not be empty";
    die();
    }
    }
    else{
    echo "Forum should not be empty";
    die();
    }
?>