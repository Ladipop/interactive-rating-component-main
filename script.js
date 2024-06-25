const ratingSection = document.querySelector(".rating-section");
const thankYouSection = document.querySelector(".thank-you-section");
const ratings = document.querySelectorAll(".btn");
const submit = document.querySelector(".submit-btn");
const finalRating = document.querySelector(".rating");
const backButton = document.querySelector(".back-btn");

for (let i = 0; i < ratings.length; i++) {
  const rating = ratings[i];
  rating.addEventListener("click", () => {
    for (let j = 0; j < ratings.length; j++) {
      ratings[j].classList.remove("selected");
    }
    rating.classList.add("selected");
  });
}

submit.addEventListener("click", () => {
  const selectedRating = document.querySelector(".btn.selected");
  if (selectedRating) {
    ratingSection.style.display = "none";
    thankYouSection.style.display = "flex";
    finalRating.textContent = selectedRating.innerHTML;
  } else {
    alert("Please select a rating before proceeding");
  }
});

backButton.addEventListener("click", () => {
  ratingSection.style.display = "flex";
  thankYouSection.style.display = "none";
});
