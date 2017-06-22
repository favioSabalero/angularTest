import { PruebasAppPage } from './app.po';

describe('pruebas-app App', () => {
  let page: PruebasAppPage;

  beforeEach(() => {
    page = new PruebasAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
