// MODAL

const modalWindowEl = document.querySelector('.modal-window');
const closeModalButton = document.querySelector('#close-modal');

closeModalButton.addEventListener('click', function (event) {
  modalWindowEl.classList.toggle('hidden');
})

// STAFF PICKS BOOSTRAP SLIDER JS

let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
