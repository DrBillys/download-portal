function login() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // CHANGE THESE TO YOUR OWN CREDENTIALS
    const correctUsername = "admin";
    const correctPassword = "Welcome123";

    if (username === correctUsername && password === correctPassword) {

        document.getElementById("loginCard").style.display = "none";
        document.getElementById("downloadCard").style.display = "block";

        // Auto download
        const link = document.createElement("a");
        link.href = "document.pdf";
        link.download = "document.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    } else {

        document.getElementById("message").innerText =
            "Incorrect username or password.";

    }
}
