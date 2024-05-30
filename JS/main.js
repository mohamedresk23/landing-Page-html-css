let bigImage = document.getElementById('big-img');

const myTshirt = (shirt) => {
  bigImage.src = shirt;
};

// select calss menu-icon add event from click to geve another div calss shoe-links

const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const ulLinks = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
  ulLinks.classList.add('show-links');
});
closeIcon.addEventListener('click', () => {
  ulLinks.classList.remove('show-links');
});