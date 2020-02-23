const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const filmSelect = document.getElementById("film");

let ticketPrice = +film.value;

//call populate function
populateUI();

//functions

//setFilmData

function setFilmData(filmIndex, filmPrice){
	localStorage.setItem("selectedFilmIndex", filmIndex);
	localStorage.setItem("selectedFilmPrice", filmPrice);
}
//update and total count
function updateSelectedCount(){
	const selectedSeats = document.querySelectorAll(".row .seat.selected");
	console.log(selectedSeats);

	const seatsIndex = [...selectedSeats].map(function (seat) {
		return [...seats].indexOf(seat);
	});

	console.log(seatsIndex);

	localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

	


	const selectedSeatsCount = selectedSeats.length;
	count.innerText = selectedSeatsCount;
	total.innerText = selectedSeatsCount * ticketPrice;
}

//retrieve data from local storage and populate ui

function populateUI(){
	const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
	if(selectedSeats !== null && selectedSeats > 0){
		seats.forEach((seat, index) => {
			
		})
	}
}

//film select e

filmSelect.addEventListener("change", e => {
	ticketPrice = +e.target.value;
	setFilmData(e.target.selectedIndex, e.target.value);
	updateSelectedCount();
});

// seat click event
container.addEventListener("click", e => {
	if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")){
		e.target.classList.toggle("selected");

		updateSelectedCount();
	}
});
