// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')


function downloadAndRedirect() {
  // Perform the download
  var downloadLink = document.createElement('a');
  downloadLink.href = 'Ankit_Sharma_Resume.pdf'; // Replace with your file URL
  downloadLink.download = 'Ankit_Sharma_Resume.pdf'; // Replace with your desired filename
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);

  // Redirect to another link in a new tab
  window.open('https://drive.google.com/file/d/1Alg03VkCQ8VfXwcH49cw54mN0pFFVpF0/view?usp=sharing', '_blank'); // Replace with your desired redirect URL
}

// Typewriter effect
function startTypewriter() {
  var typewriterElement = document.getElementById('typewriter');
  typewriterElement.style.animation = 'typewriter 3s steps(30) forwards'; // Start the typewriter animation
}

setTimeout(startTypewriter, 1000);

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

function sendMail(){
  var params = {
    name:document.getElementById("name").value,
    email:document.getElementById("email").value,
    message:document.getElementById("message").value
  }


const serviceId='service_uzy0vb5'
const templateId='template_slbp10r'

emailjs.send(serviceId,templateId,params).then((res) => {
  document.getElementById("name").value = '';
  document.getElementById("email").value = '';
  document.getElementById("message").value = '';
  console.log(res);
  alert("your message sent succesfully!")
}).catch((err) => {console.log(err)});

}


//<form action="#" class="contact__form"></form>