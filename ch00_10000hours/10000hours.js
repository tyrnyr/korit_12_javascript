const startButton = document.querySelector(".start_btn");
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_btn");
const loading = document.querySelector(".result_loading");

function calculator() {
  const fieldValue = document.querySelector("#field_value");
  let timeValue = document.querySelector("#time_value");

}
function openModal() {

}
function closeModal() {

}
function copyUrl() {

}


shareButton.addEventListener('click', copyUrl);
openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
startButton.addEventListener('click', calculator);