"use strict";

const ButtonMenu = document.querySelector('.header__icon');

if (ButtonMenu) {
    const menu = document.querySelector('.header__menu');
    
    ButtonMenu.addEventListener('click', () => {
        menu.classList.toggle('_active');
    });

    window.onscroll = function() {
        menu.classList.remove('_active');
    }
}