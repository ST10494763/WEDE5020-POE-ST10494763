const burgerData = [
  {
    title: "Double burger",
    description: "Juicy grilled beef patty, cheddar cheese, lettuce, tomato, and our special GoodSauce."
  },
  {
    title: "Double Chicken burger",
    description: "Grilled veggie patty with avocado, pickles, fresh greens, and vegan mayo."
  },
  {
    title: "Triple Trouble",
    description: "Double beef patties, melted cheddar, and smoky sauce stacked sky high!"
  },
  {
    title: "Cheesy Overload",
    description: "A beef patty smothered in three kinds of cheese for full-on dairy devotion."
  },
  {
    title: "Spicy Flame",
    description: "Kick things up with jalapeños, spicy aioli, and pepper jack cheese."
  },
  {
    title: "BBQ Boss",
    description: "A smoky BBQ classic with caramelized onions and onion rings."
  }
];

function showInfo(index) {
  document.getElementById("burger-title").textContent = burgerData[index].title;
  document.getElementById("burger-description").textContent = burgerData[index].description;
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
const questions = document.querySelectorAll('.faq-question');

questions.forEach(q => {
  q.addEventListener('click', () => {
    const currentlyActive = document.querySelector('.faq-question.active');
    if (currentlyActive && currentlyActive !== q) {
      currentlyActive.classList.remove('active');
      currentlyActive.nextElementSibling.style.maxHeight = null;
      currentlyActive.querySelector('span').textContent = '+';
    }

    q.classList.toggle('active');
    const answer = q.nextElementSibling;
    if (q.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      q.querySelector('span').textContent = '−';
    } else {
      answer.style.maxHeight = null;
      q.querySelector('span').textContent = '+';
    }
  });
});