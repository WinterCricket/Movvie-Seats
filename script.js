const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const filmSelect = document.getElementById("film");

const ticketPrice = +film.value;

//functions
function updateSelectedCount(){
	const selectedSeats = document.querySelectorAll(".row .seat.selected");
	const selectedSeatsCount = selectedSeats.length;
	count.innerText = selectedSeatsCount;
	total.innerText = selectedSeatsCount * ticketPrice;
}

//event
container.addEventListener("click", (e) => {
	if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")){
		e.target.classList.toggle("selected");

		updateSelectedCount();
	}
});