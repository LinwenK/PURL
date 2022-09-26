<?php
include "./config.php";
header ("Access-CONtrol-Allow-Origin:http://localhost:3000");

if($_SERVER['REQUEST_METHOD']=="POST"){
    $user_id = $_POST['user_id'];
    // $post_uid = $_POST['post_uid'];
    $post_uid = uniqid('');
    $post_date = $_POST['post_date'];
    $photo_src = $_FILES['photo_src'];
    $tags = $_POST['tags'];
    $addr = $_POST['addr'];
    $imgExtension = pathinfo($photo_src['name'])['extension'];
    // print_r ($photo_src);
    $imgDest = "./img/$user_id/".str_replace(" ","_",$photo_src['name']);
    $fileName = "./img/$user_id";
    if(!file_exists($fileName)){
        mkdir($fileName, 755, true);
    }
    if($imgExtension == "jpg" && getimagesize($photo_src['tmp_name'])){

        if($_SERVER['REQUEST_METHOD']=='POST'){
            $dbCon = new mysqli($dbServername, $dbUsername, $dbPass, $dbName);
            if($dbCon->connect_error){
                echo "Connection Failde".$dbCon->connect_error;
            }else{
                $addCmd = "INSERT INTO post_tb (user_id, post_uid,post_date,photo_src,tags,addr)VALUES ('$user_id','$post_uid','$post_date','$imgDest','$tags','$addr')";
                if($dbCon->query($editCmd) === true){
                    $dbcon->close();
                    echo "Added";
                }else{
                    echo "Error";
                }
            }
        }
    }
}

?>