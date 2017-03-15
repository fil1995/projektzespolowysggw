<?php
require_once("config.php");


$nick=$_POST['nick'];
$haslo=$_POST['haslo'];


if (!empty($nick) && !empty($haslo))
{
	$sql = 'SELECT stan_konta from uzytkownicy WHERE nick = "' . $nick . '"';

	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
		// output data of each row
		echo $result->fetch_assoc()['stan_konta'];
		
	} else {
		echo "0 results";
	}
	$conn->close();
}else{
	echo "Puste";
}










?>