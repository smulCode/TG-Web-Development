const catBtn = document.getElementById("catBtn");

catBtn.addEventListener("click", createCatModal);

function createCatModal() {
  console.log("catModal");
  // create modal
  const catModal = document.createElement("div");
  catModal.classList.add("cat-modal");
  //create button
  const closeButton = document.createElement("button");
  closeButton.classList.add("close-button");
  closeButton.innerHTML = "&times";
  // headline
  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.innerHTML = "Cat Facts";
  //img
  const imgCat = document.createElement("img");
  imgCat.classList.add("img-cat");
  // text
  const catText = document.createElement("div");
  catText.classList.add("cat-text");
  catText.innerText =
    "Cats are believed to be the only mammals who don't taste sweetness";

  catModal.setAttribute("data-value", "open-modal");
  modalContainer.append(catModal);
  catModal.append(closeButton);
  catModal.append(headline);
  catModal.append(imgCat);
  catModal.append(catText);

  closeButton.addEventListener("click", removeModal);

  function removeModal() {
    while (catModal.firstChild) {
      catModal.removeChild(catModal.lastChild);
      catModal.classList.remove("cat-modal");
    }
    console.log("click remove");
  }
}
