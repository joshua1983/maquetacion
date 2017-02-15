import { AulasAmigasPage } from './app.po';

describe('aulas-amigas App', function() {
  let page: AulasAmigasPage;

  beforeEach(() => {
    page = new AulasAmigasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
