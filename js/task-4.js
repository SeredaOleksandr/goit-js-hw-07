const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSabmit);

function handleSabmit(event) {
  event.preventDefault();

  const emailValue = event.target.email.value.trim();
  const passwordValue = event.target.password.value.trim();

  if (!emailValue || !passwordValue) {
    alert('All form fields must be filled in');
    return;
  }

  const info = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(info);
  event.target.reset();
}
