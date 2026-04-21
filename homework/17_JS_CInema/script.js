const cinema = document.getElementById("cinema");
const count = document.getElementById("count");
const total = document.getElementById("total");
const Btn = document.getElementById("bookBtn");

const rows = 6;
const place = 8;
const price = 2000;

const occupiedSeatsIndex = [2, 5, 10, 15, 20];

let selectedSeats = [];

for (let i = 0; i < rows * place; i++) {
  const seat = document.createElement("div");
  seat.classList.add("seat");

  if (occupiedSeatsIndex.includes(i)) {
    seat.classList.add("occupied");
  } else {
    seat.classList.add("free");
  }

  seat.addEventListener("click", () => {
    if (seat.classList.contains("occupied")) return;

    if (seat.classList.contains("selected")) {
      seat.classList.remove("selected");
      seat.classList.add("free");

      selectedSeats = selectedSeats.filter(s => s !== seat);
    } else {
      seat.classList.remove("free");
      seat.classList.add("selected");

      selectedSeats.push(seat);
    }

    count.textContent = selectedSeats.length;
    total.textContent = selectedSeats.length * price;
  });

  cinema.appendChild(seat);
}

Btn.addEventListener("click", () => {
  selectedSeats.forEach(seat => {
    seat.classList.remove("selected");
    seat.classList.add("occupied");
  });

  selectedSeats = [];
  count.textContent = 0;
  total.textContent = 0;
});