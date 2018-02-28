'use strict';

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/alexa-ray';
  const getItems = function (callback) {
    $.getJSON(`${BASE_URL}/items`, callback);
    //callback('api module works!');
  };
  const createItem = function(name, callback) {
    //this data will be sent into POST request
    let newItem = JSON.stringify({name: name});
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      dataType: 'json',
      data: newItem,
      success: callback
    });
  };
  const updateItem = function(id, updateData, callback) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: callback
    });
  };
  


  return {
    getItems,
    createItem,
    updateItem,
  };

}());