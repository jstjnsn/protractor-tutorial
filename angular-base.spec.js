describe('new angular app homepage', function () {
  it('should show new angular app homepage', function () {
    browser.get('http://localhost:4200/');

    const bannerEl = element(by.cssContainingText('span', 'angular-base app is running!'))
    expect(bannerEl.isPresent()).toBe(true)
  });
});
