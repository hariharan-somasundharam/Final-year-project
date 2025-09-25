function searchBus() {
  let busNumber = document.getElementById("busNumber").value;
  if (busNumber) {
    window.location.href = `/bus/${busNumber}/`;
  } else {
    alert("Please enter a bus number.");
  }
}

function findBuses() {
  let start = document.getElementById("startLocation").value;
  let end = document.getElementById("endLocation").value;

  if (start && end) {
    window.location.href = `/available-buses/?start=${start}&end=${end}`;
  } else {
    alert("Please select both start and destination.");
  }
}
