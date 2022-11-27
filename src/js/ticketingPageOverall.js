const ticketingPage = document.querySelector('.ticketing');
const progressBar = ticketingPage.querySelector('.progress-list');
const ticketingSlide = ticketingPage.querySelector(
  '.ticketing-slide-container'
);

const stepArr = progressBar.children;
const tagArr = [
  'select_theater',
  'select_movie',
  'select_payment',
  'select_bill',
];

Array.prototype.forEach.call(stepArr, (step) => {
  step.addEventListener('click', function (e) {
    const selectedLiTag = e.currentTarget.dataset.tag;
    console.log(selectedLiTag);
    tagArr.forEach((tagName, idx) => {
      if (tagName === selectedLiTag) {
        ticketingSlide.style.position = 'relative';
        ticketingSlide.style.right = `calc(68rem * ${idx})`;
      }
    });
  });
});