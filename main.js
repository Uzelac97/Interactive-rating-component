"use strict";

const ratingSpans = document.querySelectorAll(".rating-span");
const submitButton = document.getElementById("submit-button");
const ratingState = document.getElementById("first-state");
const thankYouState = document.getElementById("second-state");
const selectedRatingSpan = document.getElementById("selected-rating");

let selectedRating = null;

ratingSpans.forEach((span) => {
  span.addEventListener("click", () => {
    ratingSpans.forEach((s) => s.classList.remove("active"));

    span.classList.add("active");

    selectedRating = span.textContent;
    console.log("Selected Rating:", selectedRating);
  });
});

submitButton.addEventListener("click", function () {
  if (selectedRating) {
    submitButton.classList.add("button-clicked");

    ratingState.classList.add("hidden");
    thankYouState.classList.remove("hidden");

    selectedRatingSpan.textContent = selectedRating;
  }
});
