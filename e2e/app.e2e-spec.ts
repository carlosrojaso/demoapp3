import { AngularservicePage } from './app.po';

describe('angularservice App', () => {
  let page: AngularservicePage;

  beforeEach(() => {
    page = new AngularservicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
