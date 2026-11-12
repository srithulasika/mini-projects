const form = document.querySelector("#reg");

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");

// Email validation
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Phone validation
function isValidPhone(phone) {
  return /^[6-9][0-9]{9}$/.test(phone);
}

// Show error message
function showError(input, message) {
  const error = document.querySelector("#" + input.id + "-error");

  error.textContent = message;

  input.classList.toggle("invalid", message !== "");
  input.classList.toggle("valid", message === "");
}

// Validate all fields
function validate() {
  let ok = true;

  // Name
  if (name.value.trim().length < 3) {
    showError(name, "Name needs at least 3 letters");
    ok = false;
  } else {
    showError(name, "");
  }

  // Email
  if (!isValidEmail(email.value)) {
    showError(email, "Enter a valid email");
    ok = false;
  } else {
    showError(email, "");
  }

  // Phone
  if (!isValidPhone(phone.value)) {
    showError(phone, "Enter a 10-digit mobile number");
    ok = false;
  } else {
    showError(phone, "");
  }

  // Password
  if (password.value.length < 8) {
    showError(password, "Password needs 8+ characters");
    ok = false;
  } else {
    showError(password, "");
  }

  return ok;
}

// Form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validate()) {
    document.querySelector("#success").textContent =
      "Registration Successful, " + name.value + "!";

    form.reset();
  }
});
