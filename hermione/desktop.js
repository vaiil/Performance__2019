describe(`Полная версия`, () => {
  it(`Начальное состояние`, async function () {
    return  this.browser.url('/')
      .assertView('desktop', 'body')
  })
})
