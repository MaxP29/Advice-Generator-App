const id = document.querySelector(`.number`);
const advice = document.querySelector(`.advice-text`);
const button = document.querySelector(`.button`);

const makeRequest = function () {
  fetch(`https://api.adviceslip.com/advice`)
    .then((response) => response.json())
    .then((data) => {
      advice.textContent = `"${data.slip.advice}"`;
      id.textContent = data.slip.id;
    });
};

button.addEventListener(`click`, function (e) {
  makeRequest();
});

makeRequest();
