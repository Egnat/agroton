//ПРЕЛОАДЕР
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.transition = 'opacity 0.5s';
    preloader.style.opacity = 0;
    setTimeout(function() {
    preloader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
    }, 500);
});

/*POP-UP*/
//OPEN OVERLAY
function on() {
    document.getElementById("overlay").style.display = "block";
}
function off() {
    document.getElementById("overlay").style.display = "none";
}

/*ГАМБУРГЕР*/
const menuBtnMob = document.querySelector('.menuBtn-mob');
const menuList = document.querySelector('.menu-list-links-nav-header-desktop');

menuBtnMob.addEventListener('click', ()=>{
    menuList.classList.toggle('menu-list--active');
});

/*УБРАЛ СЛЭШ / С ТЕКСТА НА ШИРИНЕ ЭКРАНА 475РХ*/
function updateTitleOnResize() {
    const titleElement = document.querySelector('.titleSectionQuality');
    if (!titleElement) return;

    if (window.innerWidth <= 475) {
        // Заменяем слэш на пустую строку или другой символ
        titleElement.textContent = titleElement.textContent.replace(' / ', ' ');
    } else {
        // Если ширина больше 475px, восстанавливаем слэш (если он был изменен)
        // Это требует хранения исходного текста или более сложной логики
        // Для простоты, если он был изменен, он останется без слэша, пока страница не обновится
        // Более правильный подход - хранить исходный текст или проверять текущий
        if (!titleElement.textContent.includes(' / ')) { // Проверяем, был ли уже удален слэш
            titleElement.textContent = titleElement.textContent.replace(' ', ' / '); // Упрощенно, может не всегда работать идеально
        }
    }
}
// Вызываем при загрузке страницы
updateTitleOnResize();
// Вызываем при изменении размера окна
window.addEventListener('resize', updateTitleOnResize);
/*УБРАТЬ СЛЭШ МОЖНО БЫЛО ЕЩЁ Наиболее реалистичныМ подходОМ:
1. Скрыть весь <h2> и показать другой <h2> без слэша (требует изменения HTML)
Это самый надежный способ, но требует изменения HTML.
ПРИМЕР:
HTML
<h2 class="titleSection titleSectionQuality">
    <span class="desktop-text">Impressive scale / Convincing quality</span>
    <span class="mobile-text">Impressive scale Convincing quality</span>
</h2>
CSS
//По умолчанию показываем десктопный вариант, скрываем мобильный 
.titleSectionQuality .desktop-text {
    display: inline; /* Или block, в зависимости от нужного отображения
}
.titleSectionQuality .mobile-text {
    display: none;
}
//На ширине 475px и меньше 
@media (max-width: 475px) {
    .titleSectionQuality .desktop-text {
        display: none; /* Скрываем десктопный вариант
    }
    .titleSectionQuality .mobile-text {
        display: inline; // Показываем мобильный вариант без слэша
    }
}
*/