function downloadPdf() {

    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const company = document.getElementById("company").value;
    const email = document.getElementById("email").value;

    alert(
        "Sending:\n\n" +
        firstName + "\n" +
        lastName + "\n" +
        company + "\n" +
        email
    );

    fetch(
        "https://script.google.com/macros/s/AKfycbz3pTOd8QhUKqSCXEFj4nRox05oY3O3owcZw41yfsoUFabrovUR-QGcHgEP0bFgNpuYbA/exec",
        {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body:
                "firstname=" + encodeURIComponent(firstName) +
                "&lastname=" + encodeURIComponent(lastName) +
                "&company=" + encodeURIComponent(company) +
                "&email=" + encodeURIComponent(email)
        }
    );

    alert("Request sent!");
}
