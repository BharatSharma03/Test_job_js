function submitform() {
    // Access form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('fmail').value;
    const phone = document.getElementById('phone').value;
    const pwd = document.getElementById('pwd').value;
    const radiobtn = document.getElementsByName('gender');
    const color = document.getElementById('colors').value;
    const fileInput = document.getElementById('resume');
    const file = fileInput.files[0];
    const combobox = document.getElementById('box').checked;

    // Access error display elements
    let nameErrors = document.getElementById('name_err');
    let emailError = document.getElementById('email_err');
    let phoneError = document.getElementById('phone_err');
    let passError = document.getElementById('pass_err');
    let genderError = document.getElementById('gender_err');
    let colorError = document.getElementById('color_err');
    let fileError = document.getElementById('file_err');
    let boxError = document.getElementById('terms_err');

    // Clear previous error messages
    nameErrors.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    passError.textContent = "";
    genderError.textContent = "";
    colorError.textContent = "";
    fileError.textContent = "";
    boxError.textContent = "";

    let isValid = true;

    // Validate name
    if (name.length < 4 || /\d/.test(name)) {
        nameErrors.textContent = "*Full Name must be at least 4 characters and should not contain numbers.";
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "*Please enter a valid email address.";
        isValid = false;
    }

    // Validate phone
    if (!(phone.length === 10 && !isNaN(phone))) {
        phoneError.textContent = "*Phone number must be exactly 10 digits.";
        isValid = false;
    }

    // Validate password
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(pwd)) {
        passError.textContent = "*Password must be at least 8 characters and contain an uppercase letter, a lowercase letter, and a number.";
        isValid = false;
    }

    // Validate gender
    let genderSelected = false;
    for (let gender of radiobtn) {
        if (gender.checked) {
            genderSelected = true;
            break;
        }
    }
    if (!genderSelected) {
        genderError.textContent = "*Please select your gender.";
        isValid = false;
    }

    // Validate favorite color
    if (color === "") {
        colorError.textContent = "*Please select your favorite color.";
        isValid = false;
    }

    // Validate file
    if (!file) {
        fileError.textContent = "*Please upload a file.";
        isValid = false;
    } else {
        const fileExtension = file.name.split('.').pop().toLowerCase();
        const allowedExtensions = ['pdf', 'doc', 'docx'];
        if (!allowedExtensions.includes(fileExtension)) {
            fileError.textContent = "*Please upload a valid file in .pdf, .doc, or .docx format.";
            isValid = false;
        }
    }

    // Validate terms and conditions checkbox
    if (!combobox) {
        boxError.textContent = "*You must agree to the terms and conditions.";
        isValid = false;
    }

    // Return the result of validation
    return isValid; // If validation fails, prevent form submission
}
