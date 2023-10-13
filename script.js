const nav = document.querySelector('#nav');
const navToggleBtn = document.querySelector('#navToggleBtn');
const navLinks = document.querySelectorAll('nav .nav-link');

navToggleBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});
function sendEmail() {
Email.send({
  Host: 'smtp.elasticemail.com',
  Username: 'username',
  Password: 'password',
  To: 'them@website.com',
  From: 'you@isp.com',
  Subject: 'This is the subject',
  Body: 'And this is the body',
}).then((message) => alert(message));
}