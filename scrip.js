// ---- Carrito ----
let carrito = [];
let total = 0;

function agregarCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  lista.innerHTML = "";
  
  carrito.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio} MXN`;
    lista.appendChild(li);
  });

  document.getElementById("total").textContent = total;
}

// ---- Carrusel ----
let slideIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = slides.children.length;

function moverSlide(n) {
  slideIndex = (slideIndex + n + totalSlides) % totalSlides;
  slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

setInterval(() => moverSlide(1), 5000);

// ---- Menú hamburguesa ----
function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}
