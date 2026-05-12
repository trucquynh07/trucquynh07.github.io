function checkPassword() {
    let password = document.getElementById("password").value;
    let strengthText = "";
    let strengthElement = document.getElementById("strength");

    if (password.length < 6) {
        strengthText = "Weak";
        strengthElement.style.color = "red";
    } else if (password.length < 10) {
        strengthText = "Medium";
        strengthElement.style.color = "orange";
    } else {
        strengthText = "Strong";
        strengthElement.style.color = "green";
    }
    strengthElement.innerText = "Password Strength: " + strengthText;
}

function validateForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let image = document.getElementById("image").value;

    // Yêu cầu 10: Username must be 5-15 characters
    if (username.length < 5 || username.length > 15) {
        alert("Username must be 5-15 characters");
        return;
    }

    // Yêu cầu 11: Password must contain letters and numbers
    let hasLetter = /[A-Za-z]/.test(password);
    let hasNumber = /[0-9]/.test(password);
    if (!hasLetter || !hasNumber) {
        alert("Password must contain letters and numbers");
        return;
    }

    // Yêu cầu 12: Image file must be JPG or PNG
    if (!image.endsWith(".jpg") && !image.endsWith(".png")) {
        alert("Image must be JPG or PNG");
        return;
    }

    alert("Registration Successful");
}