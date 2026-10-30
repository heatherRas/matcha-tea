const btn = document.querySelector('.toggle-btn');

btn.addEventListener('click', function(){
    document.querySelector('.main-menu').classList.toggle('open-nav');
});