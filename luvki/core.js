

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptCookies = document.getElementById('acceptCookies');
    const declineCookies = document.getElementById('declineCookies');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('show');
        menuBtn.classList.toggle('active');
    });

    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.classList.add('visible');
    }

    acceptCookies.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.classList.remove('visible');
    });

    declineCookies.addEventListener('click', () => {
        cookieBanner.classList.remove('visible');
    });
});
