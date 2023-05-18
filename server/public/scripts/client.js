console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();
  $('#viewKoalas').on('click', '#tranferButton', updateKoala);
}); // end doc ready

function setupClickListeners() {

  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: 'testName',
      age: 'testName',
      gender: 'testName',
      readyForTransfer: 'testName',
      notes: 'testName',
    };
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  }); 
}

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
 
}
































































































































































function updateKoala(event){
  event.preventDefault();
    console.log('Koala ready for transfer')
    const idToUpdate = $(this).closest('tr').data('id');

    $.ajax({
        type: 'PUT',
        url: `/koalas/${idToUpdate}`,
    }).then(function (response) {
        console.log(response)
        getKoalas();
    }).catch(function (error) {
        console.log('Error with update song: ', error);
    })
}