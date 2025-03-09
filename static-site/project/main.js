// Products data
const products = [
  {
    name: "T-Virus Vaccine",
    description: "Advanced protection against biohazard threats",
    image: "https://static.wikia.nocookie.net/residentevil/images/7/7c/Anti-virus_base.png/revision/latest/scale-to-width-down/350"
  },
  {
    name: "First Aid Spray",
    description: "Immediate medical treatment for injuries",
    image: "https://static.wikia.nocookie.net/residentevil/images/8/87/RE2_remake_First_Aid_Spray.png/revision/latest/scale-to-width-down/350"
  },
  {
    name: "Green Herb",
    description: "Natural healing compound",
    image: "https://static.wikia.nocookie.net/residentevil/images/7/7c/RE2_remake_Green_Herb.png/revision/latest/scale-to-width-down/350"
  }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  // Initialize products
  displayProducts();
  
  // Add scroll animation
  addScrollAnimation();
  
  // Add button hover effect
  const learnMoreBtn = document.getElementById('learnMore');
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener('mouseenter', () => {
      learnMoreBtn.style.transform = 'scale(1.1)';
    });
    learnMoreBtn.addEventListener('mouseleave', () => {
      learnMoreBtn.style.transform = 'scale(1)';
    });
  }
});

// Display products
function displayProducts() {
  const productsList = document.getElementById('productsList');
  if (!productsList) return;

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'bio-card';
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-contain mb-4">
      <h3 class="text-xl font-bold mb-2">${product.name}</h3>
      <p>${product.description}</p>
    `;
    productsList.appendChild(productCard);
  });
}

// Add scroll animation for sections
function addScrollAnimation() {
  const sections = document.querySelectorAll('section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
  });
}