// Exercise 1: Create dictionary from Array Vehicle Data
// https://gist.githubusercontent.com/scottburton11/66a921c458f9500a773a6b0ac65006df/raw/629bfd6a3125e3428bd85a53231bd8018c407a65/Javascript%2520Working%2520With%2520Data%2520Challenge%2520data
var vehiclesData = "https://gist.githubusercontent.com/scottburton11/66a921c458f9500a773a6b0ac65006df/raw/629bfd6a3125e3428bd85a53231bd8018c407a65/Javascript%2520Working%2520With%2520Data%2520Challenge%2520data";
let vehicleInfo = document.getElementById('info');


// EXERCISE 1
var carDictionary = document.getElementById('carList');
var btn1 = document.getElementById('btn1');

// Click button to trigger Exercise 1
btn1.addEventListener('click', function() {
  axios.get(vehiclesData) 
    .then(res => {
    // console.log(res.data)
    let vehicles = res.data;
    // console.log(vehicles)
    renderHTML(vehicles);
    });
});

function renderHTML(data) {
  // console.log(data)
// Set response data array to vehicles variable
    let vehicles = data
    // console.log(vehicles)
//   Create dictionary from vehicles array using reduce
    var dictionary = vehicles.reduce(function(map, obj) {
        map[obj.id] = obj;
        return map;
    }, {});
    console.log(dictionary);

// Populate list onto page
  var htmlString = ' '
  for (i=0; i < vehicles.length; i++) {
    htmlString += '<p>' + JSON.stringify(dictionary) 
    htmlString+= '</p>';
  }
  carDictionary.insertAdjacentHTML('beforeend', htmlString);
}



// EXERCISE 2: 
var topTenCool = document.getElementById('top10CoolCars');
var btn2 = document.getElementById('btn2');

// Click button to trigger Exercise 2
btn2.addEventListener('click', function() {
  axios.get(vehiclesData) 
    .then(res => {
    // console.log(res.data)
    let vehicles = res.data;
    // console.log(vehicles)
    renderCoolCars(vehicles);
    });
});

function renderCoolCars(data) {
    //   console.log(data)
    
    // Set response data array to vehicles variable
        let vehicles = data
        // console.log(vehicles)
    //   Filter
        let coolCars = vehicles.filter(function(c) {
            return (c["Cool Factor"] > 4) && (c["Cool Factor"] < 7)
        });
        // // $('#topTenCoolCars').text(coolCars);
        console.log(coolCars);
        // let topTenCoolCars = coolCars.filter(function(tt) {
        //   return (tt["Total Score"])
        // })
   
    }
    


