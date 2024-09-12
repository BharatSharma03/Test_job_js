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
    for(let i=0;i<name.length;i++){
        if (name.length < 4 || !isNaN(name[i])) {
            nameErrors.textContent = "*Full Name must be at least 4 characters and should not contain numbers.";
            isValid = false;
        }
    }

    // Validate email
    let at_the_rate=0;
    let dot=false;
    for(let i=0;i<email.length;i++){
        if(email[i]==='@' ){
            at_the_rate++;
        }
        if(i===0 || i===email.length-1){
            if (email[i]=='@' || email[i]=='.') {
                isValid=false;
            }
            
        }

        if(at_the_rate==1 && email[i]=='.' && i>0){
            dot=true;
        }
        

    }
    if (at_the_rate !==1 || dot<1) {
        emailError.textContent = "*Please enter a valid email address.";
        isValid = false;
    }

    // Validate phone
    if (!(phone.length === 10 && !isNaN(phone))) {
        phoneError.textContent = "*Phone number must be exactly 10 digits.";
        isValid = false;
    }

    // Validate password
    let upper=0;
    let lower=0;
    let letterup=false;
    if(pwd.length>=8){
        for(let i=0;i<pwd.length;i++){
            if((pwd[i] >= 'A' && pwd[i] <= 'Z')){
                upper++;
                if(upper>2){
                    letterup=false;
                    break;
                }
            }
            else if((pwd[i] >= 'a' && pwd[i] <= 'z')){
                lower++;
                if(lower>2){
                    letterup=false;
                    break;
                }

        
        }
    }
    } 
    if (upper !==1 && lower !==1){
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
