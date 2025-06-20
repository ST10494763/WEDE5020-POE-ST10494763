// Function to change the title text
function changeText() {
    document.getElementById("title").textContent = "Welcome to the Ultimate Burger Experience!";
}

// Function to alert order confirmation
function orderBurger() {
    alert("Thank you! Your burger is being prepared.");
}

// Function to reveal the special offer
function showSpecial() {
    document.getElementById("special").classList.remove("hidden");
}
// Toggle navigation on small screens
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

// Display content based on button
function navigate(section) {
    const content = document.getElementById("content");
    switch (section) {
        case 'index':
            content.innerHTML = "🏠 Welcome to Burger House!";
            break;
        case 'menu':
            content.innerHTML = "📋 Check out our delicious burger menu!";
            break;
        case 'product':
            content.innerHTML = "🍔 Our products are made with love and 100% beef.";
            break;
        case 'contact':
            content.innerHTML = "📞 Contact us at contact@burgerhouse.com or visit us!";
            break;
        default:
            content.innerHTML = "Welcome to Burger House!";
    }

    // Hide menu after clicking (for mobile)
    document.getElementById("navLinks").classList.remove("show");
}
const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

thumbnails.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = 'none';
  }
});

const burgers = [
  { name: "Cheesy Beast", price: "R79", description: "Loaded with triple cheese and grilled beef." },
  { name: "Peri-Peri Chicken", price: "R69", description: "Spicy chicken fillet with homemade sauce." },
  { name: "Veggie Delight", price: "R65", description: "Grilled mushrooms and halloumi, no meat needed!" },
  { name: "Classic Double", price: "R75", description: "Double patty, classic toppings, no fuss." }
    { name: "Triple Double", price: "R75", description: "Triple  patty, classic toppings, no fuss." }
];


const burgerList = document.getElementById("burgerList");
const searchInput = document.getElementById("searchInput");

// Function to render burger items
function displayBurgers(filtered = burgers) {
  burgerList.innerHTML = filtered.map(burger => `
    <div class="burger">
      <h3>${burger.name}</h3>
      <p>${burger.description}</p>
      <strong>${burger.price}</strong>
    </div>
  `).join('');
}

// Filter burgers based on search
searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = burgers.filter(burger =>
    burger.name.toLowerCase().includes(keyword) ||
    burger.description.toLowerCase().includes(keyword)
  );
  displayBurgers(filtered);
});

// Load all burgers on page load
document.addEventListener("DOMContentLoaded", () => {
  displayBurgers();
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("GoodBurger site is up and grilling!");
});

const drinksData = [
  {
    title: "Cocktails",
    description: "Juicy grilled beef patty, cheddar cheese, lettuce, tomato, and our special GoodSauce."
  },
  {
    title: "Coke Slashy",
    description: "Grilled veggie patty with avocado, pickles, fresh greens, and vegan mayo."
  },
  {
    title: "Slushes",
    description: "Double beef patties, melted cheddar, and smoky sauce stacked sky high!"
  },
  {
    title: "berry lemonade",
    description: "A beef patty smothered in three kinds of cheese for full-on dairy devotion."
  },
  {
    title: "fanta slushy",
    description: "Kick things up with jalapeños, spicy aioli, and pepper jack cheese."
  },
  {
    title: "BBQ Boss",
    description: "A smoky BBQ classic with caramelized onions and onion rings."
  }
];

function showInfo(index) {
  document.getElementById("Drinks-title").textContent = drinksData[index].title;
  document.getElementById("Drinks-description").textContent = drinksData[index].description;
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  const map = L.map('map').setView([-25.4707, 30.9752], 17); // Approx. center of Mostert Street

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([-25.4707, 30.9752]).addTo(map)
  .bindPopup('Welcome to Mostert Street!')
  .openPopup();

// Optional: Add a circle around a nearby point of interest
L.circle([-25.471, 30.9755], {
  color: 'orange',
  fillColor: '#f39c12',
  fillOpacity: 0.5,
  radius: 80
}).addTo(map).bindPopup('Nearby attraction!');