// let firstDate = document.querySelector(".first-date").value;
// let secondDate = document.querySelector(".second-date").value;

// // console.log(new Date (firstDate));
// // console.log(new Date (secondDate));

const dateDifference = (firstDate, secondDate) => {
  let date1 = new Date(firstDate);
  let date2 = new Date(secondDate);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  console.log(diffDays + " days");
};

dateDifference("12/13/2021", "12/16/2021");


//html
//   let days = diffDays + " days";
//   document.getElementById("show-date").innerText = days;
//   document.getElementById("show-date").textContent = days;



