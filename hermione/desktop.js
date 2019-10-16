describe(`Полная версия`, () => {
  it(`Начальное состояние`, async function () {
    await this.browser.url('/').assertView('desktop', 'body')
  })
  it('Скрин пылесоса', async function () {
    await this.browser.url('/').assertView('vacuum', '.critical-cam')
  })
})
