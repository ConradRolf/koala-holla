console.log( 'js' );

$(document).ready(onReady);

function onReady() {
  console.log( 'JQ' );
  // Establish Click Listeners
  // load existing koalas on page load
  getKoalas();

  $('#addButton').on('click', postKoalas);
}; // end doc ready

function setupClickListeners() {}
  // $( '#addButton' ).on( 'click', postKoalas(){
  //   console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
//     let koalaToSend = {
//       name: 'testName',
//       age: 'testName',
//       gender: 'testName',
//       readyForTransfer: 'testName',
//       notes: 'testName',
//     };
//     // call saveKoala with the new obejct
//     saveKoala( koalaToSend );
//   }); 
// }

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
 
}


























































function postKoalas() {
  let koalaToSend = {
    name: $('#nameIn').val(),
    age: $('#ageIn').val(),
    gender: $('#genderIn').val(),
    readyForTransfer: $('#readyForTransferIn').val(),
    notes: $('#notesIn').val()
  };
  $.ajax({
      type: 'POST',
      url: '/koalas',
      data: koalaToSend
  }).then(function(response) {
    $('#nameIn').val(''),
    $('#ageIn').val(''),
    $('#genderIn').val(''),
    $('#readyForTransferIn').val(''),
    $('#notesIn').val('')
      getKoalas();
  });
};