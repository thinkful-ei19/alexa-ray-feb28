'use strict'

/* global shoppingList, store, api */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
});

api.getItems((items) => {
  items.forEach((item) => store.addItem(item));
  const item = store.items[0];
  console.log('current name: ' + item.name);
  store.findAndUpdate(item.id, { name: 'foobar' });
  console.log('new name: ' + item.name);
});

// store.items.push(Item.create('apples'));

// api.getItems(function(data) {
//   console.log(data);
// });

// console.log(api.BASE_URL);

// api.createItem('pears', (newItem) => {
//   api.getItems((items) => {
//     console.log(items);
//   });
// });

//push to dom
//store.addItem.push();

// api.createItem('pears', (newItem) => {
//   api.getItems((items) => {
//     console.log(items);
//   });
// });

// api.getItems((items) => {
//   const item = items[0];

//   console.log(`This is ${item}`);
//   // api.updateItem(item.id, { name: 'foobar' }, () => {
//   //   console.log('updated!');
//   // });
// });

