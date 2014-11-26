describe('Endevr start choice', function() {
  beforeEach(function() {
    browser.get('http://localhost:8100/#/app/auth');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('http://localhost:8100/#/app/auth');
  });

  describe('Developer', function() {
    describe('LinkedIn', function() {
      it('should navigate to the developer linked in login planet', function() {
        element(by.buttonText("I\'m a developer")).click();
        expect(browser.getTitle()).toBe('http://localhost:8100/#/app/auth');
        expect(by.buttonText("Login with LinkedIn")).toBeDefined();
      });
    });
  });
  
});