<?php
    include "./config.php";
    header("Access-Control-Allow-Origin: http://localhost:3000");

    if($_SERVER['REQUEST_METHOD']=='POST'){
        session_start();
        $username = $_POST['userId'];
        $dbCon = new mysqli($dbServername,$dbUsername,$dbPass, $dbname);
        if($dbCon->connect_error){
            echo "Connection Failed".$dbCon->connect_error;
        }else{
            $imgCmd = "SELECT * FROM post_tb WHERE user_id = '$username';";
            $result = $dbCon->query($imgCmd);
            if($result->num_rows > 0){
                $imgInfo = $result->fetch_assoc();
                $dbCon->close();
                echo json_encode($imgInfo);
            }else{
                echo "No data";
                $dbCon->close();
            }
            
        }
    }
?>