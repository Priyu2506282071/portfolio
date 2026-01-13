const typewriterText = document.getElementById('typewriter-text');
const textToType = 'Welcome to my Portfolio!';
let charIndex = 0;

function typeText() {
  if (charIndex < textToType.length) {
    typewriterText.textContent += textToType[charIndex];
    charIndex++;
    setTimeout(typeText, 100); 
  } else {
    setTimeout(function() {
      charIndex = 0;
      typewriterText.textContent = '';
      typeText();
    }, 2000); 
  }
}

typeText();

document.getElementById('hire-me-button').addEventListener('click', function() {
  const link = document.createElement('a');
  link.href = 'PRIYADHARSHINI.S RESUME.pdf';
  link.download = 'PRIYADHARSHINI.S RESUME.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
