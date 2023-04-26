const nameRegex = /^[a-zA-Z ]{2,30}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function validateName() {
  const nameField = document.getElementById('name');
  const nameError = document.getElementById('nameError');
  if (nameField.value.trim() === '') {
    nameError.classList.remove('hidden');
    nameError.textContent = 'Name is required';
    return false;
  } else if (!nameRegex.test(nameField.value.trim())) {
    nameError.classList.remove('hidden');
    nameError.textContent = 'Name should contain only letters and spaces';
    return false;
  } else {
    nameError.classList.add('hidden');
    nameError.textContent = '';
    return true;
  }
}

function validateEmail() {
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  if (emailInput.value.trim() === '') {
    emailError.classList.remove('hidden');
    emailError.textContent = 'Email is required';
    return false;
  } else if (!emailRegex.test(emailInput.value.trim())) {
    emailError.innerHTML = '';
    emailError.classList.remove('hidden');
    emailError.textContent = 'Invalid email format';
    return false;
  } else {
    emailError.classList.add('hidden');
    emailError.textContent = '';
    return true;
  }
}

function validatePassword() {
  const passwordInput = document.getElementById('password');
  const passwordError = document.getElementById('passwordError');

  if (passwordInput.value.trim() === '') {
    passwordError.classList.remove('hidden');
    console.log('if');
    passwordError.textContent = 'Password is required';
    return false;
  } else if (!passwordRegex.test(passwordInput.value.trim())) {
    passwordError.classList.remove('hidden');
    console.log('else if');
    passwordError.textContent =
      'Password should contain at least 8 characters, including at least one number, one lowercase and one uppercase letter';
    return false;
  } else {
    console.log('else');
    passwordError.classList.add('hidden');
    passwordError.textContent = '';
    return true;
  }
}
function validateConfirmPassword() {
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const confirmPasswordError = document.getElementById('confirmPasswordError');
  const passwordInput = document.getElementById('password');

  if (confirmPasswordInput.value.trim() === '') {
    confirmPasswordError.classList.remove('hidden');
    confirmPasswordError.textContent = 'Please confirm your password';
    return false;
  } else if (passwordInput.value.trim() !== confirmPasswordInput.value.trim()) {
    confirmPasswordError.classList.remove('hidden');
    confirmPasswordError.textContent = 'Passwords do not match';
    return false;
  } else {
    confirmPasswordError.classList.add('hidden');
    confirmPasswordError.textContent = '';
    return true;
  }
}
export function validateForm() {
  const successfulSubmit = document.getElementById('successful-submit');
  let isValid = true;
  if (!validateName()) {
    isValid = false;
  }
  if (!validateEmail()) {
    isValid = false;
  }
  if (!validatePassword()) {
    isValid = false;
  }
  if (!validateConfirmPassword()) {
    isValid = false;
  }
  if (isValid) {
    successfulSubmit.classList.remove('hidden');
    document.getElementById('form').reset();
  }
  return isValid;
}

export const goToLogin = (e) => {
  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  const nameField = document.getElementById('nameField');
  const confirmPasswordInput = document.getElementById('confirmPasswordInput');
  const successfulSubmit = document.getElementById('successful-submit');
  successfulSubmit.classList.add('hidden');
  confirmPasswordInput.classList.add('hidden');
  nameField.classList.add('hidden');
  registerBtn.classList.add('bg-blue-500');
  registerBtn.classList.remove('bg-slate-400');
  loginBtn.classList.add('bg-slate-400');
  loginBtn.classList.remove('bg-blue-500');
  loginBtn.disabled = true;
  registerBtn.disabled = false;
};
export const goToRegister = (e) => {
  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  const nameField = document.getElementById('nameField');
  const confirmPasswordInput = document.getElementById('confirmPasswordInput');
  confirmPasswordInput.classList.remove('hidden');
  nameField.classList.remove('hidden');
  loginBtn.classList.add('bg-blue-500');
  loginBtn.classList.remove('bg-slate-400');
  registerBtn.classList.add('bg-slate-400');
  registerBtn.classList.remove('bg-blue-500');
  loginBtn.disabled = false;
  registerBtn.disabled = true;
};
