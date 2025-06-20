// Functionality for toggling SEO list visibility
document.addEventListener("DOMContentLoaded", () => {
  const seoList = document.getElementById("seo-list");
  const hideBtn = document.getElementById("hide-btn");
  const showBtn = document.getElementById("show-btn");

  hideBtn.addEventListener("click", () => {
    seoList.style.display = "none";
    hideBtn.style.display = "none";
    showBtn.style.display = "inline-block";
  });

  showBtn.addEventListener("click", () => {
    seoList.style.display = "block";
    showBtn.style.display = "none";
    hideBtn.style.display = "inline-block";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("optimize-btn");
  const status = document.getElementById("status-message");

  button.addEventListener("click", () => {
    status.textContent = "Grilling your site for performance and security... 🍔";
    setTimeout(() => {
      status.textContent = "🔥 All done! GrillBot.txt and SizzleMap.xml deployed. Your site is toasty-fast and secure!";
    }, 1500);
  });
});

document.getElementById("enquiryForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const category = document.getElementById("category").value;
  const name = document.getElementById("name").value;
  const response = `Thanks, ${name}. Your enquiry for "${category}" has been received. We

