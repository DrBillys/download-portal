function downloadPdf() {
    alert("JavaScript is working!");
}
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const company = document.getElementById("company").value;
    const email = document.getElementById("email").value;

    if (!firstName || !lastName || !company || !email) {
        alert("Please complete all fields.");
        return;
    }

    const formData = new FormData();

    formData.append("entry.575272416", firstName);
    formData.append("entry.1950660787", lastName);
    formData.append("entry.952978449", company);
    formData.append("entry.1269496819", email);

    fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdm8ZoiewAj4hRJ807AOkLm3sTmuyKQdlcYxrzMRztlyCwbDg/formResponse",
        {
            method: "POST",
            mode: "no-cors",
            body: formData
        }
    );

    const link = document.createElement("a");

    link.href = "MULTI-LEVEL-INVERTER-ARCHITEKTUREN ONEPAGER ENG.pdf";
    link.download = "MULTI-LEVEL-INVERTER-ARCHITEKTUREN ONEPAGER ENG.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
