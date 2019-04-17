'use strict';

function getDogImage(userInput) {
  fetch(`https://dog.ceo/api/breed/${userInput}/images/random`)
  .then(response => response.json())
  .then(responseJson => 
      displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.')); 
  }

function displayResults(responseJson) {
  console.log(responseJson);
  if (responseJson.status === "error"){
    $('.dogTitle').remove();
    $('.results').append(
      `Error code: ${responseJson.code}. ${responseJson.message}.`
    )
  }
  else {
    $('.results').append(
      `<img src="${responseJson.message}" class="results-img">`
    )
  }
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