<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['groupName'])     ||
   empty($_POST['destination'])     ||
   empty($_POST['numGroup'])     ||
   empty($_POST['who'])   ||
   empty($_POST['tripDateFrom'])   ||
   empty($_POST['tripDateTo'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }

$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$groupName = strip_tags(htmlspecialchars($_POST['groupName']));
$numGroup = strip_tags(htmlspecialchars($_POST['numGroup']));
$destination = strip_tags(htmlspecialchars($_POST['destination']));
$tripDateFrom = strip_tags(htmlspecialchars($_POST['tripDateFrom']));
$tripDateTo = strip_tags(htmlspecialchars($_POST['tripDateTo']));
$who = strip_tags(htmlspecialchars($_POST['who']));

// Create the email and send the message
$to = 'sales@yourtravelpic.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Voucher Form:  $name";
$email_body = "You have received a new message from your website voucher form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nGroup name: $groupName\n\nWho are you?: $who\n\nHow many are you? $numGroup\n\nDestination: $destination\n\nTrip Date From:\n$tripDateFrom\n\nTrip Date To:\n$tripDateTo";

$headers = "From: sales@travelpic.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>
