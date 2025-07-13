function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
  updateCartCount();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const countElement = document.getElementById("cart-count");
  if (countElement) {
    countElement.innerText = cart.length;
  }
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
  updateCartCount();
}

function displayCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");

  if (!container || !totalElement) return;

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    totalElement.innerText = "";
    return;
  }

  let total = 0;
  container.innerHTML = "";
  cart.forEach((item, index) => {
    total += item.price;
    container.innerHTML += `
      <div class="cart-item">
        <p><strong>${item.name}</strong> - ₹${item.price}</p>
        <button onclick="removeFromCart(${index})" class="remove-btn">Remove</button>
      </div>
    `;
  });

  totalElement.innerText = `Total: ₹${total}`;
}

window.onload = () => {
  displayCart();
  updateCartCount();
};
