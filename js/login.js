// ===============================
// EstateHub Login System
// ===============================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value.trim();

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(
            u => u.email === email && u.password === password
        );

        if (!user) {

            alert("❌ Invalid email or password!");

            return;

        }

        localStorage.setItem("loggedInUser", JSON.stringify(user));

        alert(`✅ Welcome ${user.name}!`);

        window.location.href = "index.html";

    });

}