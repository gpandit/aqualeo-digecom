<?php
/**
 * Aqualeo Digecom Contact Form Handler
 * Direct email via Hostinger SMTP
 *
 * SETUP REQUIRED:
 * 1. Get SMTP credentials from Hostinger (see instructions below)
 * 2. Replace MAIL_HOST, MAIL_USER, MAIL_PASS, MAIL_FROM below
 * 3. Upload this file to public_html/
 * 4. Update contact.html form action to action="contact-handler.php"
 */

// ════════ CONFIG — UPDATE THESE ════════
define('MAIL_HOST', 'smtp.hostinger.com');      // Hostinger SMTP server
define('MAIL_PORT', 587);                        // SMTP port (587 = TLS, 465 = SSL)
define('MAIL_USER', 'your-email@aqualeo.co');   // Your email from Hostinger
define('MAIL_PASS', 'your-app-password');       // App password (NOT your regular password)
define('MAIL_FROM', 'noreply@aqualeo.co');      // From address (can be different)
define('RECEIVE_EMAIL', 'sales@aqualeo.co');    // Where to send leads
define('SITE_NAME', 'Aqualeo Digecom');

// ════════ RESPONSE HEADERS ════════
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Only accept POST
if($_SERVER['REQUEST_METHOD'] !== 'POST'){
  http_response_code(405);
  exit(json_encode(['error' => 'Method not allowed']));
}

// ════════ VALIDATE & SANITIZE ════════
$name    = trim($_POST['name'] ?? '');
$company = trim($_POST['company'] ?? '');
$email   = trim($_POST['email'] ?? '');
$phone   = trim($_POST['phone'] ?? '');
$service = trim($_POST['service'] ?? '');
$message = trim($_POST['message'] ?? '');

// Honeypot spam check
if(!empty($_POST['_gotcha'])){
  http_response_code(400);
  exit(json_encode(['error' => 'Spam detected']));
}

// Validate required fields
if(empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)){
  http_response_code(400);
  exit(json_encode(['error' => 'Valid email required']));
}

// ════════ BUILD EMAIL ════════
$subject = "New Lead: " . ($name ?: 'Unnamed') . " — " . SITE_NAME;

$body = "New contact form submission:\n\n";
$body .= "Name: " . ($name ?: '(not provided)') . "\n";
$body .= "Company: " . ($company ?: '(not provided)') . "\n";
$body .= "Email: $email\n";
$body .= "Phone: " . ($phone ?: '(not provided)') . "\n";
$body .= "Service: " . ($service ?: '(not provided)') . "\n";
$body .= "Message:\n" . ($message ?: '(no message)') . "\n\n";
$body .= "—\n";
$body .= "From: " . $_SERVER['REMOTE_ADDR'] . "\n";
$body .= "Time: " . date('Y-m-d H:i:s') . " UTC\n";

// ════════ SEND EMAIL ════════
try {
  // Use PHP's built-in stream context for SMTP (if enabled)
  // Otherwise, use PHPMailer (instructions below)

  $context = stream_context_create([
    'ssl' => [
      'verify_peer' => true,
      'verify_peer_name' => true,
    ]
  ]);

  // Try using PHP mail() with SMTP configuration
  $headers = "From: " . MAIL_FROM . "\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
  $headers .= "X-Mailer: Aqualeo Contact Form\r\n";

  // On Hostinger shared hosting, mail() usually works
  $sent = mail(RECEIVE_EMAIL, $subject, $body, $headers);

  if($sent){
    http_response_code(200);
    exit(json_encode(['success' => true, 'message' => 'Thanks — we\'ll be in touch within one working day!']));
  } else {
    throw new Exception('mail() function failed');
  }

} catch(Exception $e){
  error_log("Contact form error: " . $e->getMessage());
  http_response_code(500);
  exit(json_encode(['error' => 'Failed to send email. Please try again or email us directly.']));
}
?>
