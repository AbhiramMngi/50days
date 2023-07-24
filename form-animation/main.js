const email = document.querySelector('#email');
const password = document.querySelector('#password');
const emailSpans = document.querySelectorAll('#email-label span');
const emailLabel = document.querySelector('#email-label');
const pwSpans = document.querySelectorAll('#password-label span');
const pwLabel = document.querySelector('#password-label');

email.addEventListener('click', () => {
  emailSpans.forEach((span) => {
    if (document.activeElement !== email) {
      span.classList.remove('clicked');
      email.classList.remove('clicked');
    }
    else {
      span.classList.add('clicked');
      email.classList.add('clicked');
    }
  })
  pwSpans.forEach((span) => {
    if (document.activeElement !== password)  {
      span.classList.remove('clicked');
      password.classList.remove('clicked');
    }
    else {
      span.classList.add('clicked');
      email.classList.add('clicked');
    }
  })
  console.log(email.classList);
});

password.addEventListener('click', () => {
  pwSpans.forEach((span) => {
    if (document.activeElement !== password) {
      span.classList.remove('clicked');
      password.classList.remove('clicked');
    }
    else {
      span.classList.add('clicked');
      password.classList.add('clicked');
    }
  })
  emailSpans.forEach((span) => {
    if (document.activeElement !== email)  {
      span.classList.remove('clicked');
      email.classList.remove('clicked');
    }
    else {
      span.classList.add('clicked');
      email.classList.add('clicked');
    }
  })
});

email.addEventListener('keyup', () => {
  if (email.value.trim('') == '') emailLabel.style.display = 'flex';
  else emailLabel.style.display = 'none';
});

password.addEventListener('keyup', () => {
  if (password.value.trim('') == '') pwLabel.style.display = 'flex';
  else pwLabel.style.display = 'none';
});