//работа прелоадер

document.body.onload = function () {
    setTimeout(function () {
        let preloader = document.getElementById('page-preloader');
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 500);
}

//работа бургер меню

let btnMenu = document.querySelector('.menu__button');
let burgerMenu = document.querySelector('.burger-menu');
let menuImage = document.querySelector('.menu__image');
let menuLine = document.querySelector('.menu__line');
let mainScreen = document.querySelector('.mainscreen');
let main = document.querySelector('.main');
let footer = document.querySelector('.footer');
let menuLinks = document.querySelectorAll('.menu__link');

btnMenu.addEventListener('click', showMenu);

function showMenu() {
    burgerMenu.classList.toggle('active');
    menuImage.classList.toggle('active');
    menuLine.classList.toggle('active');
    mainScreen.classList.toggle('active');
    main.classList.toggle('active');
    footer.classList.toggle('active');
}

for (link of menuLinks) {
    link.addEventListener('click', function() {
        burgerMenu.classList.remove('active');
        menuImage.classList.remove('active');
        menuLine.classList.remove('active');
        mainScreen.classList.remove('active');
        main.classList.remove('active');
        footer.classList.remove('active');
    });
}


//работа всплывающего окошка
let hiddenForm = document.querySelector('.hidden-form');
let closeBtnHF = document.querySelector('.hidden-form__button');
let sentBtnHF = document.querySelector('.hidden-form__btn');

setTimeout(function () {
    hiddenForm.classList.add('active');
}, 10000);

closeBtnHF.addEventListener('click', function () {
    hiddenForm.classList.remove('active');
})

sentBtnHF.addEventListener('click', function () {
    setTimeout(function () {
        let inputs = document.querySelectorAll('.hidden-form__input');
        for (input of inputs) {
            input.value = '';
        }
        setTimeout(function () {
            hiddenForm.classList.remove('active');
        }, 1000);
    }, 3000);
})

//работа скрытых блоков
//блок свадьба под ключ

let btnKey = document.querySelector('.key');
let closeBHB = document.querySelector('.hidden-blocks__button');
let blockHB = document.querySelector('.hidden-blocks');

key = ['1. Формирование свадебного бюджета, который сразу учитывает все необходимые затраты;',
    '2. Составление детального плана подготовки;',
    '3. Работа нашего концептуального дизайнера по разработке уникальной концепции cвадебного торжества;',
    '4. Подбор площадки для проведения торжества (совместное посещение площадок, составление меню и обсуждение всех деталей и нюансов), полный контроль и взаимодействие с менеджментом площадки;',
    '5. Разработка сценария торжественной части, подбор ведущего, артистов, развлекательной программы;',
    '6. Подбор съемочной команды фотографов и видеографов;',
    '7. Разработка уникальной идеи по предсвадебной съемки love-story и фотосессии пары в день торжества, их организация;',
    '8. Решение всех технических вопросов: свет, звук, видео-проекция на площадке;',
    '9. Составление всех необходимых документов, чек-листов, технических заданий;',
    '10. Составление и согласование договоров',
    '11. Контроль сроков оплат;',
    '12. Решение всех организационных вопросов связанных с церемонией регистрации брака;',
    '13. Совместный подбор/заказ/покупка свадебных нарядов и аксессуаров для жениха и невесты, в т.ч. проработка образов для love-story и утра пары;',
    '14. Подбор и координация работы дизайнера полиграфии;',
    '15. Встреча с кондитером, дегустация и выбор свадебного торта;',
    '16. Организация транспорта и проживания для Ваших гостей;',
    '17. Работа с гостями (для удобства гостей, контактный телефон Вашего свадебного организатора будет написан на каждом пригласительном);',
    '18. КООРДИНАЦИЯ в день торжества двумя специалистами (в том числе Ваш свадебный организатор);',
    '19. Послесвадебный сервис.',
    '20. Помощь в решении множества других Важных организационных деталей, таких как расселение приезжих гостей, выбор отеля для сборов, поиск подарка для родителей.'];

btnKey.addEventListener('click', function () {
    blockHB.classList.add('active');
    title = document.createElement('h3');
    title.classList.add('hidden-blocks__title');
    title.innerHTML = 'Свадьба под ключ';
    blockHB.appendChild(title);
    image = document.createElement('img');
    image.classList.add('hidden-blocks__image');
    image.src = './images/venz.svg';
    blockHB.appendChild(image);
    cover = document.createElement('div');
    cover.classList.add('hidden-blocks__cover');
    blockHB.appendChild(cover);
    list = document.createElement('ul');
    list.classList.add('hidden-blocks__list');
    cover.appendChild(list);
    for (items of key) {
        let item = document.createElement('li');
        item.classList.add('hidden-blocks__item');
        item.innerHTML = items;
        list.appendChild(item);
    }
    button = document.createElement('button');
    button.innerHTML = 'Заказать';
    button.classList.add('hidden-blocks__btn');
    button.addEventListener('click', function () {
        hiddenForm.classList.add('active');
        blockHB.classList.remove('active');
        blockHB.removeChild(title);
        blockHB.removeChild(image);
        blockHB.removeChild(cover);
        cover.removedChild(list);
        list.removeChild(item);
        cover.removeChild(button);
    })
    cover.appendChild(button);
})

closeBHB.addEventListener('click', function () {
    blockHB.classList.remove('active');
    blockHB.removeChild(title);
    blockHB.removeChild(image);
    blockHB.removeChild(cover);
    cover.removedChild(list);
    list.removeChild(item);
    cover.removeChild(button);
})

//блок офомление свадьбы
let btnDec = document.querySelector('.decor');

decor = ['В компании “Anabel” работают профессиональные декораторы - флористы.',
    'В нашем профессионализме Вы можете убедиться, посмотрев портфолио. Работаем в сфере event - услуг 14 лет, находим индивидуальный подход к каждому. Это кропотливая и творческая работа, мы уделяем внимание мелочам. Оформление зала живыми цветами, тканями это отличный выбор наших молодоженов.',
    'Мы поможем вам сделать правильный выбор цветового и дизайнерского декорирования. Возможно сделать необычную и тематическую стилистику. Свадебное украшение зала очень утонченный процесс, потому что создается для единственного дня создания семьи.',
    'Предлагаем услуги по стильному и современному оформлению, фотозоны для любого праздника. Специально для вас мы разрабатываем индивидуальный стиль и тематику торжества. Мы используем — живые цветы, ткани, профессиональное освещение, дерево, свечи и другим интересным реквизитом.',
    'Лаконичные и современные формы, красивые и свежие цветы, минимум ткани, только новейшие технологии. Составление дизайнерского букета невесты и бутоньерки.',
    'Самый важный атрибут невесты - это ее букет. Мы создаем красивые букеты. За нашими плечами более 1000 собранных руками чудесных флористов букеты.',
    'Можно заказать приглашения, рассадочные карточки, план рассадки.',
    'Клиенты все чаще стремятся подчеркнуть единый стиль торжества композициями цветов, интересных бокалов и других аксессуаров в таком же стиле. Для корпоратива разрабатывается стилевая вариация.'];

btnDec.addEventListener('click', function () {
    blockHB.classList.add('active');
    title = document.createElement('h3');
    title.classList.add('hidden-blocks__title');
    title.innerHTML = 'Оформление свадьбы ';
    blockHB.appendChild(title);
    image = document.createElement('img');
    image.classList.add('hidden-blocks__image');
    image.src = './images/venz.svg';
    blockHB.appendChild(image);
    cover = document.createElement('div');
    cover.classList.add('hidden-blocks__cover');
    blockHB.appendChild(cover);
    list = document.createElement('ul');
    list.classList.add('hidden-blocks__list');
    cover.appendChild(list);
    for (par of decor) {
        let item = document.createElement('li');
        item.classList.add('hidden-blocks__item');
        item.innerHTML = par;
        list.appendChild(item);
    }
    button = document.createElement('button');
    button.innerHTML = 'Заказать';
    button.classList.add('hidden-blocks__btn');
    button.addEventListener('click', function () {
        hiddenForm.classList.add('active');
        blockHB.classList.remove('active');
        blockHB.removeChild(title);
        blockHB.removeChild(image);
        blockHB.removeChild(cover);
        cover.removedChild(list);
        list.removeChild(item);
        cover.removeChild(button);
    })
    cover.appendChild(button);
})

//работа формы выездная регистрация

let btnReg = document.querySelector('.registration');

registr = ['Подберем вам самое подходящее место для выездной регистрации брака (если у Вас его нет)',
    'Вы можете выбрать любой день недели и число. И именно эта дата, будет стоять в официальных документах (свидетельство о регистрации брака и паспорта новобрачных)',
    'Детально проработаем все моменты официальной выездной регистрации вместе с Вами',
    'Подготовим документы и сдадим их в ЗАГС',
    'Вы ставите подписи и получаете документы прямо на месте официальной выездной регистрации брака (без посещения ЗАГСа)',
    'Официальная выездная регистрация брака - возможна даже за границей. У нас заключены договора с рядом стран. Если Вы хотите зарегистрировать Ваш брак в Турции, Египте, Испании, Доминикана, Греции, Париже - мы с удовольствием поможем Вам. Вы получаете Российскую и иностранную регистрацию брака прямо на месте регистрации.'];

btnReg.addEventListener('click', function () {
    blockHB.classList.add('active');
    title = document.createElement('h3');
    title.classList.add('hidden-blocks__title');
    title.innerHTML = 'Выездная регистрация';
    blockHB.appendChild(title);
    image = document.createElement('img');
    image.classList.add('hidden-blocks__image');
    image.src = './images/venz.svg';
    blockHB.appendChild(image);
    cover = document.createElement('div');
    cover.classList.add('hidden-blocks__cover');
    blockHB.appendChild(cover);
    list = document.createElement('ul');
    list.classList.add('hidden-blocks__list');
    cover.appendChild(list);
    for (parag of registr) {
        let item = document.createElement('li');
        item.classList.add('hidden-blocks__item');
        item.innerHTML = parag;
        list.appendChild(item);
    }
    button = document.createElement('button');
    button.innerHTML = 'Заказать';
    button.classList.add('hidden-blocks__btn');
    button.addEventListener('click', function () {
        hiddenForm.classList.add('active');
        blockHB.classList.remove('active');
        blockHB.removeChild(title);
        blockHB.removeChild(image);
        blockHB.removeChild(cover);
        cover.removedChild(list);
        list.removeChild(item);
        cover.removeChild(button);
    })
    cover.appendChild(button);
})

//работа счетчика
let statistics = document.querySelector('.statistics');
let positionStatistics = statistics.getBoundingClientRect().top;
window.addEventListener('scroll', function() {
    let windowScrollTop = document.documentElement.scrollTop;
    //console.log(windowScrollTop);
    
    //console.log(positionStatistics);
    let counters = document.querySelectorAll('.statistic__number');
    
    if (windowScrollTop >= (positionStatistics - 70)) {
        counters.forEach(counter => {
            const countUpdate = () => {
                target = +counter.getAttribute('data-target');
                count = +counter.innerText;
        
                inc = 0.5;
        
                if(count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(countUpdate, 10);
                } else {
                    count.innerText = target;
                }
            }
            countUpdate();
        })
    }

    /*

    if (windowScrollTop >= positionStatistics) {
        countUpdate();
    }*/

})

/*

    
    */



//работа блоков пакеты услуг
//пакет стандарт

let btnStandart = document.querySelector('.standart');
let invisibleBlock = document.querySelector('.invisible-block');
let closeInvisible = document.querySelector('.invisible-block__button');

texts = ['Отличный вариант для тех, кто не любит пышные торжества, но хочет, чтоб всё выглядело на достойном уровне. Можете быть уверенны, что Ваш день пройдет в веселой атмосфере и комфортной обстановке при самых минимальных затратах. Прекрасный выбор при проведении торжества загородом или на природе в кругу самых близких.',
    'Самый популярный из всех пакетов в организации «свадьба под ключ» в г.Санкт-Петербурге. Идеальный вариант для тех, кто предпочитает классику. Пакет полностью наполнен самым необходимым для проведения торжества.',
    'Для тех, кто любит шумные, тематические вечеринки, веселье и чтоб все было организованно на высшем уровне!Такой пакет хорошо подойдет практически для любой аудитории и для любого количества гостей. Доверьтесь мне, а я сделаю этот день для Вас красиво, весело и со вкусом!'];
standart = ['Подбор места проведения мероприятия',
    'Оформление (стол молодоженов)',
    'Ведущий',
    'Музыкальное сопровождение (DJ)',
    'Фотограф',
    'Разработка сценария свадебного дня',
    'Официальный договор'];

btnStandart.addEventListener('click', function () {
    invisibleBlock.classList.add('active');
    title = document.createElement('h3');
    title.classList.add('invisible-block__title');
    title.innerHTML = 'Пакет “ Стандарт “';
    invisibleBlock.appendChild(title);
    image = document.createElement('img');
    image.classList.add('invisible-block__image');
    image.src = './images/venz.svg';
    invisibleBlock.appendChild(image);
    cover = document.createElement('div');
    cover.classList.add('invisible-block__cover');
    invisibleBlock.appendChild(cover);
    text = document.createElement('p');
    text.classList.add('invisible-block__text');
    text.innerHTML = texts[0];
    cover.appendChild(text);
    textBold = document.createElement('p');
    textBold.classList.add('invisible-block__text-bold');
    textBold.innerHTML = 'Включает в себя:';
    cover.appendChild(textBold);
    list = document.createElement('ul');
    list.classList.add('invisible-block__list');
    cover.appendChild(list);
    for (check of standart) {
        let item = document.createElement('li');
        item.classList.add('invisible-block__item');
        item.innerHTML = check;
        list.appendChild(item);
    }
    textPrice = document.createElement('p');
    textPrice.classList.add('invisible-block__text-price');
    textPrice.innerHTML = '40 000 р.';
    cover.appendChild(textPrice);
    button = document.createElement('button');
    button.innerHTML = 'Заказать';
    button.classList.add('invisible-block__btn');
    button.addEventListener('click', function () {
        hiddenForm.classList.add('active');
        invisibleBlock.classList.remove('active');
        invisibleBlock.removeChild(title);
        invisibleBlock.removeChild(image);
        invisibleBlock.removeChild(cover);
        cover.removeChild(text);
        cover.removeChild(textBold);
        cover.removeChild(list);
        list.removeChild(item);
        cover.removeChild(textPrice);
        cover.removeChild(button);
    })
    cover.appendChild(button);
})

closeInvisible.addEventListener('click', function () {
    invisibleBlock.classList.remove('active');
    invisibleBlock.removeChild(title);
    invisibleBlock.removeChild(image);
    invisibleBlock.removeChild(cover);
    cover.removeChild(text);
    cover.removeChild(textBold);
    cover.removeChild(list);
    list.removeChild(item);
    cover.removeChild(textPrice);
    cover.removeChild(button);
})

//работа пакет услуг оптимальный

let btnOptimal = document.querySelector('.optimal');

optimal = ['Подбор места проведения мероприятия',
    'Оформление (стол молодоженов)',
    'Ведущий',
    'Музыкальное сопровождение (DJ)',
    'Фотограф, видеограф',
    'Выездная регистрация',
    'Разработка сценария свадебного дня',
    'Координация свадебного дня',
    'Официальный договор'];

btnOptimal.addEventListener('click', function () {
    invisibleBlock.classList.add('active');
    title = document.createElement('h3');
    title.classList.add('invisible-block__title');
    title.innerHTML = 'Пакет “ Оптимальный “';
    invisibleBlock.appendChild(title);
    image = document.createElement('img');
    image.classList.add('invisible-block__image');
    image.src = './images/venz.svg';
    invisibleBlock.appendChild(image);
    cover = document.createElement('div');
    cover.classList.add('invisible-block__cover');
    invisibleBlock.appendChild(cover);
    text = document.createElement('p');
    text.classList.add('invisible-block__text');
    text.innerHTML = texts[1];
    cover.appendChild(text);
    textBold = document.createElement('p');
    textBold.classList.add('invisible-block__text-bold');
    textBold.innerHTML = 'Включает в себя:';
    cover.appendChild(textBold);
    list = document.createElement('ul');
    list.classList.add('invisible-block__list');
    cover.appendChild(list);
    for (check of optimal) {
        let item = document.createElement('li');
        item.classList.add('invisible-block__item');
        item.innerHTML = check;
        list.appendChild(item);
    }
    textPrice = document.createElement('p');
    textPrice.classList.add('invisible-block__text-price');
    textPrice.innerHTML = '70 000 р.';
    cover.appendChild(textPrice);
    button = document.createElement('button');
    button.innerHTML = 'Заказать';
    button.classList.add('invisible-block__btn');
    button.addEventListener('click', function () {
        hiddenForm.classList.add('active');
        invisibleBlock.classList.remove('active');
        invisibleBlock.removeChild(title);
        invisibleBlock.removeChild(image);
        invisibleBlock.removeChild(cover);
        cover.removeChild(text);
        cover.removeChild(textBold);
        cover.removeChild(list);
        list.removeChild(item);
        cover.removeChild(textPrice);
        cover.removeChild(button);
    })
    cover.appendChild(button);
})

//пакет услуг премиум

let btnPremium = document.querySelector('.premium');
premium = ['Подбор места проведения мероприятия',
    'Свадебные приглашения (до 20 шт.)',
    'Оформление (стол молодоженов)',
    'Ведущий',
    'Музыкальное сопровождение (DJ)',
    'Фотограф, видеограф, аэросъёмка',
    'Выездная регистрация',
    'Разработка сценария свадебного дня',
    'Координация свадебного дня',
    'Файер шоу на финал',
    'Официальный договор'];

btnPremium.addEventListener('click', function () {
    invisibleBlock.classList.add('active');
    title = document.createElement('h3');
    title.classList.add('invisible-block__title');
    title.innerHTML = 'Пакет “ Премиум “';
    invisibleBlock.appendChild(title);
    image = document.createElement('img');
    image.classList.add('invisible-block__image');
    image.src = './images/venz.svg';
    invisibleBlock.appendChild(image);
    cover = document.createElement('div');
    cover.classList.add('invisible-block__cover');
    invisibleBlock.appendChild(cover);
    text = document.createElement('p');
    text.classList.add('invisible-block__text');
    text.innerHTML = texts[2];
    cover.appendChild(text);
    textBold = document.createElement('p');
    textBold.classList.add('invisible-block__text-bold');
    textBold.innerHTML = 'Включает в себя:';
    cover.appendChild(textBold);
    list = document.createElement('ul');
    list.classList.add('invisible-block__list');
    cover.appendChild(list);
    for (check of premium) {
        let item = document.createElement('li');
        item.classList.add('invisible-block__item');
        item.innerHTML = check;
        list.appendChild(item);
    }
    textPrice = document.createElement('p');
    textPrice.classList.add('invisible-block__text-price');
    textPrice.innerHTML = '100 000 р.';
    cover.appendChild(textPrice);
    button = document.createElement('button');
    button.innerHTML = 'Заказать';
    button.classList.add('invisible-block__btn');
    button.addEventListener('click', function () {
        hiddenForm.classList.add('active');
        invisibleBlock.classList.remove('active');
        invisibleBlock.removeChild(title);
        invisibleBlock.removeChild(image);
        invisibleBlock.removeChild(cover);
        cover.removeChild(text);
        cover.removeChild(textBold);
        cover.removeChild(list);
        list.removeChild(item);
        cover.removeChild(textPrice);
        cover.removeChild(button);
    })
    cover.appendChild(button);
})

//работа свайпа

const swiper = new Swiper ('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
});


