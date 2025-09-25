document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("orderPopup");
  const closeBtn = document.querySelector(".close-btn");
  const items = document.querySelectorAll(".item");
  const itemNameEl = document.getElementById("itemName");
  const orderForm = document.getElementById("orderForm");

  // open popup when clicking an item
  items.forEach(item => {
    item.addEventListener("click", () => {
      const name = item.getAttribute("data-name");
      itemNameEl.textContent = name;
      popup.style.display = "flex";
    });
  });

  // close popup
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // close when clicking outside
  window.addEventListener("click", e => {
    if (e.target === popup) popup.style.display = "none";
  });

  // handle form submission
  orderForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("customerName").value;
    const contact = document.getElementById("customerContact").value;
    const item = itemNameEl.textContent;

    
    const phone = "9779868223414";
    const message = `Hello, I would like to order:\n\nItem: ${item}\nName: ${name}\nContact: ${contact}`;
    const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(waLink, "_blank");
    popup.style.display = "none";
    orderForm.reset();
  });
});
