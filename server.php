<?php

$result = array(
	'first' => $_POST["first"],
	'second' => $_POST["second"],
	'third' => $_POST["third"],
	'fourth' => $_POST["fourth"]
); 

echo json_encode($result);

?>