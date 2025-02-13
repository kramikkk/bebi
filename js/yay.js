const title = document.querySelector('.title');
const text = 'Yay! Happy Valentines Day My Love <3'.split('');
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>`;
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'></span>`;
  }
}

// Add animation delay to each letter
const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Random delay between 0 to 3 seconds
  element.style.animation = `fadeIn 1s ease-in-out ${randomDelay}s forwards`;
});

// Function to create hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💚"; // Green heart emoji
  document.body.appendChild(heart);

  // Random positioning and animation
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.animationDuration = 2 + Math.random() * 3 + "s"; // Between 2s and 5s
  heart.style.opacity = Math.random(); // Random opacity

  setTimeout(() => {
    heart.remove(); // Remove heart after animation ends
  }, 5000);
}

// Generate hearts every 300ms
setInterval(createHeart, 300);

// Add CSS styles dynamically for animations
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
  }

  .heart {
    position: absolute;
    top: -50px;
    font-size: 2rem;
    animation: fall linear infinite;
  }

  @keyframes fall {
    to {
      transform: translateY(100vh);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
