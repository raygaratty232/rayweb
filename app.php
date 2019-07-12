<?php

	$email = trim($_POST['email']);
	$phone = trim($_POST['phone']);
	$name = trim($_POST['name']);
	$dt = date('Y-m-d H:i:s');
    $to = "garatty.232@gmail.com";
	if($email == '' || $phone == '' || $name ==''){
		echo 'заполните все поля';
	}

	elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
		echo "Введите почту";
	}

	else{
		file_put_contents('apps.txt', "$dt $email $phone $name \n" , FILE_APPEND);
		echo 1;
	}

require("libs/PHPMailer/src/PHPMailer.php");
  require("libs/PHPMailer/src/SMTP.php");

$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->IsSMTP(); 

$mail->CharSet = 'UTF-8';

$mail->Host       = "smtp.gmail.com";
$mail->SMTPDebug  = 0;
$mail->SMTPAuth   = true;
$mail->Port       = 465;
$mail->Username   = "garatty.232@gmail.com";
$mail->Password   = "141190ray";

$mail->From = 'rayweb.zzz.com.ua';
$mail->Subject = 'Заказ с Вашего сайта';
$mail->addAddress($to);
$mail->Body = $message;

if(!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message has been sent successfully";
}
