'use strict';
// function eventListener(){
//   $('form').on('submit', function(event){
//     event.preventDefault();
//     getDogs($('.dogInput').val());
//   });
// }
function getDogImage(userInput) {
  fetch(`https://dog.ceo/api/breeds/image/random/${userInput}`)
    .then(response => response.json())
    .then(responseJson =>  
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  // let imgString="";
  for(let i =0; i< responseJson.message.length; i++){
    
    let temp=`<img src="${responseJson.message[i]}" class="results-img">`;
    $('.results').append(temp);
    
  }
  // $('.results-img').html(
  //   `<img src="${responseJson.message}" class="results-img">`
  // )
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let userInput = $('.dogInput').val();
    getDogImage(userInput);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});