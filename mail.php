<?php
      
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $fullname = $fname . ' ' . $lname;
    $email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'santiday@santiagoaday.com';

    $email_subject = 'New Form Submission';

    $email_body =  "Name: $fullname\n" . "User Email: $email\n"."User Message: $message\n";

    $to = "santiagoaday7@gmail.com";

    $headers = "From: $email \r\n";

    $headers = "Reply-to: $email \r\n";

    mail($to, $email, $email_body, $headers);

    Header("Location: index.html")

?>