<?php
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    //send mail
    mail("martinmolina147@gmail.com", "ClassyDev Inquiry", $name.$email.$message);
    echo "success";
    exit();
}
?>
