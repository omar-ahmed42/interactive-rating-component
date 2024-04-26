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
  if (selectedRating) {
    let card = document.getElementsByClassName('card')[0];
    card.classList.replace('card', 'thanks-card');
    card.innerHTML = `
    <div class="card-content-wrapper">
        <div class="submission-wrapper">
            <img src="assets/images/illustration-thank-you.svg" alt="Thank you">
        </div>
        <div class="selection-wrapper">
            <div class="selection-result">You selected ${selectedRating} out of 5</div>
        </div>
        <div class="thank-header">Thank you!</div>
        <div class="thank-description">We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!</div>
        </div>
      `;
    return selectedRating;
  }

  alert('You must select a rating before submitting');
});
