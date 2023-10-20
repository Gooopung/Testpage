const textElement = document.getElementById('text');

const text = [
  { content: '1 |', color: "white", fontSize: "20px" },
  { content: ' def ', color: "#F37626", fontSize: "20px" },
  { content: 'print_hi', color: "#F7DF1E", fontSize: "20px" },
  { content: '(name):', color: "white", fontSize: "20px" },
  { content: "\n2 |", color: "white", fontSize: "20px" },
  { content: "　　　　print", color: "#7F52FF", fontSize: "20px" },
  { content: '(', color: "white", fontSize: "20px" },
  { content: 'f"Welcome to', color: "#367C2B", fontSize: "20px" },
  { content: '{', color: "#F37626", fontSize: "20px" },
  { content: 'name', color: "white", fontSize: "20px" },
  { content: '}', color: "#F37626", fontSize: "20px" },
  { content: '"', color: "#367C2B", fontSize: "20px" },
  { content: ')', color: "white", fontSize: "20px" },
  { content: "\n3 |", color: "white", fontSize: "20px" },
  { content: "\n4 |", color: "white", fontSize: "20px" },
  { content: ' if ', color: "#F37626", fontSize: "20px" },
  { content: '__name__ ==', color: "white", fontSize: "20px" },
  { content: " '__main__'", color: "#367C2B", fontSize: "20px" },
  { content: ':', color: "white", fontSize: "20px" },
  { content: "\n5 |", color: "white", fontSize: "20px" },
  { content: '　　　　print_hi(', color: "white", fontSize: "20px" },
  { content: '"Gopung’s blog!"', color: "#367C2B", fontSize: "20px" },
  { content: ')', color: "white", fontSize: "20px" },
];

textElement.innerHTML = '';

const delays = [200, 300, 100, 200, 200, 300, 100, 200];
let charIndex = 0;
let partIndex = 0;

function typeText() {
  if (partIndex < text.length) {
    const span = document.createElement('span');
    span.innerText = text[partIndex].content.charAt(charIndex);
    span.style.color = text[partIndex].color;
    span.style.fontSize = text[partIndex].fontSize;
    textElement.appendChild(span);

    charIndex++;

    if (charIndex < text[partIndex].content.length) {
      setTimeout(typeText, delays[charIndex % delays.length]);
    } else {
      partIndex++;
      charIndex = 0;

      if (partIndex < text.length) {
        setTimeout(typeText, delays[charIndex % delays.length]);
      } else {
        setTimeout(fadeOutText, 1000);
      }
    }
  }
}

function fadeOutText() {
  const spans = textElement.querySelectorAll('span');
  function fadeOut(index) {
    if (index < spans.length) {
      spans[index].style.transition = 'opacity 1s';
      spans[index].style.opacity = '0';
      setTimeout(function() {
        fadeOut(index + 1);
      }, 10);
    } else {
      textElement.innerHTML = '';
      showWelcomeText();
    }
  }
  fadeOut(0);
}

function showWelcomeText() {
  const welcomeSpan = document.createElement('span');
  welcomeSpan.innerText = "-->　Welcome to\n 　　　 Gopung’s blog!";
  welcomeSpan.style.color = 'white';
  welcomeSpan.style.fontSize = '70px';
  welcomeSpan.style.opacity = '0';
  welcomeSpan.style.fontFamily = 'typingbold';
  welcomeSpan.style.transition = 'opacity 1s';

  textElement.appendChild(welcomeSpan);
  setTimeout(function() {
    welcomeSpan.style.opacity = '1';
  }, 500);
}

typeText();

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.botton');

    button.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector('#bottom');
        
        if (target) {
            const offset = target.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
    });
});