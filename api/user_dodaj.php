<?php
require_once("config.php");


$nick=$_POST['nick'];
$email=$_POST['email'];
$haslo=$_POST['haslo'];


if (!empty($nick) && !empty($email) && !empty($haslo))
{
	$sql = 'INSERT INTO uzytkownicy (nick, email, haslo) 
	VALUES ("' . $nick . '", "' . $email . '", "' . $haslo . '")';

	if (mysqli_query($conn, $sql)) {
		echo "OK";
	} else {
		echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	}

	mysqli_close($conn);
}else{
	echo "Puste";
}










?>