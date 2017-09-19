import { RestorPage } from './app.po';

describe('restor App', () => {
  let page: RestorPage;

  beforeEach(() => {
    page = new RestorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
