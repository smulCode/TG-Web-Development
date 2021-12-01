let firstDate = document.querySelector(".first-date");
let secondDate = document.querySelector(".second-date");
const submitBtn = document.querySelector(".btn-submit");

let firstDateValue = null;

firstDate.addEventListener("change", (e) => {
  firstDateValue = e.target.value;
  console.log(firstDateValue);
});
let secondDateValue = null;

secondDate.addEventListener("change", (e) => {
  secondDateValue = e.target.value;
  console.log(secondDateValue);
});

const dateDifference = (firstInput, secondInput) => {
  let date1 = new Date(firstInput);
  let date2 = new Date(secondInput);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  console.log(diffDays + " days");

  let days = diffDays + " days";
  document.getElementById("show-date").innerText = days;
  document.getElementById("show-date").textContent = days;
};

submitBtn.addEventListener("click", (e) => {
  dateDifference(firstDateValue, secondDateValue);
});
