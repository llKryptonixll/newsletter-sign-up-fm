const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const submitButton = document.getElementById("subscribe_form_btn");
const emailInput = document.getElementById("email_input");
submitButton.addEventListener("click", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const errorMessage = document.getElementById("error_message");

    if (emailPattern.test(emailInput.value)) {
        showSuccessSection();
    } 
    else{
        errorMessage.style.display = "block";
        emailInput.style.borderColor = "hsl(4, 100%, 67%)";
        emailInput.style.backgroundColor = "hsla(4, 100%, 66%, 0.2)";
        emailInput.style.backgroundColor = "hsla(4, 100%, 66%, 0.2)";
    }
}

function showSuccessSection() {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.style.display = "none";
    });

    const successSection = document.getElementById("sucess_section");
    successSection.style.display = "grid";

    const mainContent = document.getElementById("main_content");
    mainContent.style.width = "min(500px, 100%)";

    const dismissButton = document.getElementById("dismiss_button");
    dismissButton.addEventListener("click", () => {
        location.reload();
    });

    const userEmailSpan = document.getElementById("user_email");
    userEmailSpan.innerText = emailInput.value;
}