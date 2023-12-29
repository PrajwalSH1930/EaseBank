<?php
    // include("index.html");  
        $servername = 'localhost';
        $username = 'root';
        $password = "";
        $dbname = "easebank";
        $conn = mysqli_connect($servername,$username,$password,$dbname) or die("Connection failed!");
        $fname=$_POST['f-name'];
        $lname=$_POST['l-name'];
        $email=$_POST['email'];
        $phone=$_POST['phone'];
        $dob=$_POST['dob'];
        $place=$_POST['place'];
        $pan=$_POST['pan'];
        $aadhar=$_POST['aadhar'];
        $username=$_POST['username'];
        $pwd=$_POST['pwd'];
        $sql = "INSERT INTO login_info VALUES ('{$username}','{$pwd}');";

    if(isset($_POST['reg_submit'])){
        $res = mysqli_query($conn, $sql) or die("Query failed");
    }
    mysqli_close($conn);
?>