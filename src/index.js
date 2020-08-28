let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function () {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();

const data = [
  {
    nombre: "Sensor Termico",
    desc: "Este sensor termico sirve para realizar mediciones, etc, etc...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRakyTTe29wQQ2nOEUEYyaOhJwGqMuKI_qyCw&usqp=CAU",
    id: 1,
    price: "20.000",
  },
  {
    nombre: "Sensor Foto Electrico",
    desc: "Este sensor electrico sirve para realizar fotos, mapeos, etc, etc...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRakyTTe29wQQ2nOEUEYyaOhJwGqMuKI_qyCw&usqp=CAU",
    id: 2,
    price: "30.000",
  },
  {
    nombre: "Sensor Optico",
    desc: "Este sensor optico sirve para realizar mediciones, etc, etc...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRakyTTe29wQQ2nOEUEYyaOhJwGqMuKI_qyCw&usqp=CAU",
    id: 3,
    price: "25.000",
  },
  {
    nombre: "Sensor de Proximidad",
    desc: "Este sensor de proximidad sirve para realizar mediciones de elementos proximos, etc, etc...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRakyTTe29wQQ2nOEUEYyaOhJwGqMuKI_qyCw&usqp=CAU",
    id: 4,
    price: "18.500",
  },
  {
    nombre: "Sensor Infrarrojo",
    desc: "Este sensor infrarrojo sirve para realizar cosas, etc, etc...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRakyTTe29wQQ2nOEUEYyaOhJwGqMuKI_qyCw&usqp=CAU",
    id: 5,
    price: "32.750",
  },
  {
    nombre: "Sensor Infrarrojo",
    desc: "Este sensor termico sirve para realizmediciones, etc, etc...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRakyTTe29wQQ2nOEUEYyaOhJwGqMuKI_qyCw&usqp=CAU",
    id: 6,
    price: "21.150",
  },
  {
    nombre: "Sensor Infrarrojo",
    desc: "Este sensor termico sirve para realizar mediciones, etc, etc...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRakyTTe29wQQ2nOEUEYyaOhJwGqMuKI_qyCw&usqp=CAU",
    id: 7,
    price: "32.000",
  },
  {
    nombre: "Sensor Termoelectrico",
    desc: "Este sensor termoelectrico sirve para realizar mediciones tercmicas, electricas, etc, etc...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRakyTTe29wQQ2nOEUEYyaOhJwGqMuKI_qyCw&usqp=CAU",
    id: 8,
    price: "34.520",
  },
];
localStorage.setItem("productos", JSON.stringify(data));
const response = JSON.parse(localStorage.getItem("productos"));

document.getElementById("clothes").addEventListener("click", () => {
  const div = document.getElementById("catalog");
  const ul = document.createElement("ul");
  if (div.classList.contains("noVisible")) {
    div.classList.remove("noVisible");
    div.classList.add("visible");
    div.innerHTML = `<li>Bags</li>
  <li>Dresses</li>
  <li>Shoes</li>
  <li>shirts</li>
  <li>trousers</li>
  <li>skirts</li>`;
    div.appendChild(ul);
  } else {
    div.classList.remove("visible");
    div.classList.add("noVisible");
  }
});
document.getElementById("electrics").addEventListener("click", () => {
  const div = document.getElementById("catalog1");
  const ul = document.createElement("ul");
  if (div.classList.contains("noVisible")) {
    div.classList.remove("noVisible");
    div.classList.add("visible");
    div.innerHTML = `<li>Bags</li>
  <li>Dresses</li>
  <li>Shoes</li>
  <li>shirts</li>
  <li>trousers</li>
  <li>skirts</li>`;
    div.appendChild(ul);
  } else {
    div.classList.remove("visible");
    div.classList.add("noVisible");
  }
});
document.getElementById("house").addEventListener("click", () => {
  const div = document.getElementById("catalog2");
  const ul = document.createElement("ul");
  if (div.classList.contains("noVisible")) {
    div.classList.remove("noVisible");
    div.classList.add("visible");
    div.innerHTML = `<li>Bags</li>
  <li>Dresses</li>
  <li>Shoes</li>
  <li>shirts</li>
  <li>trousers</li>
  <li>skirts</li>`;
    div.appendChild(ul);
  } else {
    div.classList.remove("visible");
    div.classList.add("noVisible");
  }
});
const abrirModal = (e) => {
  console.log(e.id)
 const result =  response.find(element => element.id == e.id)
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  const content= document.getElementById('object_description')
  content.innerHTML =`${result.desc}`
};
const cerrarModal = () =>{
  var span = document.getElementsByClassName("close")[0];
  var modal = document.getElementById("myModal");
  span.onclick = function() {
    modal.style.display = "none";
  }
}

window.onload = () => {
  let div = document.getElementById("products");

  for (i = 0; i < 8; i++) {
    const int = document.createElement("div");
    int.classList.add("col-sm");
    int.innerHTML = `<img src='${response[i].image}'>
                <h2><a onclick='abrirModal(this)' class='ref' id='${response[i].id}' >${response[i].nombre}</a></h2>
                <p>${response[i].price}</p>
                <button id='${response[i].id}'><a href='./product.html'>COMPRAR</a></button>`;
    div.appendChild(int);
  }
  const clas = document.getElementsByClassName('ref')
 const id =  [...clas].map(e => e.id)
};
