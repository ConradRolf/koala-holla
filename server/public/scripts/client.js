console.log( 'js' );

$(document).ready(onReady);

function onReady() {
  console.log( 'JQ' );
  // Establish Click Listeners
  // load existing koalas on page load
  getKoalas();

  $('#viewKoalas').on('click', '#transfer-btn', updateKoala);
  $('#addButton').on('click', postKoalas);
  $('#viewKoalas').on('click', '#delete-btn', deleteKoala);
}; // end doc ready

function getKoalas(){
  $('#viewKoalas').empty();
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  $.ajax({
    type: 'GET',
    url: '/koalas'
  }).then(function(response) {
    console.log('GET, /koalas', response);
    for (let i= 0; i , response.length; i++) {
      if (response[i].ready_for_transfer == 'true'){
        console.log('ready for transfer: ', response[i].ready_for_transfer)
      $('#viewKoalas').append(`
      <tr data-id=${response[i].id}>
       <td>${response[i].name}</td>
       <td>${response[i].age}</td>
       <td>${response[i].gender}</td>
       <td>${response[i].ready_for_transfer}</td>
       <td>${response[i].notes}</td>
       <td><button id="delete-btn">Delete Koala? 🥲</button></td>
      </tr>

      `);} 
      else if (response[i].ready_for_transfer == 'false'){
      $('#viewKoalas').append(`
      <tr data-id=${response[i].id}>
       <td>${response[i].name}</td>
       <td>${response[i].age}</td>
       <td>${response[i].gender}</td>
       <td>${response[i].ready_for_transfer} <button id="transfer-btn">Transfer?</button></td>
       <td>${response[i].notes}</td>
       <td><button id="delete-btn">Delete Koala? 🥲</button></td>
      </tr>
      `)}
      else {
        $('#viewKoalas').append(`
      <tr data-id=${response[i].id}>
       <td>${response[i].name}</td>
       <td>${response[i].age}</td>
       <td>${response[i].gender}</td>
       <td>${response[i].ready_for_transfer}</td>
       <td>${response[i].notes}</td>
       <td><button id="delete-btn">Delete Koala? 🥲</button></td>
      </tr>

      `);} 
    }
  }).catch(error => {
    console.log('Error', error);
  })
  //
 
} // end getKoalas

function postKoalas() {
  let koalaToSend = {
    name: $('#nameIn').val(),
    age: $('#ageIn').val(),
    gender: $('#genderIn').val(),
    ready_for_transfer: $('#readyForTransferIn').val(),
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
        console.log('Error with updating koala : ', error);
    })
}

function deleteKoala() {

  const koalaToDelete = $(this).closest('tr').data('id');

  console.log("Inside delete function. Koala to delete:", koalaToDelete);

  $.ajax({
      type: 'DELETE',
      url: `/koalas/${koalaToDelete}`
  }).then(function (response) {
      getKoalas();
  }).catch(function (error) {
      console.log('Error with delete function: ', error);
  })
}
