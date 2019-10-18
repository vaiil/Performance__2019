'use strict'

const buttonsContainer = document.querySelector('.buttons-wrap')
const fridgeInfoContainer = document.querySelector('.card_size_m:nth-child(8) .card-description')

const confirmPurchaseButton = document.querySelector('.buttons-wrap .button_yellow')
const purchaseListContainer = document.createElement('div')
const purchaseListTitle = document.createElement('p')
const purchaseList = document.createElement('ol')
const purchaseListItemOne = document.createElement('li')
const purchaseListItemTwo = document.createElement('li')

purchaseListContainer.setAttribute('class', 'purchase-list-wrap')
purchaseListTitle.setAttribute('class', 'card-description card-description_big description_critical')
purchaseListTitle.textContent = 'Список покупок:'
purchaseList.setAttribute('class', 'purchase-list')
purchaseListItemOne.setAttribute('class', 'purchase-list__item')
purchaseListItemOne.textContent = 'Хлеб'
purchaseListItemTwo.setAttribute('class', 'purchase-list__item')
purchaseListItemTwo.textContent = 'Молоко'

purchaseListContainer.appendChild(purchaseListTitle)
purchaseListContainer.appendChild(purchaseList)
purchaseList.appendChild(purchaseListItemOne)
purchaseList.appendChild(purchaseListItemTwo)

confirmPurchaseButton.onclick = () => {
  fridgeInfoContainer.replaceWith(purchaseListContainer)
  buttonsContainer.style.display = 'none'
}

document.getElementsByClassName('header-menu__switcher')[0].addEventListener('click', function () {
  document.getElementsByClassName('header-menu')[0].classList.toggle('header-menu_active')
})

(function(w, d, n) {
  var s = d.createElement('script');
  s.src = '//zen.yandex.ru/widget-loader';
  d.head.appendChild(s);
  var c = d.createElement('div');
  c.style.display = 'none';
  d.body.appendChild(c);
  w[n] = w[n] || [];
  w[n].push(function() {
    w.YandexZen.renderWidget({
      container: c,
      clid: [123,123],
    });
  })
})(window, document, 'yandexZenAsyncCallbacks')
