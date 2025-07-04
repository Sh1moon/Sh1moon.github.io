
    document.addEventListener('DOMContentLoaded', function() {
        const burger = document.querySelector('.header__burger');
        const menu = document.querySelector('.header__list');
        
        burger.addEventListener('click', function() {
            this.classList.toggle('active');
            menu.classList.toggle('active');
            
            // Блокировка скролла при открытом меню
            if (menu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Закрытие меню при клике на ссылку
        const menuLinks = document.querySelectorAll('.header__item a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                burger.classList.remove('active');
                menu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    });
