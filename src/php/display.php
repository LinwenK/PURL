<?php
    include "./config.php";
    header ("Access-CONtrol-Allow-Origin:http://localhost:3000");

    if($_SERVER['REQUEST_METHOD']=='POST'){
        $dbCon = new mysqli($dbServername, $dbUsername, $dbPass, $dbName);
        if($dbCon->connect_error){
            echo "Connection Failed".$dbCon->connect_error;
        }else{
            $resultArray = [];
            $displayCmd = "SELECT * FROM post_tb";
            $result = $dbCon->query($displayCmd);
            if($result->num_rows > 0){
                while($row = $result->fetch_assoc()){
                    array_push($resultArray, $row);
                }
                echo json_encode($resultArray);
            }else{  
                echo "No data";
                $dbCon->close();
            }
        }
    }
?>