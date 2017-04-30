import { Angular4BootstrapInicioPage } from './app.po';

describe('angular4-bootstrap-inicio App', () => {
  let page: Angular4BootstrapInicioPage;

  beforeEach(() => {
    page = new Angular4BootstrapInicioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
