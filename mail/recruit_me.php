<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['message'])   ||
   empty($_POST['country'])     ||
   empty($_POST['job'])     ||
   empty($_POST['city'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }

   //Get uploaded file data using $_FILES array
       $tmp_name    = $_FILES['curriculum']['tmp_name']; // get the temporary file name of the file on the server
       $name        = $_FILES['curriculum']['name'];  // get the name of the file
       $size        = $_FILES['curriculum']['size'];  // get size of the file for size validation
       $type        = $_FILES['curriculum']['type'];  // get type of the file
       $error       = $_FILES['curriculum']['error']; // get the error (if any)

       //validate form field for attaching the file
       if($file_error > 0)
       {
           die('Upload error or No files uploaded');
       }

       //read from the uploaded file & base64_encode content
       $handle = fopen($tmp_name, "r");  // set the file handle only for reading the file
       $content = fread($handle, $size); // reading the file
       fclose($handle);                  // close upon completion

       $encoded_content = chunk_split(base64_encode($content));

       $boundary = md5("random"); // define boundary with a md5 hashed value


$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
$country = strip_tags(htmlspecialchars($_POST['country']));
$job = strip_tags(htmlspecialchars($_POST['job']));
$city = strip_tags(htmlspecialchars($_POST['city']));

// Create the email and send the message
$to = 'info@yourtravelpic.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Recruitment Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nJob: $job\n\nCity: $city\n\nCountry: $country\n\nMessage:\n$message";

//attachment
$email_body .= "--$boundary\r\n";
$email_body .="Content-Type: $type; name=".$name."\r\n";
$email_body .="Content-Disposition: attachment; filename=".$name."\r\n";
$email_body .="Content-Transfer-Encoding: base64\r\n";
$email_body .="X-Attachment-Id: ".rand(1000, 99999)."\r\n\r\n";
$email_body .= $encoded_content; // Attaching the encoded file with email

$headers = "From: recruitment@travelpic.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>
