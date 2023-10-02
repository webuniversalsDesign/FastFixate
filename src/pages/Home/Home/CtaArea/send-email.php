<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST,OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

error_reporting(E_ALL);
ini_set('display_errors', '1');
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Get form data from the POST request
  $fullName = $_POST["fullName"];
  $phoneNumber = $_POST["phoneNumber"];
  $serviceName = $_POST["serviceName"];

  // Set the recipient email address
  $to = "gagansk2125@gmail.com";

  // Set the subject of the email
  $subject = "New Appointment Request";

  // Compose the email message
  $message = "Full Name: " . $fullName . "\n";
  $message .= "Phone Number: " . $phoneNumber . "\n";
  $message .= "Service Name: " . $serviceName . "\n";

  // Additional headers
  $headers = "From: crackmack16@gmail.com" . "\r\n" .
             "Reply-To: crackmack16@gmail.com" . "\r\n" .
             "X-Mailer: PHP/" . phpversion();

  // Send the email and log errors
  if (mail($to, $subject, $message, $headers)) {
    // Email sent successfully
    echo json_encode(array("success" => true, "message" => "Email sent successfully."));
  } else {
    // Error sending email, log the error
    error_log("Error sending email: " . error_get_last()['message']);
    echo json_encode(array("success" => false, "message" => "Error sending email."));
  }
} else {
  // Request method is not POST
  echo json_encode(array("success" => false, "message" => "Invalid request method."));
}
?>
