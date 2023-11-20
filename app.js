const notifactionBtn = document.querySelector('#notifactionBtn');
const profileBtn = document.querySelector('#profileBtn');
const mainDrop = document.querySelector('#main_drop');
const notifactionDrop = document.querySelector('#notifaction_drop');

notifactionBtn.addEventListener('click', () => {
  notifactionDrop.classList.toggle('d-none');
  mainDrop.classList.add('d-none');
})

profileBtn.addEventListener('click', () => {
  mainDrop.classList.toggle('d-none');
  notifactionDrop.classList.add('d-none');
})

// callout logic

const closeCalloutBtn = document.querySelector('#closeCalloutBtn');
const callout = document.querySelector('.callout');

closeCalloutBtn.addEventListener('click', () => {
  callout.classList.add('d-none');
})