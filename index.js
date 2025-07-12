document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("submit");
  const signupBtn = document.getElementById("signup");

  if (loginBtn) loginBtn.addEventListener("click", loginUser);
  if (signupBtn) signupBtn.addEventListener("click", signupUser);
});

// Signup Function
function signupUser() {
  const username = document.getElementById("signupUsername").value;
  const email = document.getElementById("signupEmail").value;
  const password1 = document.getElementById("signupPassword1").value;
  const password2 = document.getElementById("signupPassword2").value;
  const result = document.getElementById("result");

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://127.0.0.1:8000/api/auth/registration/", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 201) {
        // If the backend returns a token, extract and store it
        try {
          const response = JSON.parse(xhr.responseText);
          if (response.key) {
            localStorage.setItem("authToken", response.key);
          }
        } catch (e) {
          console.warn("No token received on signup.");
        }

        result.innerText = "✅ Registration successful!";
        setTimeout(() => {
          window.location.href = "shop.html";
        }, 1000);
      } else {
        try {
          const errorData = JSON.parse(xhr.responseText);
          result.innerText = "❌ Error: " + JSON.stringify(errorData);
        } catch (e) {
          result.innerText = "❌ Unexpected error: " + xhr.responseText;
        }
      }
    }
  };

  const data = JSON.stringify({
    username: username,
    email: email,
    password1: password1,
    password2: password2,
  });

  xhr.send(data);
}

// Login Function
function loginUser(event) {
  event.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  const result = document.getElementById("result");

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://127.0.0.1:8000/api/auth/login/", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        localStorage.setItem("authToken", response.key); // ✅ Store token

        result.innerText = "✅ Login successful!";
        setTimeout(() => {
          window.location.href = "shop.html"; // ✅ Redirect
        }, 1000);
      } else {
        try {
          const errorData = JSON.parse(xhr.responseText);
          result.innerText = "❌ " + JSON.stringify(errorData);
        } catch (e) {
          result.innerText = "❌ Login failed: " + xhr.responseText;
        }
      }
    }
  };

  const data = JSON.stringify({
    email: email,
    password: password,
  });

  xhr.send(data);
}
