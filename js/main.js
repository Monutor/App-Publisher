document.addEventListener('DOMContentLoaded', function () {

  const sliderGames = new Swiper('.app__container', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
  });

  const sliderExpertise = new Swiper('.expertise__container', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
  });


  //custom select
  document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropDownListItems = dropDownWrapper.querySelectorAll('.dropdown__item');
    const dropDownInput = dropDownWrapper.querySelector('.dropdown__hidden');

    dropDownBtn.addEventListener('click', function (e) {

      	// Клик по кнопке. Открыть/Закрыть select
      dropDownList.classList.toggle('dropdown__list--visible');

      if (dropDownList.classList.contains('dropdown__list--visible')) {
        dropDownBtn.classList.add('dropdown__button--rotate');
      } else {
        dropDownBtn.classList.remove('dropdown__button--rotate');
      };
    });

    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener('click', function (e) {
        e.stopPropagation(); //прекращает дальнейшую передачу текущего события (предотвращает всплытие по дереву DOM).
        dropDownBtn.innerText = this.innerText;
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove('dropdown__list--visible');
        dropDownBtn.classList.remove('dropdown__button--rotate');
      });
    });

    document.addEventListener('click', function(e) {
      if (e.target !== dropDownBtn) {
        dropDownList.classList.remove('dropdown__list--visible');
        dropDownBtn.classList.remove('dropdown__button--rotate');
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Tab' || e.key === 'Escape') {
        dropDownList.classList.remove('dropdown__list--visible');
        dropDownBtn.classList.remove('dropdown__button--rotate');
      }
    })
  });


  //select lang

  const selectLangBtn = document.querySelector('.select-lang__btn');
  const selectLangList = document.querySelector('.select-lang__list');
  const selectLangListItems = document.querySelectorAll('.select-lang__item');

  selectLangBtn.addEventListener('click', function() {

    selectLangList.classList.toggle('select-lang__list--visible');

  })

  selectLangListItems.forEach(function (listItem) {

    listItem.addEventListener('click', function () {
      selectLangBtn.innerText = this.dataset.lang;
      selectLangList.classList.remove('select-lang__list--visible');
    })

  })

  document.addEventListener('click', function(e) {
    if (e.target !== selectLangBtn) {
      selectLangList.classList.remove('select-lang__list--visible');
    }
  })

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      selectLangList.classList.remove('select-lang__list--visible');
    }
  })


  //fancybox
  $('.header__price').click(function(){

    //
  
  });
  

}, false);