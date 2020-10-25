<?php 

if($_POST){
  $to_mail = 'bgrminzp20@gmail.com';
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['msg'];

//send email
  mail("bgrminzp20@gmail.com", "This is an email from:", $message);
}