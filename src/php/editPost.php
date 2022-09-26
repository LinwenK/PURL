<?php
include "./config.php";
header ("Access-CONtrol-Allow-Origin:http://localhost:3001");

if($_SERVER['REQUEST_METHOD']=='POST'){
    $dbCon = new mysqli($dbServername, $dbUsername, $dbPass, $dbName);
    if($dbCon->connect_error){
        echo "Connection Failde".$dbCon->connect_error;
    }else{
        $editCmd = "UPDATE post_tb SET user_id='".$_POST['user_id']."', post_uid='".$_POST['post_uid']."', post_date='".$_POST['post_date']."', photo_src='".$_POST['photo_src']."', tags='".$_POST['tags']."', addr='".$_POST['addr']."' WHERE user_id='".$_POST['user_id']."'";
        if($dbCon->query($editCmd) === true){
            $dbcon->close();
            unset($_SESSION['postData']);
            echo "Edit";
        }else{
            echo "Error";
        }
    }
}


?>