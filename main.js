let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

window.onload = () => {
  const cartItemsContainer = document.getElementById("cart-items");
  if (cartItemsContainer) {
    cartItemsContainer.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
      total += item.price;
      cartItemsContainer.innerHTML += `
        <div class="p-4 bg-white rounded shadow flex justify-between items-center">
          <div>
            <h3 class="text-lg font-semibold">${item.name}</h3>
            <p class="text-gray-500">₹${item.price}</p>
          </div>
          <button onclick="removeItem(${index})" class="text-red-500">Remove</button>
        </div>`;
    });
    localStorage.setItem("total", total);
  }
};

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
function signup() {
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;
  
    if (!username || !password) {
      alert("Please fill in all fields.");
      return;
    }
  
    const users = JSON.parse(localStorage.getItem("users") || "{}");
    if (users[username]) {
      alert("Username already exists.");
      return;
    }
  
    users[username] = password;
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful! Please log in.");
    window.location.href = "login.html";
  }
  
  function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
  
    const users = JSON.parse(localStorage.getItem("users") || "{}");
    if (users[username] && users[username] === password) {
      localStorage.setItem("user", username);
      window.location.href = "index.html";
    } else {
      alert("Invalid username or password.");
    }
  }
  
  function logout() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
  }
  