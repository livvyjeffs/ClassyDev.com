<?php
if(isset($_POST['email'])){
    //$name = $_POST['name'];
    $email = $_POST['email'];
    //$message = $_POST['message'];
    //send mail
    mail("martinmolina147@gmail.com", "ClassyDev Inquiry", $email);
    echo "success";
    exit();
}
?>
