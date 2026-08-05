const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const emailExists = users.some(user => user.email === email);

        if (emailExists) {
            alert("This email is already registered.");
            return;
        }

        const user = {
            name: fullName,
            email: email,
            phone: phone,
            password: password
        };

        users.push(user);

        localStorage.setItem("users", JSON.stringify(users));

        alert("✅ Registration successful!");

        window.location.href = "login.html";

    });

}