function submitform() {
    let isValid = true;

    // Validate name

    const name = document.getElementById('name').value;
    let nameErrors = document.getElementById('name_err');
    function name_val(name){
        for(let i=0;i<name.length;i++){
            if (name.length < 4 || !(isNaN(name[i]))) {
                nameErrors.textContent = "*Full Name must be at least 4 characters and should not contain numbers.";
                isValid = false;
            }
            else{
                nameErrors.textContent = "";
                return true
            }
            return isValid;
        }

    }
    if(!name_val(name)){
        isValid=false;
    }
    

    // Validate email

    const email = document.getElementById('fmail').value;
    let emailError = document.getElementById('email_err');
    function val_email(email){
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
        else{
            emailError.textContent = "";
            return true
        }
        return isValid;
    
    }
    if(!val_email(email)){ // calling a function
        isValid=false;
    }
   

    // Validate phone

    const phone = document.getElementById('phone').value;
    let phoneError = document.getElementById('phone_err');
    function val_phone(phone){
        if (!(phone.length === 10 && !isNaN(phone))) {
            phoneError.textContent = "*Phone number must be exactly 10 digits.";
            isValid = false;
        }
        else{
            phoneError.textContent = "";
            return true
        }
        return isValid;
    
    }
    if(!val_phone(phone)){
        isValid=false;
    }


    // Validate password

    const pwd = document.getElementById('pwd').value;
    function password(pwd){
        let upper=false;
        let lower=false;
        let number=false;
        let passError = document.getElementById('pass_err');

        if(pwd.length>=8){
            for(let i=0;i<pwd.length;i++){
                if(pwd[i] >= 'A' && pwd[i] <= 'Z'){
                    upper=true;
                }
                else if(pwd[i] >= 'a' && pwd[i] <= 'z'){
                    lower=true;
                }
                else if(pwd[i] >= '0' && pwd[i] <= '1'){
                    number=true;
                }
                if(upper && lower && number){
                    break;
                }
            }
        }
        if (!upper || !lower || !number) {
            passError.textContent = "*Password must be at least 8 characters and contain an uppercase letter, a lowercase letter, and a number.";
            isValid = false;
        }
        else {
            passError.textContent = "";  // Clear error message if validation passes
            return true;
        }
    
        return isValid;
    }
    if(!password(pwd)){
        isValid=false;
    }



    // Validate gender

    const radiobtn = document.getElementsByName('gender');
    let genderError = document.getElementById('gender_err');

    function val_gen(radiobtn){
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
            else{
                genderError.textContent = "";
                return true
            }
            return isValid;
    }

    if(!val_gen(radiobtn)){
        isValid=false;
    }
   


    // Validate favorite color

    const color = document.getElementById('colors').value;
    let colorError = document.getElementById('color_err');
    function fav(color){
        if (color === "") {
            colorError.textContent = "*Please select your favorite color.";
            isValid = false;
        }
        else{
            colorError.textContent = "";
            return true
        }
        return isValid;
}
    
    
    if(!fav(color)){
        isValid=false;
    }


    // Validate file


    const fileInput = document.getElementById('resume');
    const file = fileInput.files[0];
    
    let fileError = document.getElementById('file_err');
    function val_file(file){
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
            else{
                fileError.textContent = "";
                return true
            }
            return isValid;
    }
        }
    
    if(!val_file(file)){
        isValid=false;
    }



    // Validate terms and conditions checkbox
    
    const combobox = document.getElementById('box').checked;
    let boxError = document.getElementById('terms_err');
    function val_box(combobox){
        if (!combobox) {
            boxError.textContent = "*You must agree to the terms and conditions.";
            isValid = false;
        }
        else{
            boxError.textContent = "";
            return true
        }
        return isValid;
    }
    if(!val_box(combobox)){
        isValid=false;
    }

    // Return the result of validation
    return isValid; // If validation fails, prevent form submission
}
