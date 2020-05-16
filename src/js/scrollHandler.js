const $promo = document.querySelector('.promo__img');

window.addEventListener("scroll", throttleScroll);

let isScrolling = false;

function throttleScroll() {
  if (isScrolling === false) {
    window.requestAnimationFrame(function () {
      showElem();
      isScrolling = false;
    });
  }
  isScrolling = true;
}

function showElem() {
  if (isBlockScrolledDown($promo)) {
    $header.classList.add('header--fixed');
  } else {
    $header.classList.remove('header--fixed');
  }
}

function isBlockScrolledDown($el) {
  const elementBoundary = $el.getBoundingClientRect();
  const bottom = elementBoundary.bottom;
  return (bottom <= 200);
}