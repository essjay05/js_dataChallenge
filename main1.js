// Exercise 1: Create dictionary from Array Vehicle Data
// https://gist.githubusercontent.com/scottburton11/66a921c458f9500a773a6b0ac65006df/raw/629bfd6a3125e3428bd85a53231bd8018c407a65/Javascript%2520Working%2520With%2520Data%2520Challenge%2520data
var carDictionary = document.getElementById('carList');
var btn1 = document.getElementById('btn1');

// Click button to trigger Exercise 1
btn1.addEventListener('click', function() {
  var ourRequest = new XMLHttpRequest();
  // var filePath = 'https://gist.githubusercontent.com/scottburton11/66a921c458f9500a773a6b0ac65006df/raw/629bfd6a3125e3428bd85a53231bd8018c407a65/Javascript%2520Working%2520With%2520Data%2520Challenge%2520data';
  ourRequest.open('GET', 'https://gist.githubusercontent.com/scottburton11/66a921c458f9500a773a6b0ac65006df/raw/629bfd6a3125e3428bd85a53231bd8018c407a65/Javascript%2520Working%2520With%2520Data%2520Challenge%2520data')
  ourRequest.onload = function(){
    var carData = JSON.parse(ourRequest.responseText);
    // console.log(carData[0])
    renderHTML(carData);
  };
  ourRequest.send();
  
});

function renderHTML(data) {
//   console.log(data)

// Set response data array to vehicles variable
    let vehicles = data
    console.log(vehicles)
//   Create dictionary from vehicles array using reduce
    var dictionary = vehicles.reduce(function(map, obj) {
        map[obj.id] = obj;
        return map;
    }, {});
    console.log(dictionary);

// Populate list onto page
  var htmlString = ' '
  for (i=0; i < vehicles.length; i++) {
    htmlString += '<li>' + JSON.stringify(dictionary) 
    htmlString+= '</li>';
  }
  carDictionary.insertAdjacentHTML('beforeend', htmlString);
}



