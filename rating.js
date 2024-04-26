let ratings = document.getElementsByClassName('rating-value');

const ratingActiveClass = 'rating-active';

let selectedRating;

for (let i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener('click', function () {
    console.log('triggered');
    removeActiveRatingsExceptForCurrent(ratings, i);
    this.classList.toggle('rating-active');
    selectedRating = this.classList.contains(ratingActiveClass)
      ? i + 1
      : undefined;
  });
}

function removeActiveRatingsExceptForCurrent(ratings, currentIdx) {
  for (let i = 0; i < ratings.length; i++) {
    if (i != currentIdx) ratings[i].classList.remove(ratingActiveClass);
  }
}

let ratingSubmitBtn = document.getElementsByClassName('submit-btn rating-btn');

ratingSubmitBtn[0].addEventListener('click', () => {
  console.log('submit btn triggered');
  if (selectedRating) return selectedRating;
  alert('You must select a rating before submitting');
});
