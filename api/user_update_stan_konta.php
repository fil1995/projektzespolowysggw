<?php
require_once("config.php");


$nick=$_POST['nick'];
$haslo=$_POST['haslo'];
$zmiana=$_POST['zmiana'];


if (!empty($nick) && !empty($haslo) && !empty($zmiana))
{
	$sql = 'SELECT stan_konta from uzytkownicy WHERE 
		nick = "' . $nick . '" AND 
		haslo = "' . $haslo . '"';

	$result = $conn->query($sql);
	
	if ($result->num_rows > 0) {
		// output data of each row
		//echo $result->fetch_assoc()['stan_konta'];
		
		$stan=$result->fetch_assoc()['stan_konta']+$zmiana;
		
		//// Tu aktualizacja rekordu...
		$sql2 = 'UPDATE uzytkownicy SET 
			stan_konta=' . $stan . ' WHERE 
			nick = "' . $nick . '" AND 
			haslo = "' . $haslo . '"';
		
		if ($conn->query($sql2) === TRUE) {
			echo "ok";
		} else {
			echo "Error updating record: " . $conn->error;
		}
		////
		
		
	} else {
		echo "error";
	}
	$conn->close();
}else{
	echo "error";
}


?>