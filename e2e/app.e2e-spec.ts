import { HomeBudgetPage } from './app.po';

describe('home-budget App', () => {
  let page: HomeBudgetPage;

  beforeEach(() => {
    page = new HomeBudgetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
