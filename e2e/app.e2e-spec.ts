import { RamanAppPage } from './app.po';

describe('raman-app App', function() {
  let page: RamanAppPage;

  beforeEach(() => {
    page = new RamanAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
