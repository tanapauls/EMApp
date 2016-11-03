import { EMAppPage } from './app.po';

describe('emapp App', function() {
  let page: EMAppPage;

  beforeEach(() => {
    page = new EMAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
