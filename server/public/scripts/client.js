console.log( 'js' );

$(document).ready(onReady);

function onReady() {
  console.log( 'JQ' );
  // Establish Click Listeners
  // load existing koalas on page load
  getKoalas();

  $('#viewKoalas').on('click', '#tranferButton', updateKoala);
  $('#addButton').on('click', postKoalas);
  $('#viewKoalas').on('click', '#delete-btn', deleteKoala);
}; // end doc ready

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
       <button id="delete-btn">Delete Koala? 🥲</button>
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
