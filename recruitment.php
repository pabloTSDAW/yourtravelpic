<?php
if(isset($_POST['email'])) {

// Debes editar las próximas dos líneas de código de acuerdo con tus preferencias
// $email_to = "recruitment@yourtravelpic.com";
$email_to = "pablopacastell@gmail.com";
$email_subject = "Recruitment - YourTravelpic";

$email_message = "Detalles del formulario de recruitment:\n\n";
$email_message .= "Name: " . $_POST['name2'] . "\n";
$email_message .= "E-mail: " . $_POST['email2'] . "\n";
$email_message .= "Country: " . $_POST['country'] . "\n";
$email_message .= "Phone: " . $_POST['phone2'] . "\n";
$email_message .= "City of work: " . $_POST['city'] . "\n";
$email_message .= "Job: " . $_POST['job'] . "\n";
$email_message .= "Resume: " . $_POST['curriculum'] . "\n";
$email_message .= "Comments: " . $_POST['message2'] . "\n\n";


// Ahora se envía el e-mail usando la función mail() de PHP
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);
}
?>
