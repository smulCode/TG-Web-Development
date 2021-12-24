// import {example} from "./modules/example.js"

const fullName = document.getElementById("fname");
const phoneNumber = document.getElementById("phone");
const streetName = document.getElementById("streetname");
const houseNumber = document.getElementById("housenumber");
const zipCode = document.getElementById("zipcode");
const city = document.getElementById("city");
const email = document.getElementById("email");
const sendButton = document.getElementById("btn-send");
const form = document.getElementById("form");
const card = document.getElementById("card");
const containerCard = document.getElementById("container-card");

const imgContainer = document.createElement("div");
imgContainer.classList.add("img-container");
const image = document.createElement("img");
image.classList.add("picture");
containerCard.appendChild(imgContainer);
imgContainer.appendChild(image);

class user {
  constructor(
    fullName,
    phoneNumber,
    streetName,
    houseNumber,
    zipCode,
    city,
    email
  ) {
    this.fullName = fullName;
    this.phoneNumber = phoneNumber;
    this.streetName = streetName;
    this.houseNumber = houseNumber;
    this.zipCode = zipCode;
    this.city = city;
    this.email = email;
  }
}

sendButton.addEventListener("click", getInput);

function getInput() {
  validateForm();
  document.querySelector(".name").innerText = `Name: ${fullName.value}`;

  let nr = phoneNumber.value.toString();
  if (phoneNumber.value.charAt(0) == 0) {
    document.querySelector(
      ".phonenumber"
    ).innerText = `Phone number: ${nr.replace("0", "+31")}`;
  } else {
    document.querySelector(".phonenumber").innerText = `Phone number: ${nr}`;
  }
  document.querySelector(
    ".adress"
  ).innerText = `Adress: ${streetName.value} ${houseNumber.value} ${zipCode.value} ${city.value}`;

  let emailAddress = email.value;
  if (emailAddress.includes("@techgrounds")) {
    document.querySelector(".email").innerText = `email: ${emailAddress}`;
  } else {
    let message = "Please enter email with @techgrounds.com";
    let result = window.confirm(message);
  }
  saveInput();
}

function saveInput() {
  const user1 = new user(
    fullName.value,
    phoneNumber.value,
    streetName.value,
    houseNumber.value,
    zipCode.value,
    city.value,
    email.value
  );
  console.log(user1);

  showImage(user1);

  fullName.value = "";
  phoneNumber.value = "";
  streetName.value = "";
  houseNumber.value = "";
  zipCode.value = "";
  city.value = "";
  email.value = "";
}

function showImage(user) {
  if (fullName.value == "" || fullName.value == null) {
    console.log(fullName.value);
    imgContainer.classList.remove("image-show");
  } else {
    imgContainer.classList.add("image-show");
    image.src =
      "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";
    
  }
}

function validateForm() {
  const formValues = document.forms["myForm"]["fullname"].value;
  if (formValues == "" || formValues == null) {
    alert("Name must be filled out");
    return false;
  }
}
