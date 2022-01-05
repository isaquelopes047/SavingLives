
function newFunction() {
    let buttonOpen = document.querySelector('.OpenNav');
    let buttonClose = document.querySelector('.closeNav');

    let menu = document.querySelector('.menuNav');

    buttonOpen.addEventListener('click', () => {
        menu.style.height = '450px';
        buttonOpen.style.display = 'none';
        buttonClose.style.display = 'block';
        menu.style.transition = "all 0.4s";
    });

    buttonClose.addEventListener('click', () => {
        menu.style.height = '0px';
        buttonOpen.style.display = 'block';
        buttonClose.style.display = 'none';
        menu.style.transition = "all 0.4s";
    });
}

newFunction();