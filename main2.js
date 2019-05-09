// Exercise 2: Populate Full Name and Total Score for Top 10 "Cool Factor" btw 4 and 7
// https://gist.githubusercontent.com/scottburton11/66a921c458f9500a773a6b0ac65006df/raw/629bfd6a3125e3428bd85a53231bd8018c407a65/Javascript%2520Working%2520With%2520Data%2520Challenge%2520data
var topTenCool = document.getElementById('top10CoolCars');
var btn2 = document.getElementById('btn2');

// Click button to trigger Exercise 1
btn2.addEventListener('click', function() {
  var requestTwo = new XMLHttpRequest();
  // var filePath = 'https://gist.githubusercontent.com/scottburton11/66a921c458f9500a773a6b0ac65006df/raw/629bfd6a3125e3428bd85a53231bd8018c407a65/Javascript%2520Working%2520With%2520Data%2520Challenge%2520data';
  requestTwo.open('GET', 'https://gist.githubusercontent.com/scottburton11/66a921c458f9500a773a6b0ac65006df/raw/629bfd6a3125e3428bd85a53231bd8018c407a65/Javascript%2520Working%2520With%2520Data%2520Challenge%2520data')
  requestTwo.onload = function(){
    var carData = JSON.parse(requestTwo.responseText);
    // console.log(carData[0])
    renderHTML(carData);
  };
  requestTwo.send();
});

function renderHTML(data) {
    //   console.log(data)
    
    // Set response data array to vehicles variable
        let vehicles = data
        console.log(vehicles)
    //   Filter
        let coolCars = vehicles.filter(function(c) {
            return true;
        }, {});
        console.log(dictionary);
    
    // Populate list onto page
      var htmlString = ' '
      for (i=0; i < vehicles.length; i++) {
        htmlString += '<li>' + JSON.stringify(dictionary) 
        htmlString+= '</li>';
      }
      topTenCool.insertAdjacentHTML('beforeend', htmlString);
    }
    
    
    