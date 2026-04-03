<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Create Account</title>
  <link rel="stylesheet" href="register.css">
</head>

<body>

<div class="auth-container">
  <h2>Create Account</h2>

  <form id="registerForm">

    <div class="input-group">
      <label>Name</label>
      <input type="text" id="name" required />
    </div>

    <div class="input-group">
      <label>Email</label>
      <input type="email" id="email" required />
    </div>

    <div class="input-group">
      <label>Password</label>
      <input type="password" id="password" required />
    </div>

    <button type="submit" class="auth-btn">Register</button>

    <p class="switch">Already have an account?
      <a href="login.html">Login</a>
    </p>

  </form>

</div>

<script src="register.js"></script>
</body>
</html>
