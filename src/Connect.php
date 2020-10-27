<?php 

$host         = "localhost";
$username     = "root";

$password     = "ascent";

$dbname       = "webtech";



$conn = new mysqli($host, $username, $password, $dbname);


if ($conn->connect_error) {

     die("Ez nem adta ki: " . $conn->connect_error);
}


$conn->close();

?>