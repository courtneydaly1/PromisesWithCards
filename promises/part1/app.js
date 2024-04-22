let favNumber = 4;
let BASE_URL = "http://numbersapi.com";

// 1.
$.getJSON(`${BASE_URL}/${favNumber}?json`).then(data => {
  console.log(data);
});

// 2.
let favNumbers = [4, 39, 23];
$.getJSON(`${BASE_URL}/${favNumbers}?json`).then(data => {
  console.log(data);
});

// 3.
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${BASE_URL}/${favNumber}?json`);
  })
).then(facts => {
  facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});