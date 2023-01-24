const container = document.querySelector('.container');
const seats = document.querySelectorAll('.seat');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');


let ticketPrice = +movieSelect.value;
// Get data from localstorage and populate UI

// Save selected movie index and price
const setMovieData = (movieIndex, moviePrice) => {
    localStorage.setItem("SelectedMovieIndex", movieIndex);
    localStorage.setItem("SelectedMoviePrice", moviePrice);
}

const updateSelectedSeatCount = () => {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    // Save data to localStorage
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    const seatSelectedCount = selectedSeats.length;
    count.innerHTML = seatSelectedCount;
    total.innerHTML = seatSelectedCount * ticketPrice;
}


//----------------- Event Listeners ----------------

//const result = seats.filter (seat => !seat.classList.contains("occupied"));

// Pick select movie event

movieSelect.addEventListener('change', (e) => {    
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedSeatCount();
})

container.addEventListener('click', (e) =>{    
    !e.target.classList.contains('occupied') && e.target.classList.toggle('selected');
    updateSelectedSeatCount();
});