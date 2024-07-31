document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    // Functional approach
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPassword = (password) => {
        return password.length > 8;
    };

    const validateLoginFunctional = (email, password) => {
        if (!email || !password) {
            return "Email and password fields cannot be empty.";
        }
        if (!isValidEmail(email)) {
            return "Invalid email address.";
        }
        if (!isValidPassword(password)) {
            return "Password must be more than 8 characters.";
        }
        return "Login successful!";
    };
    
    // OOP approach
    class LoginValidator {
        constructor(email, password) {
            this.email = email;
            this.password = password;
        }

        isValidEmail() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(this.email);
        }

        isValidPassword() {
            return this.password.length > 8;
        }

        validate() {
            if (!this.email || !this.password) {
                return "Email and password fields cannot be empty.";
            }
            if (!this.isValidEmail()) {
                return "Invalid email address.";
            }
            if (!this.isValidPassword()) {
                return "Password must be more than 8 characters.";
            }
            return "Login successful!";
        }
    }
    
    // Procedural approach
    function validateLoginProcedural(email, password) {
        if (!email || !password) {
            return "Email and password fields cannot be empty.";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(email);

        const isValidPassword = password.length > 8;

        if (!isValidEmail) {
            return "Invalid email address.";
        }
        if (!isValidPassword) {
            return "Password must be more than 8 characters.";
        }
        return "Login successful!";
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = form.email.value;
        const password = form.password.value;

        // Choose one validation method to use:
        // const result = validateLoginFunctional(email, password);
        // const validator = new LoginValidator(email, password);
        // const result = validator.validate();
        const result = validateLoginProcedural(email, password);

        messageDiv.textContent = result;
        if (result === "Login successful!") {
            messageDiv.style.color = "green";
        } else {
            messageDiv.style.color = "red";
        }
    });
    
});
