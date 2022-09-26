<?php
    require './config.php';
    session_start();
    if($_SERVER['REQUEST_METHOD']=='POST'){
        $uName = $_POST['uName'];
        $email = $_POST['email'];
        $pass = $_POST['pass'];
        $confirmPass = $_POST['confirmPass'];
        $dob = $_POST['dob'];
        $gender = $_POST['gender'];
        $email = filter_var($email,FILTER_VALIDATE_EMAIL);
        $res =array();
        if(filter_var($email,FILTER_VALIDATE_EMAIL)){
            $hashPass = password_hash($pass,PASSWORD_BCRYPT,['cost'=>9]);
            $dbCon = new mysqli($dbHostname,$dbUsername,$dbPass,$dbName);
            if($dbCon->connect_error){
                die("Connection Error");
            }else{
                $updateCmd = 'UPDATE user_tb SET user_id="'.$uName.'", email="'.$email.'", password="'.$pass.'", birthday="'.$dob.'", gender="'.$gender.'", WHERE user_uid=2';//login data still needed
                $result = $dbCon->query($updateCmd) or die("Connection error");
                if($result===true){
                    $dbCon->close();
                   $res = "User successfully updated";
                }
            }
        }else{
           $res = "Please insert valid email address";
        }
       echo json_encode($res);
    }
?>