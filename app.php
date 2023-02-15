// submit-form.php
<?php

// Connect to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "contact_form";
const cors = require('cors')
app.use(cors({
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

}))

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Insert the form data into the database
$sql = "INSERT INTO messages (name, email, message)
VALUES ('$name', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    $response = [
        'status' => 'success',
        'message' => 'Form submitted successfully'
    ];
} else {
    $response = [
        'status' => 'error',
        'message' => 'Error: ' . $conn->error
    ];
}

$conn->close();

// Return the response
header('Content-Type: application/json');
echo json_encode($response);
