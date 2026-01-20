// Form Validation Script - Updated for Form.html

// Validate Full Name
function validateFullName(name) {
  const nameRegex = /^[a-zA-Z\s]{3,}$/;
  return nameRegex.test(name);
}

// Validate Email
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Validate Password
function validatePassword(password) {
  if (password.length < 8) {
    return false;
  }
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  return hasUpperCase && hasLowerCase && hasNumber;
}

// Validate Age
function validateAge(age) {
  const ageNum = parseInt(age);
  return !isNaN(ageNum) && ageNum >= 18 && ageNum <= 120;
}

// Validate Gender
function validateGender(gender) {
  const validGenders = ['Male', 'Female', 'Others'];
  return validGenders.includes(gender);
}

// Main form validation function
function validateForm() {
  let isValid = true;
  let errors = [];

  // Get form input values using attribute selectors (since HTML uses name attributes)
  const fullNameInput = document.querySelector('input[name="txt"]');
  const emailInput = document.querySelector('input[name="eml"]');
  const passwordInput = document.querySelector('input[name="pass"]');
  const ageInputs = document.querySelectorAll('input[type="number"]');
  const genderSelect = document.querySelector('select[name="Gender"]');
  const termsCheckbox = document.querySelector('input[type="checkbox"]');

  // Get values
  const fullName = fullNameInput ? fullNameInput.value.trim() : '';
  const email = emailInput ? emailInput.value.trim() : '';
  const password = passwordInput ? passwordInput.value.trim() : '';
  const ageValue = ageInputs.length > 0 ? ageInputs[0].value.trim() : '';
  const gender = genderSelect ? genderSelect.value : '';
  const termsAccepted = termsCheckbox ? termsCheckbox.checked : false;

  // Validate Full Name
  if (fullName === "") {
    errors.push("Full Name is required");
    isValid = false;
  } else if (!validateFullName(fullName)) {
    errors.push("Full Name must be at least 3 characters and contain only letters");
    isValid = false;
  }

  // Validate Email
  if (email === "") {
    errors.push("Email is required");
    isValid = false;
  } else if (!validateEmail(email)) {
    errors.push("Invalid email format");
    isValid = false;
  }

  // Validate Password
  if (password === "") {
    errors.push("Password is required");
    isValid = false;
  } else if (!validatePassword(password)) {
    errors.push("Password must be at least 8 characters with uppercase, lowercase, and numbers");
    isValid = false;
  }

  // Validate Age
  if (ageValue === "") {
    errors.push("Age is required");
    isValid = false;
  } else if (!validateAge(ageValue)) {
    errors.push("You must be at least 18 years old");
    isValid = false;
  }

  // Validate Gender
  if (gender === "" || gender === "Male" && !gender) {
    errors.push("Please select a gender");
    isValid = false;
  }

  // Validate Terms & Conditions
  if (!termsAccepted) {
    errors.push("You must agree to the terms and conditions");
    isValid = false;
  }

  if (!isValid) {
    alert("Please fix the following errors:\n\n" + errors.join("\n"));
  }

  return isValid;
}

// Real-time validation for Full Name
function validateFullNameRealTime() {
  const fullNameInput = document.querySelector('input[name="txt"]');
  if (!fullNameInput) return;

  const fullName = fullNameInput.value.trim();

  if (fullName && !validateFullName(fullName)) {
    fullNameInput.style.borderColor = 'red';
    fullNameInput.style.borderWidth = '2px';
  } else if (fullName) {
    fullNameInput.style.borderColor = 'green';
    fullNameInput.style.borderWidth = '2px';
  } else {
    fullNameInput.style.borderColor = '';
    fullNameInput.style.borderWidth = '';
  }
}

// Real-time validation for Email
function validateEmailRealTime() {
  const emailInput = document.querySelector('input[name="eml"]');
  if (!emailInput) return;

  const email = emailInput.value.trim();

  if (email && !validateEmail(email)) {
    emailInput.style.borderColor = 'red';
    emailInput.style.borderWidth = '2px';
  } else if (email) {
    emailInput.style.borderColor = 'green';
    emailInput.style.borderWidth = '2px';
  } else {
    emailInput.style.borderColor = '';
    emailInput.style.borderWidth = '';
  }
}

// Real-time validation for Password
function validatePasswordRealTime() {
  const passwordInput = document.querySelector('input[name="pass"]');
  if (!passwordInput) return;

  const password = passwordInput.value.trim();

  if (password && !validatePassword(password)) {
    passwordInput.style.borderColor = 'red';
    passwordInput.style.borderWidth = '2px';
  } else if (password) {
    passwordInput.style.borderColor = 'green';
    passwordInput.style.borderWidth = '2px';
  } else {
    passwordInput.style.borderColor = '';
    passwordInput.style.borderWidth = '';
  }
}

// Real-time validation for Age
function validateAgeRealTime() {
  const ageInputs = document.querySelectorAll('input[type="number"]');
  const ageInput = ageInputs.length > 0 ? ageInputs[0] : null;

  if (!ageInput) return;

  const age = ageInput.value.trim();

  if (age && !validateAge(age)) {
    ageInput.style.borderColor = 'red';
    ageInput.style.borderWidth = '2px';
  } else if (age) {
    ageInput.style.borderColor = 'green';
    ageInput.style.borderWidth = '2px';
  } else {
    ageInput.style.borderColor = '';
    ageInput.style.borderWidth = '';
  }
}

// Initialize event listeners on DOM load
document.addEventListener('DOMContentLoaded', function () {
  const fullNameInput = document.querySelector('input[name="txt"]');
  const emailInput = document.querySelector('input[name="eml"]');
  const passwordInput = document.querySelector('input[name="pass"]');
  const ageInputs = document.querySelectorAll('input[type="number"]');
  const ageInput = ageInputs.length > 0 ? ageInputs[0] : null;
  const registerButton = document.getElementById('Register');
  const cancelButton = document.getElementById('cancel');

  // Add real-time validation listeners
  if (fullNameInput) {
    fullNameInput.addEventListener('input', validateFullNameRealTime);
    fullNameInput.addEventListener('blur', validateFullNameRealTime);
  }

  if (emailInput) {
    emailInput.addEventListener('input', validateEmailRealTime);
    emailInput.addEventListener('blur', validateEmailRealTime);
  }

  if (passwordInput) {
    passwordInput.addEventListener('input', validatePasswordRealTime);
    passwordInput.addEventListener('blur', validatePasswordRealTime);
  }

  if (ageInput) {
    ageInput.addEventListener('input', validateAgeRealTime);
    ageInput.addEventListener('blur', validateAgeRealTime);
  }

  // Register button handler
  if (registerButton) {
    registerButton.addEventListener('click', function (e) {
      e.preventDefault();
      if (validateForm()) {
        alert
        window.location.href = 'Random.html';
        // Here you can add code to send data to server
      }
    });
  }

  // Cancel button handler
  if (cancelButton) {
    cancelButton.addEventListener('click', function (e) {
      e.preventDefault();
      if (confirm('Are you sure you want to cancel?')) {
        // Clear all form fields
        document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], input[type="number"]').forEach(input => {
          input.value = '';
          input.style.borderColor = '';
          input.style.borderWidth = '';
        });
        document.querySelector('input[type="checkbox"]').checked = false;
        document.querySelector('select[name="Gender"]').selectedIndex = 0;
      }
    });
  }
});