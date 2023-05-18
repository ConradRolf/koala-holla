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
  $.ajax({
    type: 'GET',
    url: '/koalas'
  }).then(function(response) {
    console.log('GET, /koalas', response);
    for (let i= 0; i , response.length; i++) {
      $('#viewKoalas').append(`
      <tr data-id=${response[i].id}>
       <td>${response[i].name}</td>
       <td>${response[i].age}</td>
       <td>${response[i].gender}</td>
       <td>${response[i].readyForTransfer}</td>
       <td>${response[i].notes}</td>
      </tr>

      `);
    }
  }).catch(error => {
    console.log('Error', error);
    res.sendStatus(500)
  })
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
































































//add to onLoad function
$('#viewKoalas').on('click', '#delete-btn', deleteKoala);


//add delete button to render function


function deleteKoala() {

  const koalaToDelete = $(this).closest('tr').data('id');

  console.log("Inside delete function. Koala to delete:", koalaToDelete);

  $.ajax({
      type: 'DELETE',
      url: `/koala/${koalaToDelete}`
  }).then(function (response) {
      getKoalas();
  }).catch(function (error) {
      console.log('Error with delete function: ', error);
  })
}



