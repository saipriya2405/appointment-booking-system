<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>User Login</title>
  <link rel="stylesheet" href="login.css" />
</head>
<body>

<div class="login-container">
  <h2>User Login</h2>

  <form id="loginForm">
    
    <div class="input-group">
      <label>Email ID</label>
      <input type="email" id="email" placeholder="Enter your email" required />
    </div>

    <div class="input-group">
      <label>Password</label>
      <input type="password" id="password" placeholder="Enter your password" required />
    </div>

    <!-- <div class="options">
      <label><input type="checkbox" /> Remember me</label>
      <a href="#" class="forgot">Forgot Password?</a>
    </div> -->

    <button type="submit" class="login-btn">LOGIN</button>
  </form>
</div>

<script src="login.js"></script>
</body>
</html>
