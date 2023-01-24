const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

// Get data from localstorage and populate UI
const populateUI = () => {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }
  const selectedMovieIndex = localStorage.getItem('SelectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

populateUI();

let ticketPrice = +movieSelect.value;

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

// Pick select movie event

movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;    
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedSeatCount();
});

container.addEventListener('click', (e) =>{
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
      e.target.classList.toggle('selected');
      updateSelectedSeatCount();
  }
});

updateSelectedSeatCount();