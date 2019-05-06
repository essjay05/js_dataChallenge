// Exercise 3: Populate Full Name and Total Score for Top 10 "Cool Factor" btw 4 and 7
// https://gist.githubusercontent.com/scottburton11/66a921c458f9500a773a6b0ac65006df/raw/629bfd6a3125e3428bd85a53231bd8018c407a65/Javascript%2520Working%2520With%2520Data%2520Challenge%2520data
var scoreAlphaMakers = document.getElementById('totalScoreMakersList');
var btn3 = document.getElementById('btn3');

// Click button to trigger Exercise 1
btn3.addEventListener('click', function() {
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